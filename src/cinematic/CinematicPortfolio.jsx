import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSlide from './slides/HeroSlide';
import AboutSlide from './slides/AboutSlide';
import SkillsSlide from './slides/SkillsSlide';
import ServicesSlide from './slides/ServicesSlide';
import WorkSlide from './slides/WorkSlide';
import WorkSlide2 from './slides/WorkSlide2';
import TestimonialsSlide from './slides/TestimonialsSlide';
import ContactSlide from './slides/ContactSlide';
import CinematicNav from './CinematicNav';
import FilmReel from './FilmReel';
import TransitionFlash from './TransitionFlash';

const SLIDES = [
  { id: 'home',         label: 'Home',      component: HeroSlide },
  { id: 'about',        label: 'About',     component: AboutSlide },
  { id: 'skills',       label: 'Skills',    component: SkillsSlide },
  { id: 'services',     label: 'Services',  component: ServicesSlide },
  { id: 'work',         label: 'Work',      component: WorkSlide },
  { id: 'work2',        label: 'More Work', component: WorkSlide2 },
  { id: 'testimonials', label: 'Reviews',   component: TestimonialsSlide },
  { id: 'contact',      label: 'Contact',   component: ContactSlide },
];

export default function CinematicPortfolio() {
  const [current, setCurrent] = useState(0);
  const [flashing, setFlashing] = useState(false);
  const [direction, setDirection] = useState(1);
  const currentRef = useRef(0);
  const rootRef = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

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

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goTo(currentRef.current + 1);
      if (e.key === 'ArrowLeft')  goTo(currentRef.current - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo]);

  // Touch swipe — only fires on clearly horizontal swipes
  // Vertical touches are left alone so scroll containers work
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    // Only trigger slide change if clearly horizontal (3:1 ratio) and 50px+
    // This lets vertical scrolls pass through untouched
    if (absDx >= 50 && absDx > absDy * 3) {
      goTo(currentRef.current + (dx > 0 ? 1 : -1));
    }
  }, [goTo]);

  // Mouse drag swipe — for desktop
  const mouseStartX = useRef(0);
  const mouseDown = useRef(false);

  const handleMouseDown = useCallback((e) => {
    mouseStartX.current = e.clientX;
    mouseDown.current = true;
  }, []);

  const handleMouseUp = useCallback((e) => {
    if (!mouseDown.current) return;
    mouseDown.current = false;
    const dx = mouseStartX.current - e.clientX;
    if (Math.abs(dx) >= 60) {
      goTo(currentRef.current + (dx > 0 ? 1 : -1));
    }
  }, [goTo]);

  const handleMouseLeave = useCallback(() => {
    mouseDown.current = false;
  }, []);

  const SlideComponent = SLIDES[current].component;
  const progress = ((current + 1) / SLIDES.length * 100).toFixed(1);

  return (
    <div
      className="cinematic-root"
      ref={rootRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'grab' }}
    >
      <div className="cin-grain" />
      <div className="cin-progress" style={{ width: `${progress}%` }} />
      <TransitionFlash active={flashing} />
      <CinematicNav slides={SLIDES} current={current} goTo={goTo} />
      <div className="letterbox-top" />
      <div className="letterbox-bottom" />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="slide-wrapper"
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -60 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <SlideComponent goTo={goTo} current={current} total={SLIDES.length} />
        </motion.div>
      </AnimatePresence>

      <FilmReel slides={SLIDES} current={current} goTo={goTo} />

      {/* Navigation arrows */}
      {current > 0 && (
        <button className="cin-arrow cin-arrow-l" onClick={() => goTo(current - 1)}>&#8592;</button>
      )}
      {current < SLIDES.length - 1 && (
        <button className="cin-arrow cin-arrow-r" onClick={() => goTo(current + 1)}>&#8594;</button>
      )}
    </div>
  );
}
