import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-14 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-20">
        <div className="lg:col-span-7">
          <p className="mb-5 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-brand" />
            We are Nova
          </p>
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
            web design
            <span className="text-brand">*</span>
            <br />
            agency
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            A web design agency crafting clean, high-performing digital experiences — built
            for marketing, SEO, product launches, and everything in between.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              Get started
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:text-brand"
            >
              View our work
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-teal/25 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/hero-workspace.png"
                alt="Nova design team collaborating in a modern studio"
                width={720}
                height={720}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm">
              <span className="font-display text-3xl font-bold text-brand">4.9</span>
              <span className="text-xs font-medium leading-tight text-muted-foreground">
                Average client
                <br />
                rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
