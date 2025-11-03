import Head from 'next/head';
import Link from 'next/link';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ProfileSidebar from '../../components/ProfileSidebar';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredPosts, setFeaturedPosts] = useState<{
    posts: PostData[];
    totalPosts: number;
    totalPages: number;
  }>({ posts: [], totalPosts: 0, totalPages: 0 });
  const [postsByMonth, setPostsByMonth] = useState<{ [key: string]: PostData[] }>({});
  const [filteredPostsByMonth, setFilteredPostsByMonth] = useState<{ [key: string]: PostData[] }>({});
  
  // Get months for the sidebar - Only call Object.keys if postsByMonth is defined
  const months = Object.keys(filteredPostsByMonth || {}).sort().reverse();

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
        setFilteredPostsByMonth(data.postsByMonth || {});
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Set default values on error
        setFeaturedPosts({ posts: [], totalPosts: 0, totalPages: 0 });
        setPostsByMonth({});
        setFilteredPostsByMonth({});
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, [router.query.page]);
  
  // Filter posts based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPostsByMonth(postsByMonth);
      return;
    }
    
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered: { [key: string]: PostData[] } = {};
    
    Object.keys(postsByMonth).forEach(month => {
      const matchingPosts = postsByMonth[month].filter(post => 
        post.title.toLowerCase().includes(lowerCaseQuery) || 
        post.excerpt?.toLowerCase().includes(lowerCaseQuery) || 
        post.contentHtml?.toLowerCase().includes(lowerCaseQuery)
      );
      
      if (matchingPosts.length > 0) {
        filtered[month] = matchingPosts;
      }
    });
    
    setFilteredPostsByMonth(filtered);
  }, [searchQuery, postsByMonth]);

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
        <title>Journal | Beau Branton</title>
        <meta name="description" content="Daily journal entries, thoughts, and reflections by Beau Branton" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 py-8 lg:py-16">
            
            {/* Left Column - Profile */}
            <ProfileSidebar />

            {/* Right Column - Blog Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Journal</h1>
              
              {/* Search bar */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search journal entries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar with monthly archives */}
                <div className="md:w-64 flex-shrink-0">
                  <div className="sticky top-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Archives</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Click a month to view entries</p>
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
                              <span className="ml-2 text-gray-500 dark:text-gray-500">({filteredPostsByMonth[month].length})</span>
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
                    
                    {searchQuery && months.length === 0 && (
                      <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-lg">
                        <p>No entries match your search.</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* All posts in a continuous timeline */}
                <div className="flex-grow">
                  <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Daily Journal Entries</h1>
                  
                  {loading ? (
                    <div className="py-12 text-center">
                      <p>Loading posts...</p>
                    </div>
                  ) : months.length > 0 ? (
                    <div className="space-y-16">
                      {months.map((month) => (
                        <div key={month} id={month} className="scroll-mt-16">
                          <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                            {getMonthName(month)}
                          </h3>
                          
                          {postsByMonth[month].map((post) => (
                            <article key={post.id} id={post.id} className="mb-16 pb-16 border-b last:border-0">
                              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                                {post.title}
                              </h2>
                              <div className="flex items-center mb-4">
                                <time className="text-gray-600 dark:text-gray-400 text-base">
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
                                {post.featured && (
                                  <span className="ml-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                                    Featured
                                  </span>
                                )}
                              </div>
                              
                              {post.excerpt && (
                                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                                  {post.excerpt}
                                </p>
                              )}
                              
                              <div className="blog-content mb-6 prose prose-lg dark:prose-invert max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />
                              </div>
                              
                              <div className="flex flex-wrap gap-2 mt-6">
                                {/* Extract topics from content for tags */}
                                {(post.contentHtml || '').includes('Dugout Edge') && (
                                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 text-sm rounded-full">
                                    Dugout Edge
                                  </span>
                                )}
                                {(post.contentHtml || '').includes('baseball') && (
                                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 text-sm rounded-full">
                                    Baseball
                                  </span>
                                )}
                                {(post.contentHtml || '').includes('entrepreneur') && (
                                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 text-sm rounded-full">
                                    Entrepreneurship
                                  </span>
                                )}
                                {(post.contentHtml || '').includes('health') && (
                                  <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-3 py-1 text-sm rounded-full">
                                    Health
                                  </span>
                                )}
                                {(post.contentHtml || '').includes('habit') && (
                                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-3 py-1 text-sm rounded-full">
                                    Habits
                                  </span>
                                )}
                              </div>
                            </article>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">No posts yet</h3>
                      <p className="mb-0 text-gray-600 dark:text-gray-400">Check back soon for new content!</p>
                    </div>
                  )}
                  
                  {/* No pagination - all posts are shown in the timeline */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}