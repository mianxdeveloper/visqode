import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StickyButton: React.FC = () => {
  return (
    <Link to="/contact">
      <motion.button
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="fixed right-6 bottom-6 bg-gradient-to-r from-neon to-neon-dark text-black px-6 py-3 rounded-full font-semibold z-40 hover:shadow-lg hover:shadow-neon/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
      >
        Get Started
        <ArrowRight className="w-4 h-4" />
      </motion.button>
    </Link>
  );
};

export default StickyButton;