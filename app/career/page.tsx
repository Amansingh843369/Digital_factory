"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Rocket, 
  Users, 
  GraduationCap, 
  HeartHandshake, 
  Globe2, 
  Star, 
  X, 
  Upload,
  Code2,
  TrendingUp,
  ShieldCheck,
  Globe,
  ArrowUpRight
} from "lucide-react";

// --- Data ---
const openPositions = [
  { id: "marketing", title: "Digital Marketing Specialist", department: "Marketing", type: "Hybrid", icon: TrendingUp, points: ["Manage SEO, paid ads, & campaigns", "Analyze & optimize for high-yield results", "Collaborate with creative teams"] },
  { id: "web-dev", title: "Web Developer", department: "Engineering", type: "Remote", icon: Globe, points: ["Develop responsive corporate websites", "Work with React, Next.js, WordPress", "Ensure performance & scalability"] },
  { id: "software-eng", title: "Software Engineer", department: "Engineering", type: "Hybrid", icon: Code2, points: ["Design custom SaaS platforms", "Work on enterprise software solutions", "Full software development lifecycle"] },
  { id: "cyber-security", title: "Cyber Security Analyst", department: "Security", type: "On-site", icon: ShieldCheck, points: ["Monitor & respond to real-time threats", "Perform IT audits & VAPT", "Implement data protection strategies"] }
];

const cultureItems = [
  { icon: Rocket, title: "Innovation-First", desc: "We embrace new ideas and active experimentation." },
  { icon: Users, title: "Collaboration", desc: "Success is built together, across all teams." },
  { icon: GraduationCap, title: "Continuous Learning", desc: "Training and mentorship to fuel career growth." },
  { icon: HeartHandshake, title: "Work-Life Balance", desc: "Flexible schedules and a supportive culture." },
  { icon: Globe2, title: "Diversity", desc: "A workplace that respects and amplifies every perspective." }
];

// --- Framer Motion Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15 } }
};

export default function CareersPageFramer() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 selection:bg-white selection:text-black font-sans overflow-hidden">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          <motion.div variants={fadeUpVariant} className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-400 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Careers at Digital Factory
            </span>
          </motion.div>

          <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.05]">
            Shape the future of <br className="hidden md:block" />
            <span className="text-neutral-500">digital innovation.</span>
          </motion.h1>

          <motion.p variants={fadeUpVariant} className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 leading-relaxed">
            We don't just build apps and campaigns — we build careers. Be part of a dynamic workplace driven by creativity and execution.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="pt-4">
            <a href="#roles" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full font-medium transition-transform hover:scale-105 active:scale-95">
              Explore Open Roles
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= 2. BENTO GRID ROLES ================= */}
      <section id="roles" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Open Positions</h2>
            <p className="text-neutral-500 mt-2">Find where you belong.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {openPositions.map((job, idx) => {
              const Icon = job.icon;
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 80 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.04)" }}
                  className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] flex flex-col justify-between transition-colors cursor-pointer"
                  onClick={() => setSelectedJob(job.title)}
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/[0.05] text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.05] text-neutral-400">
                        {job.type}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-white transition-colors">{job.title}</h3>
                    
                    <div className="space-y-2">
                      {job.points.map((point, i) => (
                        <p key={i} className="text-sm text-neutral-400 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-neutral-600" />
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.05] flex items-center justify-between">
                    <span className="text-sm text-neutral-500">{job.department}</span>
                    <button className="flex items-center gap-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      Apply Now <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 3. CULTURE MARQUEE / GRID ================= */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">Life at Digital Factory</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {cultureItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                  className="flex-auto min-w-[280px] max-w-sm p-6 rounded-3xl bg-white/[0.03] border border-white/[0.05] text-center flex flex-col items-center"
                >
                  <Icon className="w-8 h-8 text-neutral-300 mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-400">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 4. TESTIMONIALS (Minimal Framer Style) ================= */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { quote: "The culture here is unmatched. Every project pushes you to innovate, and leadership trusts your vision.", author: "Priya S.", role: "Senior Engineer" },
            { quote: "I’ve grown more in one year at Digital Factory than in my entire career. It’s a place where creativity actually matters.", author: "Rahul V.", role: "Security Analyst" }
          ].map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.05]"
            >
              <div className="flex gap-1 mb-6 text-white">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xl md:text-2xl font-medium tracking-tight text-neutral-300 mb-8 leading-snug">
                "{t.quote}"
              </p>
              <div>
                <p className="text-white font-medium">{t.author}</p>
                <p className="text-sm text-neutral-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= 5. CTA SECTION ================= */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto rounded-[3rem] bg-white text-black p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter">Your next chapter.</h2>
            <p className="text-neutral-600 text-lg md:text-xl max-w-lg mx-auto">
              Join a team shaping the future of digital possibilities.
            </p>
            <div className="pt-4">
              <a href="#roles" className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 active:scale-95">
                View Openings
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= 6. FRAMER APPLY MODAL ================= */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 shadow-2xl z-10 text-white"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-medium tracking-tight mb-1">Apply for {selectedJob}</h3>
              <p className="text-sm text-neutral-500 mb-8">Fill out the form below and we'll be in touch.</p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSelectedJob(null); }}>
                <div>
                  <input type="text" placeholder="Full Name" required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-white/30 transition-colors" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-white/30 transition-colors" />
                </div>
                <div>
                  <label className="flex flex-col items-center justify-center w-full h-24 border border-dashed border-white/20 rounded-2xl cursor-pointer bg-white/[0.02] hover:bg-white/[0.05] transition-colors mt-2">
                    <Upload className="w-5 h-5 text-neutral-500 mb-2" />
                    <span className="text-xs text-neutral-400">Upload Resume (PDF)</span>
                    <input type="file" className="hidden" accept=".pdf" />
                  </label>
                </div>
                <button type="submit" className="w-full bg-white text-black font-medium py-3.5 rounded-2xl mt-4 hover:scale-[1.02] active:scale-[0.98] transition-transform">
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}