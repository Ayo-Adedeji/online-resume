import React from 'react';
import {
  HiOutlineHome, HiOutlineUser, HiOutlineLightningBolt,
  HiOutlineBriefcase, HiOutlineCollection, HiOutlineChatAlt2, HiOutlineMail,
} from 'react-icons/hi';

const NAV_ICONS = {
  home:         <HiOutlineHome />,
  about:        <HiOutlineUser />,
  skills:       <HiOutlineLightningBolt />,
  services:     <HiOutlineBriefcase />,
  work:         <HiOutlineCollection />,
  testimonials: <HiOutlineChatAlt2 />,
  contact:      <HiOutlineMail />,
};

export default function CinematicNav({ slides, current, goTo }) {
  const navSlides = slides.filter(s => s.id !== 'work2');

  return (
    <nav className="cin-nav">
      {/* COST text logo */}
      <div className="cin-nav-brand">
        <span className="cin-nav-brand-cost">CO</span>
        <span className="cin-nav-brand-st">ST</span>
      </div>

      <div className="cin-nav-links">
        {navSlides.map((s) => {
          const idx = slides.findIndex(sl => sl.id === s.id);
          const isActive = current === idx || (s.id === 'work' && current === slides.findIndex(sl => sl.id === 'work2'));
          return (
            <button
              key={s.id}
              className={`cin-nav-link ${isActive ? 'active' : ''}`}
              onClick={() => goTo(idx)}
              title={s.label}
            >
              {/* Icon always visible */}
              <span className="cin-nav-icon">{NAV_ICONS[s.id]}</span>
              {/* Label hidden on mobile */}
              <span className="cin-nav-txt">{s.label}</span>
              {isActive && <span className="cin-nav-dot" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
