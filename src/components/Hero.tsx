interface HeroProps {
  heading: string;
  subheading: string;
  cta: { label: string; href: string };
  secondary: { label: string; href: string };
}

export default function Hero({ heading, subheading, cta, secondary }: HeroProps) {
  return (
    <div style={{ backgroundImage: 'radial-gradient(#e5e5e5 1px, transparent 1px)', backgroundSize: '28px 28px' }}>
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
