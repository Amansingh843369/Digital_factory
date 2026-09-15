"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowUpRight, 
  Rocket, 
  Users, 
  GraduationCap, 
  HeartHandshake, 
  Globe2, 
  Star, 
  CheckCircle2, 
  X, 
  Send,
  Upload,
  Code2,
  TrendingUp,
  ShieldCheck,
  Globe,
  Briefcase
} from "lucide-react";

// Job Positions Data
const openPositions = [
  {
    id: "marketing",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "Hybrid / Remote",
    icon: TrendingUp,
    points: [
      "Manage SEO, paid ads, and social media campaigns",
      "Analyze performance and optimize for results",
      "Collaborate with creative and development teams"
    ]
  },
  {
    id: "web-dev",
    title: "Web Developer",
    department: "Engineering",
    type: "Full-time",
    location: "On-site / Remote",
    icon: Globe,
    points: [
      "Develop responsive corporate and e-commerce websites",
      "Work with modern frameworks (React, Angular, WordPress)",
      "Ensure performance, security, and scalability"
    ]
  },
  {
    id: "software-eng",
    title: "Software Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Hybrid",
    icon: Code2,
    points: [
      "Design and develop custom applications and SaaS platforms",
      "Work on mobile apps and enterprise solutions",
      "Collaborate on full software development lifecycle"
    ]
  },
  {
    id: "cyber-security",
    title: "Cyber Security Analyst",
    department: "Security",
    type: "Full-time",
    location: "On-site",
    icon: ShieldCheck,
    points: [
      "Monitor and respond to security threats",
      "Perform IT audits, VAPT, and risk assessments",
      "Implement data protection and compliance strategies"
    ]
  }
];

// Culture Highlights
const cultureItems = [
  {
    icon: Rocket,
    title: "Innovation-First Mindset",
    desc: "We embrace new ideas and encourage active experimentation."
  },
  {
    icon: Users,
    title: "Collaboration & Teamwork",
    desc: "Success is built together, across all departments."
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    desc: "Training, certifications, and mentorship to fuel career growth."
  },
  {
    icon: HeartHandshake,
    title: "Work-Life Balance",
    desc: "Flexible schedules and a supportive work culture."
  },
  {
    icon: Globe2,
    title: "Diversity & Inclusion",
    desc: "A workplace that values every perspective."
  }
];

// Employee Testimonials
const testimonials = [
  {
    quote: "At Digital Factory, I’ve grown not just as a professional but as a person. The culture is supportive, and every project feels exciting.",
    author: "Team Member",
    role: "Senior Developer"
  },
  {
    quote: "I love how we’re encouraged to innovate and try new things. It’s a place where creativity truly matters.",
    author: "Team Member",
    role: "Security Analyst"
  }
];

