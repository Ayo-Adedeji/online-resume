import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSlide from './slides/HeroSlide';
import AboutSlide from './slides/AboutSlide';
import SkillsSlide from './slides/SkillsSlide';
import WorkSlide from './slides/WorkSlide';
import WorkSlide2 from './slides/WorkSlide2';
import TestimonialsSlide from './slides/TestimonialsSlide';
import ContactSlide from './slides/ContactSlide';
import CinematicNav from './CinematicNav';
import FilmReel from './FilmReel';
import TransitionFlash from './TransitionFlash';

import ServicesSlide from './slides/ServicesSlide';

const SLIDES = [
  { id: 'home',         label: 'Home',       component: HeroSlide },
  { id: 'about',        label: 'About',      component: AboutSlide },
  { id: 'skills',       label: 'Skills',     component: SkillsSlide },
  { id: 'services',     label: 'Services',   component: ServicesSlide },
  { id: 'work',         label: 'Work',       component: WorkSlide },
  { id: 'work2',        label: 'More Work',  component: WorkSlide2 },
  { id: 'testimonials', label: 'Reviews',    component: TestimonialsSlide },
  { id: 'contact',      label: 'Contact',    component: ContactSlide },
];

export default function CinematicPortfolio() {
  const [current, setCurrent] = useState(0);
  const [flashing, setFlashing] = useState(false);
  const [direction, setDirection] = useState(1);
  const wheelLock = useRef(false);
  const touchStart = useRef(0);
  const currentRef = useRef(0);

  // Keep currentRef in sync so event listeners always have latest value
  useEffect(() => { currentRef.current = current; }, [current]);

  const goTo = useCallback((n) => {
    const next = Math.max(0, Math.min(SLIDES.length - 1, n));
    if (next === currentRef.current) return;
    setDirection(next > currentRef.current ? 1 : -1);
    setFlashing(true);
    setTimeout(() => {
      setCurrent(next);
      setFlashing(false);
    }, 220);
  }, []);

  // Keyboard — register once
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(currentRef.current + 1);
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(currentRef.current - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo]);

  // Wheel — register once, longer lock to prevent multi-fire
  useEffect(() => {
    const onWheel = (e) => {
      if (wheelLock.current) return;
      wheelLock.current = true;
      goTo(currentRef.current + (e.deltaY > 0 ? 1 : -1));
      setTimeout(() => { wheelLock.current = false; }, 1400);
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [goTo]);

  // Touch — register once
  useEffect(() => {
    const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
      const dx = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 60) goTo(currentRef.current + (dx > 0 ? 1 : -1));
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [goTo]);

  const SlideComponent = SLIDES[current].component;

  const progress = ((current + 1) / SLIDES.length * 100).toFixed(1);

  return (
    <div className="cinematic-root">
      {/* Film grain */}
      <div className="cin-grain" />

      {/* Progress bar */}
      <div className="cin-progress" style={{ width: `${progress}%` }} />

      <TransitionFlash active={flashing} />
      <CinematicNav slides={SLIDES} current={current} goTo={goTo} />

      {/* Letterbox bars */}
      <div className="letterbox-top" />
      <div className="letterbox-bottom" />

      {/* Slide counter HUD */}
      <div className="hud-counter">
        <span className="hud-bracket">[</span>
        <span className="hud-num">{String(current + 1).padStart(2, '0')}</span>
        <span className="hud-sep"> / </span>
        <span className="hud-total">{String(SLIDES.length).padStart(2, '0')}</span>
        <span className="hud-bracket">]</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="slide-wrapper"
          initial={{ opacity: 0, x: direction * 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -80 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          <SlideComponent goTo={goTo} current={current} total={SLIDES.length} />
        </motion.div>
      </AnimatePresence>

      <FilmReel slides={SLIDES} current={current} goTo={goTo} />

      {/* Nav arrows */}
      {current > 0 && (
        <button className="cin-arrow cin-arrow-l" onClick={() => goTo(current - 1)}>&#8592;</button>
      )}
      {current < SLIDES.length - 1 && (
        <button className="cin-arrow cin-arrow-r" onClick={() => goTo(current + 1)}>&#8594;</button>
      )}
    </div>
  );
}