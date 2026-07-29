import React from 'react';
import { skillsData } from '../data/portfolioData';
import { FaBrain, FaPalette, FaCode, FaServer, FaWrench, FaUsers, FaCheckCircle, FaStar } from 'react-icons/fa';

const iconMap = {
  Brain: FaBrain,
  Palette: FaPalette,
  Code: FaCode,
  Server: FaServer,
  Wrench: FaWrench,
  Users: FaUsers,
};

const categoryStyles = {
  aiTools: {
    badgeBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    iconBg: 'bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-indigo-500/30',
    borderHover: 'hover:border-indigo-500/60 hover:shadow-indigo-500/10',
    glowColor: 'indigo',
    pillHover: 'hover:bg-indigo-600 hover:border-indigo-500 hover:text-white',
  },
  design: {
    badgeBg: 'bg-pink-500/10 text-pink-300 border-pink-500/30',
    iconBg: 'bg-gradient-to-tr from-pink-600 to-rose-500 text-white shadow-pink-500/30',
    borderHover: 'hover:border-pink-500/60 hover:shadow-pink-500/10',
    glowColor: 'pink',
    pillHover: 'hover:bg-pink-600 hover:border-pink-500 hover:text-white',
  },
  frontend: {
    badgeBg: 'bg-teal-500/10 text-teal-300 border-teal-500/30',
    iconBg: 'bg-gradient-to-tr from-teal-600 to-emerald-500 text-white shadow-teal-500/30',
    borderHover: 'hover:border-teal-500/60 hover:shadow-teal-500/10',
    glowColor: 'teal',
    pillHover: 'hover:bg-teal-600 hover:border-teal-500 hover:text-white',
  },
  backend: {
    badgeBg: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    iconBg: 'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-blue-500/30',
    borderHover: 'hover:border-blue-500/60 hover:shadow-blue-500/10',
    glowColor: 'blue',
    pillHover: 'hover:bg-blue-600 hover:border-blue-500 hover:text-white',
  },
  tools: {
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    iconBg: 'bg-gradient-to-tr from-amber-500 to-orange-600 text-white shadow-amber-500/30',
    borderHover: 'hover:border-amber-500/60 hover:shadow-amber-500/10',
    glowColor: 'amber',
    pillHover: 'hover:bg-amber-600 hover:border-amber-500 hover:text-white',
  },
  softSkills: {
    badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    iconBg: 'bg-gradient-to-tr from-purple-600 to-violet-600 text-white shadow-purple-500/30',
    borderHover: 'hover:border-purple-500/60 hover:shadow-purple-500/10',
    glowColor: 'purple',
    pillHover: 'hover:bg-purple-600 hover:border-purple-500 hover:text-white',
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-300 px-4 py-1.5 rounded-full border border-indigo-500/30 mb-3 shadow-sm">
            <FaStar className="text-indigo-400 text-xs" /> Specialized Skill Matrix
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white tracking-tight">
            Skills & AI Ecosystem
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Mastery in UI/UX Design, Modern Frontend Frameworks, and Cutting-edge AI Developer Tools.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Object.entries(skillsData).map(([key, group]) => {
            const IconComponent = iconMap[group.icon] || FaCode;
            const style = categoryStyles[key] || categoryStyles.frontend;
            const isAiGroup = key === 'aiTools';

            return (
              <div
                key={key}
                className={`relative bg-gray-900/80 backdrop-blur-md rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-800 ${style.borderHover} hover:-translate-y-2 group shimmer-effect`}
              >
                {/* Glowing top line indicator */}
                {isAiGroup && (
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 rounded-full"></div>
                )}

                <div className="flex items-center space-x-4 mb-6">
                  {/* Icon Box */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${style.iconBg}`}
                  >
                    <IconComponent />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-200">
                      {group.title}
                    </h3>
                    {isAiGroup ? (
                      <span className="inline-flex items-center text-[10px] font-extrabold tracking-wider uppercase text-indigo-300 bg-indigo-950/80 px-2.5 py-0.5 rounded border border-indigo-800 mt-1">
                        ⚡ AI Stack
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-gray-400">
                        {group.skills.length} Competencies
                      </span>
                    )}
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`inline-flex items-center text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-xl bg-gray-800/80 border border-gray-700/60 text-gray-200 shadow-sm transition-all duration-200 hover:scale-105 cursor-default ${style.pillHover}`}
                    >
                      <FaCheckCircle className="mr-1.5 text-[10px] opacity-60" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;