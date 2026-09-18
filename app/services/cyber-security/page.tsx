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

export default function CyberSecurityPage() {
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

  // CYBER SECURITY SERVICES DATA - Fresh Free Images from Unsplash/Pexels
  const detailedServices = [
    {
      category: "Infrastructure", 
      title: "Network Security",
      desc: "Secure your IT infrastructure against unauthorized access and ensure business continuity.",
      highlights: [ "Firewalls & IPS Deployment", "Secure Network Architecture", "VPN & Remote Access Security", "Endpoint Protection", "24/7 Threat Monitoring" ],
      image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1200", // Server Rack / Data Center
      badge: "Network Defense"
    },
    {
      category: "Cloud", 
      title: "Cloud Security",
      desc: "Protect your data and applications across AWS, Azure, and Google Cloud environments.",
      highlights: [ "Secure Cloud Migration", "Identity & Access Management", "Cloud Compliance (ISO/GDPR)", "Data Encryption", "Continuous Threat Mitigation" ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200", // Abstract Cloud Tech
      badge: "Cloud Safe"
    },
    {
      category: "Data", 
      title: "Data Protection & Privacy",
      desc: "Safeguard sensitive business and customer information from leaks and theft.",
      highlights: [ "Data Loss Prevention (DLP)", "Encryption (Rest & Transit)", "Backup & Disaster Recovery", "Privacy Compliance", "Secure File Sharing" ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200", // Digital Lock / Security Concept
      badge: "Data Privacy"
    },
    {
      category: "Compliance", 
      title: "IT Security Audits",
      desc: "Identify vulnerabilities and ensure your organization meets global regulatory standards.",
      highlights: [ "Vulnerability Assessment (VAPT)", "Risk Assessments", "ISO 27001 Support", "Compliance Audits", "Policy Development" ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200", // Code / Audit Screen
      badge: "Audit Ready"
    },
    {
      category: "Intelligence", 
      title: "Threat Intelligence & SOC",
      desc: "Proactive monitoring and analysis to detect threats before they impact your business.",
      highlights: [ "24/7 Security Operations Center", "Real-time Threat Detection", "Malware Analysis & Forensics", "SIEM Implementation", "Dark Web Monitoring" ],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200", // Hacker / Terminal Screen
      badge: "24/7 SOC"
    },
    {
      category: "Zero Trust", 
      title: "Identity & Access Management",
      desc: "Implement Zero Trust architecture to verify every user and device accessing your resources.",
      highlights: [ "Multi-Factor Authentication (MFA)", "Single Sign-On (SSO)", "Privileged Access Management", "Role-Based Access Control", "Biometric Integration" ],
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1200", // Biometric / Fingerprint Scan
      badge: "Zero Trust"
    }
  ];

  // WHY CHOOSE US DATA
  const whyChooseUs = [
    { title: "Comprehensive Coverage", desc: "Full-stack security from network to cloud.", icon: "" },
    { title: "Compliance Ready", desc: "Meets ISO, GDPR, HIPAA, and SOC 2 standards.", icon: "" },
    { title: "Proactive Detection", desc: "24/7 monitoring to stop threats early.", icon: "" },
    { title: "Tailored Strategy", desc: "Custom security plans for your business needs.", icon: "" },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F7F3E8] text-[#2C1E16] font-sans selection:bg-[#A64B2A] selection:text-white relative overflow-hidden">
      
      {/* Dynamic Background */}
      <motion.div 
        style={{ y: yHeroBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] max-w-[1000px] h-[500px] bg-gradient-to-b from-[#A64B2A]/10 to-transparent rounded-full blur-[100px] md:blur-[140px] pointer-events-none will-change-transform" 
      />

      {/* MAIN CONTENT WRAPPER (Tightened Padding) */}
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
          <span className="text-[#A64B2A] font-semibold">Cyber Security</span>
        </motion.nav>

        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5D7CD] text-[#A64B2A] text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#E62020] animate-pulse" /> Digital Factory Security
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: customEase }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-[#2C1E16] tracking-tight leading-[1.1]"
          >
            Protecting Your Business <br className="hidden md:block"/>
            <span className="text-[#A64B2A] relative inline-block mt-2">
              In a Digital World.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: customEase }}
            className="text-base sm:text-lg text-[#6B5D56] leading-relaxed font-normal max-w-2xl mx-auto px-2"
          >
            End-to-end cyber security solutions to safeguard your data, networks, and systems against evolving threats.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: customEase }}>
             <motion.a
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#A64B2A] text-white font-medium text-sm tracking-wide shadow-md hover:bg-[#8a3d22] transition-colors"
              >
                Secure Your Business
                <span className="text-lg leading-none">→</span>
              </motion.a>
          </motion.div>
        </section>

        {/* INTRO SECTION */}
        <motion.section 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: customEase }}
            className="mt-10 md:mt-20 max-w-3xl mx-auto text-center space-y-4 px-4"
        >
            <p className="text-base md:text-lg text-[#382B27] leading-relaxed font-normal">
                Cybersecurity is essential. Businesses face risks from breaches, ransomware, and phishing.
            </p>
            <p className="text-sm md:text-base text-[#6B5D56] leading-relaxed">
                At <span className="font-semibold text-[#A64B2A]">Digital Factory</span>, we ensure your assets remain secure and compliant using advanced tools and proven methodologies.
            </p>
        </motion.section>

        {/* PARALLAX HERO SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: customEase }}
          className="mt-10 md:mt-20 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-[#E5D7CD] shadow-xl relative h-[250px] sm:h-[350px] md:h-[450px]"
        >
          <motion.img 
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]), scale: 1.1 }}
            src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=1600" 
            alt="Cyber Security Operations" 
            className="w-full h-full object-cover transform-origin-top will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1E16]/90 via-[#2C1E16]/20 to-transparent flex items-end p-6 md:p-10">
            <div className="text-white space-y-2">
              <span className="text-[10px] md:text-xs font-mono font-medium text-[#F7F3E8] uppercase tracking-wider backdrop-blur-md bg-[#A64B2A]/80 px-3 py-1 rounded-full border border-white/20">End-to-End Protection</span>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Resilient. Compliant. Secure.</h3>
            </div>
          </div>
        </motion.div>

        {/* ZIG-ZAG SERVICES WITH DIRECTIONAL CURTAIN REVEAL */}
        <section id="capabilities" className="mt-12 md:mt-24 space-y-8 md:space-y-24">
          <div className="text-center max-w-3xl mx-auto space-y-3 px-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A64B2A] font-medium">Our Expertise</span>
            <h2 className="text-2xl md:text-4xl font-semibold text-[#2C1E16] tracking-tight">Cyber Security Services</h2>
          </div>

          <div className="space-y-12 md:space-y-24">
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
                      <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-[#A64B2A] font-medium">{service.category}</span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2C1E16] tracking-tight leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-[#6B5D56] leading-relaxed font-normal">{service.desc}</p>
                    <ul className="space-y-2 md:space-y-3 pt-2">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs md:text-sm font-normal text-[#382B27]">
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

      </main>

      {/* FULL WIDTH SECTIONS (Outside max-w-7xl) */}
      
      {/* WHY CHOOSE US - Full Width, Reduced Padding */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}
        className="mt-16 md:mt-32 relative bg-[#ffffff] w-full py-10 md:py-16 overflow-hidden border-y border-[#1A120D]"
      >
        {/* Ambient Orbs */}
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#A64B2A]/15 rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-[#E62020]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 md:mb-10">
                <span className="text-xs font-mono uppercase tracking-wider text-[#bd5028] font-medium">Why Digital Factory</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#483d1f] tracking-tight">
                Why Choose Us?
                </h2>
                <p className="text-[#A99A93] text-sm leading-relaxed font-normal">
                Advanced tools combined with human expertise for scalable security.
                </p>
            </div>

            {/* Card Grid */}
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {whyChooseUs.map((item, idx) => (
                <motion.div 
                    key={idx} variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="relative bg-gradient-to-br from-[#3D2B22] to-[#1A120D] p-5 md:p-6 rounded-xl border border-[#4A352A] shadow-lg group overflow-hidden transition-all duration-300 hover:border-[#A64B2A]/50"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#A64B2A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-[#2C1E16] border border-[#4A352A] text-[#A64B2A] flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-[#A64B2A] group-hover:text-white transition-all duration-300">
                        {item.icon}
                    </div>
                    
                    <h3 className="text-base md:text-lg font-medium text-[#F7F3E8] mb-2 group-hover:text-[#A64B2A] transition-colors duration-300">
                        {item.title}
                    </h3>
                    <p className="text-xs text-[#A99A93] leading-relaxed font-normal group-hover:text-[#D8C9C1] transition-colors duration-300">
                        {item.desc}
                    </p>
                    </div>
                </motion.div>
                ))}
            </motion.div>
        </div>
      </motion.section>

      {/* CTA SECTION - Full Width, Reduced Padding */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: customEase }}
        id="consultation" className="mt-0 w-full relative"
      >
        <div className="w-full bg-gradient-to-br from-[#A64B2A] to-[#7A351D] py-10 md:py-16 px-4 text-center overflow-hidden relative">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white">
                    Cyber threats are evolving. <br/> Don't fall behind.
                </h2>
                <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed max-w-xl mx-auto">
                    Protect your organization with Digital Factory. Get a comprehensive security audit today.
                </p>
                <div className="pt-2">
                    <motion.a
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    href="mailto:security@digitalfactory.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2C1E16] text-white font-medium text-sm tracking-wide shadow-lg hover:bg-black transition-colors"
                    >
                    Request Free Audit
                    <span className="text-lg leading-none">→</span>
                    </motion.a>
                </div>
            </div>
        </div>
      </motion.section>

    </div>
  );
}