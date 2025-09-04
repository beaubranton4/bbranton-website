import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

// Types
interface PostData {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  contentHtml?: string;
  featured?: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Create the directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
      return res.status(200).json({ 
        featuredPosts: { posts: [], totalPosts: 0, totalPages: 0 },
        postsByMonth: {}
      });
    }

    // Get all posts
    const fileNames = fs.readdirSync(postsDirectory);
    
    // Process all posts with their content
    const allPostsPromises = fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
      
      // Use remark to convert markdown into HTML string
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      // Combine the data with the id and content
      return {
        id,
        contentHtml,
        ...(matterResult.data as { date: string; title: string; excerpt: string; featured?: boolean }),
      };
    });
    
    // Wait for all posts to be processed
    const allPosts = await Promise.all(allPostsPromises);

    // Sort posts by date (newest first)
    const sortedPosts = allPosts.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

    // Get featured posts with pagination
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const postsPerPage = req.query.limit ? parseInt(req.query.limit as string) : 5;
    
    const featuredPosts = sortedPosts.filter(post => post.featured !== false);
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = featuredPosts.slice(startIndex, endIndex);
    
    // Organize posts by month
    const postsByMonth: { [key: string]: PostData[] } = {};
    
    sortedPosts.forEach(post => {
      try {
        // Use the date directly from the frontmatter
        const dateStr = post.date;
        
        // Extract year and month from the date string
        // The date format in the frontmatter is 'YYYY-MM-DD'
        const [year, month] = dateStr.split('-');
        
        // Create a key in the format 'YYYY-MM'
        const monthYear = `${year}-${month}`;
        
        if (!postsByMonth[monthYear]) {
          postsByMonth[monthYear] = [];
        }
        
        postsByMonth[monthYear].push(post);
      } catch (error) {
        // Handle any date parsing errors
        console.error(`Error processing date for post ${post.id}:`, error);
        const fallbackKey = 'future-posts';
        if (!postsByMonth[fallbackKey]) {
          postsByMonth[fallbackKey] = [];
        }
        postsByMonth[fallbackKey].push(post);
      }
    });

    // Return the data
    res.status(200).json({
      featuredPosts: {
        posts: paginatedPosts,
        totalPosts: featuredPosts.length,
        totalPages: Math.ceil(featuredPosts.length / postsPerPage)
      },
      postsByMonth
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
}
