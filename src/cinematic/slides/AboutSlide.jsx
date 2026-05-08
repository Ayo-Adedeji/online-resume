import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCanvas } from '../useCanvas';
import { startAboutCanvas } from '../canvases/aboutCanvas';
import { useGlitch } from '../useGlitch';
import aboutPhoto from '../../assets/aboutme.jpeg';
import CinFooter from '../CinFooter';

export default function AboutSlide({ goTo }) {
  const canvasRef = useRef(null);
  useCanvas(canvasRef, startAboutCanvas);
  const title = useGlitch('FULL-STACK', true, 200);

  return (
    <div className="cin-slide">
      <canvas ref={canvasRef} className="cin-canvas" />
      <div className="cin-scanlines" />
      <div className="cin-vignette" />

      <div className="cin-slide-content">
        <div className="cin-about-grid">
          {/* Photo */}
          <motion.div
            className="cin-photo-wrap"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cin-photo-frame">
              <img src={aboutPhoto} alt="Ayobami Solomon Omotiba" className="cin-photo" />
              <div className="cin-photo-corner tl" />
              <div className="cin-photo-corner br" />
              <div className="cin-photo-glow" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="cin-about-text"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cin-section-label">// ABOUT ME</div>
            <h2 className="cin-section-title">
              I'm a <span className="gold">{title}</span><br />Developer
            </h2>
            <p className="cin-about-p">
              I build functional, accessible, and beautiful digital experiences.
              My core stack is the MERN stack — MongoDB, Express, React, Node.js —
              with growing expertise in React Native for mobile. Every project I
              ship is a solution, not just a website.
            </p>

            <div className="cin-stats">
              {[
                { n: '2+', l: 'Years' },
                { n: '10+', l: 'Clients' },
                { n: '10+', l: 'Projects' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="cin-stat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="cin-stat-n">{s.n}</div>
                  <div className="cin-stat-l">{s.l}</div>
                </motion.div>
              ))}
            </div>

            <button className="cin-btn-primary" onClick={() => goTo(7)}>
              ✉ Let's Talk
            </button>
          </motion.div>
        </div>
      </div>

      <CinFooter />
    </div>
  );
}
