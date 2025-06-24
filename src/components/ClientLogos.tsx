import React from 'react';
import { motion } from 'framer-motion';

const ClientLogos: React.FC = () => {
  const clients = [
    { name: 'TechCorp', logo: 'https://via.placeholder.com/120x60/333333/666666?text=TechCorp' },
    { name: 'InnovateLab', logo: 'https://via.placeholder.com/120x60/333333/666666?text=InnovateLab' },
    { name: 'FutureSync', logo: 'https://via.placeholder.com/120x60/333333/666666?text=FutureSync' },
    { name: 'DigitalFlow', logo: 'https://via.placeholder.com/120x60/333333/666666?text=DigitalFlow' },
    { name: 'CloudVision', logo: 'https://via.placeholder.com/120x60/333333/666666?text=CloudVision' },
    { name: 'NextGen', logo: 'https://via.placeholder.com/120x60/333333/666666?text=NextGen' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-lg font-manrope">Trusted by innovative companies</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, filter: 'brightness(1.2)' }}
              className="flex justify-center items-center p-4 rounded-lg bg-glass-bg backdrop-blur-sm border border-glass-border hover:border-neon/30 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;