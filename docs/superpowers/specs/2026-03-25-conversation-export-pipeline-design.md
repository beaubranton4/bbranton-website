# Conversation Dataset Export Pipeline

## Problem

Beau wants to build a training dataset from his Claude Code conversations for fine-tuning a personal AI (digital twin). Claude Code already stores full conversation transcripts locally as JSONL files, but they're raw, unstructured, and may contain secrets. There's no pipeline to process them into training-ready format.

## Discovery

Claude Code stores transcripts at `~/.claude/projects/<project-path>/<session-id>.jsonl`. Current state: **312 sessions, ~492 MB** across all projects. Each JSONL contains:
- `type: "user"` — user messages with full prompt text
- `type: "assistant"` — responses with thinking, text, and tool_use blocks
- `type: "progress"` — tool execution events
- Metadata: timestamps, session ID, project path, git branch, Claude version

Subagent conversations stored at `<session-id>/subagents/agent-<id>.jsonl`.

## Design

### New files

```
scripts/
  export_conversations.py           # Main CLI
  lib/
    __init__.py
    jsonl_parser.py                  # Parse JSONL → structured turns
    secret_redactor.py               # Regex-based secret removal
    conversation_formatter.py        # Format for training output
```

### Output structure

```
content/conversations/              # Gitignored
  sessions/<session-id>.json        # One file per session
  training/all_conversations.jsonl  # Consolidated fine-tuning file
  manifest.json                     # Incremental tracking
```

### Per-session output format

```json
{
  "session_id": "1caaf142-...",
  "project": "beaubranton-com",
  "project_path": "-Users-beaubranton-projects-beaubranton-com",
  "git_branch": "main",
  "started_at": "2026-03-25T23:33:29Z",
  "ended_at": "2026-03-25T23:58:12Z",
  "claude_version": "2.1.83",
  "messages": [
    {
      "role": "user",
      "content": "user prompt text",
      "timestamp": "2026-03-25T23:34:08Z"
    },
    {
      "role": "assistant",
      "content": "assistant response text",
      "timestamp": "2026-03-25T23:34:15Z",
      "tool_uses": ["Bash", "Read"],
      "had_thinking": true
    }
  ],
  "subagents": [
    {
      "agent_id": "a52a9e8...",
      "agent_type": "Plan",
      "messages": [...]
    }
  ]
}
```

### Training file format

Standard chat fine-tuning JSONL (`content/conversations/training/all_conversations.jsonl`):

```json
{"messages": [{"role": "user", "content": "..."}, {"role": "assistant", "content": "..."}], "metadata": {"session_id": "...", "project": "...", "timestamp": "..."}}
```

Multi-turn conversations exported as cumulative message arrays (all prior turns + next response) so fine-tuning learns from full context.

### Export algorithm

1. **Discover**: Scan `~/.claude/projects/*/` for `*.jsonl` files (excluding `subagents/`)
2. **Filter**: Compare against `manifest.json` — skip sessions where file size + mtime are unchanged
3. **Parse**: Read each JSONL line-by-line, extract `user` and `assistant` entries, pair them into conversation turns using `parentUuid` threading
4. **Extract text**: From user messages, take string content or concatenate text blocks. From assistant messages, extract `text` blocks only (skip `thinking`, record `tool_use` names as metadata)
5. **Redact**: Run all text through the secret redactor before writing
6. **Write**: Output per-session JSON + update manifest + regenerate training JSONL
7. **Report**: Print summary (sessions processed, skipped, turns exported, secrets redacted)

### Secret redaction

Patterns (ordered most-specific to most-general):

| Category | Pattern |
|----------|---------|
| API keys | `sk-*`, `key-*`, `api_key=...` |
| Bearer tokens | `Bearer <token>` |
| AWS keys | `AKIA*`, `aws_secret_access_key=...` |
| Connection strings | `postgres://`, `mongodb://`, `redis://`, etc. |
| Env var assignments | `PASSWORD=`, `SECRET=`, `TOKEN=`, etc. |
| Sensitive file paths | `.env`, `.pem`, `.key`, `credentials` |
| Hex tokens | 32+ char hex strings in assignment context |

Replacements: `[REDACTED:<category>]`. Over-redaction preferred. `--no-redact` flag for debugging.

### Incremental tracking

`manifest.json` schema:

```json
{
  "schema_version": 1,
  "exported_sessions": {
    "<session-id>": {
      "project": "...",
      "source_size_bytes": 524288,
      "source_mtime_epoch": 1711497600,
      "exported_at": "2026-03-26T10:00:00Z",
      "message_count": 24,
      "redactions": 3
    }
  },
  "stats": {
    "total_sessions": 290,
    "total_messages": 8432,
    "last_export": "2026-03-26T10:00:00Z"
  }
}
```

### Stop hook (incremental trigger)

Added to `~/.claude/settings.json`:

```json
{
  "hooks": {
    "Stop": [{
      "matcher": "",
      "hooks": [{
        "type": "command",
        "command": "python3 /Users/beaubranton/projects/beaubranton.com/scripts/export_conversations.py --incremental 2>/dev/null &"
      }]
    }]
  }
}
```

### CLI interface

```
python3 scripts/export_conversations.py [OPTIONS]

  --full              Re-export all sessions (ignore manifest)
  --incremental       Only new/changed sessions (default)
  --session ID        Export only one session
  --no-redact         Skip redaction (debugging)
  --stats             Print stats and exit
  --dry-run           Show what would be exported
```

npm script: `"export:conversations": "python3 scripts/export_conversations.py"`

### Modified existing files

- `package.json` — add `export:conversations` script
- `.gitignore` — add `content/conversations/`
- `~/.claude/settings.json` — add Stop hook

### Resilience

- All `json.loads()` wrapped in try/except; malformed lines skipped
- Unknown entry types silently ignored
- Unexpected `message.content` shapes stringified as fallback
- Manifest uses `schema_version` for future migration

## Verification

1. **Dry run**: `python3 scripts/export_conversations.py --dry-run` — lists all sessions
2. **Single session**: `--session <known-id>` — inspect output against raw JSONL
3. **Full export**: `npm run export:conversations` — verify 312 session files, manifest, training JSONL
4. **Incremental**: Re-run immediately, verify "0 sessions processed"
5. **Redaction check**: `grep -r "REDACTED" content/conversations/sessions/ | head`
6. **Leak check**: `grep -riE "sk-|Bearer |password=" content/conversations/sessions/`
7. **Hook test**: Start/end a short session, verify new file appears
