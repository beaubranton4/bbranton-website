#!/bin/bash
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
echo "=== 2nd Brain Refresh ==="

echo ""
echo "→ Exporting Apple Notes..."
osascript "$ROOT/scripts/export_apple_notes.applescript" "$ROOT/content/apple-notes"

echo ""
echo "→ Syncing SuperWhisper recordings..."
bash "$ROOT/scripts/sync_voice_data.sh"

echo ""
echo "✓ Refresh complete."
