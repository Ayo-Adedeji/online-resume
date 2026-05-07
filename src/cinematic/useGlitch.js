import { useState, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

export function useGlitch(text, trigger = true, delay = 0) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    let timeout;

    const run = () => {
      timeout = setTimeout(() => {
        let iterations = 0;
        const interval = setInterval(() => {
          setDisplay(
            text.split('').map((char, i) => {
              if (char === ' ') return ' ';
              if (i < iterations) return text[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            }).join('')
          );
          iterations += 0.5;
          if (iterations >= text.length) {
            clearInterval(interval);
            setDisplay(text);
          }
        }, 40);
      }, delay);
    };

    run();
    return () => clearTimeout(timeout);
  }, [text, trigger, delay]);

  return display;
}
