import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const POSTS = [
  {
    date: 'March 15, 2026',
    title: 'Understanding Zero Trust Architecture in Modern Workspaces',
    excerpt: 'Never trust, always verify. Learn how implementing a Zero Trust security model can protect your distributed workforce from internal and external threats.',
    img: '/1.jpg', 
  },
  {
    date: 'March 02, 2026',
    title: 'Ransomware Trends: How to Protect Your Critical Data',
    excerpt: 'Ransomware attacks are becoming more sophisticated. Discover the latest trends and the proactive measures your enterprise must take to stay secure.',
    img: '/2.jpg',
  },
  {
    date: 'February 18, 2026',
    title: 'Why Regular VAPT is Crucial for E-commerce Platforms',
    excerpt: 'Customer data is your biggest asset. We break down why regular Vulnerability Assessments and Penetration Testing are non-negotiable for online retailers.',
    img: '/3.png',
  },
];

export function LatestNews() {
  return (
    <section id="blog" className="w-full border-t border-neutral-200/60 bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        
        {/* ================= HEADER ================= */}
        <div className="mb-12 md:mb-16">
          <span className="mb-4 block text-[13px] font-bold uppercase tracking-wider text-[#C46A42]">
            Security Insights
          </span>
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-neutral-900 md:text-5xl lg:text-[52px]">
            Latest from the  Blog
          </h2>
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-neutral-200/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(196,106,66,0.15)] hover:border-[#C46A42]/30"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.img || '/placeholder.svg'}
                  alt={p.title}
                  width={600}
                  height={375}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Subtle overlay for better image contrast */}
                <div className="absolute inset-0 bg-neutral-900/5 transition-colors group-hover:bg-transparent" />
              </div>
              
              {/* Content Container */}
              <div className="flex flex-1 flex-col p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {p.date}
                </p>
                <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-neutral-900 group-hover:text-[#C46A42] transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-neutral-600">
                  {p.excerpt}
                </p>
                
                {/* Read More Link */}
                <a
                  href="#blog" // Replace with dynamic routing like `/blog/${p.slug}` in production
                  className="mt-8 flex w-fit items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-neutral-900 transition-colors duration-300 hover:text-[#C46A42]"
                >
                  Read full article
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
}