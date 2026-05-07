import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaWhatsapp, FaDownload } from 'react-icons/fa';
import heroBg from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center transition-colors duration-300 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="container mx-auto px-6 z-10 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-primary font-mono mb-4 text-lg md:text-xl tracking-widest uppercase"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight tracking-tight max-w-4xl mx-auto"
        >
          <span className="hidden sm:inline">Ayobami Solomon Omotiba</span>
          <span className="sm:hidden">Ayobami Solomon</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl md:text-3xl lg:text-4xl text-accent/90 mb-12 h-16 font-medium flex items-center justify-center"
        >
          <span className="mr-3">I am a</span>
          <span className="text-primary font-semibold">
            <Typewriter
              words={[
                'Frontend Developer',
                'Backend Developer',
                'Full Stack Developer (MERN)',
                'Mobile App Developer (React Native)',
                'Hosting & Deployment Specialist',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8"
        >
          <a
            href="/cv.pdf"
            download
            className="group relative flex items-center gap-3 px-10 py-4 bg-primary text-navy font-bold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
          >
            <FaDownload className="text-xl group-hover:animate-bounce" />
            Download CV
          </a>
          
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="group flex items-center gap-3 px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-navy font-bold rounded-2xl transition-all duration-300 cursor-pointer active:scale-95 shadow-lg hover:shadow-primary/20"
          >
            <FaWhatsapp className="text-2xl" />
            Let's Talk
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-12 border-2 border-primary/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-primary rounded-full" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
