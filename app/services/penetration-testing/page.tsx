'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  ShieldCheck,
  Target,
  LockKeyhole,
  Zap,
  ArrowRight,
  X,
  Send,
  Loader2 // Loading icon ke liye add kiya
} from "lucide-react";
import emailjs from '@emailjs/browser'; // EmailJS import kiya

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

  // Accordion State
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const toggleAccordion = (index: number) => setOpenAccordion(openAccordion === index ? null : index);

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

  // PENETRATION TESTING DATA
  const detailedServices = [
    {
      category: "Application Security",
      title: "Web Application Penetration Testing",
      desc: "Identify and exploit vulnerabilities in your web apps before attackers do. Comprehensive OWASP Top 10 coverage.",
      highlights: [
        "Login & Authentication Bypass Testing",
        "Authorization & Access Control (IDOR)",
        "SQL Injection & XSS Exploitation",
        "CSRF & Session Management Testing",
        "File Upload Vulnerability Assessment"
      ],
      image: "/wat.png",
      badge: "OWASP Top 10"
    },
    {
      category: "Interface Security",
      title: "API Penetration Testing",
      desc: "Secure your REST and GraphQL endpoints against data leaks, broken object level authorization, and injection attacks.",
      highlights: [
        "REST & GraphQL API Assessment",
        "Broken Object Level Authorization (BOLA)",
        "Rate Limiting & DoS Resilience",
        "JWT & OAuth Token Security",
        "Input Validation & Mass Assignment",
        "Business Logic Flaw Detection"
      ],
      image: "https://www.wattlecorp.com/wp-content/uploads/2026/02/api-penetration-testing-in-india-bangalore-two.webp",
      badge: "REST & GraphQL"
    },
    {
      category: "Mobile Security",
      title: "Mobile Application Testing",
      desc: "Deep-dive security assessment for Android and iOS applications, covering binary analysis and backend communication.",
      highlights: [
        "Android & iOS Binary Analysis",
        "Insecure Data Storage & Logging",
        "Certificate Pinning Bypass",
        "Session & Authentication Security",
        "TLS/SSL Configuration Review",
        "Reverse Engineering & Tampering"
      ],
      image: "/networks.png",
      badge: "iOS & Android"
    },
    {
      category: "Infrastructure",
      title: "Network Penetration Testing",
      desc: "Assess the security posture of your internal and external networks, identifying misconfigurations and open attack vectors.",
      highlights: [
        "External Perimeter Assessment",
        "Internal Network Lateral Movement",
        "Firewall & IDS/IPS Evasion",
        "Open Port & Service Enumeration",
        "Network Segmentation Validation",
        "Legacy Protocol Exploitation"
      ],
      image: "/networksss.png",
      badge: "Infra Security"
    },
    {
      category: "Cloud Environment",
      title: "Cloud Security Assessment",
      desc: "Review your AWS, Azure, or GCP environments for IAM misconfigurations, exposed storage, and serverless risks.",
      highlights: [
        "AWS / Azure / GCP Config Review",
        "IAM Policy & Permission Audits",
        "S3/Blob Storage Exposure Check",
        "Serverless Function Security",
        "Container & Kubernetes Security",
        "Cloud API & Metadata Attacks"
      ],
      image: "https://cypricsinc.com/wp-content/uploads/2025/06/Cloud-Security-Assessment.jpg",
      badge: "AWS / Azure / GCP"
    },
    {
      category: "Wireless & Physical",
      title: "Wireless & Social Engineering",
      desc: "Test the human element and wireless perimeter. From Wi-Fi cracking to targeted phishing simulations.",
      highlights: [
        "WPA/WPA2/WPA3 Security Assessment",
        "Rogue Access Point Detection",
        "Phishing & Vishing Simulations",
        "Physical Entry Assessments",
        "Employee Security Awareness",
        "USB Drop & Tailgating Tests"
      ],
      image: "/wireless.png",
      badge: "Wireless & Social"
    },
    {
      category: "Red Teaming",
      title: "Red Teaming & Adversary Simulation",
      desc: "Real-world attack scenarios to identify weaknesses across applications, infrastructure, identities, and security controls before actual attackers can exploit them.",
      highlights: [
        "External & Internal Attack Simulation",
        "Web Application & API Attack Paths",
        "Identity & Privilege Escalation Testing",
        "Network & Infrastructure Assessment",
        "Social Engineering & Phishing Simulation"
      ],
      image: "https://cybersecurity-nxxt.com/assets/images/vapt/about-1.png",
      badge: "White Box"
    }
  ];

  const whyChooseUs = [
    {
      icon: <ShieldCheck size={30} strokeWidth={1.8} />,
      title: "Proven Security Expertise",
      desc: "Our security approach combines offensive testing with defensive strategies to identify vulnerabilities before they become real threats."
    },
    {
      icon: <Target size={30} strokeWidth={1.8} />,
      title: "Precision-Driven Testing",
      desc: "We focus on real-world attack scenarios to uncover weaknesses that automated tools alone may overlook."
    },
    {
      icon: <LockKeyhole size={30} strokeWidth={1.8} />,
      title: "Security & Compliance",
      desc: "Protect sensitive business data while aligning your systems with modern security practices and compliance requirements."
    },
    {
      icon: <Zap size={30} strokeWidth={1.8} />,
      title: "Fast & Actionable Results",
      desc: "Receive clear security findings, practical recommendations, and prioritized remediation steps without unnecessary complexity."
    }
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-0 sm:py-12 relative z-10">

        {/* HERO SECTION */}
        <section className="text-center max-w-5xl mx-auto pt-10 sm:pt-16 lg:pt-1 pb-12 flex flex-col items-center">

          {/* CENTERED BREADCRUMB PILL */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-[#E5D7CD] shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]"
          >
            <a href="/" className="text-[#867E77] text-sm md:text-[15px] font-semibold hover:text-[#A64B2A] transition-colors">Home</a>
            <span className="text-[#D0C8C1] text-lg leading-none mt-[-2px]">›</span>
            <a href="/services" className="text-[#867E77] text-sm md:text-[15px] font-semibold hover:text-[#A64B2A] transition-colors">Services</a>
            <span className="text-[#D0C8C1] text-lg leading-none mt-[-2px]">›</span>
            <span className="text-[#A64B2A] text-sm md:text-[15px] font-bold">Penetration Testing</span>
          </motion.nav>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-[#2A2320] tracking-tight leading-[1.1]"
          >
            Find Weaknesses. <br className="hidden md:block" />
            <span className="text-[#A64B2A]">Before Hackers Do.</span>
          </motion.h1>

          {/* PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10 md:mb-12 text-lg sm:text-xl text-[#6B5D56] leading-[1.6] font-light max-w-2xl mx-auto px-4"
          >
            Enterprise-grade penetration testing for web apps, APIs, mobile, cloud, and networks. Manual-first methodology with actionable remediation guidance.
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
              Request a Pen Test
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
              Protect your business from evolving cyber threats with robust security solutions designed to safeguard your systems, data, and digital infrastructure. From vulnerability assessment and threat monitoring to secure network protection, our cybersecurity solutions help keep your business secure and resilient.
            </p>
          </motion.section>
        </section>

        {/* ZIG-ZAG SERVICES WITH DIRECTIONAL CURTAIN REVEAL */}
        <section id="capabilities" className="mt-12 md:mt-24 space-y-8 md:space-y-25">
          <div className="text-center max-w-3xl mx-auto space-y-3 md:space-y-4 px-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A64B2A] font-bold">Attack Surface Coverage</span>
            <h2 className="text-2xl md:text-5xl font-extrabold text-[#2C1E16] tracking-tight">Testing Capabilities</h2>
          </div>

          <div className="space-y-12 md:space-y-32">
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
                  <div className="w-full lg:w-1/2 space-y-4 md:space-y-3">
                    <div className="space-y-2 md:space-y-3">
                      <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#A64B2A] font-bold">{service.category}</span>
                      <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#2C1E16] tracking-tight leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-[#6B5D56] leading-relaxed font-light">{service.desc}</p>

                    {/* ✅ TICK MARKS SAFE HERE */}
                    <ul className="space-y-2 md:space-y-3 pt-2">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs md:text-sm font-medium text-[#382B27]">
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

        {/* WHY CHOOSE US SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="mt-16 md:mt-32 relative bg-[#F5EFE6] rounded-[1.5rem] md:rounded-[3rem] p-6 md:p-16 lg:p-24 overflow-hidden shadow-[0_25px_80px_rgba(71,52,39,0.12)] border border-[#E4D8C9]"
        >
          {/* Soft Ambient Background */}
          <div className="absolute -top-32 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#D9B99B]/25 rounded-full blur-[80px] md:blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-32 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-[#C7A98D]/20 rounded-full blur-[80px] md:blur-[140px] pointer-events-none" />

          {/* Decorative Lines */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B89A7C]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B89A7C]/30 to-transparent" />

          {/* Header */}
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4 md:space-y-5 mb-10 md:mb-20">
            <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#8B5E3C] font-bold">
              <span className="w-6 md:w-8 h-px bg-[#B48A68]" />
              The Security Advantage
              <span className="w-6 md:w-8 h-px bg-[#B48A68]" />
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#2B211B] tracking-tight leading-tight">Why Trust Our Team</h2>
            <p className="text-[#75675D] text-sm md:text-base lg:text-lg leading-relaxed font-light max-w-2xl mx-auto px-4">
              We combine elite offensive skills with defensive clarity to keep your business safe, resilient, and compliant.
            </p>
          </div>

          {/* Card Grid */}
          <motion.div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="relative bg-[#FFFDF9] p-6 md:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-[#E5D8CA] shadow-[0_15px_45px_rgba(70,50,35,0.07)] group overflow-hidden transition-all duration-500 hover:border-[#B48A68]/70 hover:shadow-[0_25px_60px_rgba(99,70,48,0.14)]"
              >
                {/* Soft Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F1E4D5]/70 via-transparent to-[#E8D4C0]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Giant Watermark Number */}
                <div className="absolute -top-8 -right-4 text-[6rem] md:text-[10rem] font-extrabold text-[#5C4635]/[0.035] group-hover:text-[#8B5E3C]/[0.07] transition-colors duration-500 pointer-events-none leading-none">
                  0{idx + 1}
                </div>

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#F3E9DD] border border-[#E2D1BF] text-[#8B5E3C] flex items-center justify-center text-xl md:text-3xl mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-[#8B5E3C] group-hover:border-[#8B5E3C] group-hover:text-white transition-all duration-500 shadow-[0_8px_25px_rgba(91,65,45,0.08)]">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-2xl font-bold text-[#2B211B] mb-3 md:mb-4 group-hover:text-[#8B5E3C] transition-colors duration-300">{item.title}</h3>

                  {/* Description */}
                  <p className="text-xs md:text-base text-[#75675D] leading-relaxed font-light group-hover:text-[#55463C] transition-colors duration-300 max-w-xl">{item.desc}</p>

                  {/* Bottom Accent */}
                  <div className="mt-6 md:mt-8 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-[#B48A68] group-hover:w-14 transition-all duration-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B48A68]" />
                  </div>
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
                Engagement <br className="hidden lg:block" /> FAQs
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
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-extrabold tracking-tight leading-tight">Secure Your Attack Surface</h2>
              <p className="text-white/80 text-sm md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                Schedule a confidential scoping call. We'll assess your environment, define rules of engagement, and deliver a fixed-price proposal within 24 hours.
              </p>
              <div className="pt-2 md:pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/#contact"
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