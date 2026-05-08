import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCanvas } from '../useCanvas';
import { startWorkCanvas } from '../canvases/workCanvas';
import serviceis from '../../assets/serviceis.png';
import consulateRecruitment from '../../assets/consulaterecruitment.png';
import CinFooter from '../CinFooter';
import ScrollableContent from '../ScrollableContent';

const PROJECTS = [
  {
    title: 'Service Request Platform',
    desc: 'Home service platform — repairs, support, and device purchases delivered to your doorstep.',
    tech: ['React', 'Node.js', 'Supabase', 'Paystack', 'Framer Motion'],
    live: 'https://serviceisng.com',
    image: serviceis,
  },
  {
    title: 'Consulate Recruitment Agency',
    desc: 'Staffing platform for management, cleaning & corporate roles with admin-controlled listings.',
    tech: ['React', 'Supabase', 'Framer Motion'],
    live: 'https://consulaterecruitment.co.uk',
    image: consulateRecruitment,
  },
];

export default function WorkSlide() {
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
            <div className="cin-section-label">// FEATURED WORK</div>
            <h2 className="cin-section-title" style={{ marginBottom: 0 }}>
              SELECTED <span className="gold">PROJECTS</span>
            </h2>
          </div>
          <span className="cin-slide-counter">01 — 02 / 05 →</span>
        </motion.div>
        <div className="cin-gold-bar" style={{ margin: '8px 0 24px' }} />

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
        </ScrollableContent>
      </div>

      <CinFooter />
    </div>
  );
}
