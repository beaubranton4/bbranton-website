import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Beau Branton</title>
        <meta name="description" content="About Beau Branton - background, interests, and contact information" />
      </Head>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p>
            Hello! I'm Beau Branton, and welcome to my personal website. This is where I share my thoughts,
            writings, projects, and document my journey in a public digital space..
          </p>
          
          <h2>Background</h2>
          <p>
            I'm passionate about [your interests/profession]. With experience in [relevant fields],
            I enjoy [what you enjoy doing professionally]. My background includes [brief professional summary].
          </p>
          
          <h2>What I Do</h2>
          <p>
            Currently, I'm focused on [current projects or interests]. I'm particularly interested in
            [specific areas of interest], and I'm always looking to learn and grow in these areas.
          </p>
          
          <h2>Building in Public</h2>
          <p>
          I'm not one to typically share or boast, but I want to build in public as a way of holding myself accountable to reaching my goals of creating more, writing more, and building more.
          </p>
          
          <h2>Connect with Me</h2>
          <p>
            I'm always open to connecting with like-minded individuals, discussing interesting ideas,
            or exploring potential collaborations. Feel free to reach out through any of the channels below.
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Contact & Social</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="mailto:hello@beaubranton.com" 
              className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">hello@beaubranton.com</p>
              </div>
            </a>
            
            <a 
              href="https://twitter.com/beaubranton" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Twitter</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">@beaubranton</p>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/beaubranton" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">in/beaubranton</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/beaubranton" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">GitHub</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">github.com/beaubranton</p>
              </div>
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <Link href="/blog">
            <span className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              Read my blog →
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
