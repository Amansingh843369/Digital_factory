"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Naya Content: Penetration Testing, Digital Marketing, Software Development
const POSTS = [
  {
    date: "April 10, 2026",
    title: "Advanced Penetration Testing: Finding Flaws Before Hackers Do",
    excerpt: "Modern cyber threats require proactive defense. Discover how comprehensive VAPT techniques uncover hidden vulnerabilities in your enterprise networks.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", 
    tag: "Cybersecurity"
  },
  {
    date: "March 28, 2026",
    title: "Building Resilience: Secure Software Development Lifecycle (SDLC)",
    excerpt: "Security shouldn't be an afterthought. Learn how to integrate robust security protocols directly into your software engineering and coding processes.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tag: "Software Engineering"
  },
  {
    date: "March 15, 2026",
    title: "Data-Driven Digital Marketing: Scaling Your Tech Brand",
    excerpt: "Leverage advanced analytics, SEO, and targeted campaigns to build brand authority and drive high-quality enterprise leads in a competitive market.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tag: "Digital Marketing"
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export function LatestNews() {
  return (
    <section id="blog" className="w-full border-t border-neutral-200/60 bg-[#FAF7F2] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        
        {/* ================= HEADER SECTION ================= */}
        <motion.div 
          className="mb-10 sm:mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="max-w-2xl text-left md:text-justify">
            <motion.span variants={fadeInUp} className="mb-3 sm:mb-4 block text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#C46A42]">
              Industry Insights & News
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl leading-[1.15] tracking-tight text-neutral-900 md:text-5xl lg:text-[52px]">
              Latest from the Blog
            </motion.h2>
          </div>
          
          <motion.div variants={fadeInUp}>
            <Link 
              href="/blog" 
              className="group inline-flex items-center gap-2 text-sm sm:text-[15px] font-bold uppercase tracking-wider text-neutral-900 transition-colors hover:text-[#C46A42]"
            >
              View all posts
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* ================= BLOG GRID ================= */}
        <motion.div 
          className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {POSTS.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeInUp}
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-neutral-200/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(196,106,66,0.15)] hover:border-[#C46A42]/30 text-left"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-neutral-900/10 transition-colors group-hover:bg-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wide text-neutral-800">
                    {p.tag}
                  </span>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-8">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {p.date}
                </p>
                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold leading-snug tracking-tight text-neutral-900 group-hover:text-[#C46A42] transition-colors duration-300 text-pretty">
                  {p.title}
                </h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-[15px] leading-relaxed text-neutral-600 text-pretty">
                  {p.excerpt}
                </p>
                
                {/* Read More Link (Pushed to bottom) */}
                <Link
                  href={`/blog/${p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="mt-auto pt-6 sm:pt-8 flex w-fit items-center gap-2 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-neutral-900 transition-colors duration-300 hover:text-[#C46A42]"
                >
                  Read full article
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}