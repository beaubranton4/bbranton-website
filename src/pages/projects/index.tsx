import Head from 'next/head';
import Link from 'next/link';

// My projects
const projects = [
  {
    id: 'dugout-edge',
    title: 'Dugout Edge',
    description: 'A SaaS platform for baseball and softball coaches with lineup generators, practice planners, and drill libraries. Currently at $120 MRR with 30+ paying customers and growing. Working on expanding features like the practice planner and drill library to provide more value to coaches.',
    tags: ['SaaS', 'Sports Tech', 'Subscription', 'Baseball'],
    image: '/images/projects/dugout-edge.jpg',
    link: 'https://dugoutedge.com',
    status: 'active',
  },
  {
    id: 'spend-my-stipend',
    title: 'Spend My Stipend',
    description: 'An affiliate blog that helps employees figure out what to spend their employer-provided stipends on, including professional development, health and wellness, and remote work stipends. Built with SEO in mind to capture search traffic from people looking to use their company benefits.',
    tags: ['Affiliate Marketing', 'Blog', 'Employee Benefits', 'SEO'],
    image: '/images/projects/spend-my-stipend.jpg',
    link: 'https://spendmystipend.com',
    status: 'completed',
  },
  {
    id: 'personal-website',
    title: 'Personal Website',
    description: 'My personal website built with Next.js and Tailwind CSS. A hub for my thoughts, writings, and projects where I document my journey building in public. Features a journal section with daily entries about entrepreneurship, personal growth, and building products.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Personal Brand'],
    image: '/images/projects/website.jpg',
    link: 'https://beaubranton.com',
    github: 'https://github.com/beaubranton/beaubranton.com',
    status: 'active',
  },
  {
    id: 'startup-seeds',
    title: 'Startup Seeds',
    description: 'A platform that uses LLMs to transcribe and summarize business ideas from top entrepreneurial podcasts, storing them in a searchable database. Designed to help entrepreneurs find inspiration and stay updated on emerging trends and opportunities.',
    tags: ['AI', 'LLM', 'Podcast Transcription', 'Entrepreneurship'],
    image: '/images/projects/startup-seeds.jpg',
    link: 'https://startupseeds.io',
    status: 'planned',
  },
];

// Project ideas from journal entries
const projectIdeas = [
  {
    id: 'baseball-resort',
    title: 'Hawaii Baseball Resort',
    description: 'A baseball resort and training facility in Hawaii, inspired by Rocker B Ranch in Texas. Would feature fields, accommodations, and host tournaments while providing a vacation destination for baseball families.',
    tags: ['Physical Business', 'Baseball', 'Real Estate', 'Tourism'],
  },
  {
    id: 'premium-hat-line',
    title: 'Premium Athletic Hat Line',
    description: 'High-quality, sporty workout hats that don\'t collapse or lose shape. Designed to be the go-to hat for workouts or runs, similar to what Lululemon did for athletic wear.',
    tags: ['D2C', 'Apparel', 'Fitness', 'Product Design'],
  },
  {
    id: 'show-your-work-automation',
    title: 'Build in Public Automation',
    description: 'A tool that automatically documents and shares your building process. It would take commits, journal entries, and screenshots and turn them into social media content.',
    tags: ['SaaS', 'Content Creation', 'Automation', 'Social Media'],
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Beau Branton</title>
        <meta name="description" content="Projects and work by Beau Branton" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <p className="text-xl mb-12">
          Here's what I'm building and working on. I'm focused on creating useful tools that solve real problems.
        </p>

        <h2 className="text-2xl font-bold mb-6">Active & Completed Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center relative">
                <span className="text-gray-500 dark:text-gray-400 font-medium">{project.title}</span>
                {project.status && (
                  <div className="absolute top-4 right-4">
                    {project.status === 'active' && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">ACTIVE</span>
                    )}
                    {project.status === 'completed' && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">COMPLETED</span>
                    )}
                    {project.status === 'planned' && (
                      <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">PLANNED</span>
                    )}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 inline-flex items-center"
                    >
                      GitHub
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Project Ideas & Future Explorations</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {projectIdeas.map((idea) => (
            <div key={idea.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-3">
                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded-full">IDEA</span>
                <h3 className="text-xl font-semibold ml-2">{idea.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{idea.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {idea.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-lg border border-blue-100 dark:border-blue-800">
          <h2 className="text-2xl font-semibold mb-4">Have a project idea?</h2>
          <p className="mb-4">
            I'm always open to collaborating on interesting projects. Feel free to reach out if you have an idea you'd like to discuss!
          </p>
          <Link href="/about">
            <span className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center">
              Contact me
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
