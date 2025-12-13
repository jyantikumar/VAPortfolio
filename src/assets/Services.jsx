import React, { useState } from 'react';
import { Briefcase, Settings, Globe, Github } from 'lucide-react'; 

const webDevelopmentProjects = [
    {
        title: 'Mobicel: Online Selling Platform',
        description: 'A web-based online selling platform for buying hand-held devices.',
        tags: ['Vanila PHP', 'CSS', 'HTML'], 
        liveLink: null, 
        githubLink: 'https://github.com/jyantikumar/ProductSelling',
    },
    {
        title: 'CILS: CS/IT Lab Scheduler',
        description: 'A web-based lab scheduling system for the CS/IT Laboratory.',
        tags: ['Vanila PHP', 'BootStrap', 'HTML'], 
        liveLink: null,
        githubLink: 'https://github.com/jyantikumar/CILS2024-25',
    },
    {
        title: 'MCU-HSICS: Inventory Management System',
        description: 'A web-based inventory system for the MCU IT Department to efficiently track IT assets.',
        tags: ['PHP', 'HTML/CSS', 'Laravel', 'JavaScript', 'MySql'],
        liveLink: 'https://mcu_hsics.on-forge.com/',
        githubLink: null,
    },
    {
        title: 'Weeekly Portal',
        description: 'A fan portal for the K-pop group Weeekly, featuring their complete discography and member details.',
        tags: ['React JS', 'Tailwind CSS', 'HTML', 'API Integration'],
        liveLink: 'https://jyantikumar.github.io/Wkly/',
        githubLink: 'https://github.com/jyantikumar/Wkly',
    },
    {
        title: 'PHP/Laravel Stories Manager',
        description: 'A full-stack application for keeping track of stories, progress, and updates.',
        tags: ['Laravel', 'PHP', 'MySQL'],
        liveLink: null,
        githubLink: 'https://github.com/jyantikumar/CRUD',
    },
    {
        title: 'MCU Grade Converter',
        description: 'A responsive JavaScript-based grade converter designed for MCU students.',
        tags: ['JavaScript', 'Tailwind CSS', 'HTML'],
        liveLink: 'https://jyantikumar.github.io/grades/',
        githubLink: 'https://github.com/jyantikumar/grades',
    },
    {
        title: 'Savings Calculator',
        description: 'A responsive JavaScript web app that calculates savings interest.',
        tags: ['JavaScript', 'Tailwind CSS', 'HTML'],
        liveLink: 'https://jyantikumar.github.io/Savings/',
        githubLink: 'https://github.com/jyantikumar/Savings',
    },
];

const serviceData = [
    {
        category: 'Web Development (Projects)',
        icon: Briefcase,
        mainDescription: "Building clean, efficient web apps with Laravel and JavaScript, focused on usability and performance.",
        content: webDevelopmentProjects, 
    },
    {
        category: 'Administrative Support & Tools',
        icon: Settings,
        mainDescription: "Providing organized and reliable administrative support to help clients manage tasks efficiently, maintain smooth daily operations, and stay productive. I focus on implementing systems that save time and reduce stress.",
        samplePortfolioLink: 'https://jyanti-va-portfolio.my.canva.site/', 
        content: [
           {
    title: 'Email & Inbox Management System',
    description: 'Organizing, filtering, and responding to emails professionally to keep the client’s inbox under control, establishing a structured filing system (Action, Delegate, Hold, Archive).',
    tools: ['Gmail','Microsoft Outlook'],
    resultMetric: 'Stayed on top of class announcements, assignment deadlines, and professor communications, helping me manage coursework efficiently and avoid missing important tasks.'
},
{
    title: 'File & Cloud Management Structure',
    description: 'Designed and implemented a standardized file structure in Google Drive, including version control and access permissions.',
    tools: ['Google Drive','OneDrive', 'Notion'],
    resultMetric: 'Kept all lecture notes, project files, and study materials organized, making it easier to prepare for exams and complete assignments on time.'
},
{
    title: 'Data Entry & Record Keeping Automation',
    description: 'Accurately inputting and maintaining high-volume client data in spreadsheets and databases, utilizing template formulas for error-checking.',
    tools: ['Microsoft Excel','Google Sheets'],
    resultMetric: 'Tracked grades, project timelines, and research data accurately, helping me monitor my academic progress and stay organized throughout the semester.'
},
{
    title: 'Scheduling & Appointment Coordination',
    description: 'Managing complex calendars, coordinating meetings across multiple time zones, and setting up automated booking systems.',
    tools: ['Google Calendar', 'Microsoft Outlook Calendar', 'Calendly', 'Zoom', 'Microsoft Teams'],
    resultMetric: 'Effectively scheduling personal schedules, project meetings, and classes, improving my time management.'
},
{
    title: 'Expense Tracking',
    description: 'Recording expenses and maintaining simple financial records using structured templates.',
    tools: ['Microsoft Excel','Google Sheets'],
    resultMetric: 'Monitored personal and project-related expenses, helping me manage my budget better and focus on academic priorities without financial distractions.'
}


        ]
    },
];


