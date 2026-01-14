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
    if (!id) return;

    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/posts/${id}`);
        if (!response.ok) throw new Error('Post not found');
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

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto py-12">
        <p className="text-center text-gray-400">Loading post...</p>
      </div>
    );
  }

  if (error || !postData) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center">
        <h1 
          className="text-2xl font-bold mb-4 text-cyan-400"
          style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '16px' }}
        >
          NOT FOUND
        </h1>
        <p className="mb-8 text-gray-400">Sorry, the post you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/blog" className="text-cyan-400 hover:text-pink-400 transition-colors">
          ← Back to journal
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{postData.title} | Beau Branton</title>
        <meta name="description" content={`${postData.title} - Journal entry by Beau Branton`} />
      </Head>

      <div className="max-w-3xl mx-auto">
        <article>
          <header className="mb-10">
            <Link href="/blog" className="text-gray-400 hover:text-cyan-400 mb-6 inline-block transition-colors text-sm">
              ← Back to journal
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight">
              {postData.title}
            </h1>
            <div className="flex items-center gap-4">
              <time className="text-gray-400">
                {(() => {
                  try {
                    const [year, month, day] = postData.date.split('-').map(Number);
                    const date = new Date(Date.UTC(year, month - 1, day));
                    return format(date, 'MMMM d, yyyy');
                  } catch {
                    return postData.date;
                  }
                })()}
              </time>
              {postData.excerpt && (
                <>
                  <span className="text-gray-600">•</span>
                  <p className="text-gray-300 italic">
                    {postData.excerpt}
                  </p>
                </>
              )}
            </div>
          </header>
          
          <div className="mb-8 p-4 bg-slate-800/50 border-l-2 border-pink-500">
            <p className="text-sm text-gray-300 italic leading-relaxed">
            These entries aren&apos;t proofread or polished in any meaningful way. I whip out my phone, talk for a few minutes, and upload (with the help of AI).
            </p>
          </div>
          
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />
        </article>
      </div>
    </>
  );
}
