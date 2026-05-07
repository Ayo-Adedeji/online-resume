export function startSkillsCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  let animId;
  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
  resize();
  window.addEventListener('resize', resize);

  const CHARS = '01ReactNodeJS{}[]</>const async function export import await Promise';
  const cols = Math.ceil(window.innerWidth / 22);
  const drops = Array.from({ length: cols }, () => Math.random() * -60);

  // Initial dark fill
  ctx.fillStyle = '#04080f';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  function draw() {
    const W = canvas.width, H = canvas.height;
    // Fade trail
    ctx.fillStyle = 'rgba(4,8,15,0.07)';
    ctx.fillRect(0, 0, W, H);

    ctx.font = '13px monospace';
    drops.forEach((y, i) => {
      const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
      const alpha = Math.random() * 0.09 + 0.02;
      // Lead character brighter
      ctx.fillStyle = `rgba(232,196,106,${alpha * 2.5})`;
      ctx.fillText(ch, i * 22, y * 16);
      // Trail
      ctx.fillStyle = `rgba(201,168,76,${alpha})`;
      ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * 22, (y - 1) * 16);

      drops[i] += 0.35;
      if (drops[i] * 16 > H && Math.random() > 0.975) drops[i] = 0;
    });

    animId = requestAnimationFrame(draw);
  }
  draw();
  return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
}
