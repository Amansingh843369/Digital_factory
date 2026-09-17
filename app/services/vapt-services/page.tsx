'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

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
    transition: { staggerChildren: 0.15 }
  }
};

export default function CyberSecurityPage() {
  useEffect(() => {
    let lenis: any;
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });
        function raf(time: number) {
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

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yImageParallax = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const toggleAccordion = (index: number) => setOpenAccordion(openAccordion === index ? null : index);

  const services = [
    {
      num: "01",
      category: "Infrastructure Defense",
      title: "Network Security",
      desc: "Strengthening your IT infrastructure to keep unauthorized users out.",
      highlights: [
        "Firewalls & Intrusion Prevention Systems (IPS)",
        "Secure Network Architecture Design",
        "Virtual Private Networks (VPNs)",
        "Endpoint Protection & Monitoring",
        "24/7 Threat Detection & Response"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1200",
      badge: "Network Defense"
    },
    {
      num: "02",
      category: "Cloud Protection",
      title: "Cloud Security",
      desc: "Ensuring your cloud-hosted data and apps remain safe.",
      highlights: [
        "Secure Cloud Migration (AWS, Azure, Google Cloud)",
        "Identity & Access Management (IAM)",
        "Cloud Compliance (ISO 27001, GDPR, HIPAA)",
        "Cloud Encryption & Data Protection",
        "Continuous Monitoring & Cloud Threat Mitigation"
      ],
      whyChoose: [
        "Prevents Costly Public Data Leaks",
        "Hardens Multi-Cloud Architecture",
        "Ensures Strict Identity Governance",
        "Eliminates Dangerous Cloud Misconfigurations"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
      badge: "Cloud Safe"
    },
    {
      num: "03",
      category: "Information Safety",
      title: "Data Protection & Privacy",
      desc: "Safeguarding sensitive business and customer data.",
      highlights: [
        "Data Loss Prevention (DLP) Solutions",
        "Data Encryption (at rest & in transit)",
        "Backup & Disaster Recovery Planning",
        "GDPR, HIPAA & Local Data Privacy Compliance",
        "Secure File Sharing & Access Controls"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
      badge: "Data Privacy"
    },
    {
      num: "04",
      category: "Risk & Compliance",
      title: "IT Security Audits & Compliance",
      desc: "Identifying vulnerabilities and ensuring compliance.",
      highlights: [
        "Vulnerability Assessments & Penetration Testing (VAPT)",
        "Information Security Risk Assessments",
        "ISO 27001 Implementation Support",
        "Compliance Audits (GDPR, HIPAA, PCI DSS, SOC 2)",
        "Policy & Procedure Development"
      ],
      whyChoose: [
        "Helps Achieve ISO 27001 & SOC2 Compliance",
        "Provides 360-degree Infrastructure Visibility",
        "Blocks Lateral Movement Inside Internal Networks",
        "Prevents Unauthorized Perimeter Ingress"
      ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      badge: "Audit Ready"
    }
  ];

  const whyChooseUs = [
    { title: "Comprehensive Security Coverage", desc: "From network to cloud", icon: "🔒" },
    { title: "Compliance-Ready Solutions", desc: "ISO, GDPR, HIPAA, and more", icon: "📊" },
    { title: "Proactive Threat Detection", desc: "Prevent attacks before they occur", icon: "⚡" },
    { title: "Tailored Security Strategies", desc: "Customized to your business needs", icon: "🛠️" },
    { title: "Dedicated Security Support", desc: "Ongoing monitoring & assistance", icon: "📞" }
  ];

  const securityApproach = [
    { step: "01", title: "Assess & Analyze", desc: "Identify risks and vulnerabilities" },
    { step: "02", title: "Implement Controls", desc: "Deploy the right tools & strategies" },
    { step: "03", title: "Monitor & Detect", desc: "Proactive threat detection 24/7" },
    { step: "04", title: "Respond & Recover", desc: "Quick response to minimize damage" },
    { step: "05", title: "Continuous Improvement", desc: "Stay ahead of evolving threats" }
  ];

  const faqs = [
    { question: "How long does a typical security assessment take?", answer: "Duration depends on scope. A standard network or cloud assessment takes 1-3 weeks. We provide exact timelines during initial scoping." },
    { question: "Will testing disrupt our production environment?", answer: "We coordinate closely with your team to minimize impact. Tests can be performed during off-hours with strict rules of engagement." },
    { question: "What compliance standards do you support?", answer: "Our methodology aligns with ISO 27001, GDPR, HIPAA, PCI DSS, and SOC 2 frameworks to ensure comprehensive coverage." },
    { question: "Do you offer remediation support after the audit?", answer: "Yes. Every engagement includes a detailed remediation report, and we offer re-validation testing once your team has applied fixes." }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAF8F5] text-[#2C2825] font-sans selection:bg-[#C87D55] selection:text-white relative overflow-hidden">
      
      <motion.div 
        style={{ y: yHeroBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C87D55]/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-20 relative z-10">
        
        {/* BREADCRUMB */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: customEase }}
          className="flex items-center gap-2 text-[10px] sm:text-xs font-medium text-[#8A8279] mb-12 bg-[#F3EEEA] backdrop-blur-xl border border-[#E5DCD5] px-5 py-2.5 rounded-full w-fit shadow-sm"
        >
          <a href="/" className="hover:text-[#C87D55] transition-colors">Home</a>
          <span className="text-[#C2B2A8]">&gt;</span>
          <a href="/services" className="hover:text-[#C87D55] transition-colors">Services</a>
          <span className="text-[#C2B2A8]">&gt;</span>
          <span className="text-[#C87D55] font-bold">Cyber Security</span>
        </motion.nav>

        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-8 pt-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EEEA] border border-[#E5DCD5] text-[#C87D55] text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#C87D55] animate-pulse" />
            Digital Factory Security
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-7xl font-extrabold text-[#2C2825] tracking-tight leading-[1.1]"
          >
            Protecting Your Business <br className="hidden sm:block"/>
            <span className="text-[#C87D55]">
              In a Digital-First World
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#6B635B] leading-relaxed font-light max-w-3xl mx-auto"
          >
            We deliver end-to-end cyber security solutions to safeguard your data, networks, and systems against evolving threats.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6"
          >
            <motion.a
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              href="#contact"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#C87D55] text-white font-semibold text-sm tracking-wide shadow-lg shadow-[#C87D55]/20 hover:bg-[#B56E47] transition-all"
            >
              Secure Your Business Today →
            </motion.a>
          </motion.div>
        </section>

        {/* INTRO BLOCK */}
        <motion.section
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto text-center bg-[#F3EEEA] border border-[#E5DCD5] p-8 sm:p-12 rounded-3xl shadow-sm relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C87D55]/15 blur-3xl rounded-full" />
          <p className="text-base sm:text-lg text-[#4A433D] leading-relaxed relative z-10">
            In today's interconnected world, cybersecurity is not optional — it's essential. At <strong>Digital Factory</strong>, we provide comprehensive cybersecurity solutions that ensure your digital assets remain secure, compliant, and resilient. Our team combines advanced security tools, proven methodologies, and industry expertise to protect your business while enabling growth.
          </p>
        </motion.section>

        {/* PARALLAX HERO SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: customEase }}
          className="mt-16 md:mt-24 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[#E5DCD5] shadow-xl relative h-[300px] sm:h-[450px] md:h-[550px]"
        >
          <motion.img 
            style={{ y: yImageParallax, scale: 1.15 }}
            src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=1600" 
            alt="Cyber Security Operations" 
            className="w-full h-full object-cover transform-origin-top will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2825]/90 via-[#2C2825]/20 to-transparent flex items-end p-6 md:p-14">
            <div className="text-white space-y-3">
              <span className="text-[10px] md:text-xs font-mono font-bold text-[#FAF8F5] uppercase tracking-widest backdrop-blur-md bg-[#C87D55]/80 px-4 py-1.5 rounded-full border border-white/20">End-to-End Protection</span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">Resilient. Compliant. Secure.</h3>
            </div>
          </div>
        </motion.div>

        {/* SERVICES ZIG-ZAG SHOWCASE */}
        <section id="services" className="mt-32 space-y-24 sm:space-y-36">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">Our Expertise</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2825] tracking-tight">Our Cyber Security Services</h2>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
                >
                  <div className="w-full lg:w-5/12">
                    <motion.div 
                      whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}
                      className="relative rounded-[2rem] overflow-hidden border border-[#E5DCD5] shadow-xl group bg-[#F3EEEA]"
                    >
                      <div className="h-[350px] sm:h-[450px] w-full overflow-hidden relative">
                        <img 
                          src={service.image} alt={service.title} 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/60 via-transparent to-transparent opacity-80" />
                      </div>
                      <div className="absolute top-6 left-6 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E5DCD5] px-4 py-2 rounded-xl shadow-md flex items-center gap-3">
                        <span className="font-mono text-sm font-bold text-[#C87D55]">{service.num}</span>
                        <span className="text-xs font-bold text-[#2C2825] uppercase tracking-wider">{service.badge}</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="w-full lg:w-7/12 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">{service.category}</span>
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-[#2C2825] tracking-tight leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-base text-[#6B635B] leading-relaxed font-light">{service.desc}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-2">
                      {service.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-[#4A433D]">
                          <span className="flex-shrink-0 w-5 h-5 rounded bg-[#F3EEEA] text-[#C87D55] border border-[#E5DCD5] flex items-center justify-center font-bold text-[10px] mt-0.5">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {service.whyChoose && (
                      <div className="mt-8 bg-[#F3EEEA] border border-[#E5DCD5] rounded-2xl p-6 shadow-sm">
                        <h4 className="text-sm font-bold text-[#2C2825] uppercase tracking-wider mb-4 border-b border-[#E5DCD5] pb-3">
                          Why Secure Your {service.badge}?
                        </h4>
                        <ul className="space-y-2.5">
                          {service.whyChoose.map((reason, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-[#6B635B]">
                              <span className="text-[#C87D55] font-bold">✓</span>
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECURITY APPROACH */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
          className="mt-32 md:mt-40"
        >
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">Our Methodology</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2825] tracking-tight">Our Security Approach</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {securityApproach.map((item, idx) => (
              <motion.div 
                key={idx} variants={fadeInUp}
                className="bg-[#F3EEEA] p-6 rounded-2xl border border-[#E5DCD5] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-4xl font-bold text-[#C87D55]">{item.step}</span>
                </div>
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#C87D55] font-bold border border-[#E5DCD5]">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-[#2C2825] text-lg">{item.title}</h4>
                  <p className="text-sm text-[#6B635B] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* WHY CHOOSE US (Matching VAPT Intro Block Style) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-32 md:mt-40 max-w-5xl mx-auto bg-[#F3EEEA] border border-[#E5DCD5] p-8 sm:p-14 rounded-3xl shadow-sm relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C87D55]/15 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#C87D55]/15 blur-3xl rounded-full" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">The Digital Factory Advantage</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2825] tracking-tight">Why Choose Us?</h2>
              <p className="text-[#6B635B] text-sm sm:text-base leading-relaxed font-light">
                We combine advanced tools with human expertise to deliver security that scales with your business.
              </p>
            </div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyChooseUs.map((item, idx) => (
                <motion.div 
                  key={idx} variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="bg-[#FAF8F5] border border-[#E5DCD5] p-6 rounded-2xl shadow-sm group hover:border-[#C87D55]/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F3EEEA] border border-[#E5DCD5] text-[#C87D55] flex items-center justify-center text-xl mb-4 group-hover:bg-[#C87D55] group-hover:text-white group-hover:border-[#C87D55] transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#2C2825] mb-2 group-hover:text-[#C87D55] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6B635B] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ SECTION (Matching VAPT Style) */}
        <section className="mt-32 md:mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">Common Questions</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2825] tracking-tight leading-tight">
                Engagement <br className="hidden lg:block"/> FAQs
              </h2>
              <p className="text-base text-[#6B635B] leading-relaxed font-light">
                Understand our testing methodology, scoping process, reporting format, and post-engagement support structure.
              </p>
              <div className="pt-4 hidden lg:block">
                <p className="text-sm font-bold text-[#2C2825] mb-2">Need a custom scope?</p>
                <a href="#contact" className="text-sm font-bold text-[#C87D55] hover:text-[#2C2825] transition-colors flex items-center gap-2">
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
                    className={`rounded-2xl border transition-all duration-500 ${isOpen ? 'bg-[#F3EEEA] border-[#E5DCD5] shadow-md' : 'bg-transparent border-transparent hover:bg-[#F3EEEA]/50'}`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-6 md:p-8 text-left flex items-start justify-between gap-6 group"
                    >
                      <span className={`font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-[#C87D55]' : 'text-[#2C2825] group-hover:text-[#C87D55]'}`}>
                        {faq.question}
                      </span>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#C87D55] text-white' : 'bg-[#E5DCD5] text-[#2C2825]'}`}
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
                          <div className="px-6 md:px-8 pb-6 md:pb-8 text-sm md:text-base text-[#6B635B] leading-relaxed font-light">
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

        {/* HIGH-CONVERTING CTA SECTION (Matching VAPT Exact Style) */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="contact"
          className="mt-40 relative"
        >
          <div className="relative rounded-[2.5rem] bg-[#F3EEEA] border border-[#E5DCD5] p-10 sm:p-20 text-center overflow-hidden shadow-lg">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C87D55]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C87D55]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#2C2825]">
                Cyber threats are evolving. <br className="hidden sm:inline" />
                <span className="text-[#C87D55]">
                  Don't fall behind.
                </span>
              </h2>

              <p className="text-[#6B635B] text-base sm:text-xl font-light leading-relaxed max-w-xl mx-auto">
                Protect your organization with Digital Factory's Cyber Security Solutions. Get a comprehensive audit of your current security posture today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:security@digitalfactory.com"
                  className="w-full sm:w-auto px-9 py-5 rounded-xl bg-[#C87D55] text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-[#C87D55]/20 hover:bg-[#B56E47] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Request a Free Security Audit</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-5 rounded-xl bg-[#FAF8F5] border border-[#E5DCD5] text-[#2C2825] font-semibold text-sm sm:text-base hover:bg-[#E5DCD5]/50 transition-all shadow-sm"
                >
                  💬 Speak with Security Lead
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}