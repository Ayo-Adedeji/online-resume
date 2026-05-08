import React, { useRef } from 'react';

export default function ScrollableContent({ children, className = '' }) {
  const ref = useRef(null);
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div ref={ref} className={`cin-scroll-inner ${className}`}>
        {children}
      </div>
    </div>
  );
}
