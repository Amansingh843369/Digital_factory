import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Ledger — Fintech App',
    category: 'UI/UX · Mobile',
    img: '/images/project-1.png',
  },
  {
    title: 'Maison — E-commerce',
    category: 'Web Development',
    img: '/images/project-2.png',
  },
  {
    title: 'Atlas — Brand Identity',
    category: 'Branding · Design',
    img: '/images/project-3.png',
  },
]

export function Projects() {
  return (
    <section id="work" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              What we&apos;ve done
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">projects</h2>
          </div>
          <p className="hidden max-w-xs text-sm leading-relaxed text-ink-foreground/60 md:block">
            A selection of recent work across product, web, and brand.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href="#contact"
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-brand/60"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={p.img || '/placeholder.svg'}
                  alt={p.title}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-brand">{p.category}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{p.title}</h3>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
