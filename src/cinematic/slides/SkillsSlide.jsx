import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCanvas } from '../useCanvas';
import { startSkillsCanvas } from '../canvases/skillsCanvas';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiTailwindcss, SiSupabase } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import CinFooter from '../CinFooter';
import ScrollableContent from '../ScrollableContent';

const FRONTEND = [
  { name: 'HTML5',        icon: <FaHtml5 />,           color: '#E34F26', level: 95 },
  { name: 'CSS3',         icon: <FaCss3Alt />,          color: '#1572B6', level: 92 },
  { name: 'JavaScript',   icon: <FaJs />,               color: '#F7DF1E', level: 90 },
  { name: 'TypeScript',   icon: <SiTypescript />,       color: '#3178C6', level: 80 },
  { name: 'React.js',     icon: <FaReact />,            color: '#61DAFB', level: 93 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />,      color: '#06B6D4', level: 90 },
  { name: 'React Native', icon: <TbBrandReactNative />, color: '#61DAFB', level: 75 },
  { name: 'Git / GitHub', icon: <FaGithub />,           color: '#ffffff', level: 85 },
];

const BACKEND = [
  { name: 'Node.js',   icon: <FaNodeJs />,   color: '#339933', level: 88 },
  { name: 'Express',   icon: <SiExpress />,  color: '#ffffff', level: 85 },
  { name: 'MongoDB',   icon: <SiMongodb />,  color: '#47A248', level: 82 },
  { name: 'Supabase',  icon: <SiSupabase />, color: '#3ECF8E', level: 80 },
  { name: 'REST APIs', icon: null,           color: '#C9A84C', level: 88 },
];

function SkillCard({ sk, index }) {
  return (
    <motion.div
      className="sk-card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, borderColor: sk.color }}
    >
      <div className="sk-card-top">
        <span className="sk-icon" style={{ color: sk.color }}>
          {sk.icon || <span style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, letterSpacing: 1 }}>API</span>}
        </span>
        <span className="sk-name">{sk.name}</span>
      </div>
      <div className="sk-bar-track">
        <motion.div
          className="sk-bar-fill"
          style={{ background: sk.color }}
          initial={{ width: 0 }}
          animate={{ width: `${sk.level}%` }}
          transition={{ delay: 0.4 + index * 0.07, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span className="sk-level">{sk.level}%</span>
    </motion.div>
  );
}

export default function SkillsSlide() {
  const canvasRef = useRef(null);
  useCanvas(canvasRef, startSkillsCanvas);

  return (
    <div className="cin-slide">
      <canvas ref={canvasRef} className="cin-canvas" />
      <div className="cin-scanlines" />
      <div className="cin-vignette" />

      <div className="cin-slide-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 24 }}
        >
          <div className="cin-section-label">// TECH STACK</div>
          <h2 className="cin-section-title">MY <span className="gold">SKILLS</span></h2>
          <div className="cin-gold-bar" />
        </motion.div>

        <div className="sk-panels">
          {/* Frontend panel */}
          <div className="sk-panel">
            <div className="sk-panel-title">
              <span className="sk-panel-dot" style={{ background: '#61DAFB' }} />
              Frontend
            </div>
            <div className="sk-grid">
              {FRONTEND.map((sk, i) => <SkillCard key={i} sk={sk} index={i} />)}
            </div>
          </div>

          {/* Divider */}
          <div className="sk-divider" />

          {/* Backend panel */}
          <div className="sk-panel">
            <div className="sk-panel-title">
              <span className="sk-panel-dot" style={{ background: '#339933' }} />
              Backend
            </div>
            <div className="sk-grid">
              {BACKEND.map((sk, i) => <SkillCard key={i} sk={sk} index={i} />)}
            </div>
          </div>
        </div>
      </div>

      <CinFooter />
    </div>
  );
}
