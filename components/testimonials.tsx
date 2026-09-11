const TESTIMONIALS = [
  {
    name: 'Joe Marvin',
    role: 'CEO, Northwind',
    quote:
      'Nova rebuilt our marketing site from scratch and conversions jumped within weeks. The process was clear, fast, and genuinely collaborative.',
  },
  {
    name: 'Kate Johnson',
    role: 'Head of Product, Lumen',
    quote:
      'The team understood our product deeply and translated it into a design system we still use every day. Reliable, sharp, and a pleasure to work with.',
  },
  {
    name: 'Daniel Reyes',
    role: 'Founder, Maison',
    quote:
      'From branding to a full e-commerce build, they handled everything end to end. Support after launch has been just as strong as the delivery.',
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
      <div className="mb-10 md:mb-14">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          Testimonials
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">people say</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-7"
          >
            <div aria-hidden="true" className="font-display text-5xl leading-none text-brand">
              &ldquo;
            </div>
            <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-5">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
