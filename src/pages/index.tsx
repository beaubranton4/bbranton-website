import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Types
interface PostData {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  contentHtml?: string;
}

// My active projects
const activeProjects = [
  {
    id: 'dugout-edge',
    title: 'Dugout Edge',
    description: 'A SaaS platform for baseball and softball coaches with lineup generators, practice planners, and drill libraries.',
    image: '/images/dugout_edge_logo_transparent.png',
    link: 'https://dugoutedge.com',
    revenue: '$150+/mo',
    status: 'active',
  },
];

export default function Home() {
  const [recentPosts, setRecentPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await fetch('/api/posts?page=1');
        if (response.ok) {
          const data = await response.json();
          // Get the 3 most recent posts
          const allPosts = Object.values(data.postsByMonth || {}).flat() as PostData[];
          const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          setRecentPosts(sortedPosts.slice(0, 3));
        }
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Beau Branton</title>
        <meta name="description" content="Beau Branton's personal website - thoughts, writings, projects, and more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Profile Section - Centered at Top */}
          <div className="py-12 text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <Image 
                src="/images/Beau Emoji.jpeg" 
                alt="Beau Branton" 
                width={128} 
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Yo!
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto">
              My name is Beau Branton.
              <br /><br />
              I'm an entrepreneur, data analyst, and former pro baseball player.
              <br /><br />
              Stanford Alum.
              <br /><br />
              <a href="/about" className="underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">More about me →</a>
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a 
                href="https://twitter.com/beaubranton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                twitter
              </a>
              <a 
                href="https://github.com/beaubranton4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                github
              </a>
              <a 
                href="https://linkedin.com/in/beaubranton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                linkedin
              </a>
              <a 
                href="mailto:bbranton@gmail.com" 
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                email
              </a>
            </div>
          </div>

          {/* Content Section - Full Width */}
          <div className="max-w-4xl mx-auto pb-16">
              
              {/* Currently Working On */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Currently Working On
                </h2>
                
                <div className="space-y-6">
                  {activeProjects.map((project) => (
                    <div key={project.id} className="group">
                      <div className="flex items-start space-x-4 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:shadow-sm transition-all duration-200">
                        
                        {/* Project Logo */}
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center ${
                            ['dugout-edge', 'spend-my-stipend', 'startup-seeds'].includes(project.id)
                              ? 'bg-white dark:bg-gray-900' 
                              : 'bg-gray-100 dark:bg-gray-800'
                          }`}>
                            <Image 
                              src={project.image} 
                              alt={project.title} 
                              width={64} 
                              height={64}
                              className={`${
                                ['dugout-edge', 'spend-my-stipend', 'startup-seeds'].includes(project.id)
                                  ? 'w-12 h-12 object-contain p-1' 
                                  : 'w-full h-full object-cover'
                              } rounded-lg`}
                            />
                          </div>
                        </div>
                        
                        {/* Project Info */}
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {project.title}
                            </h3>
                            <span className="text-sm font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                              {project.revenue}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">
                            {project.description}
                          </p>
                          
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
                          >
                            Visit →
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link href="/projects" className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                    View all projects →
                  </Link>
                </div>
              </div>

              {/* Currently Working At */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Currently Working At
                </h2>
                
                <div className="group">
                  <div className="flex items-start space-x-4 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:shadow-sm transition-all duration-200">
                    
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        <Image 
                          src="/images/usertesting-logo.png" 
                          alt="UserTesting" 
                          width={48} 
                          height={48}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Company Info */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          UserTesting
                        </h3>
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs font-medium px-2 py-1 rounded-full">
                          Current
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                        Senior Business Intelligence Analyst
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">
                        Building data models and business intelligence solutions using SQL, dbt, Snowflake, and Tableau. Leading company-wide analytics adoption and driving measurable business outcomes across Product, RevOps, Finance, and Operations.
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <a 
                          href="https://www.usertesting.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
                        >
                          Visit UserTesting →
                        </a>
                        <Link href="/resume" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm transition-colors">
                          see where I've worked
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Latest Journal Entries */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Latest Journal Entries
                </h2>
                
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">
                  These entries aren't proofread or polished in any meaningful way. I literally whip out my phone, talk for a few minutes a day, and then upload it here. So please don't use this as a gauge of who I am as a writer or a thinker. But they are my thoughts and they are me.
                  </p>
                </div>
                
                {loading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg animate-pulse">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-2"></div>
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-2"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <Link key={post.id} href={`/blog/${post.id}`} className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 group">
                        <time className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {(() => {
                            try {
                              const [year, month, day] = post.date.split('-').map(Number);
                              const date = new Date(year, month - 1, day);
                              return date.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              });
                            } catch (error) {
                              return post.date;
                            }
                          })()}
                        </time>
                        <h3 className="font-semibold text-lg mt-2 mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                            {post.excerpt}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
                
                <div className="mt-6">
                  <Link href="/blog" className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                    Read more →
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}