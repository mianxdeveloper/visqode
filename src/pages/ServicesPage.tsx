import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, ArrowRight, Zap, Smartphone, Globe, Brush, Target, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const developmentFeatures = [
    { icon: Globe, title: 'Custom Web Development', description: 'Tailored web solutions built with modern frameworks and best practices.' },
    { icon: Smartphone, title: 'Scalable Mobile Apps', description: 'Cross-platform applications that grow with your business needs.' },
    { icon: Zap, title: 'Performance-Focused', description: 'Lightning-fast applications optimized for speed and user experience.' },
  ];

  const brandingFeatures = [
    { icon: Brush, title: 'Logo & Visual Identity', description: 'Distinctive brand marks that capture your essence and values.' },
    { icon: Target, title: 'UI/UX Strategy', description: 'User-centered design strategies that drive engagement and conversions.' },
    { icon: MessageSquare, title: 'Brand Voice & Messaging', description: 'Compelling narratives that resonate with your target audience.' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight"
            >
              Our <span className="bg-gradient-to-r from-neon to-white bg-clip-text text-transparent">Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-manrope leading-relaxed"
            >
              We specialize in two powerful areas to grow your digital presence and transform your brand into a market leader.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Development Service */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Development Services"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-8 h-8 text-neon" />
                <span className="text-neon font-semibold text-xl">Development</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
                Web & App <span className="bg-gradient-to-r from-neon to-white bg-clip-text text-transparent">Development</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-manrope">
                Transform your ideas into powerful digital solutions with our cutting-edge development expertise.
              </p>

              <div className="space-y-6 mb-8">
                {developmentFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-neon/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-neon" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 font-manrope">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Building Service */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-8 h-8 text-neon" />
                <span className="text-neon font-semibold text-xl">Brand Building</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
                Design, Identity & <span className="bg-gradient-to-r from-neon to-white bg-clip-text text-transparent">Growth</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-manrope">
                Build a brand that stands out and scales with strategic design and compelling storytelling.
              </p>

              <div className="space-y-6 mb-8">
                {brandingFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-neon/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-neon" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 font-manrope">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80"
                  alt="Brand Building Services"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-neon/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight"
            >
              Ready to{' '}
              <span className="bg-gradient-to-r from-neon to-white bg-clip-text text-transparent">
                Build Together?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-manrope leading-relaxed"
            >
              Let's transform your vision into a digital reality that drives growth and success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 0 40px rgba(57, 255, 20, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-neon to-neon-dark text-black px-10 py-5 rounded-full font-bold text-xl flex items-center gap-3 hover:shadow-lg hover:shadow-neon/25 transition-all duration-300 mx-auto"
                >
                  Let's Build Together
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;