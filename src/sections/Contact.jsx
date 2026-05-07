import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { FaPaperPlane, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-navy transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle title="Get In Touch" />

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            <a href="mailto:dasammayo@gmail.com" className="flex items-center gap-3 text-accent hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <FaEnvelope size={18} />
              </div>
              <span className="font-medium">dasammayo@gmail.com</span>
            </a>
            <a href="tel:+2349031978634" className="flex items-center gap-3 text-accent hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <FaPhoneAlt size={16} />
              </div>
              <span className="font-medium">+234 903 197 8634</span>
            </a>
            <a href="https://www.linkedin.com/in/ayobami-omotiba-926232239/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-accent hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <FaLinkedinIn size={18} />
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>
          </motion.div>

          {/* Contact Form */}
          <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-sm">
            <form
              action="https://formsubmit.co/dasammayo@gmail.com"
              method="POST"
              className="grid md:grid-cols-2 gap-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false }}
                className="space-y-2"
              >
                <label className="text-xs font-bold text-white uppercase tracking-widest ml-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-navy-light border border-white/10 focus:border-primary text-white outline-none transition-all shadow-inner"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
                className="space-y-2"
              >
                <label className="text-xs font-bold text-white uppercase tracking-widest ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-navy-light border border-white/10 focus:border-primary text-white outline-none transition-all shadow-inner"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
                className="space-y-2"
              >
                <label className="text-xs font-bold text-white uppercase tracking-widest ml-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+234..."
                  className="w-full px-6 py-4 rounded-2xl bg-navy-light border border-white/10 focus:border-primary text-white outline-none transition-all shadow-inner"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
                className="md:col-span-2 space-y-2"
              >
                <label className="text-xs font-bold text-white uppercase tracking-widest ml-1">Message</label>
                <textarea
                  name="message"
                  placeholder="How can I help you?"
                  required
                  rows="4"
                  className="w-full px-6 py-4 rounded-2xl bg-navy-light border border-white/10 focus:border-primary text-white outline-none transition-all shadow-inner resize-none"
                />
              </motion.div>

              <motion.div 
                className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: false }}
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-primary text-navy font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all"
                >
                  Send Message
                  <FaPaperPlane size={16} />
                </motion.button>

                <a
                  href="https://wa.me/2349031978634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 font-bold rounded-2xl hover:bg-[#25D366] hover:text-white transition-all group"
                >
                  <FaWhatsapp size="20" className="group-hover:animate-bounce" />
                  WhatsApp
                </a>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
