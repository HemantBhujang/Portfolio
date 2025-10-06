import React from 'react';

const educationData = [
  {
    id: 1,
    degree: 'Master of Technology (M.Tech), Computer Science & Engineering',
    institution: 'Government College Of Engineering, Aurangabad',
    years: '2025 - 2027',
  },
  {
    id: 2,
    degree: 'Bachelor of Technology (B.Tech), Computer Science & Engineering',
    institution: 'Deogiri Institute Of Engineering And Management Studies',
    years: '2021 - 2025',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-600 dark:text-indigo-400">
          Education
        </h2>

        <div className="space-y-8 max-w-2xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border border-transparent hover:border-indigo-500"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-md md:text-lg text-indigo-600 dark:text-indigo-400">
                    {edu.institution}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-2 md:mt-0 md:text-base">
                  {edu.years}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;