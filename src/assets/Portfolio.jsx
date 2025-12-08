import React from 'react';
import { ExternalLink, Github } from 'lucide-react'; 

const projectData = [
   {id: 1,
    title: 'Mobicel:  Online Selling Platform',
    description: 'A web-based online selling platform for buying hand-held devices',
    tags: ['Vanila PHP', 'CSS','HTML'],
    liveLink:  null,
    githubLink: 'https://github.com/jyantikumar/ProductSelling',
  },
  {
  id: 2,
    title: 'CILS: CS/IT Lab Scheduler',
    description: 'A web-based lab scheduling system for the THE CS/IT Laboratory',
    tags: ['Vanila PHP', 'BootStrap','HTML'],
    liveLink:  null,
    githubLink: 'https://github.com/jyantikumar/CILS2024-25',
},
{
    id: 3,
    title: 'MCU-HSICS: Hardware and Software Inventory Management System for MCU-ITD',
    description: 'A web-based inventory system for the MCU IT Department to efficiently track IT assets.',
    tags: ['PHP', 'HTML/CSS', 'Laravel', 'JavaScript', 'MySql'],
    liveLink: 'https://mcu_hsics.on-forge.com/',
    githubLink: null,

  },
  {
    id: 4,
    title: 'Weeekly Portal',
    description: 'A fan portal for the K-pop group Weeekly, featuring their complete discography, music videos, and detailed information about the members and releases.',
    tags: ['React JS', 'Tailwind CSS','HTML', 'API Integration'],
    liveLink:  'https://jyantikumar.github.io/Wkly/',
    githubLink: 'https://github.com/jyantikumar/Wkly',
  },
  {
    id: 5,
    title: 'PHP/Laravel Stories Manager',
    description: 'A full-stack application for keeping track of stories, progress, and updates.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    liveLink: null,
    githubLink: 'https://github.com/jyantikumar/CRUD',
  },
   {
    id: 6,
    title: 'MCU Grade Converter',
    description: 'A responsive JavaScript-based grade converter designed for MCU students.',
    tags: ['JavaScript', 'Tailwind CSS','HTML'],
    liveLink:  'https://jyantikumar.github.io/grades/',
    githubLink: 'https://github.com/jyantikumar/grades',
  },
  {
    id: 7,
    title: 'Savings Calculator',
    description: 'A responsive JavaScript web app that calculates savings interest, allowing users to compute daily, monthly, or annual interest for their deposits.',
    tags: ['JavaScript', 'Tailwind CSS','HTML'],
    liveLink:  'https://jyantikumar.github.io/Savings/',
    githubLink: 'https://github.com/jyantikumar/Savings',
  },
  {
    id: 8,
    title: 'ExpenseMate: Personal Expense Tracker',
    description: 'A Java console program for managing personal expenses through an easy-to-use text-based interface.',
    tags: ['Java'],
    liveLink: null,
    githubLink: 'https://github.com/jyantikumar/ExpenseMate',
  },
   {
    id: 9,
    title: 'Hundo',
    description: 'a user-friendly Bingo card generator called HUNDO using C# and .Net, allowing users to generate randomized card content that contains chemical compounds.',
    tags: ['.Net', 'C#','Desktop App' ],
    liveLink: null,
    githubLink: 'https://github.com/jyantikumar/IMPROVED-HUNDO',
  },
];

const Portfolio = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white min-h-screen pt-24 pb-24">
     <div 
        className="absolute inset-x-0 bottom-0 h-1/4 opacity-20"
        style={{ backgroundImage: 'linear-gradient(to top, rgba(16, 185, 129, 0.1), transparent), repeating-linear-gradient(to bottom, #1f2937, #1f2937 1px, transparent 1px, transparent 40px)', backgroundSize: '100% 40px' }}
      ></div>
 <div className="absolute inset-0 z-0 opacity-40">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 w-full h-auto">
          <defs>
            <linearGradient id="gradient-mountains" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#4c1d95', stopOpacity: 0.8}} />
              <stop offset="50%" style={{stopColor: '#06b6d4', stopOpacity: 0.8}} />
              <stop offset="100%" style={{stopColor: '#10b981', stopOpacity: 0.8}} />
            </linearGradient>
          </defs>
          <path fill="url(#gradient-mountains)" fillOpacity="0.1" d="M0,160L48,165.3C96,171,192,181,288,186.7C384,192,480,192,576,176C672,160,768,128,864,128C960,128,1056,160,1152,181.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="flex flex-col pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl border-b-4 border-teal-500 inline-block pb-2">
            My Portfolio
          </h2>
        </div>
        
         {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project) => (
            <div 
              key={project.id}
              className="p-8 bg-gray-800 rounded-2xl shadow-2xl flex flex-col justify-between border-t-4 border-teal-500/50 transition-shadow duration-300 hover:shadow-teal-500/50"
            >
              <div>
                <h3 className="text-2xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-2 bg-gray-700 rounded-full text-base font-medium text-white transition duration-200 hover:bg-teal-600 hover:text-white transform hover:scale-105 shadow-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-700">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-white bg-teal-600 px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-white border border-gray-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition duration-200"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;