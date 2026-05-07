import React from 'react';
import { motion } from 'framer-motion';

const LABELS = ['HOME', 'ABOUT', 'SKILLS', 'SERVICES', 'WORK', 'MORE', 'REVIEWS', 'CONTACT'];

export default function FilmReel({ slides, current, goTo }) {
  return (
    <div className="cin-chapter-strip">
      {/* Vertical line */}
      <div className="cin-chapter-line" />

      {slides.map((s, i) => {
        const isActive = i === current;
        return (
          <button
            key={i}
            className={`cin-chapter-item ${isActive ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${LABELS[i] || s.label}`}
          >
            {/* Tick mark */}
            <div className="cin-chapter-tick" />

            {/* Label */}
            <motion.span
              className="cin-chapter-label"
              animate={{ opacity: isActive ? 1 : 0.35, x: isActive ? 0 : 4 }}
              transition={{ duration: 0.3 }}
            >
              {LABELS[i] || s.label}
            </motion.span>

            {/* Active dot */}
            {isActive && (
              <motion.div
                className="cin-chapter-dot"
                layoutId="chapter-dot"
                transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              />
            )}
          </button>
        );
      })}

      {/* Scene counter */}
      <div className="cin-chapter-counter">
        <span className="cin-chapter-num">{String(current + 1).padStart(2, '0')}</span>
        <span className="cin-chapter-total">/{String(slides.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}
