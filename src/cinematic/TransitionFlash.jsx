import React from 'react';

export default function TransitionFlash({ active }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9000,
        background: '#C9A84C',
        opacity: active ? 0.08 : 0,
        pointerEvents: 'none',
        transition: 'opacity 0.12s ease',
      }}
    />
  );
}
