import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaLinkedin, FaShareAlt, FaExternalLinkSquareAlt } from 'react-icons/fa';

const Insights = () => {
  return (
    <section id="insights" className="py-24 bg-navy-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        <SectionTitle title="Insights" subtitle="I share my thoughts, experiences, and technical insights on LinkedIn." />

        <div className="max-w-4xl mx-auto bg-navy/50 dark:bg-white/5 rounded-3xl overflow-hidden border border-white/5 shadow-2xl hover:border-primary/40 transition-all duration-300 group">
          <div className="flex flex-col md:flex-row items-center gap-12 p-12 md:p-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative shrink-0"
            >
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors" />
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-navy flex items-center justify-center text-primary shadow-2xl border-4 border-primary/20">
                <FaLinkedin size={80} className="md:size-100" />
              </div>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center justify-center md:justify-start gap-4">
                Let's Connect <FaShareAlt className="text-primary text-2xl" />
              </h3>
              <p className="text-accent text-lg leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
                I regularly post content about full-stack development, modern web technologies, 
                and my learning journey. Join me for discussions on the latest industry trends 
                and technical deep dives.
              </p>
              
              <a
                href="https://www.linkedin.com/in/ayobami-omotiba-926232239/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-12 py-5 bg-primary text-navy font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 group-hover:shadow-primary/30"
              >
                View My LinkedIn
                <FaExternalLinkSquareAlt size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
