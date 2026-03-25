import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <Field label="Name" name="name" type="text" required placeholder="Your name" />
      <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
      <Field label="Company or project" name="company" type="text" placeholder="Optional" />

      <div>
        <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.15em] text-dim block mb-2.5">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you building? What's the challenge? What does success look like?"
          className="w-full px-4 py-3 border border-rule rounded-lg text-ink text-sm placeholder:text-dim/40 bg-surface focus:outline-none focus:border-ink/30 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="px-5 py-2.5 rounded-full bg-ink text-white text-sm font-medium hover:bg-ink/80 transition-colors disabled:opacity-40"
      >
        {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-mark">
          Something went wrong — email us at{" "}
          <a href="mailto:hello@rigan.io" className="underline underline-offset-2">
            hello@rigan.io
          </a>
        </p>
      )}
      {status === "sent" && (
        <p className="text-sm text-ink/60">We'll be in touch within one business day.</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-[10px] uppercase tracking-[0.15em] text-dim block mb-2.5">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-rule rounded-lg text-ink text-sm placeholder:text-dim/40 bg-surface focus:outline-none focus:border-ink/30 transition-colors"
      />
    </div>
  );
}
