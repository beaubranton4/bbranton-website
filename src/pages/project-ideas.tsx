import { useState, useEffect } from 'react';
import Head from 'next/head';

// Define types for our project ideas
interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  category: string;
  votes: number;
}

// Group project ideas by category
interface ProjectsByCategory {
  [key: string]: ProjectIdea[];
}

export default function ProjectIdeas() {
  // State for project ideas and votes
  const [projectIdeas, setProjectIdeas] = useState<ProjectIdea[]>([]);
  const [votedProjects, setVotedProjects] = useState<{[key: string]: 'up' | 'down' | null}>({});

  // Load project ideas and votes from localStorage on component mount
  useEffect(() => {
    // Initialize with our project ideas
    const initialProjectIdeas: ProjectIdea[] = [
      // Software Products
      { id: 'ai-todo', title: 'AI Powered To-Do List', description: 'A smart to-do list that uses AI to prioritize and suggest tasks.', category: 'Software Products', votes: 0 },
      { id: 'posture-tool', title: 'Posture Tool & Solutions', description: 'Software that reminds and helps users maintain good posture while working.', category: 'Software Products', votes: 0 },
      { id: 'tiktok-microsaas', title: 'TikTok Marketable MicroSaaS', description: 'Simple one-task software product that can be marketed on TikTok.', category: 'Software Products', votes: 0 },
      { id: 'ghost-chat', title: 'Ghost Chat', description: 'Generate fake screenshots of conversations for social media.', category: 'Software Products', votes: 0 },
      { id: 'couple-financial', title: 'Couple Financial Planner', description: 'App to help couples manage finances together.', category: 'Software Products', votes: 0 },
      { id: 'workout-app', title: 'Workout App with GPT & Lock Screen', description: 'Fitness app with AI coaching and lock screen widgets.', category: 'Software Products', votes: 0 },
      { id: 'algo-trading', title: 'Algo Trading Bot', description: 'Automated trading bot for cryptocurrency or stocks.', category: 'Software Products', votes: 0 },
      { id: 'catholic-app', title: 'Catholicism/Confessional App', description: 'App for Catholics to track prayers, confessions, and religious practices.', category: 'Software Products', votes: 0 },
      
      // Physical Products
      { id: 'hat-brand', title: 'Hat Brand', description: 'Create a hat brand with unique designs and test concepts.', category: 'Physical Products', votes: 0 },
      { id: 'nano-banana', title: 'Nano Banana Wrapper', description: 'TikTok marketable small product for bananas.', category: 'Physical Products', votes: 0 },
      { id: 'workout-hats', title: 'Better Workout Hats', description: 'Specialized hats designed for workouts and sports.', category: 'Physical Products', votes: 0 },
      { id: 'pasties-guys', title: 'Pasties for Guys', description: 'Nipple covers designed for men.', category: 'Physical Products', votes: 0 },
      { id: 'fun-workout-gear', title: 'Fun Workout Gear', description: 'Workout gear with fun designs that are still performative.', category: 'Physical Products', votes: 0 },
      { id: 'blind-box', title: 'Blind Box', description: 'Mystery boxes with collectible items inside.', category: 'Physical Products', votes: 0 },
      { id: 'seaweed', title: 'Seaweed Products', description: 'Sustainable seaweed-based food or other products.', category: 'Physical Products', votes: 0 },
      { id: 'dried-fruits', title: 'Dried Fruits', description: 'Premium dried fruit products with unique flavors.', category: 'Physical Products', votes: 0 },
      { id: 'paint-sets', title: 'Paint by Number Sets', description: 'Custom paint by number kits and prints.', category: 'Physical Products', votes: 0 },
      { id: 'capkit', title: 'Capkit', description: 'Product for transporting hats safely.', category: 'Physical Products', votes: 0 },
      { id: 'photo-cutouts', title: 'Cutouts for Photos', description: 'Physical props and cutouts for photography.', category: 'Physical Products', votes: 0 },
      
      // Validation Projects
      { id: 'validate-physical', title: 'Validate Physical Products with Ads', description: 'Learn to validate demand by running paid ads on non-existent physical products.', category: 'Validation Projects', votes: 0 },
      { id: 'validate-software', title: 'Validate Software with UGC', description: 'Learn to validate demand by running UGC TikToks for non-existent digital software products.', category: 'Validation Projects', votes: 0 },
      { id: 'fake-brands', title: 'Fake Brand Social Media', description: 'Create social media accounts for different brands selling products that don\'t exist yet to test demand.', category: 'Validation Projects', votes: 0 },
      
      // In-Person Businesses
      { id: 'in-person', title: 'Real In-Person Business', description: 'Focus on building a traditional in-person business.', category: 'In-Person Businesses', votes: 0 },
      { id: 'social-club', title: 'Social Club', description: 'Create an in-person community/social club for people who miss being part of a community.', category: 'In-Person Businesses', votes: 0 },
      { id: 'golf-sim', title: 'Golf Simulator Business', description: 'Open a golf simulator facility.', category: 'In-Person Businesses', votes: 0 },
      { id: 'medspa', title: 'Medspa', description: 'Open a medical spa offering cosmetic treatments.', category: 'In-Person Businesses', votes: 0 },
      { id: 'bento-boxes', title: 'Bento Box Shop', description: 'Restaurant specializing in bento boxes.', category: 'In-Person Businesses', votes: 0 },
      { id: 'sandwich-shop', title: 'Sandwich Shop', description: 'Open a specialty sandwich shop.', category: 'In-Person Businesses', votes: 0 },
      { id: 'analog-store', title: 'Analog Store', description: 'A store focused on non-digital, analog products like physical cameras and real phones.', category: 'In-Person Businesses', votes: 0 },
      
      // Social Media Brands
      { id: 'personal-finance', title: 'Personal Finance', description: 'Create a personal finance focused social media brand.', category: 'Social Media Brands', votes: 0 },
      { id: 'vertical-farming', title: 'Vertical Farming', description: 'Social media brand about vertical farming, selling kits and tutorials.', category: 'Social Media Brands', votes: 0 },
      { id: 'automated-social', title: 'Automated Social Concept', description: 'Start with automated social concept that can tie to commonplace product or service.', category: 'Social Media Brands', votes: 0 },
      { id: 'budget-travel', title: 'Travel on a Budget', description: 'Social media brand focused on budget travel tips and guides.', category: 'Social Media Brands', votes: 0 },
      { id: 'funny-character', title: 'Cute & Funny Character Brand', description: 'Create a cute and funny character and build a brand around it.', category: 'Social Media Brands', votes: 0 },
      { id: 'funny-social', title: 'Funny Social Media Channel', description: 'Create a humorous social media channel with viral potential.', category: 'Social Media Brands', votes: 0 },
      
      // Marketplaces & Services
      { id: 'referral-marketplace', title: 'Referral Marketplace', description: 'Build a marketplace for referrals (like JCC).', category: 'Marketplaces & Services', votes: 0 },
      { id: 'pintrade-marketplace', title: 'Pin Trading Marketplace', description: 'Marketplace app for trading collectible pins.', category: 'Marketplaces & Services', votes: 0 },
      { id: 'data-viz', title: 'Data Visualization for Big Business', description: 'Create data visualization tools for large businesses.', category: 'Marketplaces & Services', votes: 0 },
      { id: 'analytics-consultancy', title: 'Data Analytics Consultancy', description: 'Productized service offering data analytics for Salesforce users.', category: 'Marketplaces & Services', votes: 0 },
      
      // Existing Projects
      { id: 'wiffleball-league', title: 'Wiffleball League', description: 'Organize and run a wiffleball league.', category: 'Existing Projects', votes: 0 },
      { id: 'dugout-edge', title: 'Dugout Edge', description: 'Continue developing the baseball/softball tools platform.', category: 'Existing Projects', votes: 0 },
      { id: 'startup-seeds', title: 'Startup Seeds', description: 'Further develop the platform for summarizing business ideas from podcasts.', category: 'Existing Projects', votes: 0 },
      { id: 'business-scraper', title: 'Business Listing Scraper', description: 'Build a scraper for businesses being listed for more than $5M.', category: 'Existing Projects', votes: 0 },
      { id: 'meta-needles', title: 'Meta Needles Website', description: 'Help rebuild the Meta Needles website.', category: 'Existing Projects', votes: 0 },
    ];

    // Try to load saved project ideas from localStorage
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

  // Save project ideas and votes to localStorage when they change
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

  // Handle voting
  const handleVote = (id: string, direction: 'up' | 'down') => {
    // Check if user has already voted on this project
    const currentVote = votedProjects[id];
    
    // Update the voted projects state
    const newVotedProjects = { ...votedProjects };
    
    // Update project votes
    const updatedProjects = projectIdeas.map(project => {
      if (project.id === id) {
        let voteChange = 0;
        
        if (currentVote === direction) {
          // User is clicking the same button again, remove their vote
          voteChange = direction === 'up' ? -1 : 1;
          newVotedProjects[id] = null;
        } else if (currentVote === null) {
          // User hasn't voted yet
          voteChange = direction === 'up' ? 1 : -1;
          newVotedProjects[id] = direction;
        } else {
          // User is changing their vote
          voteChange = direction === 'up' ? 2 : -2; // +2 for up (removing down and adding up), -2 for down
          newVotedProjects[id] = direction;
        }
        
        return { ...project, votes: project.votes + voteChange };
      }
      return project;
    });
    
    setVotedProjects(newVotedProjects);
    setProjectIdeas(updatedProjects);
  };

  // Group projects by category
  const projectsByCategory: ProjectsByCategory = projectIdeas.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as ProjectsByCategory);

  // Sort categories by name
  const sortedCategories = Object.keys(projectsByCategory).sort();

  return (
    <>
      <Head>
        <title>Project Ideas | Beau Branton</title>
        <meta name="description" content="Project ideas and concepts I'm considering building" />
      </Head>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Project Ideas</h1>
        <p className="text-xl mb-12">
          These are projects I'm considering building. Vote on the ones you'd like to see me work on next!
        </p>

        <div className="space-y-16">
          {sortedCategories.map(category => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                {category}
              </h2>
              
              <div className="space-y-6">
                {projectsByCategory[category]
                  .sort((a, b) => b.votes - a.votes) // Sort by votes (highest first)
                  .map(project => (
                    <div key={project.id} className="flex items-start gap-4">
                      <div className="flex flex-col items-center space-y-1 pt-1">
                        <button 
                          onClick={() => handleVote(project.id, 'up')}
                          className={`p-1 rounded-full ${
                            votedProjects[project.id] === 'up' 
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          aria-label="Upvote"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </button>
                        
                        <span className="font-medium text-lg">
                          {project.votes}
                        </span>
                        
                        <button 
                          onClick={() => handleVote(project.id, 'down')}
                          className={`p-1 rounded-full ${
                            votedProjects[project.id] === 'down' 
                              ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400' 
                              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                          aria-label="Downvote"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Have a project idea for me?</h2>
          <p className="mb-4">
            If you have a suggestion for a project I should work on, feel free to reach out!
          </p>
          <a href="mailto:contact@beaubranton.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
            Send me your idea →
          </a>
        </div>
      </div>
    </>
  );
}
