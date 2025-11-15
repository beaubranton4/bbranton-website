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
            writings, projects, and document my journey in a public digital space.
          </p>
          
          <h2>Background</h2>
          <p>
            I'm a former Stanford baseball player who went on to play professional baseball, retiring with a career batting average over .300. 
            You can check out my stats on my <a href="https://www.mlb.com/player/beau-branton-682092?stats=career-r-hitting-minors" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">MLB player page</a>. 
            I have a passion for entrepreneurship, technology, and building useful products. 
            I currently work remotely in a role that gives me the flexibility to pursue my side projects and personal interests.
            I've always been drawn to the intersection of sports and technology, which has led me to create tools that solve 
            real problems for coaches and players.
          </p>
          <p>
            I was born in Saudi Arabia while my parents worked for Aramco, spent my formative years running around Honolulu, and graduated from Punahou School before heading to Stanford. 
            Those different environments taught me how to adapt, stay curious, and mix island calm with Silicon Valley pace. These days I call San Francisco home.
          </p>
          
          <h2>What I Do</h2>
          <p>
            Currently, I'm focused on building and growing Dugout Edge, a SaaS platform for baseball and softball coaches.
            The platform includes a lineup generator, practice planner, and drill library, all designed to make coaches' lives easier.
            I'm particularly interested in leveraging AI and automation to create tools that save people time and eliminate tedious tasks.
          </p>
          
          <p>
            Beyond Dugout Edge, I'm constantly exploring new ideas and opportunities. I'm fascinated by the potential of 
            building in public, content creation, and finding ways to provide value through digital products. Some of my other 
            interests include running, fitness, and exploring the balance between work and personal fulfillment.
          </p>
          
          <h2>Building in Public</h2>
          <p>
            I'm not one to typically share or boast, but I've come to believe in the power of building in public. It serves as 
            a way of holding myself accountable to reaching my goals of creating more, writing more, and building more. I believe 
            that showing your work is increasingly important in today's digital landscape.
          </p>
          
          <p>
            As I noted in my journal: "The world doesn't reward silent builders anymore. It rewards those who show their work."
            Through this website and my other online platforms, I aim to document my journey, share my successes and failures,
            and hopefully inspire others who are on similar paths.
          </p>
          
          <h2>My Philosophy</h2>
          <p>
            I believe in the power of focus and discipline, but also in the value of exploration and following one's curiosity.
            I've learned that good habits stack just like bad ones do, and that small, consistent actions can lead to significant
            results over time. I'm constantly working to find the right balance between immediate gratification and long-term growth.
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
              Read my journal →
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
