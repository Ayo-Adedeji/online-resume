import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCanvas } from '../useCanvas';
import { startTestiCanvas } from '../canvases/testiCanvas';
import CinFooter from '../CinFooter';
import ScrollableContent from '../ScrollableContent';

import chefZoeyPhoto from '../../assets/1417owner.jpeg';

const TESTIMONIALS = [
  {
    quote: "This really projects a solution — not just a website. This is actually a solution for what I want to do. Not just for me as the owner, but even for the clients. This makes it easy and seamless.",
    name: 'Client',
    role: 'Project Manager, ServiceIS',
    photo: null,
  },
  {
    quote: "This is such a beautiful and well put together design. Honestly the speed at which it got done was mind blowing. Will definitely recommend your services.",
    name: 'Chef Zoey',
    role: 'Owner, 1417bychefzoey.com',
    photo: chefZoeyPhoto,
  },
  {
    quote: "I love this work. Very simple, no margins, and concise.",
    name: 'Client',
    role: 'Consulate Recruitment Agency, Project Manager',
    photo: null,
  },
];

function SpeakBars() {
  return (
    <div className="cin-speak-bars">
      {[6, 14, 10, 18, 8].map((h, i) => (
        <div key={i} className="cin-speak-bar" style={{ height: h, animationDelay: `${i * 0.1}s` }} />
      ))}
    </div>
  );
}

export default function TestimonialsSlide() {
  const canvasRef = useRef(null);
  useCanvas(canvasRef, startTestiCanvas);

  return (
    <div className="cin-slide">
      <canvas ref={canvasRef} className="cin-canvas" />
      <div className="cin-scanlines" />
      <div className="cin-vignette" />

      {/* Spotlight from top */}
      <div className="cin-spotlight" />

      <div className="cin-slide-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="cin-section-label">// CLIENT FEEDBACK</div>
          <h2 className="cin-section-title">TESTIMONIALS</h2>
          <div className="cin-gold-bar" />
        </motion.div>

        <ScrollableContent>
          <div className="cin-testi-grid">
            {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              className="cin-testi-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
              whileHover={{ y: -5, borderColor: 'rgba(201,168,76,0.5)' }}
            >
              <SpeakBars />
              <div className="cin-testi-stars">★★★★★</div>
              <p className="cin-testi-quote">"{t.quote}"</p>
              <div className="cin-testi-author">
                {t.photo && (
                  <img src={t.photo} alt={t.name} className="cin-testi-photo" />
                )}
                <div>
                  <div className="cin-testi-name">{t.name}</div>
                  <div className="cin-testi-role">{t.role}</div>
                </div>
              </div>
              <div className="cin-testi-bg-quote">"</div>
            </motion.div>
          ))}
        </div>
        </ScrollableContent>
      </div>

      <CinFooter />
    </div>
  );
}
