import React, { useState } from 'react';
import { 
    SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiBootstrap, 
    SiPhp, SiLaravel, SiMysql, 
    SiCplusplus, 
    SiPython, SiKotlin, SiVuedotjs, SiGit, SiGithub, 
    SiNotion, SiCanva, SiGoogle, SiZoom, 
    SiCalendly as CalendlyIcon, 
    SiGmail, 
    SiSlack,
    SiDropbox,
    SiDiscord, 

} from 'react-icons/si';
import { FaLaptopCode, FaTools, FaFileWord, FaFileExcel, FaFilePowerpoint, FaBookOpen } from 'react-icons/fa'; 

const developmentSkills = [
    {
        category: 'Front-End Development',
        skills: [
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'HTML/CSS', icon: [SiHtml5, SiCss3], color: '#E34F26' },
            { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
        ],
    },
    {
        category: 'Back-End & Database',
        skills: [
            { name: 'PHP', icon: SiPhp, color: '#777BB4' },
            { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        ],
    },
    {
        category: 'Other Languages',
        skills: [
            { name: 'C++', icon: SiCplusplus, color: '#00599C' }, 
            { name:'Python', icon: SiPython, color: '#3776AB' },
            { name:'Kotlin', icon: SiKotlin, color: '#7F52FF' },
            { name:'VB.NET', icon: SiVuedotjs, color: '#4FC08D' } 
        ],
    },
    {
        category: 'Tools',
        skills: [
            { name: 'Xampp', icon: null, color: '#F06631' }, 
            { name:'Visual Studio Code', icon: null, color: '#007ACC' }, 
            { name:'Git/GitHub', icon: SiGithub, color: '#000000' },
        ],
    },
];

const administrativeSkills = [
    {
        category: 'Calendars',
        skills: [
            { name: 'Google Calendar', icon: SiGoogle, color: '#4285F4' }, 
            { name: 'Notion Calendar', icon: SiNotion, color: '#000000' },
            { name: 'Calendly', icon: CalendlyIcon, color: '#00BFFF' },
        ],
    },
    {
        category: 'Communication',
        skills: [
            { name: 'Gmail', icon: SiGmail, color: '#D14836' }, 
            { name: 'Slack', icon: SiSlack, color: '#4A154B' },
            { name: 'Zoom', icon: SiZoom, color: '#2D8CFF' },
            { name: 'Discord', icon: SiDiscord, color: '#5865F2' } 
        ],
    },
    {
        category: 'File Management & Organization',
        skills: [
            { name: 'Dropbox', icon: SiDropbox, color: '#0061FF' },
            { name: 'Google Drive', icon: SiGoogle, color: '#4285F4' }, // <-- NEW
            { name: 'Notion', icon: SiNotion, color: '#000000' },
        ],
    },
    {
        category: 'Task Management',
        skills: [
            { name: 'Notion', icon: SiNotion, color: '#000000' },
        ],
    },
    {
        category: 'Office, Document & Note Taking Tools', // Renamed category
        skills: [
            { name: 'Google Docs', icon: SiGoogle, color: '#4285F4' },
            { name: 'Google Sheets', icon: SiGoogle, color: '#0F9D58' },
            { name: 'MS Word', icon: FaFileWord, color: '#2B579A' },       // <-- NEW
            { name: 'MS Excel', icon: FaFileExcel, color: '#217346' },     // <-- NEW
            { name: 'MS PowerPoint', icon: FaFilePowerpoint, color: '#D24726' }, // <-- NEW
            { name: 'Notion', icon: SiNotion, color: '#000000' },

        ],
    },
    {
        category: 'Design', 
        skills: [
            { name: 'Canva (Design)', icon: SiCanva, color: '#00C4CC' },
        ],
    },

];
const tabs = [
    { name: 'Administrative', data: administrativeSkills, icon: FaTools },
        { name: 'Development', data: developmentSkills, icon: FaLaptopCode },

];


const SkillIcon = ({ icon: Icon, name, color, isCombined = false }) => {
    // Check if Icon is a function/component before assigning size/margin
    const hasIcon = typeof Icon === 'function'; 
    const iconSize = isCombined ? 32 : 36;
    const iconMargin = isCombined ? 'mr-1' : 'mr-2';

    return (
        <div 
            className="flex items-center justify-center p-4 bg-gray-700 rounded-xl text-base font-medium text-white transition duration-200 hover:bg-teal-600 hover:text-white transform hover:scale-105 shadow-lg group"
            title={name} 
        >
            {/* Conditional rendering for the icon */}
            {hasIcon && (
                <div className={`transition duration-200 group-hover:text-white ${iconMargin}`} style={{ color: color }}>
                    <Icon size={iconSize} /> 
                </div>
            )}
            
            {/* Render a placeholder icon/name if no icon exists */}
            {!hasIcon && (
                 <div className="flex items-center justify-center h-9 w-9 border-2 border-dashed border-gray-500 rounded-full mr-2">
                    <span className="text-xs text-gray-400 font-bold">?</span>
                 </div>
            )}
            
            <span className="sr-only lg:not-sr-only text-sm lg:text-base font-semibold group-hover:text-white">{name}</span>
        </div>
    );
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState('Development');

    const currentSkillData = tabs.find(tab => tab.name === activeTab).data;

    // --- START: Removed the old TabButton component definition ---
    /*
    const TabButton = ({ name, icon: Icon }) => {
        const isActive = activeTab === name;
        return (
            <button
                onClick={() => setActiveTab(name)}
                className={`flex-1 flex items-center justify-center py-3 px-4 text-lg font-bold transition-all duration-300 rounded-t-lg
                    ${isActive 
                        ? 'text-white bg-gray-800 border-b-4 border-teal-500' 
                        : 'text-gray-400 bg-gray-700 hover:text-teal-400 hover:bg-gray-600 border-b-4 border-transparent'
                    }`}
            >
                <Icon className="mr-2" size={20} />
                {name}
            </button>
        );
    };
    */
    // --- END: Removed the old TabButton component definition ---

    return (
        <section className="relative overflow-hidden bg-gray-900 text-white min-h-screen">
            {/* Background Grids and Waves remain... */}
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
                <div className="text-center mb-10">
                    <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl border-b-4 border-teal-500 inline-block pb-2">
                        My Skills
                    </h2>
                </div>

                {/* --- START: UPDATED TAB NAVIGATION --- */}
                <div className="flex justify-center mb-10 space-x-4 border-b border-gray-700">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.name; // tab.name is the category/tab identifier
                        return (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`flex items-center space-x-3 py-3 px-6 text-lg font-semibold transition-colors duration-300 rounded-t-lg
                                    ${isActive 
                                        ? 'text-teal-400 border-b-4 border-teal-500 bg-gray-800/50' 
                                        : 'text-gray-400 hover:text-teal-400 hover:border-gray-600 border-b-4 border-transparent'
                                    }`}
                            >
                                <Icon className="w-6 h-6" />
                                <span>{tab.name}</span>
                            </button>
                        );
                    })}
                </div>
                {/* --- END: UPDATED TAB NAVIGATION --- */}
                
                {/* SKILLS CONTENT: Display skills based on activeTab */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentSkillData.map((categoryGroup) => (
                    <div 
                        key={categoryGroup.category}
                        className="p-6 bg-gray-800 rounded-2xl shadow-2xl border-t-4 border-teal-500/50 transition-shadow duration-300 hover:shadow-teal-500/50 col-span-1"
                    >
                        <h3 className="text-xl font-bold text-teal-400 mb-6 border-b border-gray-700 pb-3">
                            {categoryGroup.category}
                        </h3>
                        
                        <div className="grid grid-cols-2 gap-3">
                            {categoryGroup.skills.map((skill) => {
                                // 1. Check if it's a combined skill like HTML/CSS
                                if (Array.isArray(skill.icon)) {
                                    // Destructure the icons into variables starting with an uppercase letter
                                    const [Icon1, Icon2] = skill.icon; 
                                    
                                    return (
                                        <div 
                                            key={skill.name}
                                            className="flex items-center justify-center p-4 bg-gray-700 rounded-xl text-base font-medium text-white transition duration-200 hover:bg-teal-600 hover:text-white transform hover:scale-105 shadow-lg group"
                                            title={skill.name}
                                        >
                                            <div className="flex items-center justify-center">
                                                {/* Rendering combined icons using the new uppercase variables */}
                                                <div className={`transition duration-200 group-hover:text-white mr-1`} style={{ color: skill.color }}>
                                                    <Icon1 size={32} /> 
                                                </div>
                                                <div className={`transition duration-200 group-hover:text-white mr-2`} style={{ color: skill.color }}>
                                                    <Icon2 size={32} /> 
                                                </div>
                                            </div>
                                            <span className="sr-only lg:not-sr-only text-sm lg:text-base font-semibold group-hover:text-white">{skill.name}</span>
                                        </div>
                                    );
                                }
                                // 2. Single icon skill
                                return <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} color={skill.color} />;
                            })}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;