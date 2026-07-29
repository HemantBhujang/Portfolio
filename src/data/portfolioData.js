// src/data/portfolioData.js
// Centralized backend data layer. Edit this file or .env to add new skills, projects, or research papers!

const getEnv = (key, fallback) => {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key];
  }
  return fallback;
};

export const collegeAlias = getEnv('VITE_COLLEGE_NAME', 'DIEMS');
export const collegeFullName = getEnv('VITE_COLLEGE_FULL_NAME', 'Deogiri Institute Of Engineering And Management Studies');

export const personalInfo = {
  name: getEnv('VITE_USER_NAME', 'Hemant Bhujang'),
  title: getEnv('VITE_USER_TITLE', 'Full Stack Developer & AI Solutions Specialist'),
  college: collegeAlias,
  collegeFullName: collegeFullName,
  email: getEnv('VITE_USER_EMAIL', 'cser.hemant@gmail.com'),
  github: getEnv('VITE_GITHUB_URL', 'https://github.com/hemantbhujang'),
  linkedin: getEnv('VITE_LINKEDIN_URL', 'https://linkedin.com/in/hemantbhujang'),
  bio: 'Passionate software developer specializing in modern frontend engineering, UI/UX designs, and advanced AI-integrated applications.',
  about: 'I design and build dynamic web applications and AI-driven solutions. With a background in Computer Science & Engineering, I focus on crafting scalable code, intuitive UI/UX design systems, and leveraging state-of-the-art AI developer tools.',
  location: 'Maharashtra, India',
};

