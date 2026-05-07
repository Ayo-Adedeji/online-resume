import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function CinFooter() {
  return (
    <div className="cin-footer-strip">
      <span className="cin-footer-logo">CO<span>ST</span></span>
      <span className="cin-footer-copy">© 2026 Code Of Solomon Technologies</span>
      <div className="cin-footer-links">
        <a href="mailto:dasammayo@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="tel:+2349031978634" aria-label="Phone">
          <FaPhone />
        </a>
        <a href="https://wa.me/2349031978634" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/ayobami-omotiba-926232239/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}
