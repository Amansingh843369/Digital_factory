'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const customEase = [0.22, 1, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: customEase } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function EOfficeManagementSecurity() {
  // Lenis Smooth Scroll Integration
  useEffect(() => {
    let lenis;
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch (e) {
        console.log("Lenis initialization skipped.");
      }
    };
    initLenis();
    return () => { if (lenis) lenis.destroy(); };
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Accordion State for FAQ
  const [openAccordion, setOpenAccordion] = useState(0);
  const toggleAccordion = (index) => setOpenAccordion(openAccordion === index ? null : index);

  // --- eOMS PLATFORM MODULES DATA ---
  const modules = [
    {
      num: "01",
      category: "Lifecycle Engine",
      title: "End-to-End Certification Workflow",
      desc: "Manage your entire certification lifecycle through a centralized digital platform—from initial client enquiry to audit execution, certificate issuance, and ongoing surveillance. the platform helps organizations manage their complete certification workflow through a centralized digital system. ",
      highlights: [
        "Enquiry & Proposal Tracking",
        "Audit Planning & Execution",
        "Certificate Issuance",
        "Ongoing Surveillance Cycle",
      
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
      badge: "Lifecycle Management"
    },
    {
      num: "02",
      category: "Data Modernization",
      title: "Replace Spreadsheets & Manual Records",
      desc: "Transition away from scattered Excel files, fragmented emails, and manual paperwork to an organized, traceable digital cloud ecosystem.",
      highlights: [
        "Centralized Client Repository",
        "Eliminate Email Thread Confusion",
        "Version-Controlled Documents",
        "Complete Traceability Logs",
        "Automated Status Alerts",
        "Role-Based Data Access"
      ],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200",
      badge: "Zero Spreadsheets"
    },
    {
      num: "03",
      category: "Conformity Architecture",
      title: "Structured Management Workflows",
      desc: "Built around structured management system workflows, eOMS helps organizations move away from scattered Excel sheets, emails, and manual records to a centralized, organized, and traceable digital platform.",
      highlights: [
        "Conformity Assessment Rules",
        "Non-Conformity Management",
        "Accreditation Body Alignment",
        "Auditor Competency Tracking",
        "Standardized Audit ",
        "Cloud-Based SaaS Access"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      badge: "ISO Compliant"
    }
  ];

  // WHY CHOOSE eOMS DATA
  const whyChooseUs = [
    { title: "Centralized Operations", desc: "Consolidate enquiry, auditing, and certification records in one secure hub.", icon: "🏢" },
    { title: "Complete Traceability", desc: "Maintain an immutable digital audit trail for every client and assessment.", icon: "🔍" },
    { title: "Tailored for Conformity", desc: "Purpose-built for Certification Bodies and Compliance Service Providers.", icon: "🛡️" },
    { title: "Cloud SaaS Platform", desc: "Access your office workflow securely from anywhere without manual server overhead.", icon: "☁️" },
  ];

  // FAQ DATA
  const faqs = [
    { question: "Who is eOMS designed for?", answer: "eOMS is specifically built for Certification Bodies, Conformity Assessment Bodies, Auditing Organizations, and Compliance Service Providers." },
    { question: "How does eOMS replace our existing spreadsheets?", answer: "eOMS replaces scattered Excel sheets and emails with structured management workflows, storing all client data, audit histories, and certificates in a single traceable system." },
    { question: "Does eOMS cover the full certification lifecycle?", answer: "Yes! The platform manages the entire journey from initial client enquiry through audit execution, certificate issuance, and subsequent surveillance cycles." },
    { question: "Is eOMS cloud-based?", answer: "Yes, eOMS is a 100% cloud-based SaaS platform, giving your team secure, real-time access to certification workflows from anywhere." }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAF8F5] text-[#2C2825] font-sans selection:bg-[#C87D55] selection:text-white relative overflow-hidden">
      
      {/* Background Soft Ambient Glow */}
      <motion.div 
        style={{ y: yHeroBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] md:w-[900px] h-[450px] bg-[#C87D55]/8 rounded-full blur-[140px] pointer-events-none" 
      />

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-0 relative z-10">
        
        {/* HERO SECTION - EXACT DESIGN MATCH FROM IMAGE */}
        <section className="text-center max-w-5xl mx-auto pt-6 md:pt-7 pb-12">
          
          {/* BREADCRUMB PILL */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: customEase }}
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#524B45] bg-white border border-[#EBE4DD] px-6 py-2.5 rounded-full shadow-sm mb-10"
          >
            <a href="/" className="hover:text-[#C87D55] transition-colors">Home</a>
            <span className="text-[#C2B2A8] font-normal">›</span>
            <a href="/#services" className="hover:text-[#C87D55] transition-colors">Services</a>
            <span className="text-[#C2B2A8] font-normal">›</span>
            <span className="text-[#C87D55] font-bold">eOMS Platform</span>
          </motion.nav>

          {/* HEADLINE - ULTRA BOLD & IMPACTFUL */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-7xl font-black text-[#1C1817] tracking-tight leading-[1.05] max-w-5xl mx-auto"
          >
            Digitalize Your <br className="hidden sm:block  " />
            <span className="font-semibold text-[#A64B2A]"> Certification Body. </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl lg:text-2xl text-[#6B635B] leading-relaxed font-normal max-w-3xl mx-auto mt-8 px-4"
          >
            Manage the Complete Certification Lifecycle in One Platform.
          </motion.p>

          {/* SINGLE CTA BUTTON */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center pt-10"
          >
            <motion.a
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              href="#contact"
              className="px-10 py-4 sm:py-5 rounded-full bg-[#A64B2A] text-white font-bold text-base sm:text-lg shadow-lg hover:bg-[#B56E47] transition-all duration-300 text-center"
            >
              Start Your eOMS
            </motion.a>
          </motion.div>
        </section>

      {/* INTRO BLOCK */}
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-16 md:mt-5 max-w-4xl mx-auto text-center bg-[#F3EEEA] border border-[#E5DCD5] p-8 md:p-12 rounded-3xl shadow-sm relative overflow-hidden"
>
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C87D55]/10 blur-2xl rounded-full" />

  <p className="relative z-10 text-lg md:text-xl  text-justify lg:text-1xl  text-[#2C1E16] leading-relaxed">
    e-Office Management System is a{" "}
    <span className=" text-[#A64B2A]">
      cloud-based SaaS platform
    </span>{" "}
    designed specifically for{" "}
    <span className="font-bold text-[#2C1E16]">
      Certification Bodies, Conformity Assessment Bodies, Auditing
      Organizations, and Compliance Service Providers.
    </span>
  </p>
</motion.section>

        {/* MODULES ZIG-ZAG SHOWCASE */}
        <section id="modules" className="mt-24 md:mt-32 space-y-20 md:space-y-32">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <span className="text-xs md:text-sm font-mono uppercase tracking-wider text-[#C87D55] font-semibold">Core Capabilities</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C2825] tracking-tight">Platform Workflow Capabilities</h2>
          </div>

          <div className="space-y-20 md:space-y-32">
            {modules.map((module, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-10 lg:gap-16`}
                >
                  {/* IMAGE CARD */}
                  <div className="w-full lg:w-1/2">
                    <motion.div 
                      whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}
                      className="relative rounded-3xl overflow-hidden border border-[#E5DCD5] shadow-lg group bg-[#F3EEEA]"
                    >
                      <div className="h-[300px] md:h-[400px] w-full overflow-hidden relative">
                        <img 
                          src={module.image} alt={module.title} 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/40 via-transparent to-transparent opacity-80" />
                      </div>
                      <div className="absolute top-4 left-4 bg-[#FAF8F5]/95 backdrop-blur-md border border-[#E5DCD5] px-4 py-2 rounded-xl shadow-sm flex items-center gap-2">
                        <span className="font-mono text-xs md:text-sm font-bold text-[#C87D55]">{module.num}</span>
                        <span className="text-[10px] md:text-xs font-semibold text-[#2C2825] uppercase tracking-wide">{module.badge}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* CONTENT BLOCK */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs md:text-sm font-mono uppercase tracking-wider text-[#C87D55] font-semibold">{module.category}</span>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2C2825] tracking-tight leading-tight">{module.title}</h3>
                    </div>
                    <p className="text-base md:text-lg text-[#6B635B] leading-relaxed font-normal">{module.desc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4">
                      {module.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm md:text-base text-[#4A433D]">
                          <span className="flex-shrink-0 w-5 h-5 rounded-md bg-[#F3EEEA] text-[#C87D55] border border-[#E5DCD5] flex items-center justify-center font-bold text-[10px] mt-0.5">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mt-24 md:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28 text-center lg:text-left">
              <span className="text-xs md:text-sm font-mono uppercase tracking-wider text-[#C87D55] font-semibold">Common Questions</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2C2825] tracking-tight leading-tight">
                Frequently Asked <br className="hidden lg:block"/> Questions
              </h2>
              <p className="text-base text-[#6B635B] leading-relaxed max-w-md mx-auto lg:mx-0">
                Everything you need to know about implementing eOMS in your organization.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openAccordion === index;
                return (
                  <motion.div 
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-white border-[#E5DCD5] shadow-md' : 'bg-transparent border-[#E5DCD5] hover:bg-white/50'}`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-5 md:p-6 text-left flex items-start justify-between gap-6 group"
                    >
                      <span className={`font-semibold text-base md:text-lg transition-colors ${isOpen ? 'text-[#C87D55]' : 'text-[#2C2825] group-hover:text-[#C87D55]'}`}>
                        {faq.question}
                      </span>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors text-sm ${isOpen ? 'bg-[#C87D55] text-white' : 'bg-[#F3EEEA] text-[#2C2825]'}`}
                      >
                        ↓
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: customEase }}
                        >
                          <div className="px-5 md:px-6 pb-6 text-base text-[#6B635B] leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

      </main>


{/* why choose us  */}
<motion.section 
  initial="hidden" 
  whileInView="visible" 
  viewport={{ once: true, amount: 0.1 }} 
  variants={fadeInUp}
  className="mt-24 md:mt-32 relative bg-[#F5EFE6]  w-full py-16 md:py-24 overflow-hidden border-y border-[#1A1816]"
>
  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#000]rounded-full blur-[140px] pointer-events-none" />

  <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
    
    {/* Header Section with lines like the reference design */}
    <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
      <div className="flex items-center justify-center gap-3">
        <span className="w-10 h-[1px] bg-[#C87D55]/60"></span>
        <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-[#C87D55] font-semibold">
          The Advantage
        </span>
        <span className="w-10 h-[1px] bg-[#C87D55]/60"></span>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold text-[#000] tracking-tight leading-tight">
        Why Modernize With eOMS?
      </h2>

      <p className="text-[#000000] text-base md:text-lg leading-relaxed font-normal">
        Built around structured workflows to bring order, speed, and audit transparency.
      </p>
    </div>

    {/* 2x2 Grid Layout (2 Upar, 2 Niche) */}
    <motion.div 
      variants={staggerContainer} 
      className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
    >
      {whyChooseUs.map((item, idx) => (
        <motion.div 
          key={idx} 
          variants={fadeInUp} 
          whileHover={{ y: -6 }}
          className="relative bg-white p-8 md:p-10 rounded-3xl border border-[#4A433D]/60 shadow-xl group overflow-hidden transition-all duration-300 hover:border-[#C87D55]/60 flex flex-col justify-between"
        >
          {/* Background Watermark Number (01, 02, 03, 04) */}
          <span className="absolute -top-3 -right-2 text-7xl md:text-8xl font-extrabold text-[#C87D55]/10 select-none pointer-events-none  transition-colors duration-300">
            {String(idx + 1).padStart(2, '0')}
          </span>

          <div className="relative z-10">
            {/* Icon Box */}
            <div className="w-14 h-14 rounded-2xl bg-[#060606] border border-[#4A433D] text-[#C87D55] flex items-center justify-center text-2xl mb-6 group-hover:scale-105  transition-all duration-300 shadow-md">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[#000000] mb-3  transition-colors duration-300">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-[#000000] leading-relaxed font-normal transition-colors duration-300">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>

  </div>
</motion.section>

    </div>
  );
}