const Services = () => {
    const [activeTab, setActiveTab] = useState(serviceData[0].category);
    const activeService = serviceData.find(s => s.category === activeTab);
    const activeContent = activeService?.content || [];


    return (
        <section className="relative overflow-hidden bg-gray-900 text-white min-h-screen">
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
            {/* Content */}
            <div className="flex flex-col pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl border-b-4 border-teal-500 inline-block pb-2">
                        Services Offered
                    </h2>
                </div>
                
                {/* Tab Navigation */}
                <div className="flex justify-center mb-10 space-x-4 border-b border-gray-700">
                    {serviceData.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.category;
                        return (
                            <button
                                key={tab.category}
                                onClick={() => setActiveTab(tab.category)}
                                className={`flex items-center space-x-3 py-3 px-6 text-lg font-semibold transition-colors duration-300 rounded-t-lg
                                    ${isActive 
                                        ? 'text-teal-400 border-b-4 border-teal-500 bg-gray-800/50' 
                                        : 'text-gray-400 hover:text-teal-400 hover:border-gray-600 border-b-4 border-transparent'
                                    }`}
                            >
                                <Icon className="w-6 h-6" />
                                <span>{tab.category}</span>
                            </button>
                        );
                    })}
                </div>

                {activeService && (
                    <div className="p-6 mb-10 bg-gray-800 rounded-xl border-l-4 border-teal-500 shadow-xl">
                        <p className="text-lg text-gray-300 mb-4">
                            {activeService.mainDescription}
                        </p>

                        {/* === CANVA PORTFOLIO LINK (Admin Tab Only) === */}
                        {activeService.samplePortfolioLink && activeTab === 'Administrative Support & Tools' && (
                            <a 
                                href={activeService.samplePortfolioLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 text-sm font-bold text-white bg-teal-400 px-5 py-2 rounded-full hover:bg-teal-500 transition-colors duration-200 shadow-lg mt-2"
                            >
                                <Briefcase className="w-4 h-4" />
                                <span>View Sample</span>
                            </a>
                        )}
                        {/* ============================================= */}
                    </div>
                )}

                <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border-t-4 border-teal-500/50">
                    <h3 className="text-3xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-3">
                        {activeTab === 'Web Development (Projects)' ? 'Web Development Projects' : 'Experience & Tools'}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activeContent.map((item, index) => {
                            const tagsToDisplay = item.tags || item.tools; 
                            const isWebDev = activeTab === 'Web Development (Projects)';
                            
                            return (
                                <div 
                                    key={index}
                                    className="p-6 bg-gray-700 rounded-xl shadow-lg border-l-4 border-teal-900 hover:shadow-teal-500/30 transition-shadow duration-300 flex flex-col text-teal-800 justify-between"
                                >
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-3">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-300 mb-4 text-sm">
                                            {item.description}
                                        </p>
                                        
                                        {/* === IMPACT / RESULT METRIC (Admin Tab Only) === */}
                                        {!isWebDev && item.resultMetric && (
                                            <div className="p-3 bg-teal-900/40 rounded-lg my-4 border border-teal-500">
                                                <span className="text-sm font-bold text-teal-500 block mb-1">
                                                    Impact/Result:
                                                </span>
                                                <p className="text-sm text-white italic">
                                                    {item.resultMetric}
                                                </p>
                                            </div>
                                        )}
                                        {/* ============================================= */}


                                        <div className="mt-4 mb-6">
                                            <span className="text-sm font-bold text-teal-300 block mb-2">
                                                {isWebDev ? 'Tech Stack:' : 'Key Tools:'}
                                            </span>
                                            <div className="flex flex-wrap gap-2">
                                                {tagsToDisplay && tagsToDisplay.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 text-xs bg-teal-600/30 rounded-full text-teal-200 font-medium"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* === PROJECT LINKS (Web Dev Tab Only) === */}
                                    {isWebDev && (item.liveLink || item.githubLink) && (
                                        <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-600">
                                            {item.liveLink && (
                                                <a 
                                                    href={item.liveLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="flex items-center space-x-2 text-sm font-semibold text-white bg-teal-600 px-4 py-2 rounded-full hover:bg-teal-500 transition-colors duration-200 shadow-md"
                                                >
                                                    <Globe className="w-4 h-4" />
                                                    <span>Live Demo</span>
                                                </a>
                                            )}
                                            {item.githubLink && (
                                                <a 
                                                    href={item.githubLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="flex items-center space-x-2 text-sm font-semibold text-gray-300 bg-gray-600 px-4 py-2 rounded-full hover:bg-gray-500 transition-colors duration-200 shadow-md"
                                                >
                                                    <Github className="w-4 h-4" />
                                                    <span>GitHub</span>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;