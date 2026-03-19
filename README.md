# Beau Branton's Personal Website

This is the source code for my personal website, [beaubranton.com](https://beaubranton.com). The site serves as a hub for my thoughts, writings, projects, and generally just showcasing what I'm doing with my life.

## Vision

This project is evolving into something bigger than a personal website — it's a structured database of a person, designed to eventually train AI agents that think, decide, and act like me. The core thesis: people don't want a million agents, they want a million versions of themselves working towards the problems they care about. Every journal entry, note, and piece of content captured here serves a dual purpose: human-readable today, training data for a digital twin tomorrow. See [docs/VISION.md](docs/VISION.md) for the full picture.

## Features

- **Blog**: A simple blog system using Markdown files
- **Projects**: Showcase of my current and past projects
- **About**: Information about me and my background
- **Clean Design**: Modern, responsive design using Tailwind CSS

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: Markdown with gray-matter and remark
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/beaubranton/beaubranton.com.git
   cd beaubranton.com
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Content Management

### Blog Posts

Blog posts are stored as Markdown files in the `content/posts` directory. Each post should include front matter with the following fields:

```markdown
---
title: 'Your Post Title'
date: 'YYYY-MM-DD'
excerpt: 'A brief summary of your post'
---

Your post content here...
```

### Apple Notes -> Journal Import

If you want to capture notes from Apple Notes and convert them into your journal post format:

1. Save/export the note text into `content/journal-inbox/` as `.txt` or `.md`.
2. Run:
   ```bash
   npm run import:apple-note
   ```
3. The script creates a post at `content/posts/YYYY-MM-DD-<slug>.md` and archives the source note to `content/journal-inbox/imported/`.

Helpful options:

```bash
# Import a specific file
python3 scripts/import_apple_note.py "/path/to/note.txt"

# Force the journal date
python3 scripts/import_apple_note.py --date 2026-03-18

# Overwrite an existing generated post
python3 scripts/import_apple_note.py --overwrite
```

#### Apple Shortcuts (recommended)

Create a shortcut named "Send to Journal Inbox":

1. Action: **Receive** "Text" and "Files" from Share Sheet.
2. If input is text, action: **Save File** to:
   `~/projects/beaubranton.com/content/journal-inbox/`
   with a name like:
   `Current Date (yyyy-MM-dd)-apple-note.txt`
3. If input is a file, save that file to the same folder.

Then from Apple Notes, share selected note content to this shortcut and run:

```bash
npm run import:apple-note
```

### Apple Notes Bulk Export

To export all Apple Notes into this repo (organized by account/folder) run:

```bash
npm run export:apple-notes
```

Output location:

- `content/apple-notes/`

Notes:

- Requires macOS with Apple Notes and AppleScript access enabled.
- Running again refreshes exported files in place.

### Projects

Projects are currently defined in the `src/pages/projects/index.tsx` file. In a future update, this could be moved to a data file or CMS.

## Customization

- **Colors and Styling**: Modify the Tailwind configuration in `tailwind.config.js`
- **Layout**: Edit the components in the `src/components` directory
- **Content**: Update the content in the respective page files in `src/pages`

## Deployment

The easiest way to deploy this site is using [Vercel](https://vercel.com/), the platform built by the creators of Next.js.

1. Push your code to a GitHub repository
2. Import the project into Vercel
3. Vercel will detect that you're using Next.js and set up the build configuration for you
4. Your site will be deployed to a URL like `your-project.vercel.app`

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions:

- Email: hello@beaubranton.com
- Twitter: [@beaubranton](https://twitter.com/beaubranton)
- LinkedIn: [in/beaubranton](https://linkedin.com/in/beaubranton)
