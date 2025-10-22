import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ProfileSidebar from '../components/ProfileSidebar';
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
    revenue: '$1.2k+/mo',
    status: 'active',
  },
  {
    id: 'personal-website',
    title: 'bbranton.com',
    description: 'My personal website built with Next.js and Tailwind CSS. A hub for my thoughts, writings, and projects.',
    image: '/images/Beau Emoji.jpeg',
    link: 'https://beaubranton.com',
    revenue: 'Just started',
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
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 py-8 lg:py-16">
            
            {/* Left Column - Profile */}
            <ProfileSidebar />

            {/* Right Column - Content */}
            <div className="lg:col-span-2">
              
              {/* Currently Working On */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Currently Working On
                </h2>
                
                <div className="space-y-4">
                  {activeProjects.map((project) => (
                    <div key={project.id} className="group">
                      <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200">
                        
                        {/* Project Logo */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <Image 
                              src={project.image} 
                              alt={project.title} 
                              width={64} 
                              height={64}
                              className="w-full h-full object-cover rounded-lg"
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

              {/* Latest Journal Entries */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Latest Journal Entries
                </h2>
                
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
                      <Link key={post.id} href={`/blog/${post.id}`} className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <time className="text-sm text-gray-500 dark:text-gray-400">
                          {(() => {
                            try {
                              // Parse the date string manually to avoid timezone issues
                              const [year, month, day] = post.date.split('-').map(Number);
                              const date = new Date(year, month - 1, day);
                              return date.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              });
                            } catch (error) {
                              return post.date; // Fallback to the raw date string if formatting fails
                            }
                          })()}
                        </time>
                        <h3 className="font-medium mt-1 mb-1 text-gray-900 dark:text-white">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
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
      </div>
    </>
  );
}