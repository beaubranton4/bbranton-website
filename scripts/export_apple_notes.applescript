on run argv
	if (count of argv) is 0 then error "Missing output directory argument."
	set outputRoot to item 1 of argv
	do shell script "mkdir -p " & quoted form of outputRoot
	set exportedCount to 0
	
	tell application "Notes"
		repeat with acc in every account
			set accName to my sanitizeFileName(name of acc)
			set accPath to outputRoot & "/" & accName
			do shell script "mkdir -p " & quoted form of accPath
			
			repeat with n in notes of acc
				my writeNote(n, accPath)
				set exportedCount to exportedCount + 1
			end repeat
			
			repeat with f in folders of acc
				set exportedCount to exportedCount + (my exportFolder(f, accPath))
			end repeat
		end repeat
	end tell
	
	return "Exported " & exportedCount & " notes to " & outputRoot
end run

on exportFolder(noteFolder, parentPath)
	set folderName to my sanitizeFileName(name of noteFolder)
	set folderPath to parentPath & "/" & folderName
	do shell script "mkdir -p " & quoted form of folderPath
	set noteCount to 0
	
	tell application "Notes"
		repeat with n in notes of noteFolder
			my writeNote(n, folderPath)
			set noteCount to noteCount + 1
		end repeat
		
		repeat with f in folders of noteFolder
			set noteCount to noteCount + (my exportFolder(f, folderPath))
		end repeat
	end tell
	
	return noteCount
end exportFolder

on writeNote(n, folderPath)
	tell application "Notes"
		set noteTitle to name of n
		set noteText to plaintext of n
		set noteIdentifier to id of n
	end tell
	
	if noteTitle is missing value or noteTitle is "" then set noteTitle to "untitled-note"
	if noteText is missing value then set noteText to ""
	
	set safeTitle to my sanitizeFileName(noteTitle)
	set safeId to my sanitizeFileName(noteIdentifier)
	set filePath to folderPath & "/" & safeTitle & "--" & safeId & ".md"
	
	set outFile to POSIX file filePath
	set fileRef to open for access outFile with write permission
	try
		set eof of fileRef to 0
		write noteText to fileRef as «class utf8»
		close access fileRef
	on error errMsg number errNum
		try
			close access fileRef
		end try
		error errMsg number errNum
	end try
end writeNote

on sanitizeFileName(inputText)
	set cleanText to inputText as text
	set badChars to {":", "/", "\\", return, linefeed, tab, "\"", "'", "?", "*", "<", ">", "|"}
	repeat with ch in badChars
		set cleanText to my replaceText(ch as text, "-", cleanText)
	end repeat
	
	set cleanText to my replaceText("  ", " ", cleanText)
	set cleanText to my collapseDashes(cleanText)
	
	if (length of cleanText) > 120 then
		set cleanText to text 1 thru 120 of cleanText
	end if
	
	if cleanText is "" then set cleanText to "untitled"
	return cleanText
end sanitizeFileName

on collapseDashes(inputText)
	set resultText to inputText
	repeat while resultText contains "--"
		set resultText to my replaceText("--", "-", resultText)
	end repeat
	return resultText
end collapseDashes

on replaceText(findText, replaceText, sourceText)
	set oldDelims to AppleScript's text item delimiters
	set AppleScript's text item delimiters to findText
	set textItems to text items of sourceText
	set AppleScript's text item delimiters to replaceText
	set newText to textItems as text
	set AppleScript's text item delimiters to oldDelims
	return newText
end replaceText
