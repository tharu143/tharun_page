'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'Kyle Solution Pvt Ltd',
    position: 'Flutter Developer',
    duration: '8 Months (Current)',
    location: 'India',
    type: 'Full-time',
    achievements: [
      'Developed multiple ERPNext-based mobile applications',
      'Built HR, Sales, CRM, and Accounting modules',
      'Published 3 Android apps and 1 iOS app to respective stores',
      'Integrated Frappe REST APIs with mobile applications',
      'Implemented custom ERPNext modules for enhanced functionality',
    ],
    technologies: ['Flutter', 'Dart', 'ERPNext', 'Python', 'Frappe APIs', 'Firebase'],
  },
  {
    company: 'GUVI Geeks Pvt Ltd',
    position: 'Development Intern',
    duration: 'Jul 2024 - Sep 2024',
    location: 'India',
    type: 'Internship',
    achievements: [
      'Engineered 5 RESTful APIs improving system efficiency by 30%',
      'Gained hands-on experience in backend development',
      'Worked on deployment and optimization strategies',
      'Collaborated with cross-functional teams',
      'Participated in code reviews and best practices',
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JavaScript'],
  },
];

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
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
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in software development and mobile app creation.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-blue-500 text-white p-3 rounded-lg mr-4">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end space-y-2">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}