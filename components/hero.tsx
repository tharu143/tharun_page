'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, ExternalLink, Linkedin } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  // Direct download link for the resume PDF from Google Drive
  // The file ID is extracted from the provided Google Drive link: 1eRSIO8gU3gh0kfcujCvR6jWy9Aylvh6t
  const resumePdfUrl = "https://drive.google.com/file/d/12Rl9FP3Uk_AKm1LCLkTe_Hft8efyPphO/view?usp=sharing";
  const linkedInUrl = "https://www.linkedin.com/in/tharun-kumar-k-a76185252/";
  const emailAddress = "mailto:tharumanoj143143@gmail.com";
  const githubProjectsUrl = "https://github.com/tharu143"; // Added GitHub URL

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-purple-900" />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Tharun Kumar K
                </span>
              </motion.h1>

              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 h-16">
                <TypeAnimation
                  sequence={[
                    'Flutter Developer',
                    2000,
                    'ERPNext API Expert',
                    2000,
                    'Mobile App Publisher',
                    2000,
                    'MERN Stack Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-semibold"
                />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-xl"
            >
              Passionate cross-platform developer with 8+ months of experience at Kyle Solution,
              specializing in Flutter development, ERPNext API integrations, and mobile-first design.
              Published 3+ apps on Play Store and 1 on Apple Store.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {/* Updated the "Download Resume" button to an anchor tag with the resume PDF URL */}
              <motion.a
                href={resumePdfUrl}
                target="_blank" // Opens the PDF in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </motion.a>

              {/* Updated the "Contact Me" button to an anchor tag with the email URL */}
              <motion.a
                href={emailAddress}
                target="_blank" // Opens email client in a new tab
                rel="noopener noreferrer" // Security best practice
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </motion.a>

              {/* Updated the "View Projects" button to an anchor tag with the GitHub URL */}
              <motion.a
                href={githubProjectsUrl}
                target="_blank" // Opens GitHub page in a new tab
                rel="noopener noreferrer" // Security best practice
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 flex items-center gap-2"
              >
                <ExternalLink size={20} />
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl">
              <div className="flex flex-col items-center space-y-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-xl">
                    {/* Changed the src to reference the image from the public folder */}
                    <Image
                      src="/tharunkumar.jpg"
                      alt="Tharun Kumar K"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-black"></div>
                </motion.div>

                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Tharun Kumar K</h3>
                  <p className="text-gray-600 dark:text-gray-300">Flutter Developer</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Kyle Solution Pvt Ltd</p>
                </div>

                <div className="flex space-x-4">
                  {/* Email icon linked to email address */}
                  <motion.a
                    href={emailAddress}
                    target="_blank" // Opens email client in a new tab
                    rel="noopener noreferrer" // Security best practice
                    whileHover={{ scale: 1.2 }}
                    className="bg-blue-500 text-white p-3 rounded-full cursor-pointer"
                  >
                    <Mail size={20} />
                  </motion.a>
                  {/* LinkedIn icon linked to LinkedIn profile */}
                  <motion.a
                    href={linkedInUrl}
                    target="_blank" // Opens LinkedIn profile in a new tab
                    rel="noopener noreferrer" // Security best practice
                    whileHover={{ scale: 1.2 }}
                    className="bg-blue-600 text-white p-3 rounded-full cursor-pointer"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
