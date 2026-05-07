export function startContactCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  let animId, t = 0;
  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
  resize();
  window.addEventListener('resize', resize);

  function draw() {
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#04080f';
    ctx.fillRect(0, 0, W, H);

    // Corner gold glow
    const g = ctx.createRadialGradient(0, H, 0, 0, H, W * 0.65);
    g.addColorStop(0, 'rgba(201,168,76,0.12)');
    g.addColorStop(0.5, 'rgba(201,168,76,0.04)');
    g.addColorStop(1, 'rgba(201,168,76,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

    // Flowing diagonal streaks
    for (let i = 0; i < 9; i++) {
      const yOff = ((t * 28 + i * (H / 9)) % H);
      const gLine = ctx.createLinearGradient(0, yOff, W, yOff + 90);
      gLine.addColorStop(0, 'rgba(201,168,76,0)');
      gLine.addColorStop(0.4, `rgba(201,168,76,${0.055 - i * 0.004})`);
      gLine.addColorStop(1, 'rgba(201,168,76,0)');
      ctx.strokeStyle = gLine; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, yOff); ctx.lineTo(W, yOff + 80); ctx.stroke();
    }

    // Grid
    ctx.strokeStyle = 'rgba(201,168,76,0.022)'; ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    t += 0.005;
    animId = requestAnimationFrame(draw);
  }
  draw();
  return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
}
