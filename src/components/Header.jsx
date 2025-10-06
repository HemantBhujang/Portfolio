import React from 'react';

const Header = ({ toggleMenu, isOpen }) => {
    return (
        <header className="bg-gray-900 text-white shadow-xl sticky top-0 z-50 transition-all duration-300">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo/Name */}
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    <a href="#" className="hover:text-teal-400 transition-colors duration-200">
                        Hemant Bhujang
                    </a>
                </h1>

                {/* Desktop Navigation (visible on medium screens and up) */}
                <nav className="hidden md:flex items-center space-x-6">
                    <a href="#experience" className="text-lg font-medium hover:text-teal-400 transition-colors duration-200">Experience</a>
                    <a href="#education" className="text-lg font-medium hover:text-teal-400 transition-colors duration-200">Education</a>
                    <a href="#projects" className="text-lg font-medium hover:text-teal-400 transition-colors duration-200">Projects</a>
                    <a href="#skills" className="text-lg font-medium hover:text-teal-400 transition-colors duration-200">Skills</a>
                    <a href="https://github.com/hemantbhujang" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white bg-teal-600 hover:bg-teal-700 py-2 px-4 rounded-lg transition-colors duration-200">GitHub</a>
                    <a href="https://linkedin.com/in/hemantbhujang" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-lg transition-colors duration-200">LinkedIn</a>
                </nav>

                {/* Mobile Menu Button (visible on small screens) */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu} 
                        className="text-white focus:outline-none focus:ring-2 focus:ring-teal-400 p-2 rounded-md"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? (
                            <svg className="w-8 h-8 transition-transform duration-300 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-8 h-8 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;