// Framer Motion Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const springFadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 75, damping: 14 } }
};

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
    }, 2000);
  };

  return (
    <div className="bg-[#FAF7F2] text-neutral-900 min-h-screen font-sans selection:bg-[#C46A42] selection:text-white">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Soft Ambient Glows */}
        <div className="pointer-events-none absolute top-10 right-10 -z-10 h-[500px] w-[500px] rounded-full bg-[#C46A42]/10 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-10 -z-10 h-[400px] w-[400px] rounded-full bg-[#E5D5C5]/40 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div variants={springFadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C46A42]/20 bg-[#C46A42]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C46A42]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Careers at Digital Factory</span>
              </motion.div>

              <motion.h1 variants={springFadeUp} className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-neutral-900">
                Join the <br />
                <span className="italic font-normal text-[#C46A42]">
                  Digital Factory Team
                </span>
              </motion.h1>

              <motion.p variants={springFadeUp} className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed">
                Be part of a dynamic workplace where creativity, innovation, and collaboration drive success.
              </motion.p>

              <motion.div variants={springFadeUp} className="pt-2">
                <a
                  href="#open-positions"
                  className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#C46A42] hover:shadow-xl hover:shadow-[#C46A42]/20"
                >
                  <span>Explore Open Roles</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.div>
            </div>

            {/* Right Side Visual Image Box */}
         

          </motion.div>
        </div>
      </section>

      {/* ================= 2. INTRO COPY (FRAMER BENTO CARD) ================= */}
      <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 70 }}
          className="rounded-[2.5rem] border border-neutral-200/80 bg-white p-8 sm:p-14 shadow-xl shadow-neutral-900/5 text-center space-y-6 relative overflow-hidden"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C46A42]/10 blur-3xl" />
          
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            We Don't Just Build Tech — We Build Careers
          </h2>
          
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            At <strong className="text-neutral-900">Digital Factory</strong>, we believe our greatest asset is our people. We’re not just building websites, apps, and campaigns — we’re building careers, growth opportunities, and future leaders in the digital space.
          </p>

          <p className="text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto">
            If you’re passionate about technology, creativity, and innovation, and love solving challenges, you’ll feel right at home with us.
          </p>
        </motion.div>
      </section>

      {/* ================= 3. OPEN POSITIONS ================= */}
      <section id="open-positions" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C46A42]">Join Our Team</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-neutral-900">Open Positions</h2>
          <p className="text-neutral-600">Find the role where you can make the biggest impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openPositions.map((job, idx) => {
            const IconComp = job.icon;
            return (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 80 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col justify-between rounded-[2rem] border border-neutral-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#C46A42]/50 hover:shadow-2xl hover:shadow-[#C46A42]/10"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F2EB] text-[#C46A42] transition-colors group-hover:bg-[#C46A42] group-hover:text-white">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-[#F5F2EB] px-3.5 py-1 text-xs font-semibold text-neutral-600 border border-neutral-200/50">
                      {job.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2 group-hover:text-[#C46A42] transition-colors">
                    {job.title}
                  </h3>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-neutral-600">
                        <CheckCircle2 className="h-4 w-4 text-[#C46A42] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">{job.department}</span>
                  <button
                    onClick={() => handleApplyClick(job.title)}
                    className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#C46A42]"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= 4. CULTURE HIGHLIGHTS ================= */}
      <section className="py-24 bg-[#EFECE6] border-y border-neutral-300/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C46A42]">Culture Highlights</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-neutral-900">Life at Digital Factory</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, type: "spring" }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-neutral-300/60 bg-white p-8 shadow-sm hover:border-[#C46A42]/40 transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F2EB] text-[#C46A42] mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 5. EMPLOYEE TESTIMONIALS ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C46A42]">Employee Testimonials</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-neutral-900">What Our Team Says</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] bg-white p-8 sm:p-10 border border-neutral-200/80 shadow-md flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-[#C46A42]">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 text-lg italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <h4 className="font-bold text-neutral-900">{t.author}</h4>
                <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= 6. CLOSING CTA SECTION ================= */}
      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C46A42]/25 blur-[120px]" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="font-serif text-3xl sm:text-5xl leading-tight">
              Your Next Career Move Starts Here
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              Be part of a team shaping the future of digital.
            </p>
            <div className="pt-2">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-3 rounded-full bg-[#C46A42] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#b05c36] hover:shadow-lg hover:shadow-[#C46A42]/30"
              >
                <span>View Open Positions & Apply</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= 7. FRAMER APPLICATION MODAL ================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-white p-6 sm:p-8 shadow-2xl z-10 text-neutral-900 border border-neutral-200"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 text-neutral-500 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C46A42]/10 border border-[#C46A42]/20 text-[#C46A42]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">Application Submitted!</h3>
                  <p className="text-sm text-neutral-600">
                    Thank you for applying for <strong>{selectedJob}</strong>. Our team will contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C46A42]">Apply For Role</span>
                    <h3 className="text-2xl font-serif font-bold text-neutral-900 mt-1">{selectedJob}</h3>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-neutral-200 bg-[#FAF7F2] px-4 py-3 text-sm focus:border-[#C46A42] focus:outline-none focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-neutral-200 bg-[#FAF7F2] px-4 py-3 text-sm focus:border-[#C46A42] focus:outline-none focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">Phone / Portfolio Link</label>
                      <input 
                        type="text" 
                        placeholder="+91 9876543210 or github.com/username"
                        className="w-full rounded-xl border border-neutral-200 bg-[#FAF7F2] px-4 py-3 text-sm focus:border-[#C46A42] focus:outline-none focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">Resume / CV</label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-neutral-300 rounded-xl cursor-pointer bg-[#FAF7F2] hover:bg-[#F5F2EB] transition-colors">
                          <Upload className="h-6 w-6 text-neutral-400 mb-1" />
                          <span className="text-xs text-neutral-500 font-medium">Click to upload or drag & drop PDF</span>
                          <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#C46A42] py-3.5 text-sm font-bold text-white transition-all hover:bg-[#a85734]"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Application</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}