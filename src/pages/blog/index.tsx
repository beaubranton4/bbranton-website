import Head from 'next/head';
import Link from 'next/link';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// Types
interface PostData {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  contentHtml?: string;
  featured?: boolean;
}

interface BlogProps {}

export default function Blog({}: BlogProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredPosts, setFeaturedPosts] = useState<{
    posts: PostData[];
    totalPosts: number;
    totalPages: number;
  }>({ posts: [], totalPosts: 0, totalPages: 0 });
  const [postsByMonth, setPostsByMonth] = useState<{ [key: string]: PostData[] }>({});
  
  // Get months for the sidebar - Only call Object.keys if postsByMonth is defined
  const months = Object.keys(postsByMonth || {}).sort().reverse();

  // Fetch posts data
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const page = router.query.page ? parseInt(router.query.page as string) : 1;
      setCurrentPage(page);
      
      try {
        const response = await fetch(`/api/posts?page=${page}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setFeaturedPosts(data.featuredPosts || { posts: [], totalPosts: 0, totalPages: 0 });
        setPostsByMonth(data.postsByMonth || {});
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Set default values on error
        setFeaturedPosts({ posts: [], totalPosts: 0, totalPages: 0 });
        setPostsByMonth({});
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, [router.query.page]);

  // Handle pagination
  const handlePageChange = (page: number) => {
    router.push({
      pathname: '/blog',
      query: { page }
    }, undefined, { shallow: true });
  };

  // Helper function to get month name
  const getMonthName = (monthYear: string) => {
    if (monthYear === 'future-posts') {
      return 'Future Posts';
    }
    
    try {
      const [year, month] = monthYear.split('-');
      // Create a date object with the first day of the month
      // Use the constructor that takes year, month, day to avoid timezone issues
      const date = new Date(parseInt(year), parseInt(month) - 1, 1);
      
      if (!isNaN(date.getTime())) {
        // Format using the browser's locale
        return new Intl.DateTimeFormat('en-US', { 
          month: 'long',
          year: 'numeric'
        }).format(date);
      }
      return monthYear; // Fallback to the raw string
    } catch (error) {
      return monthYear; // Fallback to the raw string if parsing fails
    }
  };

  return (
    <>
      <Head>
        <title>Blog | Beau Branton</title>
        <meta name="description" content="Thoughts, ideas, and writings by Beau Branton" />
      </Head>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with monthly archives */}
          <div className="md:w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Archives</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Click a month to view posts</p>
              {loading ? (
                <p>Loading archives...</p>
              ) : months.length > 0 ? (
                <ul className="space-y-2">
                  {months.map((month) => (
                    <li key={month}>
                      <a 
                        href={`#${month}`}
                        className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer flex items-center w-full text-left"
                      >
                        <span>{getMonthName(month)}</span>
                        <span className="ml-2 text-gray-500 dark:text-gray-500">({postsByMonth[month].length})</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No archives available</p>
              )}
            </div>
          </div>
          
          {/* All posts in a continuous timeline */}
          <div className="flex-grow">
            <h1 className="text-3xl font-bold mb-6">All Posts</h1>
            
            {loading ? (
              <div className="py-12 text-center">
                <p>Loading posts...</p>
              </div>
            ) : months.length > 0 ? (
              <div className="space-y-16">
                {months.map((month) => (
                  <div key={month} id={month} className="scroll-mt-16">
                    <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                      {getMonthName(month)}
                    </h3>
                    
                    {postsByMonth[month].map((post) => (
                      <article key={post.id} id={post.id} className="mb-16 pb-16 border-b last:border-0">
                        <h2 className="text-2xl font-bold mb-3">
                          {post.title}
                        </h2>
                        <time className="text-gray-600 dark:text-gray-400 text-base mb-4 block">
                          {(() => {
                            try {
                              // Use the date directly from the frontmatter
                              const dateStr = post.date;
                              // Parse the date string manually to avoid timezone issues
                              const [year, month, day] = dateStr.split('-').map(Number);
                              const date = new Date(year, month - 1, day);
                              return format(date, 'MMMM d, yyyy');
                            } catch (error) {
                              return post.date; // Fallback to the raw date string if formatting fails
                            }
                          })()}
                        </time>
                        <div className="blog-content mb-6">
                          <div dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
                <h3 className="text-2xl font-semibold mb-4">No posts yet</h3>
                <p className="mb-0">Check back soon for new content!</p>
              </div>
            )}
            
            {/* No pagination - all posts are shown in the timeline */}
          </div>
        </div>
      </div>
    </>
  );
}