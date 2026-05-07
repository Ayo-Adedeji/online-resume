import React from 'react';
import logo from '../assets/logo.png';

export default function CinematicNav({ slides, current, goTo }) {
  const navSlides = slides.filter(s => !['work2'].includes(s.id));

  return (
    <nav className="cin-nav">
      <img src={logo} alt="COST" className="cin-logo" />
      <div className="cin-nav-links">
        {navSlides.map((s) => {
          const idx = slides.findIndex(sl => sl.id === s.id);
          const isActive = current === idx || (s.id === 'work' && current === 4);
          return (
            <button
              key={s.id}
              className={`cin-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => goTo(idx)}
            >
              {s.label}
              {isActive && <span className="cin-nav-dot" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
