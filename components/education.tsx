'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Engineering (Computer Science)',
    institution: 'Theni Kammavar Sangam College of Technology',
    duration: '2021 - 2024',
    location: 'Tamil Nadu, India',
    grade: 'CGPA: 9.4',
    description: 'Focused on software engineering, data structures, algorithms, and mobile application development.',
  },
  {
    degree: 'Diploma in Mechanical Engineering',
    institution: 'Arulmigu Palaniandavar Polytechnic College',
    duration: '2016 - 2019',
    location: 'Tamil Nadu, India',
    grade: '69%',
    description: 'Foundation in engineering principles, mathematics, and technical problem-solving.',
  },
  {
    degree: 'Higher Secondary School',
    institution: 'Government Higher Secondary School',
    duration: '2015 - 2016',
    location: 'Tamil Nadu, India',
    grade: '81%',
    description: 'Completed with focus on mathematics and science subjects.',
  },
];

const certifications = [
  {
    title: 'Full Stack Development (MERN)',
    issuer: 'GUVI',
    date: '2024',
    description: 'Comprehensive training in MongoDB, Express.js, React, and Node.js',
  },
  {
    title: 'MERN Stack Project Lead',
    issuer: 'Zhahi Tech',
    date: '2024',
    description: 'Led development team for full-stack web application project',
  },
  {
    title: 'Figma Design Certification',
    issuer: 'GUVI',
    date: '2024',
    description: 'UI/UX design principles and Figma tool proficiency',
  },
  {
    title: 'JavaScript Certification',
    issuer: 'GUVI',
    date: '2024',
    description: 'Advanced JavaScript programming and ES6+ features',
  },
];

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              Education & Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey and professional certifications that shaped my technical expertise.
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Academic Background
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-blue-500 text-white p-3 rounded-lg mr-4">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end space-y-2">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2 text-yellow-500" />
                      <span className="text-yellow-600 dark:text-yellow-400 font-semibold">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 text-white p-3 rounded-lg mr-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Issued: {cert.date}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}