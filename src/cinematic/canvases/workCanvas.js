export function startWorkCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  let animId;
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    pts.forEach(p => { p.x = Math.random() * canvas.width; p.y = Math.random() * canvas.height; });
  };

  const pts = Array.from({ length: 55 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
  }));

  resize();
  window.addEventListener('resize', resize);

  function draw() {
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#04080f';
    ctx.fillRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = 'rgba(201,168,76,0.02)';
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // Move points
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });

    // Connections
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.strokeStyle = `rgba(201,168,76,${0.07 * (1 - dist / 130)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
        }
      }
    }

    // Dots
    pts.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(201,168,76,0.28)'; ctx.fill();
    });

    // Center glow
    const g = ctx.createRadialGradient(W * 0.5, H * 0.5, 0, W * 0.5, H * 0.5, W * 0.5);
    g.addColorStop(0, 'rgba(201,168,76,0.04)'); g.addColorStop(1, 'rgba(201,168,76,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

    animId = requestAnimationFrame(draw);
  }
  draw();
  return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
}
