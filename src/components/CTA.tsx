interface CTAProps {
  heading: string;
  body: string;
  label: string;
  href: string;
}

export default function CTA({ heading, body, label, href }: CTAProps) {
  return (
    <section className="bg-ink">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div className="max-w-lg">
          <h2 className="text-title font-semibold text-white mb-2">{heading}</h2>
          <p className="text-white/60">{body}</p>
        </div>
        <a
          href={href}
          className="shrink-0 px-5 py-2.5 rounded-full bg-white text-ink text-sm font-medium hover:bg-white/90 transition-colors"
        >
          {label}
        </a>
      </div>
    </section>
  );
}
