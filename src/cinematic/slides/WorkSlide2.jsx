import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCanvas } from '../useCanvas';
import { startWorkCanvas } from '../canvases/workCanvas';
import chefZoey from '../../assets/1417.png';
import consulateBooks from '../../assets/consulatebooks.png';
import ictware from '../../assets/ictware.png';
import CinFooter from '../CinFooter';
import ScrollableContent from '../ScrollableContent';

const PROJECTS = [
  {
    title: 'Chef Zoey — Food Ecosystem',
    desc: 'Cinematic food showcase — explore dishes and experience the full chef brand.',
    tech: ['React', 'Framer Motion', 'Formsubmit'],
    live: 'https://1417bychefzoey.com',
    image: chefZoey,
  },
  {
    title: 'Consulate Books',
    desc: 'E-bookstore with cart logic, Paystack checkout, and ebook delivery by email.',
    tech: ['React', 'Context API', 'Paystack', 'EmailJS'],
    live: 'https://consulatebooks.onrender.com',
    image: consulateBooks,
  },
];

const BANNER = {
  title: 'Digital Bridges Summit',
  subtitle: 'ICTWeare',
  desc: 'Event landing page · Live ticket sales · Horizontal scroll · Paystack',
  tech: ['React', 'Paystack', 'Framer Motion'],
  live: 'https://ictware.com',
  image: ictware,
};

export default function WorkSlide2() {
  const canvasRef = useRef(null);
  useCanvas(canvasRef, startWorkCanvas);

  return (
    <div className="cin-slide">
      <canvas ref={canvasRef} className="cin-canvas" />
      <div className="cin-scanlines" />
      <div className="cin-vignette" />

      <div className="cin-slide-content">
        <motion.div
          className="cin-work-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="cin-section-label">// MORE WORK</div>
            <h2 className="cin-section-title" style={{ marginBottom: 0 }}>
              MORE <span className="gold">PROJECTS</span>
            </h2>
          </div>
          <span className="cin-slide-counter">← 03 — 05 / 05</span>
        </motion.div>
        <div className="cin-gold-bar" style={{ margin: '8px 0 20px' }} />

        <ScrollableContent>
          <div className="cin-proj-grid">
            {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              className="cin-proj-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              <div className="cin-proj-img-wrap">
                <img src={p.image} alt={p.title} className="cin-proj-img" />
                <div className="cin-proj-overlay" />
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="cin-proj-live">
                  ↗ Live
                </a>
              </div>
              <div className="cin-proj-info">
                <div className="cin-proj-cat">▶ Featured Project</div>
                <div className="cin-proj-title">{p.title}</div>
                <div className="cin-proj-desc">{p.desc}</div>
                <div className="cin-proj-tags">
                  {p.tech.map((t, ti) => (
                    <span key={ti} className="cin-proj-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Digital Bridges banner */}
        <motion.div
          className="cin-banner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <img src={BANNER.image} alt={BANNER.title} className="cin-banner-img" />
          <div className="cin-banner-info">
            <div className="cin-banner-title">
              {BANNER.title} <span className="gold">— {BANNER.subtitle}</span>
            </div>
            <div className="cin-banner-desc">{BANNER.desc}</div>
            <div className="cin-proj-tags" style={{ marginTop: 8 }}>
              {BANNER.tech.map((t, ti) => (
                <span key={ti} className="cin-proj-tag">{t}</span>
              ))}
            </div>
          </div>
          <a href={BANNER.live} target="_blank" rel="noopener noreferrer" className="cin-proj-live" style={{ position: 'static', alignSelf: 'center' }}>
            ↗ Live
          </a>
        </motion.div>
        </ScrollableContent>
      </div>

      <CinFooter />
    </div>
  );
}
