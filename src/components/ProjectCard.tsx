interface ProjectCardProps {
  client: string;
  industry: string;
  engagement: string;
  summary: string;
  stack: string[];
  outcome: string;
}

export default function ProjectCard({
  client,
  industry,
  engagement,
  summary,
  stack,
  outcome,
}: ProjectCardProps) {
  return (
    <article className="border-t border-rule py-12 grid md:grid-cols-5 gap-8 md:gap-16">

      <div className="md:col-span-2 flex flex-col gap-2 pt-0.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-dim">{industry}</span>
        <span className="text-xs text-dim/60">{engagement}</span>
      </div>

      <div className="md:col-span-3 space-y-6">
        <p className="text-sm text-ink/80 leading-relaxed">{summary}</p>

        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 font-mono text-[10px] bg-surface text-dim border border-rule rounded"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="pt-6 border-t border-rule">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-dim block mb-1">
            Outcome
          </span>
          <p className="text-sm text-ink font-medium">{outcome}</p>
        </div>
      </div>

    </article>
  );
}
