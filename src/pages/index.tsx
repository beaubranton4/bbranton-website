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

      <div className="max-w-6xl mx-auto">
        {/* Hero Section - Stacked Layout */}
        <div className="pt-12 pb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 
              className="text-4xl font-bold mb-6 text-cyan-400"
              style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '24px', lineHeight: '1.6' }}
            >
              Welcome
            </h1>
            
            <div className="space-y-3 mb-8">
              <p className="text-gray-200 leading-relaxed text-lg">
                My name is <span className="text-white font-semibold">Beau Branton</span>.
              </p>
              
              <p className="text-gray-200 leading-relaxed text-lg">
                I&apos;m an entrepreneur, data nerd, and former pro baseball player.
              </p>
              
              <p className="text-gray-200 leading-relaxed text-lg">
                <span className="text-cyan-400">Stanford Alum</span>. <span className="text-pink-400">Hawaii → SF</span>
              </p>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div 
                className="w-48 border-2 border-cyan-500/50 flex items-center justify-center"
                style={{ boxShadow: '0 0 25px rgba(6, 182, 212, 0.5)' }}
              >
                <Image 
                  src="/images/selfie.jpeg" 
                  alt="Beau Branton" 
                  width={192} 
                  height={256}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          
            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <a 
                href="https://twitter.com/beaubranton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                Twitter
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="https://github.com/beaubranton4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                GitHub
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="https://linkedin.com/in/beaubranton" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-gray-600">|</span>
              <a 
                href="mailto:bbranton@gmail.com" 
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="arcade-divider mb-12" />

        {/* Content Grid */}
        <div className="max-w-4xl mx-auto pb-16 space-y-12">
            
          {/* Currently Working On */}
          <section>
            <h2 
              className="text-lg font-bold mb-6 text-cyan-400 tracking-wider"
              style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '12px' }}
            >
              CURRENTLY BUILDING
            </h2>
            
            <div className="space-y-4">
              {activeProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="arcade-card p-5 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-white/90 rounded flex items-center justify-center p-1.5">
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          width={44} 
                          height={44}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors mb-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-2">
                        {project.description}
                      </p>
                      <span className="text-cyan-400 text-sm">Visit →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-4">
              <Link href="/projects" className="text-sm text-gray-400 hover:text-pink-400 transition-colors">
                View all projects →
              </Link>
            </div>
          </section>

          {/* Currently Working At */}
          <section>
            <h2 
              className="text-lg font-bold mb-6 text-pink-400 tracking-wider"
              style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '12px' }}
            >
              DAY JOB
            </h2>
            
            <div className="arcade-card p-5 flex items-start space-x-4 group">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-white/90 rounded flex items-center justify-center p-1.5">
                  <Image 
                    src="/images/usertesting-logo.png" 
                    alt="UserTesting" 
                    width={44} 
                    height={44}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold">
                    UserTesting
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 border border-green-500/30">
                    ACTIVE
                  </span>
                </div>
                
                <p className="text-cyan-400 text-sm mb-2">
                  Senior Business Intelligence Analyst
                </p>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  Building data models and business intelligence solutions using SQL, dbt, Snowflake, and Tableau. Leading company-wide analytics adoption.
                </p>
                
                <Link href="/resume" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  see where I&apos;ve worked →
                </Link>
              </div>
            </div>
          </section>

          {/* Latest Journal Entries */}
          <section>
            <h2 
              className="text-lg font-bold mb-6 text-pink-400 tracking-wider"
              style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '12px' }}
            >
              JOURNAL
            </h2>
            
            <div className="mb-6 p-4 bg-slate-800/50 border-l-2 border-pink-500">
              <p className="text-sm text-gray-300 italic leading-relaxed">
                These entries aren&apos;t proofread or polished. I whip out my phone, talk for a few minutes, and upload. But they are my thoughts and they are me.
              </p>
            </div>
            
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="arcade-card p-4 animate-pulse">
                    <div className="h-3 bg-gray-800 rounded w-24 mb-2"></div>
                    <div className="h-4 bg-gray-800 rounded w-48 mb-2"></div>
                    <div className="h-3 bg-gray-800 rounded w-full"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {recentPosts.map((post) => (
                  <Link 
                    key={post.id} 
                    href={`/blog/${post.id}`} 
                    className="block arcade-card p-4 group"
                  >
                    <time className="text-xs text-gray-400 font-medium">
                      {(() => {
                        try {
                          const [year, month, day] = post.date.split('-').map(Number);
                          const date = new Date(year, month - 1, day);
                          return date.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          });
                        } catch {
                          return post.date;
                        }
                      })()}
                    </time>
                    <h3 className="font-semibold mt-1 mb-1 text-white group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            )}
            
            <div className="mt-4">
              <Link href="/blog" className="text-sm text-gray-400 hover:text-pink-400 transition-colors">
                Read more entries →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
