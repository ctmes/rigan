interface PageHeaderProps {
  label: string;
  heading: string;
  body: string;
}

export default function PageHeader({ label, heading, body }: PageHeaderProps) {
  return (
    <div className="max-w-2xl">
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-dim block mb-5">
        {label}
      </span>
      <h1 className="text-title font-semibold text-ink mb-4">{heading}</h1>
      <p className="text-dim leading-relaxed">{body}</p>
    </div>
  );
}
