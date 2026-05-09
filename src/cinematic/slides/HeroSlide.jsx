import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useCanvas } from '../useCanvas';
import { startHeroCanvas } from '../canvases/heroCanvas';
import { useGlitch } from '../useGlitch';
import CinFooter from '../CinFooter';

export default function HeroSlide({ goTo }) {
  const canvasRef = useRef(null);
  useCanvas(canvasRef, startHeroCanvas);
  const name1 = useGlitch('AYOBAMI', true, 300);
  const name2 = useGlitch('SOLOMON', true, 600);
  const name3 = useGlitch('OMOTIBA', true, 900);

  return (
    <div className="cin-slide">
      <canvas ref={canvasRef} className="cin-canvas" />
      <div className="cin-scanlines" />

      {/* Cinematic vignette */}
      <div className="cin-vignette" />

      {/* Gold horizontal line — cinematic rule */}
      <motion.div
        className="cin-rule"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
      />

      <div className="cin-slide-content" style={{ textAlign: 'center' }}>
        {/* System boot label */}
        <motion.div
          className="cin-system-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="cin-blink">▶</span>
          &nbsp;SYSTEM ONLINE — FULL STACK DEVELOPER &amp; MOBILE ENGINEER
        </motion.div>

        {/* Name — cinematic large */}
        <motion.h1
          className="cin-hero-name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="cin-name-line">{name1}</span>
          <span className="cin-name-line gold">{name2}</span>
          <span className="cin-name-line">{name3}</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.p
          className="cin-hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          I build&nbsp;
          <span className="cin-typewriter">
            <Typewriter
              words={[
                'Web Applications',
                'Mobile Apps',
                'Digital Solutions',
                'Seamless Experiences',
                'React Native Apps',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={75}
              deleteSpeed={45}
              delaySpeed={1800}
            />
          </span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="cin-hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <a href="/cv.pdf" download className="cin-btn-primary">
            ↓ Download CV
          </a>
          <button className="cin-btn-outline" onClick={() => goTo(7)}>
            ✉ Let's Talk
          </button>
        </motion.div>

        {/* Swipe hint */}
        <motion.div
          className="cin-swipe-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <span className="cin-swipe-arrow">→</span>
          Swipe or press arrow keys to explore
        </motion.div>
      </div>

      <CinFooter />
    </div>
  );
}
