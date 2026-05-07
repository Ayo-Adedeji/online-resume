// ABOUT — Deep space with slow gold nebula clouds and star clusters
export function startAboutCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  let animId, t = 0;
  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
  resize();
  window.addEventListener('resize', resize);

  // Star clusters
  const stars = Array.from({ length: 180 }, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random() * 1.5 + 0.2,
    twinkle: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.02 + 0.005,
    base: Math.random() * 0.4 + 0.1,
  }));

  // Nebula clouds (slow drifting blobs)
  const nebulae = [
    { x: 0.2, y: 0.3, rx: 0.35, ry: 0.25, color: '201,168,76', alpha: 0.04 },
    { x: 0.75, y: 0.6, rx: 0.3, ry: 0.2, color: '30,80,180', alpha: 0.06 },
    { x: 0.5, y: 0.8, rx: 0.4, ry: 0.15, color: '201,168,76', alpha: 0.03 },
  ];

  function draw() {
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // Deep space black
    ctx.fillStyle = '#010306';
    ctx.fillRect(0, 0, W, H);

    // Nebula clouds
    nebulae.forEach((n, i) => {
      const drift = Math.sin(t * 0.08 + i) * 0.04;
      const g = ctx.createRadialGradient(
        (n.x + drift) * W, n.y * H, 0,
        (n.x + drift) * W, n.y * H, n.rx * W
      );
      g.addColorStop(0, `rgba(${n.color},${n.alpha})`);
      g.addColorStop(0.5, `rgba(${n.color},${n.alpha * 0.4})`);
      g.addColorStop(1, `rgba(${n.color},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    });

    // Twinkling stars
    stars.forEach(s => {
      s.twinkle += s.speed;
      const alpha = s.base + Math.sin(s.twinkle) * 0.15;
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220,210,180,${Math.max(0, alpha)})`;
      ctx.fill();
    });

    // Slow horizontal light sweep
    const sweepX = W * (0.1 + (Math.sin(t * 0.06) * 0.5 + 0.5) * 0.8);
    const sweep = ctx.createRadialGradient(sweepX, H * 0.4, 0, sweepX, H * 0.4, W * 0.5);
    sweep.addColorStop(0, 'rgba(201,168,76,0.05)');
    sweep.addColorStop(1, 'rgba(201,168,76,0)');
    ctx.fillStyle = sweep;
    ctx.fillRect(0, 0, W, H);

    // Scanlines
    for (let y = 0; y < H; y += 4) {
      ctx.fillStyle = 'rgba(0,0,0,0.035)';
      ctx.fillRect(0, y, W, 2);
    }

    t += 0.016;
    animId = requestAnimationFrame(draw);
  }
  draw();
  return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
}