export const skillsData = {
  aiTools: {
    title: 'Advanced AI Tools & Workflows',
    icon: 'Brain',
    skills: ['ChatGPT / OpenAI API', 'Google Gemini API', 'Claude AI', 'Cursor AI', 'LangChain', 'GitHub Copilot', 'Prompt Engineering', 'V0.dev / AI Component Design']
  },
  design: {
    title: 'UI/UX & Design',
    icon: 'Palette',
    skills: ['Figma', 'Adobe XD', 'Wireframing & Prototyping', 'User Experience (UX)', 'Design Systems', 'Responsive Layouts']
  },
  frontend: {
    title: 'Frontend Development',
    icon: 'Code',
    skills: ['React.js', 'Angular', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Material UI', 'Bootstrap']
  },
  backend: {
    title: 'Backend & Database',
    icon: 'Server',
    skills: ['Node.js', 'Express.js', 'PHP', 'PostgreSQL', 'SQL', 'Firebase', 'RESTful APIs']
  },
  tools: {
    title: 'Cloud & Developer Tools',
    icon: 'Wrench',
    skills: ['Snowflake', 'AWS S3 & IAM', 'Git & GitHub', 'VS Code', 'XAMPP', 'Vite / Webpack']
  },
  softSkills: {
    title: 'Soft Skills & Leadership',
    icon: 'Users',
    skills: ['Creative Thinking', 'Problem Solving', 'Agile Collaboration', 'Team Leadership', 'Technical Documentation']
  }
};

export const researchPapers = [
  {
    id: 1,
    title: 'Advanced AI-Driven Architectures for Intelligent Web Systems & Real-Time Data Pipelines',
    abstract: 'Explores the integration of Large Language Models (LLMs) and autonomous AI agent workflows into modern web applications, optimizing context latency and frontend user interaction patterns.',
    journal: 'GECA',
    date: '2025',
    status: 'College Level Research',
    paperLink: 'https://docs.google.com/document/d/e/2PACX-1vQXNMhkZda75IriFBNLkMnW3VJ1nAIHzhmuA7yA1knQsRF0rZKvCZE12v7gfDsSFaN2-g1jjusJopJo/pub',
    publisher: 'GECA',
    topics: ['Artificial Intelligence', 'LLM Agents', 'Web Engineering', 'React & Micro-services'],
    doi: '10.1016/j.ijcse.2025.04.012'
  },
  // {
  //   id: 2,
  //   title: 'Comparative Evaluation of Frontend Frameworks & UI/UX Optimization Strategies in Enterprise Systems',
  //   abstract: 'A comprehensive study evaluating bundle performance, DOM rendering cycles, and user engagement metrics across React, Angular, and Tailwind CSS architectures in large-scale web applications.',
  //   journal: 'GECA',
  //   date: '2024',
  //   status: 'College Level Research',
  //   paperLink: '#',
  //   publisher: 'GECA',
  //   topics: ['Frontend Optimization', 'UI/UX Design Systems', 'Web Performance'],
  //   doi: '10.1109/NCRACE.2024.10429'
  // }
];

export const projectsData = [
  {
    id: 1,
    title: 'BudgetMinds - AI Smart Assistant & Agent Dashboard',
    category: 'AI & Advanced',
    description: 'An intelligent web workstation developed using cutting-edge AI tools (Gemini API, LangChain & OpenAI). Features automated prompt workflows, natural language code analysis, and interactive UI.',
    link: 'https://budgetminds-2.onrender.com',
    github: 'https://github.com/HemantBhujang/BudgetMinds',
    technologies: ['React.js', 'Gemini API', 'LangChain', 'Tailwind CSS', 'V0.dev'],
    featured: true
  },
  {
    id: 2,
    title: 'Nanonest - Entrepreneur & Investor Platform',
    category: 'Frontend',
    description: 'Developed a modern platform for seamless communication between entrepreneurs and investors. Focused on high-fidelity UI/UX design and front-end development.',
    link: 'https://nanonest-zeta.vercel.app/',
    github: 'https://github.com/hemantbhujang/Nanonest',
    technologies: ['React JS', 'Firebase', 'Figma', 'Material UI'],
    featured: true
  },
  {
    id: 3,
    title: 'BuyBuddy - E-commerce Application',
    category: 'Frontend',
    description: 'Developed the frontend of a full-scale e-commerce platform for online retail clothing. Features product catalog, interactive cart management, checkout workflow, and dynamic filtering.',
    link: 'https://buybuddy-black.vercel.app/',
    github: 'https://github.com/hemantbhujang/ECommerce',
    technologies: ['Angular', 'Bootstrap', 'PostgreSQL', 'JavaScript'],
    featured: true
  },
  {
    id: 4,
    title: 'Real-Time Currency Converter',
    category: 'Frontend',
    description: 'A sleek currency conversion web application built with React, consuming live exchange rate APIs. Demonstrates reactive hooks, custom API integration, and clean responsive UI.',
    link: 'https://hemantbhujang.github.io/Currency-Convertor/',
    github: 'https://github.com/hemantbhujang/Currency-Convertor',
    technologies: ['React JS', 'Tailwind CSS', 'REST API'],
    featured: false
  },
  {
    id: 5,
    title: '🚀 megaBlog — Modern Professional Publishing Platform',
    category: 'Full Stack',
    description: 'It features a modern dark glassmorphic design system, real-time article search and category filtering, rich text editing, secure user authentication, responsive layouts, and built-in interactive demo fallback capabilities..',
    link: 'https://12blog-b3dds0u42-hemants-projects-2693ae51.vercel.app/',
    github: 'https://github.com/hemantbhujang/12blog-app',
    technologies: ['React JS', 'Tailwind CSS', 'Redux Toolkit', 'Appwrite', 'Vite'],
    featured: false
  },
  {
    id: 6,
    title: 'Student Management System',
    category: 'Frontend',
    description: 'CRUD operations for managing student records with intuitive admin user interfaces, data validation, and simulated server backend.',
    link: '#',
    github: 'https://github.com/HemantBhujang/Crud-operation-task',
    technologies: ['Angular', 'JSON Server', 'TypeScript', 'Bootstrap'],
    featured: false
  }
];

export const educationData = [
  {
    id: 1,
    degree: 'Master of Technology (M.Tech), Computer Science & Engineering',
    institution: 'Government College Of Engineering, Aurangabad',
    years: '2025 - 2027',
    badge: 'Pursuing'
  },
  {
    id: 2,
    degree: 'Bachelor of Technology (B.Tech), Computer Science & Engineering',
    institution: `${collegeFullName} (${collegeAlias})`,
    years: '2021 - 2025',
    badge: 'Completed'
  }
];

export const experienceData = [
  {
    id: 1,
    title: 'Associate Robotics',
    company: 'On My Own Technology, Pune',
    dates: 'Jun 2025 – Aug 2025',
    responsibilities: [
      'Designed and implemented STEM-based robotics projects using microcontrollers (Arduino, Micro:bit), sensors, and programming.',
      'Built and tested functional prototypes by integrating hardware and software components.',
      'Collaborated with team members in Hackathon projects, developing basic applications and innovative solutions.',
      'Strengthened skills in electronics, embedded systems, programming, problem-solving, and teamwork through hands-on projects.'
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
      'Learned content planning, creation, and curation for effective social media campaigns.',
      'Designed 30+ high-engagement social media graphics for clients, boosting visual branding.',
      'Collaborated with the marketing team to align design assets with business objectives.'
    ]
  }
];
