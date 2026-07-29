import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { FaExternalLinkAlt, FaGithub, FaRocket, FaRobot, FaDesktop, FaLayerGroup, FaFolderOpen } from 'react-icons/fa';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & Advanced', 'Frontend', 'Full Stack'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gray-900 text-white relative overflow-hidden transition-colors duration-300">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-300 px-4 py-1.5 rounded-full border border-indigo-500/30 mb-3 shadow-sm">
            <FaFolderOpen className="text-indigo-400 text-xs" /> Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white tracking-tight">
            Projects & Showcase
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Applications built using modern React, Angular, UI/UX systems, and AI developer tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 shadow-md ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-indigo-600/30 scale-105 ring-2 ring-indigo-400/50'
                    : 'bg-gray-800/80 text-gray-300 hover:bg-gray-800 hover:text-white border border-gray-700/60'
                }`}
              >
                {cat === 'AI & Advanced' && <FaRobot className="inline mr-2 text-sm" />}
                {cat === 'Frontend' && <FaDesktop className="inline mr-2 text-sm" />}
                {cat === 'Full Stack' && <FaLayerGroup className="inline mr-2 text-sm" />}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => {
            const isAi = project.category === 'AI & Advanced';

            return (
              <div
                key={project.id}
                className="group relative bg-gray-800/70 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border border-gray-700/60 flex flex-col justify-between hover:-translate-y-2.5 shimmer-effect"
              >
                {/* Top Border Highlight */}
                <div
                  className={`absolute top-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isAi ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gradient-to-r from-teal-400 to-emerald-500'
                  }`}
                ></div>

                <div>
                  {/* Badge & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`inline-flex items-center text-xs font-bold px-3.5 py-1.5 rounded-full ${
                        isAi
                          ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/30'
                          : 'bg-teal-500/10 text-teal-300 border border-teal-500/30'
                      }`}
                    >
                      {isAi ? <FaRobot className="mr-1.5 text-xs text-indigo-400" /> : <FaRocket className="mr-1.5 text-xs text-teal-400" />}
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="text-[10px] font-black tracking-widest text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/30 uppercase">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-900/80 text-gray-300 text-xs font-semibold px-3 py-1 rounded-lg border border-gray-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="pt-5 border-t border-gray-700/60 flex items-center justify-between">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <FaGithub className="mr-2 text-lg text-gray-400 group-hover:text-white" /> Code
                    </a>
                  )}

                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      Live Demo <FaExternalLinkAlt className="ml-2 text-xs" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;