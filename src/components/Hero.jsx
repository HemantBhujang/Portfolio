import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope, FaRobot, FaPaintBrush, FaCode, FaStar, FaArrowRight } from 'react-icons/fa';
import profileAvatar from '../assets/profile-avatar.svg';

const Hero = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center py-20 lg:py-28 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900 text-white overflow-hidden">
      {/* Background Animated Gradient Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '4s' }}></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14 max-w-6xl mx-auto">

          {/* Left Hero Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left animate-fade-in-up">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md hover:border-indigo-400/50 transition-all duration-300 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Full-time Roles & AI Projects</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-teal-300 bg-clip-text text-transparent animate-gradient inline-block">
                {personalInfo.name}
              </span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl sm:text-2xl font-bold text-indigo-300/90 mb-6 tracking-wide">
              {personalInfo.title}
            </h2>

            {/* Bio */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 font-normal">
              {personalInfo.bio} Educated at{' '}
              <span className="text-teal-300 font-semibold underline decoration-teal-500/40 underline-offset-4">
                {personalInfo.collegeFullName} ({personalInfo.college})
              </span>.
            </p>

            {/* Core Pillars */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10">
              <div className="inline-flex items-center text-xs font-semibold px-3.5 py-2 rounded-xl bg-gray-800/80 border border-gray-700/80 text-gray-200 shadow-sm hover:border-indigo-500/50 hover:bg-gray-800 transition-all duration-200">
                <FaCode className="mr-2 text-indigo-400 text-sm" /> Frontend Engineering
              </div>
              <div className="inline-flex items-center text-xs font-semibold px-3.5 py-2 rounded-xl bg-gray-800/80 border border-gray-700/80 text-gray-200 shadow-sm hover:border-pink-500/50 hover:bg-gray-800 transition-all duration-200">
                <FaPaintBrush className="mr-2 text-pink-400 text-sm" /> UI/UX Design Systems
              </div>
              <div className="inline-flex items-center text-xs font-semibold px-3.5 py-2 rounded-xl bg-gray-800/80 border border-gray-700/80 text-gray-200 shadow-sm hover:border-teal-500/50 hover:bg-gray-800 transition-all duration-200">
                <FaRobot className="mr-2 text-teal-400 text-sm" /> AI Developer Tools
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 rounded-xl shadow-xl shadow-indigo-600/30 overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center">
                  Explore Projects <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-200 bg-gray-800/80 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-xl shadow-md transition-all duration-300 hover:scale-105 active:scale-95 hover:text-white"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Bar */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 mt-10">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-xl bg-gray-800/60 border border-gray-700/60 text-gray-300 hover:text-white hover:border-indigo-500 hover:bg-indigo-600/20 hover:scale-110 transition-all duration-200 shadow-sm"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-xl bg-gray-800/60 border border-gray-700/60 text-gray-300 hover:text-teal-300 hover:border-teal-500 hover:bg-teal-600/20 hover:scale-110 transition-all duration-200 shadow-sm"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-3 rounded-xl bg-gray-800/60 border border-gray-700/60 text-gray-300 hover:text-red-400 hover:border-red-500 hover:bg-red-600/20 hover:scale-110 transition-all duration-200 shadow-sm"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>

          </div>

          {/* Right Hero Image Container with Animated Badges & Glowing Frame */}
          <div className="w-full lg:w-2/5 flex justify-center relative">
            
            {/* Floating Badge 1: AI Specialist */}
            <div className="absolute -top-4 -left-4 z-20 animate-float hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card border border-indigo-500/40 text-white shadow-xl">
              <div className="w-8 h-8 rounded-xl bg-indigo-600/80 flex items-center justify-center text-white text-sm shadow-md">
                <FaRobot />
              </div>
              <div>
                <p className="text-xs font-bold">AI Developer</p>
                <p className="text-[10px] text-indigo-300 font-mono">Gemini / LangChain</p>
              </div>
            </div>

            {/* Floating Badge 2: UI/UX Designer */}
            <div className="absolute -bottom-4 -right-4 z-20 animate-float-delayed hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card border border-pink-500/40 text-white shadow-xl">
              <div className="w-8 h-8 rounded-xl bg-pink-600/80 flex items-center justify-center text-white text-sm shadow-md">
                <FaPaintBrush />
              </div>
              <div>
                <p className="text-xs font-bold">UI/UX Designer</p>
                <p className="text-[10px] text-pink-300 font-mono">Figma / React</p>
              </div>
            </div>

            {/* Glowing Ring Frame */}
            <div className="relative group">
              {/* Outer Rotating Glowing Gradient */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-400 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-700 animate-pulse-glow"></div>

              {/* Main Card Frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-84 lg:h-84 bg-gray-900 rounded-3xl p-3.5 border border-gray-800 flex items-center justify-center overflow-hidden shadow-2xl shimmer-effect">
                <img
                  src={imgError ? profileAvatar : profileAvatar}
                  onError={() => setImgError(true)}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Bottom Card Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-md p-3 rounded-2xl border border-gray-700/80 flex items-center justify-between shadow-lg">
                  <div>
                    <p className="text-xs font-bold text-white flex items-center">
                      {personalInfo.name} <FaStar className="ml-1 text-amber-400 text-[10px]" />
                    </p>
                    <p className="text-[10px] text-teal-300 font-semibold">{personalInfo.college}</p>
                  </div>
                  <span className="text-[11px] bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-mono px-2.5 py-1 rounded-lg shadow-sm">
                    B.Tech CSE
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;