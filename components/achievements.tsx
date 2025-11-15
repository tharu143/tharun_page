'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Users, TrendingUp, Smartphone, Award } from 'lucide-react';

const achievements = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Published 4 Mobile Apps',
    description: '5 Android apps and 3 iOS app live on respective stores',
    value: '4 Apps',
    color: 'from-green-400 to-blue-500',
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: 'IIT Bombay MAPATHON 2023',
    description: 'Achieved Top 10% rank in the prestigious coding competition',
    value: 'Top 10%',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Leadership',
    description: 'Led team of 3 developers for College Management System',
    value: '3 Members',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Performance Improvement',
    description: 'Boosted system efficiency by 30% through API optimization',
    value: '30% Boost',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Knowledge Sharing',
    description: 'Conducted sessions on MERN & .NET MAUI for team members',
    value: '5+ Sessions',
    color: 'from-red-400 to-pink-500',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Project Excellence',
    description: 'Delivered 40% efficiency boost in College Management System',
    value: '40% Efficiency',
    color: 'from-indigo-400 to-purple-500',
  },
];

export function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-black">
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
              Achievements & Recognition
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Key milestones and recognition that highlight my professional journey and impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${achievement.color} text-white p-3 rounded-lg mr-4 shadow-lg`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {achievement.title}
                    </h3>
                    <div className={`bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent font-bold text-xl`}>
                      {achievement.value}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Career Highlights</h3>
            <p className="text-blue-100">Key numbers that define my professional journey</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">11+</div>
              <div className="text-blue-100">Months Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-blue-100">Apps Published</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">APIs Developed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}