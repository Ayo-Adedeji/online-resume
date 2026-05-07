import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaBriefcase, FaUsers, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-scroll';

const About = () => {
  const stats = [
    { icon: <FaBriefcase />, label: 'Experience', value: '2+ Years' },
    { icon: <FaUsers />, label: 'Clients satisfied', value: '10+' },
    { icon: <FaTrophy />, label: 'Projects managed', value: '10+' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: 50,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-24 bg-navy-light transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          <SectionTitle title="About Me" />

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group w-full max-w-md mx-auto"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500" />
              <img
                src="/src/assets/hero.png"
                alt="Profile"
                className="relative rounded-3xl shadow-2xl w-full aspect-square object-cover border border-white/5"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left mt-12 md:mt-0 px-4 md:px-0"
            >
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                I'm a <span className="text-primary">Full-Stack Developer</span>
              </h3>
              <p className="text-accent text-lg leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
                I'm a full-stack developer focused on building functional, accessible, and beautiful digital experiences. 
                My core stack is the MERN stack (MongoDB, Express, React, Node.js), with growing experience in mobile 
                app development using React Native.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="text-primary text-2xl mb-3 flex justify-center group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <h4 className="text-white font-bold text-xl mb-1">{stat.value}</h4>
                    <p className="text-accent text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="inline-block px-10 py-4 bg-primary text-navy font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 cursor-pointer"
              >
                Let's Talk
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
