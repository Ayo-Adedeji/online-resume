import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    { icon: <FaEnvelope />, href: 'mailto:dasammayo@gmail.com', label: 'Email' },
    { icon: <FaPhoneAlt />, href: 'tel:+2349031978634', label: 'Phone' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/ayobami-omotiba-926232239/', label: 'LinkedIn' },
  ];

  return (
    <footer className="py-12 bg-navy-dark text-white transition-colors duration-300 border-t border-white/5 relative overflow-hidden min-h-[40vh] flex flex-col justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-1 tracking-tight text-white">
              <span className="text-primary">COST</span>
            </h2>
            <p className="text-accent/50 text-xs font-mono tracking-widest uppercase mb-3">
              Code Of Solomon Technologies
            </p>
            <p className="text-accent/60 text-sm max-w-xs leading-relaxed">
              Building modern, high-performance digital solutions with the latest web technologies.
            </p>
          </div>

          {/* Social/Contact Icons */}
          <div className="flex items-center gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ y: -3, scale: 1.05 }}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent hover:text-primary border border-white/5 hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-lg">{link.icon}</span>
              </motion.a>
            ))}
          </div>

          {/* Scroll to Top */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="w-12 h-12 rounded-xl bg-white/5 text-accent border border-white/5 hover:bg-primary hover:text-navy transition-all duration-300 cursor-pointer flex items-center justify-center shadow-lg"
          >
            <FaChevronUp size={20} />
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-accent/40 text-xs font-medium uppercase tracking-widest">
          <p>© {currentYear} Code Of Solomon Technologies</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
