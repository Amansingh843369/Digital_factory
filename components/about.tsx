import { ArrowUpRight } from 'lucide-react'

const TECH = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Webflow', 'Node.js', 'Vercel']

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            What we do
          </p>
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
            We design &amp; develop exceptional websites, providing 24/7 technical support.
          </h2>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-background transition-transform hover:-translate-y-0.5"
          >
            Get started
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="lg:col-span-5">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Technology we use
          </p>
          <ul className="flex flex-wrap gap-3">
            {TECH.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
              >
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            From the first wireframe to launch day and beyond, we partner with you at every
            stage — combining strategy, design, and engineering into one seamless process.
          </p>
        </div>
      </div>
    </section>
  )
}
