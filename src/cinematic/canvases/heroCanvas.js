// HERO — Cinematic dark city grid with gold data streams
export function startHeroCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  let animId, t = 0;
  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
  resize();
  window.addEventListener('resize', resize);

  // Horizontal data streams
  const streams = Array.from({ length: 18 }, (_, i) => ({
    y: Math.random(),
    speed: Math.random() * 0.0008 + 0.0003,
    width: Math.random() * 0.3 + 0.05,
    alpha: Math.random() * 0.18 + 0.04,
    x: Math.random(),
  }));

  // Floating particles
  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random(), y: Math.random(),
    vx: (Math.random() - 0.5) * 0.0003,
    vy: (Math.random() - 0.5) * 0.0003,
    r: Math.random() * 1.2 + 0.3,
    alpha: Math.random() * 0.5 + 0.1,
  }));

  function draw() {
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // Pure black base
    ctx.fillStyle = '#020408';
    ctx.fillRect(0, 0, W, H);

    // Perspective grid — vanishing point center
    ctx.strokeStyle = 'rgba(201,168,76,0.06)';
    ctx.lineWidth = 1;
    const vx = W * 0.5, vy = H * 0.5;
    for (let i = 0; i <= 20; i++) {
      const x = (i / 20) * W;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(vx, vy); ctx.stroke();
    }
    for (let i = 0; i <= 12; i++) {
      const y = (i / 12) * H;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Horizontal gold data streams
    streams.forEach(s => {
      s.x += s.speed;
      if (s.x > 1.2) s.x = -s.width;
      const grad = ctx.createLinearGradient(s.x * W, 0, (s.x + s.width) * W, 0);
      grad.addColorStop(0, 'rgba(201,168,76,0)');
      grad.addColorStop(0.3, `rgba(201,168,76,${s.alpha})`);
      grad.addColorStop(0.7, `rgba(232,196,106,${s.alpha * 0.6})`);
      grad.addColorStop(1, 'rgba(201,168,76,0)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(s.x * W, s.y * H);
      ctx.lineTo((s.x + s.width) * W, s.y * H);
      ctx.stroke();
    });

    // Gold center glow — like a sun behind the name
    const glow = ctx.createRadialGradient(W * 0.5, H * 0.48, 0, W * 0.5, H * 0.48, W * 0.38);
    glow.addColorStop(0, `rgba(201,168,76,${0.08 + Math.sin(t * 0.5) * 0.03})`);
    glow.addColorStop(0.5, 'rgba(201,168,76,0.02)');
    glow.addColorStop(1, 'rgba(201,168,76,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);

    // Floating particles
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
      if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${p.alpha * 0.4})`;
      ctx.fill();
    });

    // Scanlines
    for (let y = 0; y < H; y += 4) {
      ctx.fillStyle = 'rgba(0,0,0,0.04)';
      ctx.fillRect(0, y, W, 2);
    }

    t += 0.016;
    animId = requestAnimationFrame(draw);
  }
  draw();
  return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
}
