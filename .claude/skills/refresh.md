---
name: refresh
description: Refresh all 2nd brain data sources — Apple Notes and SuperWhisper recordings
---

Run the full data refresh by executing:

```bash
npm run refresh
```

After it completes:
1. Report how many Apple Notes were exported
2. Report how many new SuperWhisper recordings were synced
3. Check if any files are waiting in `content/journal-inbox/` that are ready to import
4. Suggest next steps (e.g. "run /import-note to pull inbox items into posts")
