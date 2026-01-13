import { useState, useEffect } from 'react';
import Head from 'next/head';

interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  category: string;
  votes: number;
}

interface ProjectsByCategory {
  [key: string]: ProjectIdea[];
}

export default function ProjectIdeas() {
  const [projectIdeas, setProjectIdeas] = useState<ProjectIdea[]>([]);
  const [votedProjects, setVotedProjects] = useState<{[key: string]: 'up' | 'down' | null}>({});

  useEffect(() => {
    const initialProjectIdeas: ProjectIdea[] = [
      { id: 'ai-todo', title: 'AI Powered To-Do List', description: 'A smart to-do list that uses AI to prioritize and suggest tasks.', category: 'Software Products', votes: 0 },
      { id: 'posture-tool', title: 'Posture Tool & Solutions', description: 'Software that reminds and helps users maintain good posture while working.', category: 'Software Products', votes: 0 },
      { id: 'tiktok-microsaas', title: 'TikTok Marketable MicroSaaS', description: 'Simple one-task software product that can be marketed on TikTok.', category: 'Software Products', votes: 0 },
      { id: 'hat-brand', title: 'Hat Brand', description: 'Create a hat brand with unique designs and test concepts.', category: 'Physical Products', votes: 0 },
      { id: 'workout-hats', title: 'Better Workout Hats', description: 'Specialized hats designed for workouts and sports.', category: 'Physical Products', votes: 0 },
      { id: 'social-club', title: 'Social Club', description: 'Create an in-person community/social club for people who miss being part of a community.', category: 'In-Person Businesses', votes: 0 },
      { id: 'golf-sim', title: 'Golf Simulator Business', description: 'Open a golf simulator facility.', category: 'In-Person Businesses', votes: 0 },
      { id: 'personal-finance', title: 'Personal Finance', description: 'Create a personal finance focused social media brand.', category: 'Social Media Brands', votes: 0 },
      { id: 'funny-character', title: 'Cute & Funny Character Brand', description: 'Create a cute and funny character and build a brand around it.', category: 'Social Media Brands', votes: 0 },
      { id: 'dugout-edge', title: 'Dugout Edge', description: 'Continue developing the baseball/softball tools platform.', category: 'Existing Projects', votes: 0 },
      { id: 'startup-seeds', title: 'Startup Seeds', description: 'Further develop the platform for summarizing business ideas from podcasts.', category: 'Existing Projects', votes: 0 },
    ];

    const savedProjectIdeas = localStorage.getItem('projectIdeas');
    const savedVotes = localStorage.getItem('votedProjects');
    
    if (savedProjectIdeas) {
      setProjectIdeas(JSON.parse(savedProjectIdeas));
    } else {
      setProjectIdeas(initialProjectIdeas);
    }
    
    if (savedVotes) {
      setVotedProjects(JSON.parse(savedVotes));
    }
  }, []);

  useEffect(() => {
    if (projectIdeas.length > 0) {
      localStorage.setItem('projectIdeas', JSON.stringify(projectIdeas));
    }
  }, [projectIdeas]);

  useEffect(() => {
    if (Object.keys(votedProjects).length > 0) {
      localStorage.setItem('votedProjects', JSON.stringify(votedProjects));
    }
  }, [votedProjects]);

  const handleVote = (id: string, direction: 'up' | 'down') => {
    const currentVote = votedProjects[id];
    const newVotedProjects = { ...votedProjects };
    
    const updatedProjects = projectIdeas.map(project => {
      if (project.id === id) {
        let voteChange = 0;
        
        if (currentVote === direction) {
          voteChange = direction === 'up' ? -1 : 1;
          newVotedProjects[id] = null;
        } else if (currentVote === null || currentVote === undefined) {
          voteChange = direction === 'up' ? 1 : -1;
          newVotedProjects[id] = direction;
        } else {
          voteChange = direction === 'up' ? 2 : -2;
          newVotedProjects[id] = direction;
        }
        
        return { ...project, votes: project.votes + voteChange };
      }
      return project;
    });
    
    setVotedProjects(newVotedProjects);
    setProjectIdeas(updatedProjects);
  };

  const projectsByCategory: ProjectsByCategory = projectIdeas.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as ProjectsByCategory);

  const sortedCategories = Object.keys(projectsByCategory).sort();

  return (
    <>
      <Head>
        <title>Project Ideas | Beau Branton</title>
        <meta name="description" content="Project ideas and concepts I'm considering building" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-2xl font-bold mb-4 text-cyan-400"
          style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif", fontSize: '14px', lineHeight: '1.8' }}
        >
          PROJECT IDEAS
        </h1>
        <p className="text-gray-400 mb-10">
          These are projects I&apos;m considering building. Vote on the ones you&apos;d like to see me work on next!
        </p>

        <div className="space-y-8">
          {sortedCategories.map(category => (
            <section key={category} className="arcade-card p-5">
              <h2 className="text-lg font-bold mb-4 text-cyan-400 pb-2 border-b border-gray-800">
                {category}
              </h2>
              
              <div className="space-y-4">
                {projectsByCategory[category]
                  .sort((a, b) => b.votes - a.votes)
                  .map(project => (
                    <div key={project.id} className="flex items-start gap-4">
                      <div className="flex flex-col items-center space-y-1">
                        <button 
                          onClick={() => handleVote(project.id, 'up')}
                          className={`p-1 transition-colors ${
                            votedProjects[project.id] === 'up' 
                              ? 'text-cyan-400' 
                              : 'text-gray-600 hover:text-cyan-400'
                          }`}
                          aria-label="Upvote"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </button>
                        
                        <span className={`font-medium text-sm ${
                          project.votes > 0 ? 'text-cyan-400' : project.votes < 0 ? 'text-pink-400' : 'text-gray-500'
                        }`}>
                          {project.votes}
                        </span>
                        
                        <button 
                          onClick={() => handleVote(project.id, 'down')}
                          className={`p-1 transition-colors ${
                            votedProjects[project.id] === 'down' 
                              ? 'text-pink-400' 
                              : 'text-gray-600 hover:text-pink-400'
                          }`}
                          aria-label="Downvote"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-white font-semibold text-sm">{project.title}</h3>
                        <p className="text-gray-500 text-xs">{project.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>
        
        <div className="mt-10 arcade-card p-5">
          <h2 className="text-lg font-bold mb-2 text-pink-400">Have an idea for me?</h2>
          <p className="text-gray-500 text-sm mb-3">
            If you have a suggestion for a project I should work on, reach out!
          </p>
          <a href="mailto:contact@beaubranton.com" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm">
            Send me your idea →
          </a>
        </div>
      </div>
    </>
  );
}
