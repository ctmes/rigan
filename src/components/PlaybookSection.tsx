interface PlaybookSectionProps {
  number: string;
  title: string;
  body: string;
  bullets: string[];
}

export default function PlaybookSection({ number, title, body, bullets }: PlaybookSectionProps) {
  return (
    <div className="py-12 grid md:grid-cols-5 gap-8 md:gap-16 group">

      <div className="md:col-span-2 flex flex-col gap-1">
        <span className="font-mono text-5xl font-bold text-ink/[0.08] leading-none mb-1">{number}</span>
        <h2 className="text-base font-semibold text-ink group-hover:text-mark transition-colors duration-200">
          {title}
        </h2>
      </div>

      <div className="md:col-span-3">
        <p className="text-dim leading-relaxed mb-7 text-sm">{body}</p>
        <ul className="space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-baseline gap-3 text-sm text-ink/80">
              <span className="w-3 h-px bg-rule flex-shrink-0 mt-2" />
              {b}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
