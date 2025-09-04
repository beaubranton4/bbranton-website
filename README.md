# Beau Branton's Personal Website

This is the source code for my personal website, [beaubranton.com](https://beaubranton.com). The site serves as a hub for my thoughts, writings, projects, and generally just showcasing what I'm doing with my life.

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
