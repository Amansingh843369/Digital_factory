import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const POSTS = [
  {
    date: 'December 21, 2025',
    title: 'The basics of blogging for search optimization',
    excerpt: 'Want to know the one thing every successful digital marketer does first to make sure they get the most out of every post?',
    img: '/images/project-2.png',
  },
  {
    date: 'December 14, 2025',
    title: 'Designing landing pages that actually convert',
    excerpt: 'Small structural choices make a big difference. Here is how we approach hierarchy, copy, and calls to action.',
    img: '/images/project-1.png',
  },
  {
    date: 'December 02, 2025',
    title: 'Why a design system pays for itself',
    excerpt: 'A shared component library keeps teams fast and consistent. We break down when to invest and how to start small.',
    img: '/images/project-3.png',
  },
]

export function LatestNews() {
  return (
    <section id="blog" className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        <div className="mb-10 md:mb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Latest from the blog
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">latest news</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={p.img || '/placeholder.svg'}
                  alt={p.title}
                  width={600}
                  height={375}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{p.date}</p>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight text-balance">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <a
                  href="#blog"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-brand"
                >
                  Read more
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
