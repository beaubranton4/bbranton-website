#!/usr/bin/env bash
# Sync superwhisper recordings into content/voice-data/
# Only copies new recordings that don't already exist locally.

set -euo pipefail

SOURCE="$HOME/Documents/superwhisper/recordings"
DEST="$(dirname "$0")/../content/voice-data/superwhisper/recordings"

if [ ! -d "$SOURCE" ]; then
  echo "Error: superwhisper recordings not found at $SOURCE"
  exit 1
fi

mkdir -p "$DEST"

added=0
skipped=0

for dir in "$SOURCE"/*/; do
  name=$(basename "$dir")
  if [ ! -d "$DEST/$name" ]; then
    cp -r "$dir" "$DEST/$name"
    added=$((added + 1))
  else
    skipped=$((skipped + 1))
  fi
done

echo "Sync complete: $added new recordings added, $skipped already present."
