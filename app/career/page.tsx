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
  Search,
  Briefcase,
  MapPin,
  Clock,
  Check
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
      "Analyze performance metrics and optimize conversion funnels",
      "Collaborate closely with creative design & dev teams"
    ]
  },
  {
    id: "web-dev",
    title: "Senior Web Developer",
    department: "Engineering",
    type: "Full-time",
    location: "On-site / Remote",
    icon: Globe,
    points: [
      "Develop responsive corporate & e-commerce platforms",
      "Work with modern frameworks (React, Next.js, TypeScript)",
      "Ensure ultra-fast load times, security, and scalability"
    ]
  },
  {
    id: "software-eng",
    title: "Full-Stack Software Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Hybrid",
    icon: Code2,
    points: [
      "Design & architect custom cloud SaaS applications",
      "Build scalable REST/GraphQL APIs and microservices",
      "Contribute to full SDLC with automated CI/CD pipelines"
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
      "Monitor, audit, and defend infrastructure against threats",
      "Perform regular VAPT, risk assessments, and compliance checks",
      "Implement data protection strategies across enterprise systems"
    ]
  }
];

// Culture Highlights
const cultureItems = [
  {
    icon: Rocket,
    title: "Innovation-First Mindset",
    desc: "We encourage active experimentation and embrace cutting-edge tech stacks.",
    span: "lg:col-span-2"
  },
  {
    icon: Users,
    title: "Collaborative Teams",
    desc: "Cross-functional synergy where every voice and idea is valued.",
    span: "lg:col-span-1"
  },
  {
    icon: GraduationCap,
    title: "Continuous Growth",
    desc: "Generous learning stipends, certifications, and hands-on mentorship.",
    span: "lg:col-span-1"
  },
  {
    icon: HeartHandshake,
    title: "Work-Life Balance",
    desc: "Flexible work schedules, remote-friendly culture, and wellness perks.",
    span: "lg:col-span-2"
  }
];

