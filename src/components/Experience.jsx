import React from 'react';

const experiences = [
    {
        id: 1,
        title: 'Associate Robotics',
        company: 'On My Own Technology, Pune',
        dates: 'Jun 2025 – Aug 2025',
        responsibilities: [
            'Designed and implemented STEM-based robotics projects using microcontrollers (Arduino, Micro:bit), sensors, and programming.',
            'Built and tested functional prototypes by integrating hardware and software components.',
            'Collaborated with team members in Hackathon projects, developing basic applications and innovative solutions.',
            'Strengthened skills in electronics, embedded systems, programming, problem-solving, and teamwork through hands-on projects and collaboration.'
        ]
    },
    {
        id: 2,
        title: 'INTERN TRAINEE ENGINEER',
        company: 'Just Logic Software Private Limited, Virtual',
        dates: 'Feb 2025 – Jun 2025',
        responsibilities: [
            'Contributed to a team-based project following Agile practices and collaborative development workflows.',
            'Applied frontend development skills in Angular JS and Bootstrap under real-world industry guidance.',
            'Enhanced technical and professional skills including version control (Git), problem-solving, and teamwork.'
        ]
    },
    {
        id: 3,
        title: 'Creative Designer',
        company: 'Aura Digital',
        dates: 'Oct – Nov 2022',
        responsibilities: [
            'Learned about content planning, creation, and curation for effective social media campaigns.',
            'Designed 30+ social media posts for clients, enhancing brand presence and engagement.',
            'Collaborated effectively with the social media team to understand clients\' business objectives and marketing strategies.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-600 dark:text-indigo-400">
                    My Experience
                </h2>

                {experiences.map(exp => (
                    <div 
                        key={exp.id} 
                        className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {exp.title}
                                </h3>
                                <p className="text-lg text-indigo-600 dark:text-indigo-400">
                                    {exp.company}
                                </p>
                            </div>
                            <span className="text-gray-500 dark:text-gray-400 text-md mt-2 md:mt-0">
                                {exp.dates}
                            </span>
                        </div>
                        <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
                            {exp.responsibilities.map((responsibility, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2 text-indigo-500 dark:text-indigo-300">&#8226;</span>
                                    {responsibility}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Experience;  