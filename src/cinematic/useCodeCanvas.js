import { useEffect } from 'react';

// Cinematic "living code" canvas — real code lines scroll upward like a movie backdrop
const CODE_LINES = [
  "const buildFuture = async (vision) => {",
  "  const stack = ['React', 'Node.js', 'MongoDB'];",
  "  await deploy(vision, { env: 'production' });",
  "  return { status: 'shipped', quality: 'cinematic' };",
  "};",
  "function createExperience(client) {",
  "  const solution = new Platform(client.needs);",
  "  solution.connect(supabase).pay(paystack);",
  "  return solution.launch();",
  "}",
  "export const COST = {",
  "  name: 'Code Of Solomon Technologies',",
  "  mission: 'Build. Ship. Elevate.',",
  "  stack: ['MERN', 'React Native', 'Supabase'],",
  "};",
  "router.post('/request-service', auth, async (req, res) => {",
  "  const order = await Order.create(req.body);",
  "  await notify(order.client, 'Your request is live');",
  "  res.json({ success: true, order });",
  "});",
  "const Hero = () => (",
  "  <motion.section initial={{ opacity: 0 }}",
  "    animate={{ opacity: 1 }} className='hero'>",
  "    <h1>Ayobami Solomon Omotiba</h1>",
  "  </motion.section>",
  ");",
  "await mongoose.connect(process.env.MONGO_URI);",
  "const schema = new Schema({ title: String,",
  "  price: Number, status: { type: String,",
  "  default: 'pending' } });",
  "paystack.transaction.initialize({",
  "  email: user.email, amount: order.total * 100,",
  "  callback_url: '/payment/verify'",
  "});",
  "supabase.from('jobs').select('*')",
  "  .eq('status', 'active').order('created_at');",
  "const animate = { initial: { y: 60, opacity: 0 },",
  "  whileInView: { y: 0, opacity: 1 },",
  "  transition: { duration: 0.8 } };",
];

export function useCodeCanvas(canvasRef, options = {}) {
  const { opacity = 0.045, speed = 0.4 } = options;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let offset = 0;

    const FONT_SIZE = 13;
    const LINE_H = 22;
    const COL_W = 420;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Build columns of code
    const numCols = Math.ceil(window.innerWidth / COL_W) + 1;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep cinematic background gradient
      const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bg.addColorStop(0,   '#04080f');
      bg.addColorStop(0.5, '#060b18');
      bg.addColorStop(1,   '#030610');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle gold radial glow center
      const glow = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.45, 0,
        canvas.width * 0.5, canvas.height * 0.45, canvas.width * 0.55
      );
      glow.addColorStop(0,   'rgba(201,168,76,0.06)');
      glow.addColorStop(0.5, 'rgba(201,168,76,0.02)');
      glow.addColorStop(1,   'rgba(201,168,76,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Scrolling code columns
      ctx.font = `${FONT_SIZE}px 'Courier New', monospace`;
      offset = (offset + speed) % LINE_H;

      for (let col = 0; col < numCols; col++) {
        const x = col * COL_W + (col % 2 === 0 ? 0 : 30);
        const linesVisible = Math.ceil(canvas.height / LINE_H) + 2;
        const startLine = col * 7; // stagger columns

        for (let row = 0; row < linesVisible; row++) {
          const lineIdx = (startLine + row) % CODE_LINES.length;
          const line = CODE_LINES[lineIdx];
          const y = row * LINE_H - offset;

          // Fade near top and bottom
          const fadeTop    = Math.min(1, y / 120);
          const fadeBottom = Math.min(1, (canvas.height - y) / 120);
          const fade = Math.min(fadeTop, fadeBottom);

          // Color: keywords gold, strings muted, rest dim
          const isKeyword = /^(const|let|var|function|async|await|return|export|import|new|class)/.test(line.trim());
          const isComment = line.trim().startsWith('//');
          const isString  = line.includes("'") || line.includes('"');

          let baseAlpha = opacity * fade;
          if (isKeyword) baseAlpha *= 2.2;
          if (isComment) baseAlpha *= 0.6;

          if (isKeyword) {
            ctx.fillStyle = `rgba(201,168,76,${baseAlpha})`;
          } else if (isString) {
            ctx.fillStyle = `rgba(180,220,255,${baseAlpha * 0.8})`;
          } else {
            ctx.fillStyle = `rgba(140,160,200,${baseAlpha})`;
          }

          ctx.fillText(line, x, y);
        }
      }

      // Scanlines overlay
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillStyle = 'rgba(0,0,0,0.03)';
        ctx.fillRect(0, y, canvas.width, 2);
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef, opacity, speed]);
}