// Employee Testimonials
const testimonials = [
  {
    quote: "At Digital Factory, I’ve grown rapidly from a developer to leading complex cloud projects. The culture pushes you to innovate with full creative autonomy.",
    author: "Alex Rivera",
    role: "Senior Software Engineer"
  },
  {
    quote: "The emphasis on continuous learning and team security culture makes working here truly fulfilling. Every milestone feels like a shared win.",
    author: "Priya Sharma",
    role: "Cyber Security Analyst"
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const categories = ["All", "Engineering", "Marketing", "Security"];

  const filteredJobs = openPositions.filter((job) => {
    const matchesCategory = selectedCategory === "All" || job.department === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
    setFormSubmitted(false);
    setUploadedFileName(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
    }, 2200);
  };

  return (
    <div className="bg-[#FAF7F2] text-neutral-900 min-h-screen font-sans selection:bg-[#C46A42] selection:text-white">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="pointer-events-none absolute top-10 right-10 -z-10 h-[550px] w-[550px] rounded-full bg-[#C46A42]/10 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 left-10 -z-10 h-[450px] w-[450px] rounded-full bg-[#E5D5C5]/50 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#C46A42]/30 bg-[#C46A42]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C46A42] backdrop-blur-sm"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Careers at Digital Factory</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-neutral-900"
              >
                Shape the Future with <br />
                <span className="italic font-normal text-[#C46A42]">
                  Digital Factory Team
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed"
              >
                Join a world-class team of engineers, designers, and strategists building high-impact platforms and next-gen technology.
              </motion.p>

              {/* Stats Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2 flex flex-wrap gap-6 items-center border-t border-neutral-200/80 mt-6"
              >
                <div>
                  <p className="text-2xl font-serif font-bold text-neutral-900">100%</p>
                  <p className="text-xs text-neutral-500 uppercase font-semibold tracking-wider">Remote / Hybrid</p>
                </div>
                <div className="h-8 w-px bg-neutral-200" />
                <div>
                  <p className="text-2xl font-serif font-bold text-neutral-900">4.9 ★</p>
                  <p className="text-xs text-neutral-500 uppercase font-semibold tracking-wider">Culture Rating</p>
                </div>
                <div className="h-8 w-px bg-neutral-200" />
                <div>
                  <p className="text-2xl font-serif font-bold text-[#C46A42]">We're Hiring!</p>
                  <p className="text-xs text-neutral-500 uppercase font-semibold tracking-wider">Active Roles</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <a
                  href="#open-positions"
                  className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#C46A42] hover:shadow-xl hover:shadow-[#C46A42]/25"
                >
                  <span>Explore Open Roles</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.div>
            </div>

            {/* Right Side Visual Glass Bento Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-[2.5rem] border border-neutral-300/70 bg-white/70 p-6 shadow-2xl backdrop-blur-md overflow-hidden">
                <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-neutral-900">
                  <Image
                    src="/images/hero-workspace.png"
                    alt="Digital Factory Culture"
                    fill
                    className="object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                  
                  {/* Floating Live Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 backdrop-blur-md border border-white/20 shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold text-neutral-900">Collaborative Workspace</span>
                  </div>
                </div>

                {/* Micro Perks Card inside Hero Visual */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-neutral-200/80 bg-white/90 p-3.5 shadow-sm">
                    <Briefcase className="h-4 w-4 text-[#C46A42] mb-1" />
                    <p className="text-xs font-bold text-neutral-900">Modern Tech Stack</p>
                    <p className="text-[11px] text-neutral-500">Next.js, Cloud Native, AI</p>
                  </div>
                  <div className="rounded-xl border border-neutral-200/80 bg-white/90 p-3.5 shadow-sm">
                    <HeartHandshake className="h-4 w-4 text-[#C46A42] mb-1" />
                    <p className="text-xs font-bold text-neutral-900">Great Perks</p>
                    <p className="text-[11px] text-neutral-500">Health, Learning, Offsites</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 2. INTRO BENTO BANNER ================= */}
      <section className="py-8 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] border border-neutral-200/80 bg-white p-8 sm:p-12 shadow-xl shadow-neutral-900/5 text-center space-y-4 relative overflow-hidden"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C46A42]/10 blur-3xl" />
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#C46A42]">Why Choose Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            We Don't Just Build Tech — We Build Leaders
          </h2>
          
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            At <strong className="text-neutral-900">Digital Factory</strong>, we empower developers, designers, and problem solvers to take ownership of complex challenges and grow without limits.
          </p>
        </motion.div>
      </section>

      {/* ================= 3. FILTERABLE OPEN POSITIONS ================= */}
      <section id="open-positions" className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C46A42]">Opportunities</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-neutral-900">Explore Open Roles</h2>
          <p className="text-neutral-600">Find the role where you can make your biggest impact.</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-neutral-200/80 pb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-neutral-900 text-white shadow-md"
                    : "bg-white text-neutral-600 hover:bg-neutral-200/60 border border-neutral-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-neutral-200 bg-white pl-10 pr-4 py-2 text-xs focus:border-[#C46A42] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, idx) => {
                const IconComp = job.icon;
                return (
                  <motion.div 
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="group flex flex-col justify-between rounded-[2rem] border border-neutral-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#C46A42]/50 hover:shadow-2xl hover:shadow-[#C46A42]/10"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F2EB] text-[#C46A42] transition-colors group-hover:bg-[#C46A42] group-hover:text-white">
                          <IconComp className="h-6 w-6" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#F5F2EB] px-3 py-1 text-xs font-semibold text-neutral-600 border border-neutral-200/50">
                            <MapPin className="h-3 w-3 text-[#C46A42]" />
                            {job.location}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-2 group-hover:text-[#C46A42] transition-colors">
                        {job.title}
                      </h3>

                      <div className="flex items-center gap-3 text-xs text-neutral-500 font-semibold mb-4">
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {job.type}</span>
                        <span>•</span>
                        <span>{job.department}</span>
                      </div>

                      <ul className="mt-4 space-y-2.5 border-t border-neutral-100 pt-4">
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
              })
            ) : (
              <div className="col-span-full py-12 text-center text-neutral-500 font-medium">
                No open roles match your filter criteria right now.
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ================= 4. CULTURE HIGHLIGHTS BENTO ================= */}
      <section className="py-24 bg-[#EFECE6] border-y border-neutral-300/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C46A42]">Culture & Environment</span>
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
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={`rounded-3xl border border-neutral-300/60 bg-white p-8 shadow-sm hover:border-[#C46A42]/40 transition-all ${item.span}`}
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

      {/* ================= 5. TESTIMONIALS ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C46A42]">Team Voices</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-neutral-900">What Our Engineers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-neutral-900">{t.author}</h4>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">{t.role}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#F5F2EB] flex items-center justify-center font-serif font-bold text-[#C46A42]">
                  {t.author.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= 6. CLOSING CTA ================= */}
      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-neutral-950 p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[350px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C46A42]/25 blur-[120px]" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="font-serif text-3xl sm:text-5xl leading-tight">
              Ready to build something extraordinary?
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg">
              Take the next step in your career with a team that values innovation and impact.
            </p>
            <div className="pt-2">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-3 rounded-full bg-[#C46A42] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#b05c36] hover:shadow-lg hover:shadow-[#C46A42]/30"
              >
                <span>Browse Positions & Apply</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= 7. APPLICATION MODAL ================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-white p-6 sm:p-8 shadow-2xl z-10 text-neutral-900 border border-neutral-200 my-8"
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
                  <h3 className="text-2xl font-serif font-bold text-neutral-900">Application Received!</h3>
                  <p className="text-sm text-neutral-600">
                    Thank you for applying for <strong>{selectedJob}</strong>. Our recruiting team will review your application and reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C46A42]">Application</span>
                    <h3 className="text-2xl font-serif font-bold text-neutral-900 mt-0.5">{selectedJob}</h3>
                  </div>

                  <div className="space-y-3.5 pt-1">
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
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">Portfolio / LinkedIn Link</label>
                      <input 
                        type="url" 
                        placeholder="https://linkedin.com/in/username or github.com"
                        className="w-full rounded-xl border border-neutral-200 bg-[#FAF7F2] px-4 py-3 text-sm focus:border-[#C46A42] focus:outline-none focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">Resume / CV</label>
                      <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-neutral-300 rounded-xl cursor-pointer bg-[#FAF7F2] hover:bg-[#F5F2EB] transition-colors">
                        <Upload className="h-5 w-5 text-neutral-400 mb-1" />
                        <span className="text-xs text-neutral-600 font-medium">
                          {uploadedFileName ? (
                            <span className="text-[#C46A42] font-semibold flex items-center gap-1">
                              <Check className="h-3.5 w-3.5" /> {uploadedFileName}
                            </span>
                          ) : (
                            "Upload Resume (PDF, DOCX)"
                          )}
                        </span>
                        <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileUpload} />
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#C46A42] py-3.5 text-sm font-bold text-white transition-all hover:bg-[#a85734] mt-2 shadow-lg shadow-[#C46A42]/20"
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