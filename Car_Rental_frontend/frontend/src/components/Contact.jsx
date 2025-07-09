import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      id="contact"
      tabIndex={-1}
      aria-label="Contact section"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
          Need help or have a question? Our support team is here to assist you 24/7.
        </p>

        <div className="flex flex-col gap-6 items-center text-lg text-gray-800 dark:text-gray-200">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 dark:text-blue-400 text-xl">📧</span>
            <a
              href="mailto:support@rentalEase.com"
              className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              support@rentalEase.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-blue-600 dark:text-blue-400 text-xl">📞</span>
            <a
              href="tel:+1234567890"
              className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              +1 234 567 890
            </a>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="mailto:support@rentalEase.com"
            className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            📬 Send Us a Message
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
