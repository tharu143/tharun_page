'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Database, Settings, Palette, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: 'Dart', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'C#', level: 75 },
      { name: 'PHP', level: 70 },
    ],
  },
  {
    title: 'Frontend',
    icon: <Palette className="w-6 h-6" />,
    skills: [
      { name: 'Flutter', level: 95 },
      { name: 'React', level: 90 },
      { name: 'HTML5/CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 85 },
      { name: '.NET MAUI', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 85 },
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Firebase', level: 85 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    title: 'ERP & APIs',
    icon: <Settings className="w-6 h-6" />,
    skills: [
      { name: 'ERPNext', level: 90 },
      { name: 'Frappe APIs', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT', level: 85 },
      { name: 'Python Scripting', level: 80 },
    ],
  },
  {
    title: 'Mobile Dev',
    icon: <Smartphone className="w-6 h-6" />,
    skills: [
      { name: 'Flutter', level: 95 },
      { name: 'Android', level: 90 },
      { name: 'iOS', level: 85 },
      { name: 'Firebase Auth', level: 90 },
      { name: 'Play Console', level: 85 },
      { name: 'App Store', level: 80 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'VSCode', level: 95 },
      { name: 'Figma', level: 85 },
      { name: 'Postman', level: 90 },
      { name: 'Android Studio', level: 85 },
    ],
  },
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My technical skills across various domains of software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 text-white p-3 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.1) }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}