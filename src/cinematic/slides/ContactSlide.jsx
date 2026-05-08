import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCanvas } from '../useCanvas';
import { startContactCanvas } from '../canvases/contactCanvas';
import { FaLinkedinIn, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import CinFooter from '../CinFooter';
import ScrollableContent from '../ScrollableContent';

export default function ContactSlide() {
  const canvasRef = useRef(null);
  useCanvas(canvasRef, startContactCanvas);

  return (
    <div className="cin-slide">
      <canvas ref={canvasRef} className="cin-canvas" />
      <div className="cin-scanlines" />
      <div className="cin-vignette" />

      <div className="cin-slide-content">
        <div className="cin-contact-wrap cin-scroll-inner">
          {/* Left */}
          <motion.div
            className="cin-contact-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cin-section-label">// GET IN TOUCH</div>
            <h2 className="cin-section-title">
              Let's Build<br /><span className="gold">Something</span><br />Extraordinary
            </h2>
            <p className="cin-contact-sub">
              Ready to turn your vision into a digital solution? Let's talk.
            </p>
            <div className="cin-contact-items">
              <a href="mailto:dasammayo@gmail.com" className="cin-contact-item">
                <div className="cin-contact-icon"><FaEnvelope /></div>
                dasammayo@gmail.com
              </a>
              <a href="tel:+2349031978634" className="cin-contact-item">
                <div className="cin-contact-icon"><FaPhone /></div>
                +234 903 197 8634
              </a>
              <a href="https://www.linkedin.com/in/ayobami-omotiba-926232239/" target="_blank" rel="noopener noreferrer" className="cin-contact-item">
                <div className="cin-contact-icon"><FaLinkedinIn /></div>
                LinkedIn
              </a>
            </div>

            {/* LinkedIn Insights strip */}
            <motion.a
              href="https://www.linkedin.com/in/ayobami-omotiba-926232239/"
              target="_blank"
              rel="noopener noreferrer"
              className="cin-linkedin-strip"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ borderColor: '#0A66C2', background: 'rgba(10,102,194,0.1)' }}
            >
              <FaLinkedinIn className="cin-linkedin-icon" />
              <div>
                <div className="cin-linkedin-title">Follow My Insights</div>
                <div className="cin-linkedin-sub">Full-stack dev tips, tech trends & my journey</div>
              </div>
              <span className="cin-linkedin-arrow">↗</span>
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              action="https://formsubmit.co/dasammayo@gmail.com"
              method="POST"
              className="cin-form"
            >
              <input type="hidden" name="_next" value="https://codeofsolomon.com" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="cin-form-row">
                <div className="cin-f-group">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="John Doe" required />
                </div>
                <div className="cin-f-group">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="cin-f-group">
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="+234..." />
              </div>
              <div className="cin-f-group">
                <label>Message</label>
                <textarea name="message" placeholder="Tell me about your project..." required rows={4} />
              </div>
              <div className="cin-form-btns">
                <button type="submit" className="cin-btn-primary">
                  ✈ Send Message
                </button>
                <a
                  href="https://wa.me/2349031978634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cin-btn-whatsapp"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <CinFooter />
    </div>
  );
}
