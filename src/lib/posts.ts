// Import Node.js modules conditionally to avoid client-side errors
import { remark } from 'remark';
import html from 'remark-html';

// Define types
export interface PostData {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  featured?: boolean;
  contentHtml?: string;
}

// Helper function to check if we're on the server side
const isServer = typeof window === 'undefined';

// Function to get all posts data, sorted by date
export function getSortedPostsData(): PostData[] {
  if (!isServer) {
    return [];
  }
  
  // Import Node.js modules dynamically on the server side
  const fs = require('fs');
  const path = require('path');
  const matter = require('gray-matter');
  
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  
  // Create the directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }
  
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName: string) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string; excerpt: string; featured?: boolean }),
    };
  });
  
  // Sort posts by date
  return allPostsData.sort((a: PostData, b: PostData) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Function to get featured posts with pagination
export function getFeaturedPosts(page: number = 1, postsPerPage: number = 10): {
  posts: PostData[];
  totalPosts: number;
  totalPages: number;
} {
  if (!isServer) {
    return { posts: [], totalPosts: 0, totalPages: 0 };
  }
  
  const allPosts = getSortedPostsData();
  const featuredPosts = allPosts.filter(post => post.featured !== false); // Show all posts except those explicitly marked as not featured
  
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = featuredPosts.slice(startIndex, endIndex);
  
  return {
    posts: paginatedPosts,
    totalPosts: featuredPosts.length,
    totalPages: Math.ceil(featuredPosts.length / postsPerPage)
  };
}

// Function to get posts organized by month
export function getPostsByMonth() {
  if (!isServer) {
    return {};
  }
  
  const posts = getSortedPostsData();
  const postsByMonth: { [key: string]: PostData[] } = {};
  
  posts.forEach(post => {
    const date = new Date(post.date);
    const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    
    if (!postsByMonth[monthYear]) {
      postsByMonth[monthYear] = [];
    }
    
    postsByMonth[monthYear].push(post);
  });
  
  return postsByMonth;
}

// Function to get month name from month-year string
export function getMonthName(monthYear: string) {
  const [year, month] = monthYear.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1);
  
  return date.toLocaleString('default', { month: 'long', year: 'numeric' });
}

// Function to get all post IDs for static paths
export function getAllPostIds() {
  if (!isServer) {
    return [];
  }
  
  const fs = require('fs');
  const path = require('path');
  
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName: string) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// Function to get a single post's data
export async function getPostData(id: string) {
  if (!isServer) {
    return null;
  }
  
  const fs = require('fs');
  const path = require('path');
  const matter = require('gray-matter');
  
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const fullPath = path.join(postsDirectory, `${id}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; excerpt: string; featured?: boolean }),
  };
}