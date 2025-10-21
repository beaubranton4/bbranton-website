import Head from 'next/head';
import Link from 'next/link';

export default function Now() {
  return (
    <>
      <Head>
        <title>Now | Beau Branton</title>
        <meta name="description" content="What I'm focused on right now - current projects, goals, and interests" />
      </Head>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Now</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">
            Last updated: October 21, 2025
          </p>
          
          <p>
            This is my "now page" — a snapshot of what I'm currently focused on, inspired by 
            <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="mx-1">nownownow.com</a>. 
            It's a way to share what I'm working on and thinking about right now.
          </p>
          
          <h2>Current Focus</h2>
          
          <h3>Dugout Edge</h3>
          <p>
            I'm actively developing Dugout Edge, my SaaS platform for baseball and softball coaches. 
            Currently at $120 MRR with 30+ paying customers, I'm focused on:
          </p>
          <ul>
            <li>Building out the practice planner feature</li>
            <li>Expanding the drill library with more content</li>
            <li>Creating downloadable practice plan templates</li>
            <li>Implementing email automation for user engagement</li>
          </ul>
          <p>
            My goal is to complete the practice planner before my trip to Switzerland, positioning 
            the site well for the spring baseball season.
          </p>
          
          <h3>Building in Public</h3>
          <p>
            I'm working on being more consistent with sharing my work publicly. This includes:
          </p>
          <ul>
            <li>Daily journaling to document my thoughts and progress</li>
            <li>Exploring ways to automate content creation from my building process</li>
            <li>Looking for examples of effective builders who document their journey</li>
          </ul>
          
          <h3>Personal Development</h3>
          <p>
            I'm currently focused on:
          </p>
          <ul>
            <li>Getting back into running with a goal of hitting 10 miles at a 7:30 pace</li>
            <li>Recovering from a recent knee injury</li>
            <li>Finding better balance between work and personal health</li>
            <li>Exploring the idea of "stacking good habits" to improve overall well-being</li>
          </ul>
          
          <h2>What I'm Learning</h2>
          <ul>
            <li>How to leverage AI tools for product development and content creation</li>
            <li>The balance between shipping fast and shipping quality</li>
            <li>Using money as leverage for business growth</li>
            <li>The importance of focus and avoiding "shiny object syndrome"</li>
          </ul>
          
          <h2>Future Explorations</h2>
          <p>
            While I'm committed to focusing on Dugout Edge, I'm also exploring these ideas for future projects:
          </p>
          <ul>
            <li>A premium athletic hat line</li>
            <li>A "build in public" automation tool</li>
            <li>The long-term dream of a baseball resort in Hawaii</li>
          </ul>
        </div>
        
        <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            ← Back to Home
          </Link>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            Read My Journal →
          </Link>
        </div>
      </div>
    </>
  );
}
