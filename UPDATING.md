# Journal Prompt

Please help me write a journal entry for today's date. I will tell you the date at the start of the entry. I am just going to speak at you and i want you to record things word for word. Try to keep the integrity of what I'm saying, just clean up whenever i make a mistake. I want this to be a journal entry of my most inner thoughts so only make small edits like punctuation, spelling and omit whenever i say something that doesn't make sense or i repeat myself.

# How to Update Your Website Daily

This guide explains how to add new blog posts to your website and manage which posts are featured on the main blog page.

## Adding a New Blog Post

### Step 1: Create a new Markdown file

Create a new file in the `content/posts` directory with a filename following this format:
```
YYYY-MM-DD-post-title-slug.md
```

For example:
```
2025-09-04-my-new-post.md
```

### Step 2: Add frontmatter

At the top of your Markdown file, add the following frontmatter:

```md
---
title: 'Your Post Title Here'
date: 'YYYY-MM-DD'
excerpt: 'A brief summary of your post that will appear in previews.'
featured: true  # Set to true to show on the main blog page, false to hide
---
```

The `featured` flag determines whether the post appears on the main blog page:
- `featured: true` - Post will appear in the main blog feed
- `featured: false` - Post will only be accessible via the archives sidebar

### Step 3: Write your content

After the frontmatter, write your blog post content using Markdown:

```md
# Your Post Title

Your content goes here. You can use **bold**, *italic*, and other Markdown formatting.

## Subheadings

- Lists
- Are
- Easy

1. Numbered
2. Lists
3. Too

[Links](https://example.com) are also supported.

![Images can be included too](https://example.com/image.jpg)

```

### Step 4: Deploy the changes

After creating your post, you need to commit and deploy the changes:

1. If using Git:
   ```bash
   git add content/posts/YYYY-MM-DD-my-new-post.md
   git commit -m "Add new blog post"
   git push
   ```

2. If using the Cursor IDE directly, save the file and the changes will be deployed when you push to your repository.

## Managing Featured Posts

To control which posts appear on the main blog page:

1. To feature a post, set `featured: true` in the frontmatter
2. To hide a post from the main page, set `featured: false`

Posts with `featured: true` will appear in chronological order on the main blog page, with the most recent posts first.

## Daily Posting Workflow

For a consistent daily posting workflow:

1. Create a new post file with today's date
2. Add the frontmatter with title, date, excerpt, and featured status
3. Write your content
4. Save and deploy

## Tips for Consistent Posting

- Set a regular time each day for writing
- Keep a list of topic ideas to draw from when inspiration is low
- Consider using post templates for recurring post types
- Use a calendar reminder to maintain your posting schedule

## Changing Pagination Settings

If you want to change how many posts appear per page:

1. Open `/src/pages/blog/index.tsx`
2. Find the line `const postsPerPage = 5;` 
3. Change the number to your preferred number of posts per page
4. Save and deploy

## Troubleshooting

If your post isn't appearing as expected:

1. Check the `featured` flag is set correctly
2. Verify the date format is correct (YYYY-MM-DD)
3. Ensure the file is in the correct directory (`content/posts`)
4. Make sure the file has the `.md` extension

