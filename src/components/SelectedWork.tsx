const work = [
  {
    n: "01",
    tag: "FinTech",
    title: "Real-time transaction pipeline",
    description: "50k+ events/day. Replaced a brittle spreadsheet workflow with an event-driven system.",
  },
  {
    n: "02",
    tag: "Quant / Asset Management",
    title: "Portfolio analytics platform",
    description: "Backtesting infrastructure across multiple market data vendors and internal factor models.",
  },
  {
    n: "03",
    tag: "B2B SaaS",
    title: "Monolith rescue",
    description: "2-week deploy cycle → on-demand. Observability, test coverage, team confidence restored.",
  },
];

export default function SelectedWork() {
  return (
    <section className="border-t border-rule">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="flex items-center justify-between mb-14">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-dim">Selected work</span>
          <a href="/case-studies" className="text-sm text-dim hover:text-ink transition-colors">
            All projects →
          </a>
        </div>

        <div className="divide-y divide-rule">
          {work.map((w) => (
            <a
              key={w.n}
              href="/case-studies"
              className="py-7 grid grid-cols-[2rem_1fr_auto] md:grid-cols-[2rem_1fr_14rem_auto] items-center gap-6 group hover:bg-surface transition-colors"
            >
              <span className="font-mono text-[10px] text-dim">{w.n}</span>
              <div>
                <h3 className="text-sm font-medium text-ink mb-0.5">{w.title}</h3>
                <p className="text-sm text-dim">{w.description}</p>
              </div>
              <span className="hidden md:block font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
                {w.tag}
              </span>
              <span className="text-dim group-hover:text-ink transition-colors text-sm">→</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
