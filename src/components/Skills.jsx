import React from 'react';

const skills = {
    languages: ['C', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    frontend: ['React.js', 'Angular', 'Bootstrap', 'Material UI', 'Tailwind CSS'],
    backend: ['Node.js', 'PHP', 'XAMPP', 'Firebase'],
    uiux: ['Figma', 'Adobe XD'],
    versionControl: ['Git', 'GitHub'],
    softSkills: ['Creative Thinking', 'Collaboration', 'Team Work'],
    tools: ['Snowflake', 'AWS S3', 'IAM', 'VS Code']
};

const Skills = () => {
    const renderSkillGroup = (title, skillList) => (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                    <span 
                        key={index} 
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-4 py-1 rounded-full hover:bg-indigo-500 hover:text-white transition-colors duration-200"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );

    return (
        <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-indigo-600 dark:text-indigo-400">
                    My Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {renderSkillGroup('Languages', skills.languages)}
                    {renderSkillGroup('Frontend', skills.frontend)}
                    {renderSkillGroup('Backend', skills.backend)}
                    {renderSkillGroup('UI/UX & Design', skills.uiux)}
                    {renderSkillGroup('Version Control', skills.versionControl)}
                    {renderSkillGroup('Soft Skills', skills.softSkills)}
                    {renderSkillGroup('Tools', skills.tools)}
                </div>
            </div>
        </section>
    );
};

export default Skills;