# Cursor Instructions

## Default Behavior in This Repo

Treat journaling as the default workflow for this project:
- convert the user's raw reflections into saved journal entries
- keep edits minimal and preserve voice and meaning
- write entries to `content/posts/` in the established style

## Apple Notes Integration

Available commands:

- Export all Apple Notes:
  - `npm run export:apple-notes`
  - Writes to `content/apple-notes/`
- Import the latest Apple Note inbox file as a journal entry:
  - `npm run import:apple-note`
  - Reads from `content/journal-inbox/`
  - Writes to `content/posts/`

## Guardrails

- Do not rewrite ideas or add new themes unless explicitly requested.
- If the user says "don't edit my words," limit to typo/grammar fixes.
- Ask for a date if it is missing or ambiguous before saving a post.
