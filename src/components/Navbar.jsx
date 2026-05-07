import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { 
  HiOutlineHome, 
  HiOutlineUser, 
  HiOutlineChip, 
  HiOutlineBriefcase, 
  HiOutlineCollection, 
  HiOutlineMail 
} from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'services', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home', icon: <HiOutlineHome /> },
    { name: 'About', to: 'about', icon: <HiOutlineUser /> },
    { name: 'Skills', to: 'skills', icon: <HiOutlineChip /> },
    { name: 'Services', to: 'services', icon: <HiOutlineBriefcase /> },
    { name: 'Portfolio', to: 'portfolio', icon: <HiOutlineCollection /> },
    { name: 'Contact', to: 'contact', icon: <HiOutlineMail /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy-dark/90 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <motion.img 
            src={logo} 
            alt="Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              onSetActive={() => setActiveSection(link.to)}
              className={`flex items-center gap-2 cursor-pointer text-[15px] font-medium transition-all duration-300 nav-link-underline py-2
                ${activeSection === link.to ? 'text-primary after:w-full' : 'text-accent/80 hover:text-primary'}`}
            >
              <span className="text-lg">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 hover:bg-white/5 rounded-xl transition-colors"
          >
            {isOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-[-1]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-[280px] bg-navy-dark shadow-2xl lg:hidden z-50 border-l border-white/5"
            >
              <div className="flex flex-col p-8 space-y-6 pt-24">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-white p-2 hover:bg-white/5 rounded-xl transition-colors"
                >
                  <HiX size={32} />
                </button>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 text-xl font-medium transition-all duration-300
                      ${activeSection === link.to ? 'text-primary' : 'text-accent/80 hover:text-primary'}`}
                  >
                    <span className="text-2xl">{link.icon}</span>
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
