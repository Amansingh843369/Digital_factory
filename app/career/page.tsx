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
  Check,
  Heart,
  MonitorSmartphone,
  CalendarDays,
  Coffee,
  MessageSquare
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

// Perks & Benefits (NEW SECTION)
const perks = [
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive premium health insurance for you and your family." },
  { icon: MonitorSmartphone, title: "Remote-First", desc: "Work from anywhere or join us at our state-of-the-art global hubs." },
  { icon: CalendarDays, title: "Flexible PTO", desc: "We focus on outcomes, not hours. Take the time you need to recharge." },
  { icon: GraduationCap, title: "Learning Budget", desc: "$2,000 annual stipend for courses, conferences, and books." }
];

// Hiring Process (NEW SECTION)
const hiringProcess = [
  { step: "01", title: "Apply", desc: "Send us your resume and portfolio. We review every application carefully." },
  { step: "02", title: "Intro Call", desc: "A quick 30-min chat to align on expectations, culture, and your career goals." },
  { step: "03", title: "Technical/Role Interview", desc: "Deep dive into your skills with our team leads. No trick questions." },
  { step: "04", title: "Offer & Onboarding", desc: "Welcome aboard! We'll get your gear shipped and start your journey." }
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  return (
    // Updated Background to a softer, premium cream: #FDFBF7, and text to warm dark #2D2823
    <div className="bg-[#FDFBF7] text-[#2D2823] min-h-screen font-sans selection:bg-[#C46A42] selection:text-white">
      
      {/* ================= 1. HERO SECTION ================= */}
      
       
      {/* ================= 2. PERKS & BENEFITS (NEW) ================= */}
      <section className="py-20 bg-[#F4EFE6] border-y border-[#EBE3D5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C46A42]">Benefits</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1614]">Everything you need to thrive</h2>
            <p className="text-[#756C62]">We take care of our team so they can take care of our clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-[#EBE3D5] hover:shadow-xl hover:shadow-[#C46A42]/5 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-2xl bg-[#FDFBF7] flex items-center justify-center border border-[#EBE3D5] text-[#C46A42] mb-6">
                  <perk.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#2D2823] mb-2">{perk.title}</h3>
                <p className="text-sm text-[#756C62] leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. FILTERABLE OPEN POSITIONS ================= */}
      <section id="open-positions" className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C46A42]">Opportunities</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1614]">Explore Open Roles</h2>
          </div>
          <p className="text-[#756C62] max-w-sm md:text-right text-sm">
            Don't see a fit? Send us a general application. We're always looking for great talent.
          </p>
        </div>

        {/* Search & Filter Bar - Cream styling */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#EBE3D5] pb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#2D2823] text-white shadow-md"
                    : "bg-white text-[#756C62] hover:bg-[#F4EFE6] border border-[#EBE3D5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#90867A]" />
            <input
              type="text"
              placeholder="Search roles (e.g. Developer)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-[#EBE3D5] bg-white pl-11 pr-4 py-2.5 text-sm focus:border-[#C46A42] focus:outline-none focus:ring-4 focus:ring-[#C46A42]/10 transition-all"
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
                    transition={{ delay: idx * 0.05 }}
                    className="group flex flex-col justify-between rounded-[2rem] border border-[#EBE3D5] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#C46A42]/30 hover:shadow-2xl hover:shadow-[#C46A42]/5"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4EFE6] text-[#C46A42] transition-colors group-hover:bg-[#C46A42] group-hover:text-white">
                          <IconComp className="h-6 w-6" />
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FDFBF7] px-3.5 py-1.5 text-xs font-semibold text-[#756C62] border border-[#EBE3D5]">
                          <MapPin className="h-3.5 w-3.5 text-[#C46A42]" />
                          {job.location}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-[#1A1614] mb-2 group-hover:text-[#C46A42] transition-colors">
                        {job.title}
                      </h3>

                      <div className="flex items-center gap-3 text-xs text-[#90867A] font-semibold mb-6">
                        <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {job.type}</span>
                        <span className="h-1 w-1 rounded-full bg-[#D1C8BC]"></span>
                        <span>{job.department}</span>
                      </div>

                      <ul className="space-y-3 border-t border-[#F4EFE6] pt-5">
                        {job.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#756C62]">
                            <CheckCircle2 className="h-4 w-4 text-[#C46A42] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#F4EFE6] flex items-center justify-between">
                      <button
                        onClick={() => handleApplyClick(job.title)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D2823] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#C46A42] hover:shadow-lg hover:shadow-[#C46A42]/20"
                      >
                        <span>Apply Now</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full py-16 text-center text-[#756C62] bg-white rounded-[2rem] border border-[#EBE3D5] border-dashed">
                <Search className="h-8 w-8 mx-auto mb-3 text-[#D1C8BC]" />
                <p className="font-medium text-lg text-[#2D2823]">No matching roles found.</p>
                <p className="text-sm mt-1">Try adjusting your filters or search term.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ================= 4. HIRING PROCESS TIMELINE (NEW) ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-[#F4EFE6] border border-[#EBE3D5] p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C46A42]/30 to-transparent"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1614]">How We Hire</h2>
            <p className="text-[#756C62]">A transparent, no-bs process designed to respect your time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-6 left-10 right-10 h-0.5 bg-[#EBE3D5] z-0"></div>

            {hiringProcess.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col md:items-center md:text-center group">
                <div className="h-12 w-12 rounded-full bg-white border-2 border-[#EBE3D5] flex items-center justify-center text-[#C46A42] font-serif font-bold text-lg mb-5 group-hover:border-[#C46A42] group-hover:bg-[#C46A42] group-hover:text-white transition-all duration-300">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-[#2D2823] mb-2">{step.title}</h4>
                <p className="text-sm text-[#756C62] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. CLOSING CTA ================= */}
      <section className="pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[3rem] bg-[#2D2823] p-12 sm:p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Background for CTA */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#C46A42]/30 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#EADDCE]/10 blur-[80px]" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="font-serif text-4xl sm:text-5xl leading-tight">
              Ready to build something extraordinary?
            </h2>
            <p className="text-[#D1C8BC] text-lg">
              Take the next step in your career with a team that values innovation, craftsmanship, and impact.
            </p>
            <div className="pt-6">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-3 rounded-full bg-[#C46A42] px-10 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#b05c36] hover:scale-105"
              >
                <span>Browse Open Positions</span>
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= 6. APPLICATION MODAL ================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#1A1614]/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2rem] bg-[#FDFBF7] p-8 shadow-2xl z-10 border border-[#EBE3D5] my-8"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#F4EFE6] text-[#756C62] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {formSubmitted ? (
                <div className="py-14 text-center space-y-5">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#C46A42]/10 border border-[#C46A42]/20 text-[#C46A42]">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-[#1A1614]">Application Sent!</h3>
                  <p className="text-[#756C62] max-w-sm mx-auto">
                    Thank you for applying for the <strong>{selectedJob}</strong> position. We will review your profile and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C46A42]">Applying for</span>
                    <h3 className="text-2xl font-serif font-bold text-[#1A1614] mt-1 pr-8">{selectedJob}</h3>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#756C62] mb-1.5">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Jane Doe"
                        className="w-full rounded-xl border border-[#EBE3D5] bg-white px-4 py-3.5 text-sm focus:border-[#C46A42] focus:ring-4 focus:ring-[#C46A42]/10 focus:outline-none transition-all placeholder:text-[#D1C8BC]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#756C62] mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="jane@example.com"
                        className="w-full rounded-xl border border-[#EBE3D5] bg-white px-4 py-3.5 text-sm focus:border-[#C46A42] focus:ring-4 focus:ring-[#C46A42]/10 focus:outline-none transition-all placeholder:text-[#D1C8BC]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#756C62] mb-1.5">Portfolio / LinkedIn</label>
                      <input 
                        type="url" 
                        placeholder="https://linkedin.com/in/username"
                        className="w-full rounded-xl border border-[#EBE3D5] bg-white px-4 py-3.5 text-sm focus:border-[#C46A42] focus:ring-4 focus:ring-[#C46A42]/10 focus:outline-none transition-all placeholder:text-[#D1C8BC]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#756C62] mb-1.5">Resume / CV</label>
                      <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-[#D1C8BC] rounded-xl cursor-pointer bg-white hover:bg-[#F4EFE6] transition-colors group">
                        <Upload className="h-6 w-6 text-[#90867A] mb-2 group-hover:text-[#C46A42] transition-colors" />
                        <span className="text-sm text-[#756C62] font-medium">
                          {uploadedFileName ? (
                            <span className="text-[#C46A42] font-semibold flex items-center gap-1.5">
                              <Check className="h-4 w-4" /> {uploadedFileName}
                            </span>
                          ) : (
                            "Click to upload (PDF, DOCX)"
                          )}
                        </span>
                        <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => setUploadedFileName(e.target.files?.[0]?.name || null)} />
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#2D2823] py-4 text-sm font-bold text-white transition-all hover:bg-[#C46A42] mt-4 shadow-lg"
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