import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Company',
    links: ['About Us', 'Our Services', 'Case Studies', 'Careers'],
  },
  {
    title: 'Quick links',
    links: ['Home', 'Pricing', 'Our Work', 'Contact'],
  },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* CTA */}
        <div className="grid gap-8 border-b border-white/10 py-16 md:grid-cols-2 md:items-end md:py-20">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Let&apos;s build something worth sharing.
          </h2>
          <div className="md:justify-self-end">
            <a
              href="mailto:hello@novaagency.com"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold uppercase tracking-wider text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid gap-10 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-2xl font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-brand-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-foreground" />
              </span>
              Nova
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/60">
              A web design &amp; development agency helping brands ship exceptional digital
              products with round-the-clock support.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-foreground/70">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand" /> +1 800 2534 236
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand" /> hello@novaagency.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand" /> 27 Division St, New York, NY 10002
              </li>
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-ink-foreground/70 transition-colors hover:text-brand"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nova Agency. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
