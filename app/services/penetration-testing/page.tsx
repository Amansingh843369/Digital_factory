'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Premium smooth easing
const customEase = [0.22, 1, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: customEase } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function PenTestingServicesPage() {
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
        console.warn("Lenis smooth scroll skipped.");
      }
    };
    initLenis();
    return () => { if (lenis) lenis.destroy(); };
  }, []);

  // Parallax Hooks
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yImageParallax = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Accordion State
  const [openAccordion, setOpenAccordion] = useState(0);
  const toggleAccordion = (index) => setOpenAccordion(openAccordion === index ? null : index);

  // PENETRATION TESTING DATA
  const detailedServices = [
    {
      num: "01", category: "Application Security", title: "Web Application Penetration Testing",
      desc: "Identify and exploit vulnerabilities in your web apps before attackers do. Comprehensive OWASP Top 10 coverage.",
      highlights: [ "Login & Authentication Bypass Testing", "Authorization & Access Control (IDOR)", "SQL Injection & XSS Exploitation", "CSRF & Session Management Testing", "File Upload Vulnerability Assessment", "API Endpoint Security Review" ],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200", badge: "OWASP Top 10"
    },
    {
      num: "02", category: "Interface Security", title: "API Penetration Testing",
      desc: "Secure your REST and GraphQL endpoints against data leaks, broken object level authorization, and injection attacks.",
      highlights: [ "REST & GraphQL API Assessment", "Broken Object Level Authorization (BOLA)", "Rate Limiting & DoS Resilience", "JWT & OAuth Token Security", "Input Validation & Mass Assignment", "Business Logic Flaw Detection" ],
      image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1200", badge: "REST & GraphQL"
    },
    {
      num: "03", category: "Mobile Security", title: "Mobile Application Testing",
      desc: "Deep-dive security assessment for Android and iOS applications, covering binary analysis and backend communication.",
      highlights: [ "Android & iOS Binary Analysis", "Insecure Data Storage & Logging", "Certificate Pinning Bypass", "Session & Authentication Security", "TLS/SSL Configuration Review", "Reverse Engineering & Tampering" ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200", badge: "iOS & Android"
    },
    {
      num: "04", category: "Infrastructure", title: "Network Penetration Testing",
      desc: "Assess the security posture of your internal and external networks, identifying misconfigurations and open attack vectors.",
      highlights: [ "External Perimeter Assessment", "Internal Network Lateral Movement", "Firewall & IDS/IPS Evasion", "Open Port & Service Enumeration", "Network Segmentation Validation", "Legacy Protocol Exploitation" ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200", badge: "Infra Security"
    },
    {
      num: "05", category: "Cloud Environment", title: "Cloud Security Assessment",
      desc: "Review your AWS, Azure, or GCP environments for IAM misconfigurations, exposed storage, and serverless risks.",
      highlights: [ "AWS / Azure / GCP Config Review", "IAM Policy & Permission Audits", "S3/Blob Storage Exposure Check", "Serverless Function Security", "Container & Kubernetes Security", "Cloud API & Metadata Attacks" ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200", badge: "AWS / Azure / GCP"
    },
    {
      num: "06", category: "Wireless & Physical", title: "Wireless & Social Engineering",
      desc: "Test the human element and wireless perimeter. From Wi-Fi cracking to targeted phishing simulations.",
      highlights: [ "WPA/WPA2/WPA3 Security Assessment", "Rogue Access Point Detection", "Phishing & Vishing Simulations", "Physical Entry Assessments", "Employee Security Awareness", "USB Drop & Tailgating Tests" ],
      image: "https://images.unsplash.com/photo-1563206767-5b1d972e8136?auto=format&fit=crop&q=80&w=1200", badge: "Human Layer"
    },
    {
      num: "07", category: "Code & Config", title: "Source Code & Config Audit",
      desc: "White-box review of application source code and infrastructure configurations to find logic flaws and secrets.",
      highlights: [ "Static Application Security Testing (SAST)", "Hardcoded Secrets & API Key Scan", "Dependency & SCA Analysis", "Server & Database Hardening", "Security Header Validation", "CI/CD Pipeline Security" ],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200", badge: "White Box"
    }
  ];

  const whyChooseUs = [
    { title: "Manual-First Approach", desc: "We don't just run automated scanners. Our senior pentesters manually verify every finding to eliminate false positives.", icon: "🧠" },
    { title: "Actionable Reporting", desc: "Receive executive summaries and technical remediation guides that developers can actually understand and fix.", icon: "📝" },
    { title: "Compliance Ready", desc: "Our reports satisfy requirements for SOC2, ISO 27001, HIPAA, PCI-DSS, and GDPR compliance audits.", icon: "✅" },
    { title: "Post-Test Support", desc: "Free re-testing after remediation and direct developer support calls to ensure vulnerabilities are properly closed.", icon: "🔄" },
  ];

  const faqs = [
    { question: "How long does a typical penetration test take?", answer: "Duration depends on scope. A standard web app test takes 1-2 weeks, while comprehensive network or cloud assessments may take 3-4 weeks. We provide exact timelines during scoping." },
    { question: "Will testing disrupt our production environment?", answer: "We coordinate closely with your team to minimize impact. We can perform tests during off-hours, implement rate limiting, and avoid destructive exploits unless explicitly authorized." },
    { question: "What standards do you follow?", answer: "Our methodology aligns with OWASP Top 10, PTES, NIST SP 800-115, and OSSTMM frameworks to ensure comprehensive and standardized coverage." },
    { question: "Do you offer remediation support?", answer: "Yes. Every engagement includes a detailed remediation report, and we offer free re-validation testing once your team has applied fixes to confirm closure." }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F7F3E8] text-[#2C1E16] font-sans selection:bg-[#A64B2A] selection:text-white relative overflow-hidden">
      
      {/* Dynamic Background - Using Image Colors */}
      <motion.div 
        style={{ y: yHeroBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] max-w-[1000px] h-[500px] bg-gradient-to-b from-[#A64B2A]/10 to-transparent rounded-full blur-[100px] md:blur-[140px] pointer-events-none will-change-transform" 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 relative z-10">
        
        {/* BREADCRUMB */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: customEase }}
          className="flex items-center gap-2 text-[10px] sm:text-xs font-medium text-[#7A6B63] mb-12 bg-white/60 backdrop-blur-xl border border-[#E5D7CD] px-5 py-2.5 rounded-full w-fit shadow-sm"
        >
          <a href="/" className="hover:text-[#A64B2A] transition-colors">Home</a>
          <span className="text-[#C2B2A8]">&gt;</span>
          <a href="/services" className="hover:text-[#A64B2A] transition-colors">Services</a>
          <span className="text-[#C2B2A8]">&gt;</span>
          <span className="text-[#A64B2A] font-bold">Penetration Testing</span>
        </motion.nav>

        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#E5D7CD] text-[#A64B2A] text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#E62020] animate-pulse" /> Offensive Security Services
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: customEase }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#2C1E16] tracking-tight leading-[1.05]"
          >
            Find Weaknesses. <br className="hidden md:block"/>
            <span className="text-[#A64B2A] relative inline-block mt-2">
              Before Hackers Do.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: customEase }}
            className="text-base sm:text-lg md:text-xl text-[#6B5D56] leading-relaxed font-light max-w-2xl mx-auto px-2"
          >
            Enterprise-grade penetration testing for web apps, APIs, mobile, cloud, and networks. Manual-first methodology with actionable remediation guidance.
          </motion.p>
        </section>

        {/* PARALLAX HERO SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: customEase }}
          className="mt-16 md:mt-24 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[#E5D7CD] shadow-2xl relative h-[300px] sm:h-[450px] md:h-[550px]"
        >
          <motion.img 
            style={{ y: yImageParallax, scale: 1.15 }}
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600" 
            alt="Security Operations Center" 
            className="w-full h-full object-cover transform-origin-top will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16] via-[#2C1E16]/40 to-transparent flex items-end p-6 md:p-14">
            <div className="text-white space-y-3">
              <span className="text-[10px] md:text-xs font-mono font-bold text-[#F7F3E8] uppercase tracking-widest backdrop-blur-md bg-[#A64B2A]/80 px-4 py-1.5 rounded-full border border-white/20">Offensive Security</span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">Simulate Real-World Attacks</h3>
            </div>
          </div>
        </motion.div>

        {/* ZIG-ZAG SERVICES */}
        <section id="capabilities" className="mt-24 md:mt-40 space-y-20 md:space-y-32">
          <div className="text-center max-w-3xl mx-auto space-y-4 px-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A64B2A] font-bold">Attack Surface Coverage</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#2C1E16] tracking-tight">Testing Capabilities</h2>
          </div>

          <div className="space-y-20 md:space-y-32">
            {detailedServices.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeInUp}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 md:gap-16`}
                >
                  <div className="w-full lg:w-1/2">
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5, ease: customEase }}
                      className="relative rounded-[2rem] overflow-hidden shadow-xl bg-white group border border-[#E5D7CD]/50"
                    >
                      <div className="h-[300px] md:h-[450px] w-full overflow-hidden relative">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                        <div className="absolute inset-0 bg-[#2C1E16]/20 group-hover:bg-transparent transition-colors duration-700" />
                      </div>
                      <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#A64B2A]">{service.num}</span>
                        <span className="text-xs font-bold text-[#2C1E16] uppercase tracking-wider">{service.badge}</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#A64B2A] font-bold">{service.category}</span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2C1E16] tracking-tight leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-base text-[#6B5D56] leading-relaxed font-light">{service.desc}</p>
                    <ul className="space-y-3 pt-2">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-[#382B27]">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#A64B2A]/10 text-[#A64B2A] flex items-center justify-center font-bold text-[10px] mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

 
      
        {/* FAQ (SPLIT STICKY LAYOUT) */}
        <section className="mt-32 md:mt-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A64B2A] font-bold">Common Questions</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#2C1E16] tracking-tight leading-tight">
                Engagement <br className="hidden lg:block"/> FAQs
              </h2>
              <p className="text-base text-[#6B5D56] leading-relaxed">
                Understand our testing methodology, scoping process, reporting format, and post-engagement support structure.
              </p>
              <div className="pt-4 hidden lg:block">
                <p className="text-sm font-bold text-[#2C1E16] mb-2">Need a custom scope?</p>
                <a href="#consultation" className="text-sm font-bold text-[#A64B2A] hover:text-[#2C1E16] transition-colors flex items-center gap-2">
                  Talk to our security team <span>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openAccordion === index;
                return (
                  <motion.div 
                    key={index}
                    className={`rounded-2xl border transition-all duration-500 ${isOpen ? 'bg-white border-[#E5D7CD] shadow-md' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-6 md:p-8 text-left flex items-start justify-between gap-6 group"
                    >
                      <span className={`font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-[#A64B2A]' : 'text-[#2C1E16] group-hover:text-[#A64B2A]'}`}>
                        {faq.question}
                      </span>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#A64B2A] text-white' : 'bg-[#E5D7CD] text-[#2C1E16]'}`}
                      >
                        ↓
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: customEase }}
                        >
                          <div className="px-6 md:px-8 pb-6 md:pb-8 text-sm md:text-base text-[#6B5D56] leading-relaxed">
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

        {/* CALL TO ACTION */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: customEase }}
          id="consultation" className="mt-22 md:mt-48 pb-10"
        >
          <div className="relative rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[#A64B2A] to-[#7A351D] p-3 md:p-15 text-center overflow-hidden shadow-2xl text-white">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-1">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Secure Your Attack Surface
              </h2>
              <p className="text-white/80 text-sm md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                Schedule a confidential scoping call. We'll assess your environment, define rules of engagement, and deliver a fixed-price proposal within 24 hours.
              </p>
              <div className="pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  href="mailto:security@agency.com"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 md:py-5 rounded-full bg-[#2C1E16] text-white font-bold text-sm md:text-base tracking-wide shadow-2xl hover:bg-black transition-colors w-full sm:w-auto"
                >
                  Request Security Assessment
                  <span className="text-xl leading-none">→</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}