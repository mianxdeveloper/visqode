import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Abdulla Al Mahin',
      role: 'Founder & CEO',
      image: 'https://avatars.githubusercontent.com/u/209836855?v=4',
      bio: 'Visionary leader with 5+ years in AI and digital innovation.',
    },
    {
      name: 'Abdul Rehman',
      role: 'Creative Director',
      image: "../../public/ab.jpg",
      bio: 'Award-winning designer specializing in brand transformation.',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'Full-stack architect building the future of web technology.',
    },
    {
      name: 'Emily Zhang',
      role: 'Growth Strategist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      bio: 'Data-driven strategist scaling brands to new heights.',
    },
  ];

  return (
    <section id="team" className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-neon/3 rounded-full blur-3xl"></div>
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
            Meet Our <span className="bg-gradient-to-r from-neon to-white bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-manrope">
            The brilliant minds behind Visqode's innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-glass-bg backdrop-blur-sm border border-glass-border rounded-2xl overflow-hidden hover:border-neon/30 transition-all duration-500 hover:shadow-2xl hover:shadow-neon/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="w-10 h-10 bg-neon rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-black" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="w-10 h-10 bg-neon rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                    >
                      <Twitter className="w-5 h-5 text-black" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="w-10 h-10 bg-neon rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 text-black" />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 group-hover:text-neon transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-neon font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed font-manrope">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
