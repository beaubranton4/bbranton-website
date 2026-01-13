import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Beau Branton</title>
        <meta name="description" content="Page not found" />
      </Head>
      
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 
          className="text-6xl font-bold mb-4 text-cyan-400"
          style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif" }}
        >
          404
        </h1>
        <h2 
          className="text-xl font-medium mb-6 text-pink-400"
          style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '12px' }}
        >
          GAME OVER
        </h2>
        <p className="text-gray-500 mb-8 max-w-md">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved to another level.
        </p>
        <Link href="/">
          <span className="arcade-btn">
            INSERT COIN TO CONTINUE
          </span>
        </Link>
      </div>
    </>
  );
}
