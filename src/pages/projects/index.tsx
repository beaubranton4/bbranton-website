import Head from 'next/head';
import Image from 'next/image';

// Project type
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  status: 'active' | 'completed' | 'planned';
  github?: string;
}

interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  tags: string[];
  items?: string[];
}

// Subtle status accents (no labels)
const statusAccent: Record<Project['status'], { border: string; shadow: string }> = {
  active: {
    border: 'border-cyan-500/50 hover:border-cyan-400/70',
    shadow: 'rgba(6, 182, 212, 0.3)',
  },
  planned: {
    border: 'border-pink-500/40 hover:border-pink-400/60',
    shadow: 'rgba(250, 204, 21, 0.25)',
  },
  completed: {
    border: 'border-pink-500/40 hover:border-pink-400/60',
    shadow: 'rgba(236, 72, 153, 0.25)',
  },
};

// My projects
const projects: Project[] = [
  {
    id: 'dugout-edge',
    title: 'Dugout Edge',
    description: 'SaaS platform for baseball/softball coaches to help them manage their youth teams.',
    tags: ['SaaS', 'Sports Tech', 'Subscription'],
    image: '/images/dugout_edge_logo_transparent.png',
    link: 'https://dugoutedge.com',
    status: 'active',
  },
  {
    id: 'startup-seeds',
    title: 'Startup Seeds',
    description: 'Free database of business ideas. AI auto-summarizes podcasts & articles to extract startup concepts.',
    tags: ['AI', 'LLM', 'Entrepreneurship'],
    image: '/images/startup-seeds.jpg',
    link: 'https://startupseeds.io',
    status: 'planned',
  },
  {
    id: 'spend-my-stipend',
    title: 'Spend My Stipend',
    description: 'Affiliate blog helping employees figure out what to spend their employer-provided stipends on.',
    tags: ['Affiliate', 'SEO', 'Blog'],
    image: '/images/spend-my-stipend-logo.png',
    link: 'https://spendmystipend.com',
    status: 'completed',
  },
  {
    id: 'cha2go',
    title: 'Cha2Go',
    description: 'Affiliate blog about Asian teas, using as market research to potentially start a bottled tea company.',
    tags: ['Tea', 'D2C', 'Research'],
    image: '/images/cha2go-logo.png',
    link: 'https://cha2go.com',
    status: 'active',
  },
  {
    id: 'san-francisco-rental',
    title: 'SF Rental Property',
    description: 'Bought, own and manage rental property in San Francisco. House hacking and renting out a room in my house.',
    tags: ['Real Estate', 'Investment'],
    image: '/images/victorian-home-icon.png',
    link: '#',
    status: 'active',
  },
  {
    id: 'vwap-short-spike-strategy',
    title: 'Trading Bot',
    description: 'Autonomous trading bot shorting low-float stocks after VWAP spikes. Shut down due to borrow constraints.',
    tags: ['Algo Trading', 'Python'],
    image: '/images/trading-bot-icon.png',
    link: 'https://github.com/beaubranton/vwap_short_spike_strategy',
    status: 'completed',
    github: 'https://github.com/beaubranton/vwap_short_spike_strategy',
  },
];

// Project ideas
const projectIdeas: ProjectIdea[] = [
  {
    id: 'data-efficiency',
    title: 'Data Efficiency Platform',
    description: 'Streamline data prep, automate analysis, make insights accessible to non-technical users.',
    tags: ['Data', 'SaaS', 'BI'],
  },
  {
    id: 'new-age-gym',
    title: 'New-Age Gym',
    description: 'Community-centered gym focused on sport & fun. A true 3rd place that actually gets people fit.',
    tags: ['Fitness', 'Community', 'SF'],
  },
  {
    id: 'wiffle-ball-league',
    title: 'SF Wiffle Ball League',
    description: 'Community wiffle ball league bringing people together through casual competition.',
    tags: ['Sports', 'Community'],
  },
  {
    id: 'baseball-resort',
    title: 'Hawaii Baseball Resort',
    description: 'Training facility in Hawaii inspired by Rocker B Ranch. Fields, lodging, tournaments.',
    tags: ['Baseball', 'Tourism'],
  },
  {
    id: 'premium-hat-line',
    title: 'Premium Athletic Hats',
    description: "High-quality workout hats that don't collapse. Lululemon-level for headwear.",
    tags: ['D2C', 'Apparel'],
  },
  {
    id: 'second-brain',
    title: '2nd Brain',
    description: 'A personal knowledge management and productivity system. My own take on the "second brain"—combining notes, journaling, tasks, life design, and AI into one digital platform for organizing thoughts, goals, and daily progress.',
    tags: ['Productivity', 'AI', 'PKM', 'Notes'],
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Beau Branton</title>
        <meta name="description" content="Projects and work by Beau Branton" />
      </Head>

      <div className="max-w-6xl mx-auto">
        {/* Arcade Header */}
        <div className="text-center mb-10">
          <h1 
            className="text-4xl sm:text-5xl font-bold mb-2 text-cyan-400 tracking-tight"
            style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif" }}
          >
            PROJECTS
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {projects.map((project) => {
            const accent = statusAccent[project.status];
            return (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
              >
                {/* Pixel border card */}
                <div
                  className={`relative bg-gray-900 border-2 ${accent.border} transition-all duration-200 overflow-hidden`}
                  style={{ boxShadow: `0 0 0 2px #0f172a, 4px 4px 0 0 ${accent.shadow}` }}
                >
                  {/* Card Content */}
                  <div className="p-4">
                    {/* Logo + Title Row */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex-shrink-0 bg-white/90 rounded flex items-center justify-center p-1">
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          width={32} 
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-white font-bold text-sm group-hover:text-cyan-400 transition-colors leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-xs leading-relaxed mb-3 line-clamp-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[10px] px-1.5 py-0.5 bg-gray-800 text-cyan-400 border border-cyan-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom glow bar on hover */}
                  <div className="h-0.5 bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-pink-500/30" />
          <span 
            className="text-pink-500 text-xs tracking-widest" 
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px' }}
          >
            IDEAS TO BUILD ONE DAY
          </span>
          <div className="flex-1 h-px bg-pink-500/30" />
        </div>

        {/* Project Ideas - Compact List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projectIdeas.map((idea) => (
            <div 
              key={idea.id} 
              className="bg-gray-900/50 border border-gray-800 hover:border-pink-500/50 p-3 transition-colors group"
            >
              <div className="flex items-start gap-2">
                <span className="text-pink-500 text-lg leading-none">▸</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-pink-400 transition-colors">
                    {idea.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {idea.description}
                  </p>
                  {idea.items && (
                    <ul className="mt-2 space-y-0.5">
                      {idea.items.map((item, index) => (
                        <li key={index} className="text-gray-600 text-[11px] flex items-center gap-1">
                          <span className="text-pink-500">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
