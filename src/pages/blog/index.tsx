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

export default function Blog() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [postsByMonth, setPostsByMonth] = useState<{ [key: string]: PostData[] }>({});
  const [filteredPostsByMonth, setFilteredPostsByMonth] = useState<{ [key: string]: PostData[] }>({});
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [expandedMonth, setExpandedMonth] = useState<string | null>(null);

  const getCurrentMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
  };

  const months = Object.keys(filteredPostsByMonth || {}).sort().reverse();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/posts?page=1`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setPostsByMonth(data.postsByMonth || {});
        setFilteredPostsByMonth(data.postsByMonth || {});

        const monthFromQuery = router.query.month as string;
        const currentMonth = getCurrentMonth();
        const allMonths = Object.keys(data.postsByMonth || {}).sort().reverse();

        if (monthFromQuery && allMonths.includes(monthFromQuery)) {
          setSelectedMonth(monthFromQuery);
        } else if (allMonths.includes(currentMonth)) {
          setSelectedMonth(currentMonth);
        } else if (allMonths.length > 0) {
          setSelectedMonth(allMonths[0]);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPostsByMonth({});
        setFilteredPostsByMonth({});
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [router.query.month]);
  
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

  const navigateToMonth = (month: string) => {
    router.push({ pathname: '/blog', query: { month } }, undefined, { shallow: true });
  };

  const getPreviousMonth = (currentMonth: string): string | null => {
    const currentIndex = months.indexOf(currentMonth);
    if (currentIndex < months.length - 1) return months[currentIndex + 1];
    return null;
  };

  const getMonthName = (monthYear: string) => {
    if (monthYear === 'future-posts') return 'Future Posts';
    try {
      const [year, month] = monthYear.split('-');
      const date = new Date(parseInt(year), parseInt(month) - 1, 1);
      if (!isNaN(date.getTime())) {
        return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
      }
      return monthYear;
    } catch {
      return monthYear;
    }
  };

  return (
    <>
      <Head>
        <title>Journal | Beau Branton</title>
        <meta name="description" content="Daily journal entries, thoughts, and reflections by Beau Branton" />
      </Head>

      <div className="max-w-6xl mx-auto">
        <h1 
          className="text-3xl font-bold mb-8 text-cyan-400"
          style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '18px' }}
        >
          JOURNAL
        </h1>
        
        {/* Search bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search entries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="arcade-input pl-10"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
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
          <div className="md:w-56 flex-shrink-0">
            <div className="sticky top-24">
              <h2 
                className="text-sm font-bold mb-4 text-pink-400 tracking-wider"
                style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '10px' }}
              >
                ARCHIVES
              </h2>
              <p className="text-xs text-gray-400 mb-4">Select a month</p>
              {loading ? (
                <p className="text-gray-400 text-sm">Loading...</p>
              ) : months.length > 0 ? (
                <div className="max-h-[calc(100vh-250px)] overflow-y-auto pr-2 space-y-1">
                  {months.map((month) => (
                    <div key={month} className="space-y-1">
                      <button
                        onClick={() => {
                          navigateToMonth(month);
                          setExpandedMonth(expandedMonth === month ? null : month);
                        }}
                        className={`text-sm flex items-center justify-between w-full text-left py-1 transition-colors ${
                          selectedMonth === month 
                            ? 'text-cyan-400' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className={`mr-2 transition-transform ${expandedMonth === month ? 'rotate-90' : ''}`}>▸</span>
                          <span>{getMonthName(month)}</span>
                        </div>
                        <span className="text-gray-600 text-xs">({filteredPostsByMonth[month].length})</span>
                      </button>

                      {expandedMonth === month && (
                        <ul className="ml-4 space-y-1 border-l border-gray-800 pl-3">
                          {filteredPostsByMonth[month].map((post) => (
                            <li key={post.id}>
                              <a
                                href={`#${post.id}`}
                                className="text-xs text-gray-600 hover:text-cyan-400 block py-0.5"
                              >
                                {(() => {
                                  try {
                                    const [year, month, day] = post.date.split('-').map(Number);
                                    const date = new Date(year, month - 1, day);
                                    return format(date, 'MMM d');
                                  } catch {
                                    return post.date;
                                  }
                                })()}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">No archives</p>
              )}

              {searchQuery && months.length === 0 && (
                <div className="mt-4 p-3 bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs">
                  No entries match your search.
                </div>
              )}
            </div>
          </div>
          
          {/* Posts */}
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-6 text-white">
              {selectedMonth && getMonthName(selectedMonth)}
            </h2>

            <div className="mb-6 p-4 bg-slate-800/50 border-l-2 border-pink-500">
              <p className="text-sm text-gray-300 italic leading-relaxed">
              These entries aren&apos;t proofread or polished in any meaningful way. I whip out my phone, talk for a few minutes, and upload (with the help of AI).
              </p>
            </div>

            {loading ? (
              <div className="py-12 text-center">
                <p className="text-gray-400">Loading posts...</p>
              </div>
            ) : selectedMonth && filteredPostsByMonth[selectedMonth] ? (
              <div className="space-y-8">
                {filteredPostsByMonth[selectedMonth].map((post) => (
                  <article key={post.id} id={post.id} className="arcade-card p-6 scroll-mt-24">
                    <Link href={`/blog/${post.id}`} className="group">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                      <time className="text-gray-400 text-sm">
                        {(() => {
                          try {
                            const [year, month, day] = post.date.split('-').map(Number);
                            const date = new Date(year, month - 1, day);
                            return format(date, 'MMMM d, yyyy');
                          } catch {
                            return post.date;
                          }
                        })()}
                      </time>
                      {post.featured && (
                        <span className="text-[10px] px-2 py-0.5 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          FEATURED
                        </span>
                      )}
                    </div>

                    {post.excerpt && (
                      <p className="text-gray-300 mb-4 italic text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="blog-content text-sm">
                      <div dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800">
                      {(post.contentHtml || '').includes('Dugout Edge') && (
                        <span className="arcade-chip">Dugout Edge</span>
                      )}
                      {(post.contentHtml || '').includes('baseball') && (
                        <span className="arcade-chip">Baseball</span>
                      )}
                      {(post.contentHtml || '').includes('entrepreneur') && (
                        <span className="arcade-chip">Entrepreneurship</span>
                      )}
                    </div>
                  </article>
                ))}

                {/* Month navigation */}
                <div className="flex justify-end mt-8 pt-6 border-t border-gray-800">
                  {getPreviousMonth(selectedMonth) && (
                    <button
                      onClick={() => navigateToMonth(getPreviousMonth(selectedMonth)!)}
                      className="text-gray-400 hover:text-pink-400 transition-colors text-sm"
                    >
                      Read {getMonthName(getPreviousMonth(selectedMonth)!)} →
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="arcade-card p-8 text-center">
                <h3 className="text-xl font-semibold mb-2 text-white">No posts yet</h3>
                <p className="text-gray-400">Check back soon for new content!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
