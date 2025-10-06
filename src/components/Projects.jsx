import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Nanonest',
      description: 'Developed a platform for seamless communication between entrepreneurs and investors. Focused on UI/UX design and front-end development.',
      link: 'https://nanonest-zeta.vercel.app/',
      technologies: ['React JS', 'Firebase', 'Figma', 'Material UI']
    },
    {
      id: 2,
      title: 'Hardware Inventory Management System',
      description: 'Developed a full-stack inventory management system for efficient tracking and management of hardware resources.',
      link: 'https://github.com/your-github-username/hardware-inventory', 
      technologies: ['PHP', 'CSS', 'XAMPP']
    },
    {
      id: 3,
      title: 'Student Management System',
      description: 'Implemented CRUD operations for a student record management system, demonstrating proficiency in front-end development.',
      link: 'https://github.com/HemantBhujang/Crud-operation-task',
      technologies: ['Angular', 'JSON Server']
    },
     {
      id: 4,
      title: 'BuyBuddy - Ecommerce Website',
      description: 'As a member of a collaborative team, I developed the frontend of a complete e-commerce platform for online clothing retail. I leveraged AngularJS and Bootstrap to create a responsive and user-friendly interface. My key responsibilities included integrating product listings, a shopping cart, and a checkout workflow.',
      link: 'https://buybuddy-black.vercel.app/',
      technologies: ['Angular', 'Bootstrap','PostgreSql']
    },
    {
      id: 5,
      title: 'Currency Converter',
      description: 'Developed a modern Currency Converter web application using React. The project fetches real-time exchange rates from a public API, allowing users to convert currencies efficiently. This demonstrates proficiency in React Hooks (useState, useEffect), API integration, and building dynamic user interfaces.',
      link: 'https://hemantbhujang.github.io/Currency-Convertor/',
      technologies: ['ReactJs', 'Tailwind Css']
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-600 dark:text-indigo-400">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;