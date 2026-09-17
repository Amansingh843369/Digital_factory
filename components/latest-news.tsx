"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const POSTS = [
  {
    date: "March 15, 2026",
    title: "Understanding Zero Trust Architecture in Modern Workspaces",
    excerpt: "Never trust, always verify. Learn how implementing a Zero Trust security model can protect your distributed workforce from internal and external threats.",
    img: "/1.jpg", 
  },
  {
    date: "March 02, 2026",
    title: "Ransomware Trends: How to Protect Your Critical Data",
    excerpt: "Ransomware attacks are becoming more sophisticated. Discover the latest trends and the proactive measures your enterprise must take to stay secure.",
    img: "/2.jpg",
  },
  {
    date: "February 18, 2026",
    title: "Why Regular VAPT is Crucial for E-commerce Platforms",
    excerpt: "Customer data is your biggest asset. We break down why regular Vulnerability Assessments and Penetration Testing are non-negotiable for online retailers.",
    img: "/3.png",
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
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32 [text-align:justify]">
        
        {/* ================= HEADER SECTION ================= */}
        <motion.div 
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="max-w-2xl  text-justify">
            <motion.span variants={fadeInUp} className="mb-4 block text-[13px] font-bold uppercase tracking-wider text-[#C46A42]">
              Security Insights
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl leading-[1.1] tracking-tight text-neutral-900 md:text-5xl lg:text-[52px]">
              Latest from the Blog
            </motion.h2>
          </div>
          
          <motion.div variants={fadeInUp}>
            <Link 
              href="/blog" 
              className="group inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-wider text-neutral-900 transition-colors hover:text-[#C46A42]"
            >
              View all posts
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* ================= BLOG GRID ================= */}
        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {POSTS.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeInUp}
              className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-neutral-200/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(196,106,66,0.15)] hover:border-[#C46A42]/30 text-left"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                <Image
                  src={p.img || '/placeholder.svg'}
                  alt={p.title}
                  width={600}
                  height={375}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-neutral-900/5 transition-colors group-hover:bg-transparent" />
              </div>
              
              {/* Content Container (flex-1 and mt-auto strictly align everything) */}
              <div className="flex flex-1 flex-col p-6 sm:p-8 [text-align:justify]">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {p.date}
                </p>
                <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-neutral-900 group-hover:text-[#C46A42] transition-colors duration-300 text-pretty">
                  {p.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-600 text-pretty">
                  {p.excerpt}
                </p>
                
                {/* mt-auto pushes this link to the absolute bottom of the card */}
                <Link
                  href={`/blog/${p.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="mt-auto pt-8 flex w-fit items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-neutral-900 transition-colors duration-300 hover:text-[#C46A42]"
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