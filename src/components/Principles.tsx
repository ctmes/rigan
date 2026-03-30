const principles = [
  {
    n: "01",
    label: "Architecture first",
    body: "Good decisions early save months of pain later. We think before we build.",
  },
  {
    n: "02",
    label: "Small surface, deep craft",
    body: "We take on fewer engagements so each one gets our full attention.",
  },
  {
    n: "03",
    label: "Ship to learn",
    body: "Working software beats perfect plans. We deliver early and iterate fast.",
  },
  {
    n: "04",
    label: "No lock-in",
    body: "Your code, your systems, your team. We hand over everything — and leave you better off.",
  },
];

export default function Principles() {
  return (
    <section className="border-t border-rule bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-dim block mb-14">
          How we think
        </span>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule">
          {principles.map((p) => (
            <div
              key={p.n}
              className="bg-surface px-8 py-8 relative overflow-hidden"
            >
              <span aria-hidden="true" className="absolute bottom-1 right-2 font-mono text-[6rem] leading-none font-bold text-ink/[0.06] select-none pointer-events-none">
                {p.n}
              </span>
              <span className="font-mono text-[10px] text-dim block mb-4 relative">{p.n}</span>
              <h3
                className="text-sm font-semibold mb-3 tracking-tight relative"
                style={{
                  backgroundImage: 'linear-gradient(100deg, #191970, #2c3580)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >{p.label}</h3>
              <p className="text-sm text-dim leading-relaxed relative">{p.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
