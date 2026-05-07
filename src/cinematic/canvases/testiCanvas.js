export function startTestiCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  let animId, t = 0;
  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
  resize();
  window.addEventListener('resize', resize);

  const rings = Array.from({ length: 6 }, (_, i) => ({
    r: 80 + i * 110, speed: 0.003 + i * 0.001, alpha: 0.045 - i * 0.006,
  }));

  function draw() {
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#04080f';
    ctx.fillRect(0, 0, W, H);

    // Spotlight from top
    const spot = ctx.createRadialGradient(W * 0.5, 0, 0, W * 0.5, 0, H * 1.3);
    spot.addColorStop(0, 'rgba(201,168,76,0.1)');
    spot.addColorStop(0.35, 'rgba(201,168,76,0.04)');
    spot.addColorStop(1, 'rgba(201,168,76,0)');
    ctx.fillStyle = spot; ctx.fillRect(0, 0, W, H);

    // Pulsing rings
    rings.forEach((ring, i) => {
      const pulse = ring.r + Math.sin(t * ring.speed * 100 + i) * 18;
      ctx.beginPath();
      ctx.arc(W * 0.5, H * 0.5, pulse, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(201,168,76,${ring.alpha + Math.sin(t * 0.5 + i) * 0.012})`;
      ctx.lineWidth = 1; ctx.stroke();
    });

    // Grid
    ctx.strokeStyle = 'rgba(201,168,76,0.018)'; ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    t += 0.016;
    animId = requestAnimationFrame(draw);
  }
  draw();
  return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
}
