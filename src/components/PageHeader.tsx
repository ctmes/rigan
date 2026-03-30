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
      <h1
        className="text-title font-semibold mb-4"
        style={{
          backgroundImage: 'linear-gradient(100deg, #0a0a0a 0%, #191970 50%, #2c3580 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >{heading}</h1>
      <div className="mt-1 mb-4 h-[3px] w-12 rounded-full" style={{ backgroundImage: 'linear-gradient(to right, #191970, #2c3580)' }} />
      <p className="text-dim leading-relaxed">{body}</p>
    </div>
  );
}
