interface CTAProps {
  heading: string;
  body: string;
  label: string;
  href: string;
}

export default function CTA({ heading, body, label, href }: CTAProps) {
  return (
    <section style={{ backgroundImage: 'linear-gradient(135deg, #0a0a0a 30%, #191970 70%, #2c3580 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="max-w-lg">
          <h2 className="text-title font-semibold text-white mb-2">{heading}</h2>
          <p className="text-white/60">{body}</p>
        </div>
        <a
          href={href}
          className="shrink-0 px-5 py-2.5 rounded-full text-white text-sm font-medium transition-opacity hover:opacity-80"
          style={{ backgroundImage: 'linear-gradient(135deg, #2c3580, #3d4aaa)' }}
        >
          {label}
        </a>
      </div>
    </section>
  );
}
