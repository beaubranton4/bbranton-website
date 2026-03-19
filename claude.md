# Claude Instructions

## Primary Agent Purpose

The primary purpose of the agent in this repository is journaling support:
- turn raw user notes into journal entries with minimal cleanup
- preserve the user's words, tone, and intent
- save entries in `content/posts/` using existing format conventions

## Apple Notes Workflow

Use these commands for Apple Notes integration:

- Bulk export all Apple Notes into the repo:
  - `npm run export:apple-notes`
  - Output: `content/apple-notes/`
- Import a note into journal post format:
  - `npm run import:apple-note`
  - Input inbox: `content/journal-inbox/`
  - Output posts: `content/posts/`

## Journal Formatting Rules

- Filename pattern: `YYYY-MM-DD-<short-slug>.md`
- Title format: `# Month DD, YYYY`
- Editing policy: only minor grammar/spelling/punctuation cleanup unless user requests deeper edits
