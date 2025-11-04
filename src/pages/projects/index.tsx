import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ProfileSidebar from '../../components/ProfileSidebar';

// Project type
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  revenue: string;
  status: string;
  github?: string;
}

// My projects
const projects: Project[] = [
  {
    id: 'dugout-edge',
    title: 'Dugout Edge',
    description: 'A SaaS platform for baseball and softball coaches with lineup generators, practice planners, and drill libraries.',
    tags: ['SaaS', 'Sports Tech', 'Subscription', 'Baseball'],
    image: '/images/dugout_edge_logo_transparent.png',
    link: 'https://dugoutedge.com',
    revenue: '$150+/mo',
    status: 'active',
  },
  {
    id: 'spend-my-stipend',
    title: 'Spend My Stipend',
    description: 'An affiliate blog that helps employees figure out what to spend their employer-provided stipends on.',
    tags: ['Affiliate Marketing', 'Blog', 'Employee Benefits', 'SEO'],
    image: '/images/spend-my-stipend-logo.png',
    link: 'https://spendmystipend.com',
    revenue: '$30k+ total',
    status: 'completed',
  },
  {
    id: 'startup-seeds',
    title: 'Startup Seeds',
    description: 'A platform that uses LLMs to transcribe and summarize business ideas from top entrepreneurial podcasts.',
    tags: ['AI', 'LLM', 'Podcast Transcription', 'Entrepreneurship'],
    image: '/images/startup-seeds.jpg',
    link: 'https://startupseeds.io',
    revenue: 'Not revenue generating',
    status: 'planned',
  },
];

// Project ideas from journal entries
const projectIdeas = [
  {
    id: 'data-efficiency',
    title: 'Data Efficiency Platform',
    description: 'A platform that identifies and solves inefficiencies in modern data analytics workflows. Focus on streamlining data preparation, analysis automation, and making insights more accessible to non-technical stakeholders.',
    tags: ['Data Analytics', 'SaaS', 'Automation', 'Business Intelligence'],
  },
  {
    id: 'pacific-heights-social-club',
    title: 'Pacific Heights Social Club',
    description: 'An exclusive social club and co-working space in Pacific Heights, San Francisco. Combining workspace, wellness, and community in a beautiful historic building. Think Soho House meets modern tech workspace.',
    tags: ['Physical Business', 'Real Estate', 'Community', 'San Francisco'],
  },
  {
    id: 'wedding-planner-agent',
    title: 'AI Wedding Planner',
    description: 'An AI agent that handles wedding planning correspondence, vendor booking, budgeting, and communication to streamline the wedding planning process.',
    tags: ['AI', 'Wedding Planning', 'Automation', 'SaaS'],
  },
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

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 py-8 lg:py-16">
            
            {/* Left Column - Profile */}
            <ProfileSidebar />

            {/* Right Column - Projects */}
            <div className="lg:col-span-2">
              
              {/* Projects List */}
              <div className="space-y-8 mb-16">
                {projects.map((project) => (
                  <div key={project.id} className="group">
                    <div className="flex items-start space-x-4 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:shadow-md transition-all duration-200">
                      
                      {/* Project Logo */}
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-lg overflow-hidden flex items-center justify-center ${
                          ['dugout-edge', 'spend-my-stipend', 'startup-seeds'].includes(project.id)
                            ? 'bg-white dark:bg-gray-900' 
                            : 'bg-gray-100 dark:bg-gray-800'
                        }`}>
                          <Image 
                            src={project.image} 
                            alt={project.title} 
                            width={64} 
                            height={64}
                            className={`${
                              ['dugout-edge', 'spend-my-stipend', 'startup-seeds'].includes(project.id)
                                ? 'w-12 h-12 object-contain p-1' 
                                : 'w-full h-full object-cover'
                            } rounded-lg`}
                          />
                        </div>
                      </div>
                      
                      {/* Project Info */}
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-sm font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                            {project.revenue}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag} 
                              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* Links */}
                        <div className="flex items-center space-x-4">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
                          >
                            Visit →
                          </a>
                          {project.github && (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm transition-colors"
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Project Ideas Section */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                  Ideas I'd like to build
                </h2>
                
                <div className="grid gap-4">
                  {projectIdeas.map((idea) => (
                    <div key={idea.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {idea.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {idea.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
