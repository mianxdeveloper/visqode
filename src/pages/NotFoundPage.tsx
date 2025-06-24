import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="mb-8"
        >
          <Bot className="w-24 h-24 text-neon mx-auto mb-6" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-8xl md:text-9xl font-bold font-poppins mb-6 bg-gradient-to-r from-neon to-white bg-clip-text text-transparent"
        >
          404
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          Page Not Found
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl text-gray-400 mb-8 font-manrope"
        >
          Even our AI couldn't find this page.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-neon to-neon-dark text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-neon/25 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back Home
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-12 text-sm text-gray-600"
        >
          Lost? Our AI is still learning the way around here.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;