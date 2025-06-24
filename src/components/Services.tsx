import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Development',
      subtitle: 'Web & App',
      description: 'Custom web applications, mobile apps, and AI-powered solutions built with cutting-edge technology.',
      features: ['React & Next.js', 'Mobile Apps', 'AI Integration', 'Cloud Solutions'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    },
    {
      icon: Palette,
      title: 'Brand Building',
      subtitle: 'Design, Identity, Growth',
      description: 'Complete brand transformation from visual identity to digital presence and growth strategies.',
      features: ['Brand Identity', 'UI/UX Design', 'Digital Marketing', 'Growth Strategy'],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
    },
  ];

  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-neon/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
            Our <span className="bg-gradient-to-r from-neon to-white bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-manrope">
            Two core services that power the future of digital business
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-3xl overflow-hidden hover:border-neon/30 transition-all duration-500 hover:shadow-2xl hover:shadow-neon/10">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-neon/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-neon/30">
                      <service.icon className="w-8 h-8 text-neon" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-neon transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-neon font-semibold text-lg">{service.subtitle}</p>
                  </div>

                  <p className="text-gray-300 text-lg mb-8 leading-relaxed font-manrope">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.3) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-neon rounded-full"></div>
                        <span className="text-gray-300 font-manrope">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-neon/10 to-neon/5 border border-neon/30 text-neon px-6 py-4 rounded-xl font-semibold text-lg flex items-center justify-between hover:from-neon hover:to-neon-dark hover:text-black transition-all duration-300 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;