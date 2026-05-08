import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCanvas } from '../useCanvas';
import { startWorkCanvas } from '../canvases/workCanvas';
import { HiOutlineCode, HiOutlineServer, HiOutlineCloudUpload, HiOutlineCheckCircle } from 'react-icons/hi';
import CinFooter from '../CinFooter';
import ScrollableContent from '../ScrollableContent';

const SERVICES = [
  {
    title: 'Frontend Development',
    icon: <HiOutlineCode />,
    color: '#61DAFB',
    items: [
      { label: 'Captivating UI Design',          desc: 'Engaging, pixel-perfect interfaces' },
      { label: 'Flawless Implementation',         desc: 'Designs brought to life seamlessly' },
      { label: 'Lightning-Fast Performance',      desc: 'Optimized for speed & responsiveness' },
      { label: 'Inclusive Accessibility',         desc: 'Built for every user' },
      { label: 'Collaborative Excellence',        desc: 'Teamwork-driven delivery' },
    ],
  },
  {
    title: 'Backend Development',
    icon: <HiOutlineServer />,
    color: '#339933',
    items: [
      { label: 'Database Management',   desc: 'Efficient data storage & retrieval' },
      { label: 'API Development',       desc: 'Scalable, secure REST APIs' },
      { label: 'Performance Tuning',    desc: 'Fine-tuned for speed & reliability' },
      { label: 'Security First',        desc: 'Protecting sensitive data' },
      { label: 'Cloud Integration',     desc: 'Scalable cloud-connected systems' },
    ],
  },
  {
    title: 'Hosting & Deployment',
    icon: <HiOutlineCloudUpload />,
    color: '#C9A84C',
    items: [
      { label: 'Reliable Hosting',         desc: 'Secure, dependable infrastructure' },
      { label: 'Scalable Architecture',    desc: 'Grows with your demand' },
      { label: 'Performance Monitoring',   desc: 'Always-on speed & uptime' },
      { label: 'Security Hardening',       desc: 'Protection against threats' },
      { label: '24/7 Support',             desc: 'Always available for you' },
    ],
  },
];

export default function ServicesSlide() {
  const canvasRef = useRef(null);
  useCanvas(canvasRef, startWorkCanvas);

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
          <div className="cin-section-label">// WHAT I OFFER</div>
          <h2 className="cin-section-title">MY <span className="gold">SERVICES</span></h2>
          <div className="cin-gold-bar" />
        </motion.div>

        <ScrollableContent>
          <div className="svc-grid">
            {SERVICES.map((svc, si) => (
            <motion.div
              key={si}
              className="svc-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + si * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, borderColor: svc.color }}
            >
              {/* Card header */}
              <div className="svc-header">
                <span className="svc-icon" style={{ color: svc.color }}>{svc.icon}</span>
                <div>
                  <div className="svc-title">{svc.title}</div>
                  <div className="svc-bar" style={{ background: svc.color }} />
                </div>
              </div>

              {/* Items */}
              <ul className="svc-items">
                {svc.items.map((item, ii) => (
                  <motion.li
                    key={ii}
                    className="svc-item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + si * 0.12 + ii * 0.05 }}
                  >
                    <HiOutlineCheckCircle className="svc-check" style={{ color: svc.color }} />
                    <div>
                      <span className="svc-item-label">{item.label}</span>
                      <span className="svc-item-desc">{item.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        </ScrollableContent>
      </div>

      <CinFooter />
    </div>
  );
}
