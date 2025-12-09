import Head from 'next/head';
import Link from 'next/link';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

interface PostData {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
  excerpt: string;
}

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState<PostData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Only fetch when we have an ID
    if (!id) return;

    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/posts/${id}`);
        
        if (!response.ok) {
          throw new Error('Post not found');
        }
        
        const data = await response.json();
        setPostData(data);
        setError(false);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError(true);
        setPostData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-gray-600 dark:text-gray-400">Loading post...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error || !postData) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Post Not Found</h1>
            <p className="mb-8 text-gray-600 dark:text-gray-400">Sorry, the post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <span className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                ← Back to journal
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{postData.title} | Beau Branton</title>
        <meta name="description" content={`${postData.title} - Journal entry by Beau Branton`} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto py-8 lg:py-16">
              <article className="max-w-3xl">
                <header className="mb-10">
                  <Link href="/blog">
                    <span className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-6 inline-block font-medium transition-colors">
                      ← Back to journal
                    </span>
                  </Link>
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                    {postData.title}
                  </h1>
                  <div className="flex items-center space-x-4">
                    <time className="text-gray-600 dark:text-gray-400 text-lg">
                      {(() => {
                        try {
                          const [year, month, day] = postData.date.split('-').map(Number);
                          const date = new Date(Date.UTC(year, month - 1, day));
                          return format(date, 'MMMM d, yyyy');
                        } catch (error) {
                          return postData.date;
                        }
                      })()}
                    </time>
                    {postData.excerpt && (
                      <span className="text-gray-400 dark:text-gray-500">•</span>
                    )}
                    {postData.excerpt && (
                      <p className="text-gray-600 dark:text-gray-400 italic text-lg">
                        {postData.excerpt}
                      </p>
                    )}
                  </div>
                </header>
                
                <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-800 border-l-4 border-blue-500 rounded-r-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed">
                    These entries aren't proofread or polished in any meaningful way. I literally whip out my phone, talk for a few minutes a day, and then upload it here. So please don't use this as a gauge of who I am as a writer or a thinker. But they are my thoughts and they are me.
                  </p>
                </div>
                
                <div 
                  className="prose prose-lg prose-gray dark:prose-invert max-w-none
                    prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                    prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                    prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-gray-900 dark:prose-strong:text-white
                    prose-code:text-gray-800 dark:prose-code:text-gray-200
                    prose-pre:bg-gray-50 dark:prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700
                    prose-img:rounded-xl prose-img:shadow-lg
                    prose-blockquote:border-blue-500 dark:prose-blockquote:border-blue-400
                    prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-lg
                    prose-ul:my-6 prose-ol:my-6
                    prose-li:my-2"
                  dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
                />
              </article>
          </div>
        </div>
      </div>
    </>
  );
}