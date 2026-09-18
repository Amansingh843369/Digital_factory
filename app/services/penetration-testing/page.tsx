'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Premium smooth easing
const customEase = [0.22, 1, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
    transition: { staggerChildren: 0.1 }
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

  // Parallax Hooks for Background Only
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Accordion State
  const [openAccordion, setOpenAccordion] = useState(0);
  const toggleAccordion = (index) => setOpenAccordion(openAccordion === index ? null : index);

  // PENETRATION TESTING DATA - Fresh Free Images from Unsplash/Pexels
  const detailedServices = [
    {
      category: "Application Security", 
      title: "Web Application Penetration Testing",
      desc: "Identify and exploit vulnerabilities in your web apps before attackers do. Comprehensive OWASP Top 10 coverage.",
      highlights: [ "Login & Authentication Bypass Testing", "Authorization & Access Control (IDOR)", "SQL Injection & XSS Exploitation", "CSRF & Session Management Testing", "File Upload Vulnerability Assessment", "API Endpoint Security Review" ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200", // Cyberpunk Server Room
      badge: "OWASP Top 10"
    },
    {
      category: "Interface Security", 
      title: "API Penetration Testing",
      desc: "Secure your REST and GraphQL endpoints against data leaks, broken object level authorization, and injection attacks.",
      highlights: [ "REST & GraphQL API Assessment", "Broken Object Level Authorization (BOLA)", "Rate Limiting & DoS Resilience", "JWT & OAuth Token Security", "Input Validation & Mass Assignment", "Business Logic Flaw Detection" ],
      image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1200", // Data Center Cables
      badge: "REST & GraphQL"
    },
    {
      category: "Mobile Security", 
      title: "Mobile Application Testing",
      desc: "Deep-dive security assessment for Android and iOS applications, covering binary analysis and backend communication.",
      highlights: [ "Android & iOS Binary Analysis", "Insecure Data Storage & Logging", "Certificate Pinning Bypass", "Session & Authentication Security", "TLS/SSL Configuration Review", "Reverse Engineering & Tampering" ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200", // Smartphone Hacking Concept
      badge: "iOS & Android"
    },
    {
      category: "Infrastructure", 
      title: "Network Penetration Testing",
      desc: "Assess the security posture of your internal and external networks, identifying misconfigurations and open attack vectors.",
      highlights: [ "External Perimeter Assessment", "Internal Network Lateral Movement", "Firewall & IDS/IPS Evasion", "Open Port & Service Enumeration", "Network Segmentation Validation", "Legacy Protocol Exploitation" ],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?auto=format&fit=crop&q=80&w=1200", // Network Switches / Pexels Alternative
      badge: "Infra Security"
    },
    {
      category: "Cloud Environment", 
      title: "Cloud Security Assessment",
      desc: "Review your AWS, Azure, or GCP environments for IAM misconfigurations, exposed storage, and serverless risks.",
      highlights: [ "AWS / Azure / GCP Config Review", "IAM Policy & Permission Audits", "S3/Blob Storage Exposure Check", "Serverless Function Security", "Container & Kubernetes Security", "Cloud API & Metadata Attacks" ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200", // Cloud Abstract
      badge: "AWS / Azure / GCP"
    },
    {
      category: "Wireless & Physical", 
      title: "Wireless & Social Engineering",
      desc: "Test the human element and wireless perimeter. From Wi-Fi cracking to targeted phishing simulations.",
      highlights: [ "WPA/WPA2/WPA3 Security Assessment", "Rogue Access Point Detection", "Phishing & Vishing Simulations", "Physical Entry Assessments", "Employee Security Awareness", "USB Drop & Tailgating Tests" ],
      image: "https://images.unsplash.com/photo-1563206767-5b1d972e8136?auto=format&fit=crop&q=80&w=1200", // Hacker Hoodie / Human Element
      badge: "Human Layer"
    },
    {
      category: "Red Teaming", 
      title: "Red Teaming & Adversary Simulation",
      desc: "Real-world attack scenarios to identify weaknesses across applications, infrastructure, identities, and security controls before actual attackers can exploit them.",
      highlights: [ "External & Internal Attack Simulation", "Web Application & API Attack Paths", "Identity & Privilege Escalation Testing", "Network & Infrastructure Assessment", "Social Engineering & Phishing Simulation", "Detection & Response Control Validation" ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200", // Coding Screen Dark Mode
      badge: "White Box"
    }
  ];

  const whyChooseUs = [
    { title: "Manual-First Approach", desc: "We don't just run automated scanners. Our senior pentesters manually verify every finding to eliminate false positives.", icon: "" },
    { title: "Actionable Reporting", desc: "Receive executive summaries and technical remediation guides that developers can actually understand and fix.", icon: "" },
    { title: "Compliance Ready", desc: "Our reports satisfy requirements for SOC2, ISO 27001, HIPAA, PCI-DSS, and GDPR compliance audits.", icon: "" },
    { title: "Post-Test Support", desc: "Free re-testing after remediation and direct developer support calls to ensure vulnerabilities are properly closed.", icon: "" },
  ];

  const faqs = [
    { question: "How long does a typical penetration test take?", answer: "Duration depends on scope. A standard web app test takes 1-2 weeks, while comprehensive network or cloud assessments may take 3-4 weeks. We provide exact timelines during scoping." },
    { question: "Will testing disrupt our production environment?", answer: "We coordinate closely with your team to minimize impact. We can perform tests during off-hours, implement rate limiting, and avoid destructive exploits unless explicitly authorized." },
    { question: "What standards do you follow?", answer: "Our methodology aligns with OWASP Top 10, PTES, NIST SP 800-115, and OSSTMM frameworks to ensure comprehensive and standardized coverage." },
    { question: "Do you offer remediation support?", answer: "Yes. Every engagement includes a detailed remediation report, and we offer free re-validation testing once your team has applied fixes to confirm closure." }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F7F3E8] text-[#2C1E16] font-sans selection:bg-[#A64B2A] selection:text-white relative overflow-hidden">
      
      {/* Dynamic Background */}
      <motion.div 
        style={{ y: yHeroBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] max-w-[1000px] h-[500px] bg-gradient-to-b from-[#A64B2A]/10 to-transparent rounded-full blur-[100px] md:blur-[140px] pointer-events-none will-change-transform" 
      />

      {/* Tightened padding for mobile responsiveness */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 relative z-10">
        
        {/* BREADCRUMB */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: customEase }}
          className="flex items-center gap-2 text-[10px] sm:text-xs font-medium text-[#7A6B63] mb-8 md:mb-12 bg-white/60 backdrop-blur-xl border border-[#E5D7CD] px-4 py-2 rounded-full w-fit shadow-sm"
        >
          <a href="/" className="hover:text-[#A64B2A] transition-colors">Home</a>
          <span className="text-[#C2B2A8]">&gt;</span>
          <a href="/services" className="hover:text-[#A64B2A] transition-colors">Services</a>
          <span className="text-[#C2B2A8]">&gt;</span>
          <span className="text-[#A64B2A] font-bold">Penetration Testing</span>
        </motion.nav>

        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5D7CD] text-[#A64B2A] text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#E62020] animate-pulse" /> Offensive Security Services
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: customEase }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#2C1E16] tracking-tight leading-[1.1]"
          >
            Find Weaknesses. <br className="hidden md:block"/>
            <span className="text-[#A64B2A] relative inline-block mt-2">
              Before Hackers Do.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: customEase }}
            className="text-base sm:text-lg text-[#6B5D56] leading-relaxed font-light max-w-2xl mx-auto px-2"
          >
            Enterprise-grade penetration testing for web apps, APIs, mobile, cloud, and networks. Manual-first methodology with actionable remediation guidance.
          </motion.p>
        </section>

        {/* PARALLAX HERO SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: customEase }}
          className="mt-10 md:mt-20 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-[#E5D7CD] shadow-2xl relative h-[250px] sm:h-[400px] md:h-[550px]"
        >
          <motion.img 
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]), scale: 1.15 }}
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600" 
            alt="Security Operations Center" 
            className="w-full h-full object-cover transform-origin-top will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16] via-[#2C1E16]/40 to-transparent flex items-end p-6 md:p-14">
            <div className="text-white space-y-3">
              <span className="text-[10px] md:text-xs font-mono font-bold text-[#F7F3E8] uppercase tracking-widest backdrop-blur-md bg-[#A64B2A]/80 px-4 py-1.5 rounded-full border border-white/20">Offensive Security</span>
              <h3 className="text-xl sm:text-3xl md:text-5xl font-bold tracking-tight">Simulate Real-World Attacks</h3>
            </div>
          </div>
        </motion.div>

        {/* ZIG-ZAG SERVICES WITH DIRECTIONAL CURTAIN REVEAL */}
        <section id="capabilities" className="mt-12 md:mt-24 space-y-8 md:space-y-25">
          <div className="text-center max-w-3xl mx-auto space-y-3 md:space-y-4 px-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A64B2A] font-bold">Attack Surface Coverage</span>
            <h2 className="text-2xl md:text-5xl font-extrabold text-[#2C1E16] tracking-tight">Testing Capabilities</h2>
          </div>

          <div className="space-y-12 md:space-y-32">
            {detailedServices.map((service, index) => {
              const isEven = index % 2 === 0;
              
              // LOGIC FOR DIRECTIONAL REVEAL
              // If Even (Image Left): Reveal from Left (inset 0 100% 0 0 -> 0 0% 0 0)
              // If Odd (Image Right): Reveal from Right (inset 0 0 0 100% -> 0 0 0 0%)
              const revealClip = isEven 
                ? ["inset(0 100% 0 0)", "inset(0 0% 0 0)"] // Left to Right
                : ["inset(0 0 0 100%)", "inset(0 0 0 0%)"]; // Right to Left

              return (
                <motion.div 
                  key={index} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.1 }} 
                  variants={fadeInUp}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-16`}
                >
                  {/* IMAGE SIDE WITH DIRECTIONAL CURTAIN REVEAL EFFECT */}
                  <div className="w-full lg:w-1/2 relative group">
                    <motion.div 
                      whileHover={{ scale: 1.02 }} 
                      transition={{ duration: 0.5, ease: customEase }}
                      className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl bg-white border border-[#E5D7CD]/50 aspect-[4/3] md:aspect-[16/10]"
                    >
                      {/* The Mask Container using Clip Path - Triggers on Viewport Entry */}
                      <motion.div 
                        initial={{ clipPath: revealClip[0] }} // Hidden initially based on direction
                        whileInView={{ clipPath: revealClip[1] }} // Revealed when in view
                        transition={{ duration: 1.4, ease: customEase, delay: 0.2 }} // Smooth timing
                        className="w-full h-full relative"
                      >
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-[#2C1E16]/10 group-hover:bg-transparent transition-colors duration-700" />
                      </motion.div>
                      
                      {/* Badge stays on top of the reveal */}
                      <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg flex items-center gap-2 z-20">
                        <span className="font-mono text-[10px] md:text-xs font-bold text-[#A64B2A]">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-[10px] md:text-xs font-bold text-[#2C1E16] uppercase tracking-wider">{service.badge}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* TEXT SIDE */}
                  <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                    <div className="space-y-2 md:space-y-3">
                      <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#A64B2A] font-bold">{service.category}</span>
                      <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#2C1E16] tracking-tight leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-[#6B5D56] leading-relaxed font-light">{service.desc}</p>
                    <ul className="space-y-2 md:space-y-3 pt-2">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs md:text-sm font-medium text-[#382B27]">
                          <span className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#A64B2A]/10 text-[#A64B2A] flex items-center justify-center font-bold text-[8px] md:text-[10px] mt-0.5">✓</span>
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

        {/* WHY CHOOSE US SECTION */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}
          className="mt-16 md:mt-32 relative bg-[#2C1E16] rounded-[1.5rem] md:rounded-[3rem] p-6 md:p-16 lg:p-24 overflow-hidden shadow-2xl border border-[#3D2A20]"
        >
          {/* Subtle Ambient Background Orbs */}
          <div className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#A64B2A]/15 rounded-full blur-[80px] md:blur-[140px] pointer-events-none opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-[#7A351D]/15 rounded-full blur-[80px] md:blur-[140px] pointer-events-none opacity-50" />

          {/* Header */}
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4 md:space-y-5 mb-10 md:mb-20">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#A64B2A] font-bold">The Security Advantage</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Why Trust Our Team
            </h2>
            <p className="text-[#A99A93] text-sm md:text-base lg:text-lg leading-relaxed font-light max-w-2xl mx-auto px-4">
              We combine elite offensive skills with defensive clarity to keep your business safe and compliant.
            </p>
          </div>

          {/* Card Grid */}
          <motion.div variants={staggerContainer} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div 
                key={idx} variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="relative bg-gradient-to-br from-[#1A120E] to-[#0F0A08] p-6 md:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-[#3D2A20] shadow-2xl group overflow-hidden transition-all duration-500 hover:border-[#A64B2A]/60 hover:shadow-[#A64B2A]/10"
              >
                {/* Hover Glow Effect inside Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A64B2A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Giant Watermark Number */}
                <div className="absolute -top-10 -right-6 text-[6rem] md:text-[10rem] font-extrabold text-white/[0.02] group-hover:text-[#A64B2A]/[0.05] transition-colors duration-500 pointer-events-none leading-none">
                  0{idx + 1}
                </div>

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#3D2A20] border border-[#4A3528] text-[#A64B2A] flex items-center justify-center text-xl md:text-3xl mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-[#A64B2A] group-hover:border-[#A64B2A] group-hover:text-white transition-all duration-500 shadow-lg">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#A64B2A] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-base text-[#A99A93] leading-relaxed font-light group-hover:text-[#D8C9C1] transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* FAQ (SPLIT STICKY LAYOUT) */}
        <section className="mt-16 md:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-20 items-start">
            
            <div className="lg:col-span-5 space-y-4 md:space-y-6 lg:sticky lg:top-32">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#A64B2A] font-bold">Common Questions</span>
              <h2 className="text-2xl md:text-5xl font-extrabold text-[#2C1E16] tracking-tight leading-tight">
                Engagement <br className="hidden lg:block"/> FAQs
              </h2>
              <p className="text-sm md:text-base text-[#6B5D56] leading-relaxed">
                Understand our testing methodology, scoping process, reporting format, and post-engagement support structure.
              </p>
              <div className="pt-2 md:pt-4 hidden lg:block">
                <p className="text-sm font-bold text-[#2C1E16] mb-2">Need a custom scope?</p>
                <a href="#consultation" className="text-sm font-bold text-[#A64B2A] hover:text-[#2C1E16] transition-colors flex items-center gap-2">
                  Talk to our security team <span>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3 md:space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openAccordion === index;
                return (
                  <motion.div 
                    key={index}
                    className={`rounded-xl md:rounded-2xl border transition-all duration-500 ${isOpen ? 'bg-white border-[#E5D7CD] shadow-md' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-4 md:p-8 text-left flex items-start justify-between gap-4 md:gap-6 group"
                    >
                      <span className={`font-bold text-sm md:text-lg transition-colors ${isOpen ? 'text-[#A64B2A]' : 'text-[#2C1E16] group-hover:text-[#A64B2A]'}`}>
                        {faq.question}
                      </span>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#A64B2A] text-white' : 'bg-[#E5D7CD] text-[#2C1E16]'}`}
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
                          <div className="px-4 md:px-8 pb-4 md:pb-8 text-xs md:text-base text-[#6B5D56] leading-relaxed">
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
          id="consultation" className="mt-16 md:mt-32 pb-10"
        >
          <div className="relative rounded-[1.5rem] md:rounded-[3rem] bg-gradient-to-br from-[#A64B2A] to-[#7A351D] p-8 md:p-24 text-center overflow-hidden shadow-2xl text-white">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Secure Your Attack Surface
              </h2>
              <p className="text-white/80 text-sm md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                Schedule a confidential scoping call. We'll assess your environment, define rules of engagement, and deliver a fixed-price proposal within 24 hours.
              </p>
              <div className="pt-2 md:pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  href="mailto:security@agency.com"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-5 rounded-full bg-[#2C1E16] text-white font-bold text-sm md:text-base tracking-wide shadow-2xl hover:bg-black transition-colors w-full sm:w-auto"
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