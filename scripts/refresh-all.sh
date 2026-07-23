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
echo "→ Extracting journal widgets (calorie / workout) → data/widgets/..."
node "$ROOT/scripts/extract-widgets.mjs"

echo ""
echo "✓ Refresh complete."
