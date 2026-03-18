---
name: journal-entry-creator
description: Creates daily journal entries from the user's raw notes with minimal cleanup and saves them to content/posts. Use when the user shares reflections, asks for a journal entry, or asks to save journaling content.
---

# Journal Entry Creator

## Purpose

Turn the user's raw journaling notes into a saved markdown entry in `content/posts/` while preserving the user's original voice.

## Workflow

1. Determine the entry date.
2. Read one recent post in `content/posts/` to match formatting.
3. Create or update the target file in `content/posts/`.
4. Apply only minor cleanup:
   - spelling
   - grammar
   - capitalization
   - punctuation
5. Keep wording and intent unchanged unless the user asks for deeper edits.
6. Confirm the saved file path to the user.

## Formatting Rules

- Filename: `YYYY-MM-DD-<short-slug>.md`
- Title format: `# Month DD, YYYY`
- Body format: plain paragraphs, matching existing style in this repo

## Guardrails

- Do not add new opinions, conclusions, or themes.
- Do not significantly reorder or compress the user's thoughts.
- If date is missing or ambiguous, ask for it before saving.
- If user says "don't edit my words," restrict changes to typo/grammar fixes only.

