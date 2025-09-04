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
      <div className="max-w-3xl mx-auto py-12">
        <p>Loading post...</p>
      </div>
    );
  }

  // Show error state
  if (error || !postData) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-8">Sorry, the post you're looking for doesn't exist.</p>
        <Link href="/blog">
          <span className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            ← Back to blog
          </span>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{postData.title} | Beau Branton</title>
        <meta name="description" content={`${postData.title} - Blog post by Beau Branton`} />
      </Head>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <Link href="/blog">
            <span className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-6 inline-block">
              ← Back to blog
            </span>
          </Link>
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <time className="text-gray-600 dark:text-gray-400 block">
            {(() => {
              try {
                return format(new Date(postData.date), 'MMMM d, yyyy');
              } catch (error) {
                return postData.date; // Fallback to the raw date string if formatting fails
              }
            })()}
          </time>
        </header>
        
        <div 
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </article>
    </>
  );
}