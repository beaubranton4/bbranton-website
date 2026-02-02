import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Essays | Beau Branton</title>
        <meta name="description" content="Essays and curated writings by Beau Branton" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-3xl font-bold mb-8 text-cyan-400"
          style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '18px' }}
        >
          ESSAYS
        </h1>
        
        <div className="arcade-card p-12 text-center">
          <div 
            className="text-6xl mb-6"
            style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif" }}
          >
            ✍️
          </div>
          
          <h2 
            className="text-xl font-bold mb-4 text-pink-400"
            style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '14px' }}
          >
            COMING SOON
          </h2>
          
          <p className="text-gray-300 leading-relaxed max-w-md mx-auto mb-6">
            I&apos;m working on a collection of well-crafted essays—thoughts that have been refined, edited, and polished into something worth reading.
          </p>
          
          <p className="text-gray-400 text-sm">
            Check back soon for curated writings on entrepreneurship, baseball, technology, and life.
          </p>
        </div>
      </div>
    </>
  );
}
