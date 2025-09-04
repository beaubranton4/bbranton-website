import Head from 'next/head';
import Link from 'next/link';

// My projects
const projects = [
  {
    id: 'personal-website',
    title: 'Personal Website',
    description: 'My personal website built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    image: '/images/projects/website.jpg',
    link: 'https://beaubranton.com',
    github: 'https://github.com/beaubranton/beaubranton.com',
  },
  {
    id: 'spend-my-stipend',
    title: 'Spend My Stipend',
    description: 'An affiliate blog that helps employees figure out what to spend their employer-provided stipends on, including professional development, health and wellness, and remote work stipends.',
    tags: ['Affiliate Marketing', 'Blog', 'Employee Benefits'],
    image: '/images/projects/spend-my-stipend.jpg',
    link: 'https://spendmystipend.com',
  },
  {
    id: 'dugout-edge',
    title: 'Dugout Edge',
    description: 'Tools and tips for baseball and softball coaches and players. Features a subscription-based lineup generator that\'s on track to make $100 in MRR.',
    tags: ['SaaS', 'Sports Tech', 'Subscription'],
    image: '/images/projects/dugout-edge.jpg',
    link: 'https://dugoutedge.com',
  },
  {
    id: 'startup-seeds',
    title: 'Startup Seeds',
    description: 'A platform that uses LLMs to transcribe and summarize business ideas from top entrepreneurial podcasts, storing them in a searchable database.',
    tags: ['AI', 'LLM', 'Podcast Transcription', 'Entrepreneurship'],
    image: '/images/projects/startup-seeds.jpg',
    link: 'https://startupseeds.io',
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
          Here are some of the projects I've been working on. I love building things that solve real problems.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">{project.title}</span>
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
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View Project
                  </a>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Have a project idea?</h2>
          <p className="mb-4">
            I'm always open to collaborating on interesting projects. Feel free to reach out if you have an idea you'd like to discuss!
          </p>
          <Link href="/about">
            <span className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
              Contact me →
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
