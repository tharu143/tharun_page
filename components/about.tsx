'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Database, Users } from 'lucide-react';

const stats = [
  { number: '11+', label: 'Months Experience' },
  { number: '8', label: 'Apps Published' },
  { number: '25+', label: 'Projects Completed' },
  { number: '100%', label: 'Client Satisfaction' },
];

const highlights = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Full Stack Development',
    description: 'Proficient in MERN stack, Flutter, and .NET MAUI with focus on scalable architecture',
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile App Development',
    description: 'Published 3 Android apps and 1 iOS app with ERPNext integration',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'ERPNext API Integration',
    description: 'Expert in Frappe framework, Python scripting, and custom module development',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Team Leadership',
    description: 'Led development teams and conducted knowledge-sharing sessions',
  },
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate Flutter developer with expertise in cross-platform development, 
            ERPNext API integrations, and creating scalable mobile solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/10"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg mr-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {highlight.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 dark:border-white/10"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">My Journey</h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              I'm a dedicated Flutter developer currently working at Kyle Solution Pvt Ltd, where I've spent 
              the last 8 months building innovative mobile applications with ERPNext integration. My passion 
              lies in creating seamless user experiences and scalable mobile solutions.
            </p>
            <p>
              My expertise spans across multiple technologies including Flutter, MERN stack, .NET MAUI, 
              and ERPNext API development. I've successfully published 5 Android applications and 3 iOS 
              application to their respective stores, focusing on HR, CRM, Sales, and Accounting modules.
            </p>
            <p>
              Beyond development, I enjoy sharing knowledge through team sessions and staying updated with 
              the latest technological trends. I believe in writing clean, maintainable code and creating 
              applications that not only function well but also provide exceptional user experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}