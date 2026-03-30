import { useEffect, useRef } from "react";

interface HeroProps {
  heading: string;
  subheading: string;
  cta: { label: string; href: string };
  secondary: { label: string; href: string };
}

interface Dot {
  hx: number; hy: number;
  x: number;  y: number;
  vx: number; vy: number;
}

interface LayerDef {
  offsetX: number; offsetY: number;
  radius: number;  color: string;
  repelScale: number; waveScale: number;
  spring: number; damping: number;
}

interface Breeze {
  nx: number; ny: number;   // unit direction of travel
  progress: number;         // wave-front position along that axis
  speed: number;
  strength: number;
  maxProgress: number;
}

// Back-to-front: layer 2 drawn first, layer 0 on top
const LAYER_DEFS: LayerDef[] = [
  { offsetX: 7,  offsetY: 21, radius: 0.6, color: "#e8e8e8", repelScale: 0.2,  waveScale: 0.2,  spring: 0.025, damping: 0.94 },
  { offsetX: 14, offsetY: 14, radius: 1.0, color: "#dedede", repelScale: 0.5,  waveScale: 0.5,  spring: 0.05,  damping: 0.88 },
  { offsetX: 0,  offsetY: 0,  radius: 1.5, color: "#c8c8c8", repelScale: 1.0,  waveScale: 1.0,  spring: 0.08,  damping: 0.82 },
];

export default function Hero({ heading, subheading, cta, secondary }: HeroProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef  = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas  = canvasRef.current;
    if (!wrapper || !canvas) return;

    const ctx = canvas.getContext("2d")!;
    const SPACING = 28, REPEL_RADIUS = 70, REPEL_STRENGTH = 2.5;
    const WAVE_WIDTH = 50, SPAWN_INTERVAL = 3800;

    let W = 0, H = 0;
    let layers: Dot[][] = [];
    let breezes: Breeze[] = [];
    let cursor = { x: -999, y: -999 };
    let rafId: number;
    let lastSpawn = 0;

    function init() {
      W = canvas.width  = wrapper.offsetWidth;
      H = canvas.height = wrapper.offsetHeight;
      layers = LAYER_DEFS.map(({ offsetX, offsetY }) => {
        const dots: Dot[] = [];
        const startX = (SPACING / 2 + offsetX) % SPACING;
        const startY = (SPACING / 2 + offsetY) % SPACING;
        for (let x = startX; x < W; x += SPACING)
          for (let y = startY; y < H; y += SPACING)
            dots.push({ hx: x, hy: y, x, y, vx: 0, vy: 0 });
        return dots;
      });
    }

    function spawnBreeze() {
      // Any angle, but weighted toward diagonal/oblique directions
      const angle = Math.random() * Math.PI * 2;
      const nx = Math.cos(angle), ny = Math.sin(angle);
      const projs = [0, W * nx, H * ny, W * nx + H * ny];
      const minP = Math.min(...projs) - WAVE_WIDTH;
      const maxP = Math.max(...projs) + WAVE_WIDTH;
      breezes.push({
        nx, ny,
        progress: minP,
        speed: 1.6 + Math.random() * 1.0,
        strength: 0.22 + Math.random() * 0.14,
        maxProgress: maxP,
      });
    }

    function tick(time: number) {
      if (time - lastSpawn > SPAWN_INTERVAL + Math.random() * 1500) {
        spawnBreeze();
        lastSpawn = time;
      }

      for (let i = breezes.length - 1; i >= 0; i--) {
        breezes[i].progress += breezes[i].speed;
        if (breezes[i].progress > breezes[i].maxProgress) breezes.splice(i, 1);
      }

      ctx.clearRect(0, 0, W, H);

      for (let li = 0; li < LAYER_DEFS.length; li++) {
        const def = LAYER_DEFS[li];
        ctx.fillStyle = def.color;

        for (const d of layers[li]) {
          // Cursor repulsion
          const cdx = d.x - cursor.x, cdy = d.y - cursor.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
          if (cdist < REPEL_RADIUS && cdist > 0) {
            const f = ((REPEL_RADIUS - cdist) / REPEL_RADIUS) * REPEL_STRENGTH * def.repelScale;
            d.vx += (cdx / cdist) * f;
            d.vy += (cdy / cdist) * f;
          }

          // Breeze disturbance — planar wave front
          for (const b of breezes) {
            const proj = d.hx * b.nx + d.hy * b.ny;
            const delta = Math.abs(proj - b.progress);
            if (delta < WAVE_WIDTH) {
              const f = (1 - delta / WAVE_WIDTH) * b.strength * def.waveScale;
              d.vx += b.nx * f;
              d.vy += b.ny * f;
            }
          }

          // Spring + damping
          d.vx += (d.hx - d.x) * def.spring;
          d.vy += (d.hy - d.y) * def.spring;
          d.vx *= def.damping;
          d.vy *= def.damping;
          d.x  += d.vx;
          d.y  += d.vy;

          ctx.beginPath();
          ctx.arc(d.x, d.y, def.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafId = requestAnimationFrame(tick);
    }

    const onMove = (e: MouseEvent) => {
      const r = wrapper.getBoundingClientRect();
      cursor = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => { cursor = { x: -999, y: -999 }; };

    init();
    rafId = requestAnimationFrame(tick);
    wrapper.addEventListener("mousemove", onMove);
    wrapper.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(rafId);
      wrapper.removeEventListener("mousemove", onMove);
      wrapper.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 bg-white/55 pointer-events-none" />
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-28 relative">

        <div className="hero-fade-1 flex items-center gap-4 mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-dim">
            Rigan Software Studio
          </span>
          <span className="flex-1 h-px bg-rule" />
        </div>

        <h1 className="hero-fade-2 text-display font-semibold text-ink max-w-4xl mb-8">
          {heading}
        </h1>

        <div className="hero-fade-3 flex flex-col sm:flex-row sm:items-end justify-between gap-10">
          <p className="text-lg text-dim leading-relaxed max-w-xl font-light">
            {subheading}
          </p>

          <div className="flex items-center gap-5 shrink-0">
            <a
              href={cta.href}
              className="px-5 py-2.5 rounded-full bg-ink text-white text-sm font-medium hover:bg-ink/80 transition-colors"
            >
              {cta.label}
            </a>
            <a
              href={secondary.href}
              className="text-sm text-dim hover:text-ink transition-colors"
            >
              {secondary.label} →
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
