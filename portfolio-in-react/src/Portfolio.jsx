import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiGit } from 'react-icons/si';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-500" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Git', icon: <SiGit className="text-red-500" /> },
];

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and TailwindCSS.',
    tech: ['React', 'TailwindCSS'],
    image: 'https://via.placeholder.com/400x200',
    live: '#',
    github: '#',
  },
  {
    title: 'Task Manager App',
    description: 'A task management app with drag-and-drop features.',
    tech: ['React', 'JavaScript', 'CSS'],
    image: 'https://via.placeholder.com/400x200',
    live: '#',
    github: '#',
  },
];

export default function Portfolio() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-600">Sadik</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl max-w-xl mb-6"
        >
          I specialize in building modern and responsive web applications using React.js.
        </motion.p>
        <motion.a 
          href="#projects" 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }} 
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
        >
          View Projects
        </motion.a>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-12">My Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.05 }} 
              className="flex flex-col items-center p-6 bg-white shadow rounded-xl"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <p className="text-lg font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.02 }} 
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <p className="text-sm text-gray-600 mb-2">Tech Used: {project.tech.join(', ')}</p>
                <div className="flex gap-4">
                  <a href={project.live} className="text-blue-600 underline">Live Demo</a>
                  <a href={project.github} className="text-gray-800 flex items-center gap-1">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-50 text-sm text-gray-600">
        <p>&copy; 2025 SADIK. All rights reserved.</p>
      </footer>
    </div>
  );
}
