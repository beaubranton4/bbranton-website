# Journal Entries from Phone (during walks)

## Verdict (2026-05-06)

**Start with Apple Notes dictation today (already wired up).** Graduate to an iOS Shortcut → Vercel function workflow if you want truly zero-laptop. Half-day build; slots into existing Vercel/Stripe stack.

## Goal

Record journal entries on phone while walking, have an agent clean them up the same way Claude does in this repo, and save them to `content/posts/` automatically.

## Options ranked by effort

### 1. Apple Notes dictation (already wired up) — recommended starting point

- Already have `npm run import:apple-note` and a `content/journal-inbox/` flow per CLAUDE.md
- Walk → dictate into Apple Note → run import command when back at laptop
- Zero new infra
- **Catch:** still requires laptop step at end

### 2. iOS Shortcut → Vercel function → GitHub commit (fully phone-native)

- iOS Shortcut: Record Audio + Transcribe action → POST transcript to a Vercel function
- Vercel function: calls Claude API with a system prompt mirroring CLAUDE.md rules (preserve voice, minor cleanup, filename pattern, frontmatter)
- Function commits the markdown to this repo via GitHub API
- No laptop required
- **Catch:** memory updates still happen the next time Beau is in Claude Code locally — memory is a local filesystem, not webhook-reachable

### 3. claude.ai/code on phone

- Open project in web app, paste voice-memo transcript, ask the way Beau did this turn
- Works today
- **Catch:** requires copy/paste from Voice Memos transcript

## Stack for option 2

- iOS Shortcut (record + auto-transcribe via Apple's on-device speech)
- Vercel function (Node.js, default)
- Claude API call (Anthropic SDK) with prompt cache
- GitHub commit via Octokit or REST API
- Auth: shared secret token in Shortcut header

## Open questions

- Does Apple's on-device transcription handle 5–10 minute walking dictations cleanly enough?
- Should the Vercel function commit to a draft path (`content/journal-inbox/`) and require Beau to review/approve, or commit straight to `content/posts/`?
- How to handle memory updates from a walk-recorded entry?
