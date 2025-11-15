'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// UPDATED: Added Play and Apple icons
import { ExternalLink, Github, Smartphone, Code, Database, Brain, Play, Apple } from 'lucide-react';

const projects = [
  {
    title: 'ERPNext Mobile Apps Suite',
    description: 'Comprehensive mobile application suite for ERPNext with HR, CRM, Sales, and Accounting modules',
    image: '/erp.jpg', // Updated image path
    technologies: ['Flutter', 'Dart', 'ERPNext', 'Python', 'Frappe APIs'],
    category: 'Mobile Development',
    achievements: ['5 Android apps published', '3 iOS app published', 'ERPNext integration'],
    links: {
      demo: '#', // Placeholder, update if you have a live demo
      github: 'https://github.com/tharu143', // Linked to your GitHub
      playstore: 'https://play.google.com/store/apps/details?id=org.kylesolutions.kepler_tech_llc.kepler_tech_app', // Play Store link
      appstore: 'https://apps.apple.com/us/app/kepler-tech-llc/id6752988659', // ADDED App Store link
    },
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: 'MERN Event Platform',
    description: 'Full-stack event management platform with JWT authentication and Redis caching',
    image: '/event.png', // Updated image path
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Redis'],
    category: 'Web Development',
    achievements: ['JWT authentication', 'Redis caching', 'Event management'],
    links: {
      demo: '#', // Placeholder, update if you have a live demo
      github: 'https://github.com/tharu143', // Linked to your GitHub
    },
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: 'Student Management System',
    description: '.NET MAUI application for managing student records and academic information',
    image: '/student.png', // Updated image path
    technologies: ['.NET MAUI', 'C#', 'SQLite', 'XAML'],
    category: 'Desktop/Mobile',
    achievements: ['Cross-platform compatibility', 'Offline functionality', 'Modern UI'],
    links: {
      demo: '#', // Placeholder, update if you have a live demo
      github: 'https://github.com/tharu143', // Linked to your GitHub
    },
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: 'AI Dialect Learning App',
    description: 'Machine learning application for Tamil dialect learning using Whisper and Wav2Vec2',
    image: '/ai.png', // Updated image path
    technologies: ['Python', 'Whisper', 'Wav2Vec2', 'TensorFlow', 'Flutter'],
    category: 'AI/ML',
    achievements: ['Speech recognition', 'Dialect analysis', 'Learning feedback'],
    links: {
      demo: '#', // Placeholder, update if you have a live demo
      github: 'https://github.com/tharu143', // Linked to your GitHub
    },
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: 'College Management System',
    description: 'Web-based college management system with student, faculty, and administration modules',
    image: '/clg.png', // Updated image path
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
    category: 'Web Development',
    achievements: ['40% efficiency boost', 'Multi-user system', 'Comprehensive modules'],
    links: {
      demo: '#', // Placeholder, update if you have a live demo
      github: 'https://github.com/tharu143', // Linked to your GitHub
    },
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: 'Ophthalmic Disease Predictor',
    description: 'Deep learning system for ophthalmic disease diagnosis using ensemble and bagging techniques',
    image: '/optha.png', // Updated image path
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Ensemble Learning'],
    category: 'AI/ML',
    achievements: ['High accuracy prediction', 'Ensemble methods', 'Medical imaging'],
    links: {
      demo: '#', // Placeholder, update if you have a live demo
      github: 'https://github.com/tharu143', // Linked to your GitHub
    },
    icon: <Brain className="w-6 h-6" />,
  },
  // --- NEW PROJECTS ADDED ---
  {
    title: 'Client Project - ERP Location Tracking',
    description: 'ERP-based mobile application for real-time location tracking and logistics management.',
    image: '/oryx.jpg', // Placeholder image path - update this
    technologies: ['Flutter', 'Dart', 'ERPNext', 'Frappe APIs', 'Geolocation'],
    category: 'Mobile Development',
    achievements: ['Real-time location tracking', 'ERP integration', 'Android app published'],
    links: {
      github: 'https://github.com/tharu143', // Assumed GitHub, update if different
      playstore: 'https://play.google.com/store/apps/details?id=org.kylesolutions.oryx_app&pcampaignid=web_share',
    },
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: 'Client Project - Product Info Collector',
    description: 'Mobile application for gathering and managing product item information, syncing with ERP systems.',
    image: '/qubeart.png', // Placeholder image path - update this
    technologies: ['Flutter', 'Dart', 'ERPNext', 'Frappe APIs', 'Data Collection'],
    category: 'Mobile Development',
    achievements: ['Product data collection', 'ERP sync', 'Android app published', 'iOS app published'],
    links: {
      github: 'https://github.com/tharu143', // Assumed GitHub, update if different
      playstore: 'https://play.google.com/store/apps/details?id=org.kylesolutions.qubeart&pcampaignid=web_share',
      appstore: 'https://apps.apple.com/us/app/qubeart/id6755106336',
    },
    icon: <Smartphone className="w-6 h-6" />,
  },
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work spanning mobile development, web applications, and AI/ML projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                {/* Replaced Next.js Image with standard <img> tag and Tailwind classes for compatibility */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 z-0 rounded-t-xl w-full h-full object-cover" // Ensures image fills container
                  // Add an onerror to handle missing images gracefully
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x400/5e60e6/ffffff?text=${project.title.split(' ')[0]}`;
                  }}
                />
                <div className="relative z-10 text-white text-6xl opacity-20">
                  {project.icon}
                </div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 z-20">
                  <span className="text-white text-sm font-medium">{project.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github size={16} />
                    </motion.a>
                  )}
                  {project.links.playstore && (
                    <motion.a
                      href={project.links.playstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                      title="View on Play Store"
                    >
                      {/* UPDATED Icon */}
                      <Play size={16} />
                    </motion.a>
                  )}
                  {/* ADDED App Store Link Rendering */}
                  {project.links.appstore && (
                    <motion.a
                      href={project.links.appstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                      title="View on App Store"
                    >
                      {/* UPDATED Icon */}
                      <Apple size={16} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}