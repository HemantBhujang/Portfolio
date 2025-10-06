import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="py-24 md:py-32 flex items-center justify-center text-center bg-gray-100 dark:bg-gray-800">
      <div className="max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Hi, I'm Hemant Bhujang
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          A passionate software developer creating beautiful and functional web applications.
        </p>
        <a href="#contact" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300">
          Contact me
        </a>
      </div>
    </section>
  );
};

export default Hero;