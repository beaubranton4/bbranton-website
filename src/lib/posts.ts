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
    try {
      // Extract year and month directly from the date string
      // The date format in the frontmatter is 'YYYY-MM-DD'
      const [year, month] = post.date.split('-');
      const monthYear = `${year}-${month}`;
      
      if (!postsByMonth[monthYear]) {
        postsByMonth[monthYear] = [];
      }
      
      postsByMonth[monthYear].push(post);
    } catch (error) {
      console.error(`Error processing date for post ${post.id}:`, error);
      // Handle any parsing errors
      const fallbackKey = 'future-posts';
      if (!postsByMonth[fallbackKey]) {
        postsByMonth[fallbackKey] = [];
      }
      postsByMonth[fallbackKey].push(post);
    }
  });
  
  return postsByMonth;
}

// Function to get month name from month-year string
export function getMonthName(monthYear: string) {
  if (monthYear === 'future-posts') {
    return 'Future Posts';
  }
  
  try {
    const [year, month] = monthYear.split('-');
    // Create a date object with the first day of the month
    // Use the constructor that takes year, month, day to avoid timezone issues
    const date = new Date(parseInt(year), parseInt(month) - 1, 1);
    
    if (!isNaN(date.getTime())) {
      // Format using the Node.js locale
      return new Intl.DateTimeFormat('en-US', { 
        month: 'long',
        year: 'numeric'
      }).format(date);
    }
    return monthYear; // Fallback to the raw string
  } catch (error) {
    return monthYear; // Fallback to the raw string if parsing fails
  }
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