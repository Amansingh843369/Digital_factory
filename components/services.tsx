import { ArrowUpRight } from 'lucide-react'

const SERVICES = [
  {
    n: '01.',
    title: 'UI/UX Design',
    text: 'Whether you are launching a new product or revamping an existing one, our design services are tailored to meet your unique needs.',
  },
  {
    n: '02.',
    title: 'Web Development',
    text: 'We design and build fully custom websites that align with your brand identity and business goals from the ground up.',
  },
  {
    n: '03.',
    title: 'Support & Care',
    text: 'Our team is ready to assist you any time, resolving issues quickly to minimize downtime and keep your site running.',
  },
]

export function Services() {
  return (
    <section id="services" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {SERVICES.map((s) => (
          <div
            key={s.n}
            className="grid items-center gap-4 border-b border-border py-10 last:border-b-0 md:grid-cols-12 md:gap-8 md:py-14"
          >
            <span className="font-display text-5xl font-bold tracking-tight md:col-span-2 md:text-6xl">
              {s.n}
            </span>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-5">
              {s.text}
            </p>
            <div className="flex items-center justify-between gap-4 md:col-span-5 md:justify-end md:gap-8">
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                {s.title}
              </h2>
              <a
                href="#contact"
                aria-label={`View more about ${s.title}`}
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-foreground text-background transition-colors hover:bg-brand"
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
