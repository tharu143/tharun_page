'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Import EmailJS library

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // --- EmailJS Configuration ---
  // IMPORTANT: Ensure these IDs are correct from your EmailJS dashboard (emailjs.com)
  // EMAILJS_SERVICE_ID: Found under 'Email Services'
  // EMAILJS_TEMPLATE_ID: Found under 'Email Templates'
  // EMAILJS_USER_ID: This is your 'Public Key' found under 'Account' -> 'API Keys'
  const EMAILJS_SERVICE_ID = 'service_r9csjk9';
  const EMAILJS_TEMPLATE_ID = 'template_gbctl9e';
  const EMAILJS_USER_ID = 'UqD3uslJNr4D8Isww'; // Please verify this is your Public Key (User ID) from EmailJS dashboard
  // --- End EmailJS Configuration ---

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionMessage('');
    setIsSuccess(false);

    try {
      // Use emailjs.send to send the email, explicitly mapping formData keys
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.name,      // Map formData.name to EmailJS template variable user_name
          user_email: formData.email,    // Map formData.email to EmailJS template variable user_email
          user_subject: formData.subject, // Map formData.subject to EmailJS template variable user_subject
          user_message: formData.message, // Map formData.message to EmailJS template variable user_message
        },
        EMAILJS_USER_ID
      );

      setSubmissionMessage('Thanks for reaching out! I\'ll get back to you soon.');
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      console.error('EmailJS error:', error);
      // Check if the error is due to an invalid Public Key
      if (error && (error as any).status === 400 && (error as any).text.includes('Public Key is invalid')) {
        setSubmissionMessage('Failed to send message: Invalid Public Key. Please check your EmailJS User ID.');
      } else {
        setSubmissionMessage('Failed to send message. Please try again later.');
      }
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's discuss your next project or just say hello. I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 dark:border-white/10 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 dark:bg-black/5 rounded-lg"
                >
                  <div className="bg-blue-500 text-white p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">tharumanoj143143@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 dark:bg-black/5 rounded-lg"
                >
                  <div className="bg-green-500 text-white p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Phone</p>
                    <p className="text-gray-600 dark:text-gray-300">+91 63813 60779</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 dark:bg-black/5 rounded-lg"
                >
                  <div className="bg-red-500 text-white p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">Tamil Nadu, India</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://linkedin.com/in/tharun-kumar-k-a76185252/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="mailto:tharumanoj143143@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/916381360779"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Phone className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 dark:border-white/10 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name" // Reverted name to match formData state
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 dark:bg-black/5 border border-white/20 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email" // Reverted name to match formData state
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 dark:bg-black/5 border border-white/20 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject" // Reverted name to match formData state
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 dark:bg-black/5 border border-white/20 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message" // Reverted name to match formData state
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 dark:bg-black/5 border border-white/20 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submissionMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center text-sm font-medium ${isSuccess ? 'text-green-500' : 'text-red-500'}`}
                  >
                    {submissionMessage}
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
