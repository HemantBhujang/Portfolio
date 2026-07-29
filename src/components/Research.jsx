import React from 'react';
import { researchPapers } from '../data/portfolioData';
import { FaBookOpen, FaExternalLinkAlt, FaAward, FaTags, FaFileAlt, FaBookmark } from 'react-icons/fa';

const Research = () => {
  return (
    <section id="research" className="py-24 bg-gray-900/90 text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Accent Mesh */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase bg-indigo-500/10 text-indigo-300 px-4 py-1.5 rounded-full border border-indigo-500/30 mb-3 shadow-sm">
            <FaBookmark className="text-indigo-400 text-xs" /> Scholarly Work & Publications
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 text-white tracking-tight">
            Research & Papers
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Academic research contributions focusing on artificial intelligence architectures, web optimization frameworks, and modern software engineering paradigms.
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {researchPapers.map((paper) => (
            <div
              key={paper.id}
              className="group relative bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border border-gray-700/70 flex flex-col justify-between hover:-translate-y-2 shimmer-effect"
            >
              {/* Card top border glow line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div>
                {/* Header status badge & DOI */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                  <span className="inline-flex items-center text-xs font-bold px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    <FaAward className="mr-1.5 text-xs text-emerald-400" />
                    {paper.status} ({paper.date})
                  </span>
                  <span className="text-xs font-mono text-gray-400 bg-gray-900/60 px-3 py-1 rounded-lg border border-gray-700/60">
                    DOI: {paper.doi}
                  </span>
                </div>

                {/* Paper Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300 leading-snug mb-4">
                  {paper.title}
                </h3>

                {/* Venue & Publisher */}
                <div className="flex items-center text-sm text-indigo-400 font-semibold mb-5 bg-indigo-950/40 p-3 rounded-xl border border-indigo-900/50">
                  <FaBookOpen className="mr-2.5 text-indigo-300 flex-shrink-0 text-base" />
                  <span>
                    {paper.journal} — <span className="text-gray-300 font-normal">{paper.publisher}</span>
                  </span>
                </div>

                {/* Abstract */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {paper.abstract}
                </p>

                {/* Topics / Keywords */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <FaTags className="text-gray-500 text-xs mr-1" />
                  {paper.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-900/80 text-gray-300 font-medium px-3 py-1 rounded-lg border border-gray-700/60 group-hover:border-indigo-500/30 transition-colors duration-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-gray-700/60 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-mono flex items-center">
                  <FaFileAlt className="mr-1.5 text-indigo-400" /> Peer-Reviewed Paper
                </span>
                <a
                  href={paper.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  View Publication <FaExternalLinkAlt className="ml-2 text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
