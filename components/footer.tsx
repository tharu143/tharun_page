'use client';

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Tharun Kumar K
                </span>
              </h3>
              <p className="text-gray-300 mb-4 max-w-md">
                Flutter Developer specializing in mobile applications, ERPNext integrations, 
                and cross-platform solutions. Based in Tamil Nadu, India.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://linkedin.com/in/tharun-kumar-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="mailto:tharumanoj143143@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://wa.me/916381360779"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">tharumanoj143143@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+91 63813 60779</span>
              </div>
              <div className="text-gray-400 text-sm">
                Tamil Nadu, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 flex items-center justify-center space-x-2"
          >
            <span>© 2024 Tharun Kumar K. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-400" />
            </motion.span>
            <span>TM</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}