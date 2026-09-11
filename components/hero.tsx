import Image from 'next/image'
import { ArrowUpRight, Star } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-20 md:pt-28 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-24">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand"></span>
              </span>
              We are Digital Factory
            </p>
            
            <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
              Explore Endless <br />
              <span className="bg-gradient-to-r from-brand to-teal-400 bg-clip-text text-transparent">
                Digital Possibilities
              </span>
            </h1>
            
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Digital Factory helps businesses modernize operations through advanced technologies, smart automation, and digital transformation solutions. We enable organizations to build intelligent environments powered by data.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-all hover:-translate-y-1 hover:shadow-brand/40"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full px-6 py-4 text-sm font-semibold transition-colors hover:text-brand"
              >
                <span className="relative z-10">View Our Work</span>
                <div className="absolute inset-0 -z-10 scale-x-0 rounded-full bg-brand/10 transition-transform origin-left group-hover:scale-x-100" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-5 relative mt-10 lg:mt-0">
          <div className="relative mx-auto w-full max-w-md animate-in fade-in slide-in-from-right-8 duration-1000">
            {/* Background Blob behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand/20 to-teal-400/20 blur-2xl" />
            
            {/* Main Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/50 bg-muted/20 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/hero-workspace.png"
                alt="Digital Factory team collaborating"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-black/10 dark:ring-white/10" />
            </div>

            {/* Floating Glassmorphic Badge */}
            <div className="absolute -bottom-6 -left-8 flex animate-bounce items-center gap-4 rounded-2xl border border-white/20 bg-background/80 px-6 py-4 shadow-xl backdrop-blur-md [animation-duration:3s] dark:border-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                <Star className="h-6 w-6 fill-brand text-brand" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-2xl font-bold">4.9</span>
                  <span className="text-sm font-bold text-muted-foreground">/5</span>
                </div>
                <span className="text-xs font-medium leading-tight text-muted-foreground">
                  Client Rating
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}