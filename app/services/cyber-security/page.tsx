'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, X, Send, Loader2 } from 'lucide-react'; // Loader2 added for loading state
import emailjs from '@emailjs/browser'; // EmailJS imported

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
  // ✅ State for Popup Modal
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // ✅ NEW: Form States
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
          lenis?.raf(time);
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

  // Accordion State (if needed later, kept for consistency)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // ✅ NEW: Handle Input Change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ NEW: Handle Form Submit with EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus('idle');

    // .env.local se credentials fetch karna
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);
      setSendStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });

      // 3 second baad popup close kar de
      setTimeout(() => {
        setIsPopupOpen(false);
        setSendStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  // CYBER SECURITY SERVICES DATA
  const detailedServices = [
    {
      category: "Infrastructure",
      title: "Network Security",
      desc: "Protect your business network from cyber threats with robust security solutions designed to keep your systems, devices, and data safe. We help identify vulnerabilities, strengthen network defenses, monitor potential threats, and reduce security risks.",
      highlights: [
        "Firewalls & IPS Deployment",
        "Secure Network Architecture",
        "VPN & Remote Access Security",
        "Endpoint Protection"
      ],
      image: "/network.png",
      badge: "Network Defense"
    },
    {
      category: "Cloud",
      title: "Cloud Security",
      desc: "Protect your data and applications across AWS, Azure, and Google Cloud environments. Secure your cloud infrastructure, applications, and data with reliable security solutions built for modern businesses.",
      highlights: [
        "Secure Cloud Migration",
        "Identity & Access Management",
        "Cloud Compliance (ISO/GDPR)",
        "Data Encryption",
        "Continuous Threat Mitigation"
      ],
      image: "/cloud.png",
      badge: "Cloud Safe"
    },
    {
      category: "Data",
      title: "Data Protection & Privacy",
      desc: "Safeguard sensitive business and customer information from leaks and theft. Protect your sensitive business and customer data with effective privacy and security measures.",
      highlights: [
        "Data Loss Prevention (DLP)",
        "Encryption (Rest & Transit)",
        "Backup & Disaster Recovery",
        "Privacy Compliance",
        "Secure File Sharing"
      ],
      image: "/data.png",
      badge: "Data Privacy"
    },
    {
      category: "Compliance",
      title: "IT Security Audits",
      desc: "Identify vulnerabilities and ensure your organization meets global regulatory standards. Identify security gaps and strengthen your IT infrastructure with comprehensive security audits.",
      highlights: [
        "Vulnerability Assessment (VAPT)",
        "Risk Assessments",
        "ISO 27001 Support",
        "Compliance Audits",
        "Policy Development"
      ],
      image: "/audit.png",
      badge: "Audit Ready"
    },
    {
      category: "Intelligence",
      title: "Threat Intelligence & SOC",
      desc: "Proactive monitoring and analysis to detect threats before they impact your business. Strengthen your cybersecurity with real-time threat intelligence and proactive Security Operations Center (SOC) monitoring.",
      highlights: [
        "24/7 Security Operations Center",
        "Real-time Threat Detection",
        "Malware Analysis & Forensics",
        "SIEM Implementation",
        "Dark Web Monitoring"
      ],
      image: "https://www.zenflux.fun/security-operations-center-with-threat-monitoring-.jpg",
      badge: "24/7 SOC"
    },
    {
      category: "Zero Trust",
      title: "Identity & Access Management",
      desc: "Implement Zero Trust architecture to verify every user and device accessing your resources.",
      highlights: [
        "Multi-Factor Authentication (MFA)",
        "Single Sign-On (SSO)",
        "Privileged Access Management",
        "Role-Based Access Control",
        "Biometric Integration"
      ],
      image: "/authe.png",
      badge: "Zero Trust"
    }
  ];

  // WHY CHOOSE US DATA
  const whyChooseUs = [
    {
      title: "Comprehensive Coverage",
      desc: "Full-stack security from network to cloud.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
    },
    {
      title: "Compliance Ready",
      desc: "Meets ISO, GDPR, HIPAA, and SOC 2 standards.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></svg>
    },
    {
      title: "Proactive Detection",
      desc: "24/7 monitoring to stop threats early.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10S2 17.5 2 12Z"></path><path d="M12 12v.01"></path><path d="M19.07 4.93a10 10 0 0 0-14.14 0"></path></svg>
    },
    {
      title: "Tailored Strategy",
      desc: "Custom security plans for your business needs.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
    },
  ];

  // CYBER SECURITY FRAMEWORKS DATA
  const frameworks = [
    { abbr: "NIST CSF", name: "Cybersecurity Framework", desc: "Provides a risk-based approach with five core functions to manage and reduce cybersecurity risks effectively.", highlight: "US Standard" },
    { abbr: "DPDPA", name: "Digital Personal Data Protection Act", desc: "India's primary privacy legislation regulating digital personal data processing, mandating strict consent and heavy penalties.", highlight: "Indian Law" },
    { abbr: "ISO/IEC 27001", name: "Information Security Management", desc: "Establishes international requirements for implementing and maintaining a comprehensive ISMS.", highlight: "Global" },
    { abbr: "SOC 2", name: "Service Organization Control", desc: "Validates that service providers securely manage customer data through rigorous trust services criteria.", highlight: "Trust Services" },
    { abbr: "CIS Controls", name: "Center for Internet Security", desc: "Delivers prioritized defensive actions to protect organizations against prevalent cyber attack vectors.", highlight: "Best Practices" },
    { abbr: "COBIT 2019", name: "Control Objectives for IT", desc: "Aligns IT governance and management practices with business goals through structured control objectives.", highlight: "IT Governance" },
    { abbr: "PCI DSS", name: "Payment Card Industry Security", desc: "Mandates security standards for all entities processing or storing credit card and payment data.", highlight: "Payment Security" },
    { abbr: "HIPAA", name: "Health Insurance Portability", desc: "Protects sensitive patient health information from unauthorized access or misuse in healthcare.", highlight: "Healthcare US" },
    { abbr: "ISO/IEC 27701", name: "Privacy Information Management", desc: "Extends ISO 27001 to establish specific privacy controls for managing PII securely.", highlight: "Privacy Focus" },
    { abbr: "HITRUST CSF", name: "Health Information Trust Alliance", desc: "Integrates healthcare regulations and security best practices into a single certifiable framework.", highlight: "Healthcare Global" },
    { abbr: "IEC 62443", name: "Industrial Automation Security", desc: "Defines cybersecurity requirements specifically for industrial automation and control systems.", highlight: "Industrial IoT" },
    { abbr: "FedRAMP", name: "Federal Risk & Authorization", desc: "Standardizes security assessment authorization for cloud products used by US agencies.", highlight: "US Federal" },
    { abbr: "CMMC", name: "Cybersecurity Maturity Model", desc: "Requires defense contractors to achieve verified cybersecurity maturity levels for CUI.", highlight: "Defense Sector" },
    { abbr: "TISAX", name: "Trusted Information Security", desc: "Enables mutual recognition of information security assessments across the automotive supply chain.", highlight: "Automotive" },
    { abbr: "CSA STAR", name: "Cloud Security Alliance", desc: "Combines self-assessment and third-party auditing to validate cloud provider security posture.", highlight: "Cloud Security" },
    { abbr: "DORA", name: "Digital Operational Resilience Act", desc: "Ensures EU financial entities maintain operational resilience against ICT disruptions.", highlight: "EU Finance" },
    { abbr: "NIS2 Directive", name: "Network & Information Security", desc: "Strengthens cybersecurity obligations and incident reporting across critical EU sectors.", highlight: "EU Critical Infra" }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F7F3E8] text-[#2C1E16] font-sans selection:bg-[#A64B2A] selection:text-white relative overflow-hidden">

      {/* Dynamic Background */}
      <motion.div
        style={{ y: yHeroBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] max-w-[1000px] h-[500px] bg-gradient-to-b from-[#A64B2A]/10 to-transparent rounded-full blur-[100px] md:blur-[140px] pointer-events-none will-change-transform"
      />

      {/* MAIN CONTENT WRAPPER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-1 sm:py-12 relative z-10">

        {/* HERO SECTION */}
        <section className="text-center max-w-5xl mx-auto pt-10 sm:pt-16 lg:pt-0 pb-12 flex flex-col items-center">

          {/* CENTERED BREADCRUMB PILL */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-[#E5D7CD] shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]"
          >
            <a href="/" className="text-[#867E77] text-sm md:text-[15px] font-semibold hover:text-[#A64B2A] transition-colors">Home</a>
            <span className="text-[#D0C8C1] text-lg leading-none mt-[-2px]">›</span>
            <a href="/#services" className="text-[#867E77] text-sm md:text-[15px] font-semibold hover:text-[#A64B2A] transition-colors">Services</a>
            <span className="text-[#D0C8C1] text-lg leading-none mt-[-2px]">›</span>
            <span className="text-[#A64B2A] text-sm md:text-[15px] font-bold">Cyber Security</span>
          </motion.nav>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-[#2A2320] tracking-tight leading-[1.1]"
          >
            Protecting Your Business <br className="hidden md:block" />
            <span className="text-[#B35332]">In a Digital World.</span>
          </motion.h1>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10 md:mb-12 text-lg sm:text-xl text-[#6B5D56] leading-[1.6] font-light max-w-2xl mx-auto px-4"
          >
            End-to-end cyber security solutions to safeguard your data, networks, and systems against evolving threats.
          </motion.p>

          {/* CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#A64B2A] text-white font-semibold text-base tracking-wide shadow-lg shadow-[#A64B2A]/20 hover:bg-[#8a3d22] transition-colors"
            >
              Secure Your Business
              <span className="text-xl leading-none font-light ml-1">→</span>
            </motion.a>
          </motion.div>

          {/* INTRO BLOCK */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 md:mt-7 max-w-4xl mx-auto text-center bg-[#F3EEEA] border border-[#E5DCD5] p-6 sm:p-10 rounded-2xl md:rounded-3xl shadow-sm relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-[#BD6E44]/15 blur-3xl rounded-full" />
            <p className="text-sm sm:text-base md:text-lg text-[#4A433D] leading-relaxed relative z-10">
              Protect your business with reliable cybersecurity solutions built to defend your systems, networks, applications, and sensitive data. From vulnerability assessment and penetration testing to threat protection and security monitoring, we help reduce risks and strengthen your digital security.
            </p>
          </motion.section>
        </section>

        {/* ZIG-ZAG SERVICES WITH DIRECTIONAL CURTAIN REVEAL */}
        <section id="capabilities" className="mt-12 md:mt-5 space-y-8 md:space-y-24">
          <div className="text-center max-w-3xl mx-auto space-y-3 px-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A64B2A] font-medium">Our Expertise</span>
            <h2 className="text-2xl md:text-4xl font-semibold text-[#2C1E16] tracking-tight">Cyber Security Services</h2>
          </div>

          <div className="space-y-12 md:space-y-24">
            {detailedServices.map((service, index) => {
              const isEven = index % 2 === 0;
              const revealClip = isEven
                ? ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
                : ["inset(0 0 0 100%)", "inset(0 0 0 0%)"];

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeInUp}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-16`}
                >
                  {/* IMAGE SIDE */}
                  <div className="w-full lg:w-1/2 relative group">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5, ease: customEase }}
                      className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl bg-white border border-[#E5D7CD]/50 aspect-[4/3] md:aspect-[16/10]"
                    >
                      <motion.div
                        initial={{ clipPath: revealClip[0] }}
                        whileInView={{ clipPath: revealClip[1] }}
                        transition={{ duration: 1.4, ease: customEase, delay: 0.2 }}
                        className="w-full h-full relative"
                      >
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-[#2C1E16]/10 group-hover:bg-transparent transition-colors duration-700" />
                      </motion.div>

                      {/* Badge */}
                      <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg flex items-center gap-2 z-20">
                        <span className="font-mono text-[10px] md:text-xs font-bold text-[#A64B2A]">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-[10px] md:text-xs font-bold text-[#2C1E16] uppercase tracking-wider">{service.badge}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* TEXT SIDE */}
                  <div className="w-full lg:w-1/2 space-y-4 md:space-y-4">
                    <div className="space-y-5 md:space-y-3">
                      <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-[#A64B2A] font-medium">{service.category}</span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2C1E16] tracking-tight leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-[#6B5D56] leading-relaxed font-normal">{service.desc}</p>

                    {/* ✅ TICK MARKS SAFE HERE */}
                    <ul className="space-y-2 md:space-y-5 pt-2">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs md:text-sm font-normal text-[#382B27]">
                          <span className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#A64B2A]/10 text-[#A64B2A] flex items-center justify-center font-bold text-[8px] md:text-[10px] mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* KNOW MORE BUTTON */}
                    <div className="pt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsPopupOpen(true)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#F3EEEA] border border-[#E5DCD5] rounded-full text-[#2C2825] font-bold text-sm shadow-sm hover:bg-[#EBE4DF] hover:border-[#A64B2A]/30 transition-all group"
                      >
                        <span>Know More</span>
                        <ArrowRight className="w-4 h-4 text-[#A64B2A] transition-transform group-hover:translate-x-1" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      {/* WHY CHOOSE US */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInUp}
        className="mt-16 md:mt-32 relative bg-[#F7F1E8] w-full py-16 md:py-24 overflow-hidden border-y border-[#8F6B55]/10"
      >
        {/* Ambient Orbs */}
        <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 left-1/4 w-[250px] h-[250px] md:w-[550px] md:h-[550px] bg-[#C88A68]/20 rounded-full blur-[100px] md:blur-[130px] pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-0 right-1/4 w-[200px] h-[200px] md:w-[450px] md:h-[450px] bg-[#D8B08B]/20 rounded-full blur-[100px] md:blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 md:mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#A64B2A] font-bold">Why Digital Theory  Labs</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2B211C] tracking-tight">Why Choose Us?</h2>
            <p className="text-[#75675F] text-sm md:text-base leading-relaxed font-normal">Advanced tools combined with human expertise for scalable security.</p>
          </div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {whyChooseUs.map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -8 }} className="relative bg-white/65 backdrop-blur-xl p-6 md:p-8 rounded-[1.5rem] border border-[#8F6B55]/15 shadow-[0_10px_40px_rgba(97,67,48,0.08)] group overflow-hidden transition-all duration-500 hover:bg-white/80 hover:border-[#A64B2A]/35 hover:shadow-[0_18px_45px_rgba(97,67,48,0.14)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A64B2A]/10 via-[#D9B79C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#F3E8DC] border border-[#A64B2A]/15 text-[#A64B2A] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#A64B2A] group-hover:text-white transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#2B211C] mb-3 group-hover:text-[#A64B2A] transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-[#75675F] leading-relaxed font-normal group-hover:text-[#4B403A] transition-colors duration-300 flex-grow">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CYBER SECURITY FRAMEWORKS */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp} className="py-16 md:py-24 relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl space-y-3 mb-10 md:mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-[#A64B2A] font-medium">Standards & Compliance</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2C1E16] tracking-tight">Cyber Security Frameworks</h2>
          <p className="text-[#6B5D56] text-sm md:text-base leading-relaxed font-normal">We align our security strategies with globally recognized methodologies to ensure robust and verifiable protection for your organization.</p>
        </div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
          {frameworks.map((fw, idx) => (
            <motion.div key={idx} variants={fadeInUp} whileHover={{ scale: 1.02, y: -4 }} className={`bg-white rounded-2xl p-6 md:p-8 border border-[#E5D7CD] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${idx === 0 || idx === 5 || idx === 10 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <span className="text-xs font-mono text-[#A64B2A]/60 font-semibold">0{idx + 1}</span>
                  <span className="bg-[#F7F3E8] text-[#A64B2A] text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border border-[#E5D7CD]">{fw.highlight}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2C1E16] tracking-tight mb-2">{fw.abbr}</h3>
                <h4 className="text-sm md:text-base font-medium text-[#A64B2A] mb-3 line-clamp-1">{fw.name}</h4>
                <p className="text-[#6B5D56] text-xs md:text-sm leading-snug font-normal text-left hyphens-auto">{fw.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#A64B2A] to-[#D4856A] group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: customEase }} id="consultation" className="w-full pb-16 md:pb-24 px-4 sm:px-6 md:px-8 relative z-20">
        <div className="max-w-5xl mx-auto">
          <motion.div whileHover={{ y: -5 }} className="w-full rounded-[2rem] bg-gradient-to-br from-[#2C1E16] via-[#4A2B1D] to-[#A64B2A] p-10 md:p-16 text-center overflow-hidden relative shadow-2xl shadow-[#A64B2A]/20 border border-white/10">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#A64B2A]/40 to-transparent rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-white drop-shadow-md">
                Cyber threats are evolving. <br className="hidden sm:block" /> Don't fall behind.
              </h2>
              <p className="text-white/80 text-sm md:text-lg font-normal leading-relaxed max-w-xl mx-auto">
                Protect your organization with Digital Theory Labs . Get a comprehensive security audit today.
              </p>
              <div className="pt-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#A64B2A] font-bold text-sm md:text-base tracking-wide shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all"
                >
                  Request Free Audit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ✅ CENTERED POPUP MODAL WITH EMAILJS INTEGRATION */}
      <AnimatePresence>
        {isPopupOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="fixed inset-0 bg-[#2C2825]/40 backdrop-blur-sm z-[60]"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-lg px-4"
            >
              <div className="bg-[#FAF8F5] border border-[#E5DCD5] rounded-3xl shadow-2xl overflow-hidden relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F3EEEA] border border-[#E5DCD5] flex items-center justify-center text-[#6B635B] hover:bg-[#A64B2A] hover:text-white hover:border-[#A64B2A] transition-all duration-300 z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="p-8 pb-0 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#A64B2A]/10 flex items-center justify-center">
                    <Send className="w-8 h-8 text-[#A64B2A]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#2C2825] mb-2">Let's Discuss Your Project</h3>
                  <p className="text-sm text-[#6B635B] font-light">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                {/* ✅ UPDATED FORM WITH HANDLESUBMIT */}
                <form onSubmit={handleSubmit} className="p-8 space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2C2825] uppercase tracking-wider ml-1">Full Name</label>
                    <input
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-[#F3EEEA] border border-[#E5DCD5] text-[#2C2825] placeholder-[#8C827A] focus:outline-none focus:border-[#A64B2A] focus:ring-2 focus:ring-[#A64B2A]/20 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2C2825] uppercase tracking-wider ml-1">Email Address</label>
                    <input
                      type="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl bg-[#F3EEEA] border border-[#E5DCD5] text-[#2C2825] placeholder-[#8C827A] focus:outline-none focus:border-[#A64B2A] focus:ring-2 focus:ring-[#A64B2A]/20 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2C2825] uppercase tracking-wider ml-1">Project Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      placeholder="Tell us about your security requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F3EEEA] border border-[#E5DCD5] text-[#2C2825] placeholder-[#8C827A] focus:outline-none focus:border-[#A64B2A] focus:ring-2 focus:ring-[#A64B2A]/20 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 rounded-xl bg-[#A64B2A] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#A64B2A]/30 hover:bg-[#8a3d22] transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {sendStatus === 'success' && (
                    <p className="text-green-600 text-sm text-center font-medium mt-2">Message sent successfully!</p>
                  )}
                  {sendStatus === 'error' && (
                    <p className="text-red-600 text-sm text-center font-medium mt-2">Failed to send. Please try again.</p>
                  )}
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}