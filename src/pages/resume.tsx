import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

interface WorkExperience {
  company: string;
  roles: {
    title: string;
    period: string;
    current?: boolean;
  }[];
  description: string[];
  logo?: string;
  website: string;
  location?: string;
}

const workExperience: WorkExperience[] = [
  {
    company: 'UserTesting',
    roles: [
      { title: 'Senior Business Intelligence Analyst', period: 'Oct. 2023 – Present', current: true },
      { title: 'Business Intelligence Analyst', period: 'Feb. 2022 – Oct. 2023' },
      { title: 'Associate Business Analyst', period: 'Dec. 2020 – Feb. 2022' },
    ],
    description: [
      'Serve as primary analytics partner to Sales, Post-Sales, Finance, and Product teams. Translate competing requirements into analytics-ready data models and ensuring stakeholder alignment on metric definitions.',
      'Architect centralized reporting data layer in dbt/Snowflake to eliminate conflicting business logic, cutting data warehousing compute costs 25% and establishing single-source-of-truth definitions used company-wide.',
      'Built automated data quality framework using dbt tests and Tableau-driven alerts, catching upstream issues before they reached stakeholders and saving 20+ hours/month in manual QA.',
      'Own C-suite and Board reporting, including monthly KPI packets synthesizing company performance.',
      'Developed customer health dashboard to support new usage-based pricing model, analyzing historical usage patterns to flag churn risk and upsell targets—contributing to 10%+ YoY improvement in net dollar retention.',
    ],
    logo: '/images/usertesting-logo.png',
    website: 'https://www.usertesting.com',
    location: 'San Francisco, CA',
  },
  {
    company: 'The Walt Disney Company',
    roles: [
      { title: 'Associate Industrial Engineer', period: 'Oct. 2018 – Dec. 2020' },
    ],
    description: [
      'Supported 40+ ride operation teams at Disneyland as a data analyst and operations consultant.',
      'Increased number of guests riding attractions by 500K+ annually through dedicated data analysis and process improvement at high traffic rides and attractions.',
      'Saved team 20+ hours of work per month by developing department\'s first suite of Tableau dashboards powered by SQL queries to consolidate and automate all attraction reporting at Disneyland Resort.',
      'Developed multiple linear regression model using Python to forecast park capacity and influence decisions on setting park hours, supportable attendance, and other strategic priorities during Covid-19 Pandemic.',
    ],
    logo: '/images/disney-logo.png',
    website: 'https://www.disney.com',
    location: 'Anaheim, CA',
  },
  {
    company: 'Seattle Mariners',
    roles: [
      { title: 'Professional Baseball Player', period: 'Jun. 2018 – Sep. 2018' },
    ],
    description: [
      'Drafted by the Seattle Mariners in the 2018 MLB draft and played one season before voluntarily retiring.',
    ],
    logo: '/images/seattle-mariners-logo.png',
    website: 'https://www.mlb.com/mariners',
    location: 'Seattle, WA',
  },
];

const education = [
  {
    school: 'Stanford University',
    degree: 'Bachelor of Science: Management Science and Engineering w/ Minor in Computer Science',
    period: 'Sep. 2014 – Jun. 2018',
    location: 'Stanford, CA',
    logo: '/images/stanford-logo.png',
    achievements: [
      '4-year member of Stanford Baseball team with Pac-12 All-Conference and All-Academic Honors',
    ],
  },
];

const technicalSkills = [
  'SQL', 'dbt', 'Tableau', 'Looker', 'Snowflake', 'BigQuery', 'Excel', 'Python',
  'ChatGPT', 'Cursor', 'Claude Code'
];

const projects = [
  {
    title: 'Dugout Edge – Baseball Team Management Platform',
    year: '2025',
    description: 'Launched a full-stack web application for youth baseball coaches (25+ paying users in first month) to generate optimized lineups and track player statistics across seasons. Developed constraint-based algorithms ensuring equal playing time distribution, position rotation fairness, and statistical tracking for setting lineups throughout the season. Self-taught Next.js, TypeScript, Supabase (PostgreSQL/Auth), Stripe, and Google Analytics using Claude Code as primary development tool.',
    link: 'https://dugoutedge.com',
  },
  {
    title: 'Autonomous Trading Bot',
    year: '2025',
    description: 'Built a fully automated trading system that screens, monitors and executes strategy based on statistical outliers using Python scripts, real-time data streaming and the Charles Schwab API. Built using Cursor to learn about how to use AI coding agents to build practical (and slightly too ambitious) data applications.',
  },
  {
    title: 'Data Engineering Zoomcamp Capstone Project',
    year: '2024',
    description: 'Built cloud-based data pipeline for NCAA D1 Baseball stats, integrating web scraping, data warehousing (BigQuery), dbt transformations, and a Looker dashboard to deliver enhanced college baseball statistics.',
    link: 'https://github.com/bbranton/ncaa-baseball-stats',
  },
];

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Beau Branton</title>
        <meta name="description" content="Professional resume and work experience of Beau Branton" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto py-8 lg:py-16">
              
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Resume</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  7+ years of experience architecting, building and managing data models and business intelligence using the modern data stack (SQL, dbt, Snowflake, Tableau, Python). Proven ability to partner with various business units to impact measurable business outcomes across Product, RevOps, Finance and Operations. Strong desire to learn and apply AI solutions and automations at scale to solve problems with interesting people (and not always with data).
                </p>
                
                {/* Technical Skills */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
                  
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href="/BEAU%20BRANTON%20RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF Resume
                </a>
              </div>

              {/* Work Experience */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Experience</h2>
                
                <div className="space-y-8">
                  {workExperience.map((work, index) => (
                    <div key={index} className="group">
                      <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:shadow-md transition-all duration-200">
                        
                        {/* Company Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start space-x-4 flex-grow">
                            {/* Company Logo */}
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                                {work.logo ? (
                                  <Image 
                                    src={work.logo} 
                                    alt={work.company} 
                                    width={48} 
                                    height={48}
                                    className="w-12 h-12 object-contain"
                                  />
                                ) : (
                                  <span className="text-xl font-bold text-gray-400 dark:text-gray-500">
                                    {work.company.charAt(0)}
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            {/* Company Info */}
                            <div className="flex-grow min-w-0">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                  {work.company}
                                </h3>
                                {work.roles.some(r => r.current) && (
                                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs font-medium px-2 py-1 rounded-full">
                                    Current
                                  </span>
                                )}
                              </div>
                              
                              {work.location && (
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                  {work.location}
                                </p>
                              )}
                              
                              {/* Roles */}
                              <div className="space-y-1 mb-3">
                                {work.roles.map((role, roleIndex) => (
                                  <div key={roleIndex} className="flex items-center space-x-2">
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                                      {role.title}
                                    </span>
                                    {role.period && (
                                      <>
                                        <span className="text-gray-400 dark:text-gray-500">•</span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                          {role.period}
                                        </span>
                                      </>
                                    )}
                                  </div>
                                ))}
                              </div>
                              
                              {/* Company Link */}
                              <a
                                href={work.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors inline-flex items-center"
                              >
                                Visit {work.company} →
                              </a>
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <ul className="space-y-2 mt-4">
                          {work.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex items-start">
                              <span className="text-blue-500 mr-2 mt-1.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Education</h2>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200">
                      <div className="flex items-start space-x-4">
                        {/* School Logo */}
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                            <Image 
                              src={edu.logo} 
                              alt={edu.school} 
                              width={48} 
                              height={48}
                              className="w-12 h-12 object-contain"
                            />
                          </div>
                        </div>
                        
                        {/* School Info */}
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {edu.school}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">
                            {edu.degree}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                            {edu.period} • {edu.location}
                          </p>
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="text-sm text-gray-600 dark:text-gray-400">
                                • {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Projects</h2>

                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                              {project.title}
                            </a>
                          ) : (
                            project.title
                          )}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-4 flex-shrink-0">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

