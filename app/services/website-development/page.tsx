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

export default function SoftwareDevelopmentPage() {
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

  // Accordion State for FAQ
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const toggleAccordion = (index: number) => setOpenAccordion(openAccordion === index ? null : index);

  // --- SOFTWARE DEVELOPMENT SERVICES DATA ---
  const services = [
    {
      category: "Tailored Solutions",
      title: "Custom Application Development",
      desc: "Tailored solutions designed specifically for your workflows, operational bottlenecks, and strategic business goals.",
      highlights: [
        "Business Process Automation Tools",
        "CRM & ERP Solutions",
        "Industry-Specific Software",
        "Cloud-Based Business Applications",
        "Desktop Applications",
        "API Development & Integration"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
      badge: "Custom Dev"
    },
    {
      category: "Cloud Native",
      title: "SaaS Product Development",
      desc: "Build scalable cloud-based products with multi-tenant architecture designed to handle thousands of concurrent users.",
      highlights: [
        "SaaS Product Architecture Design",
        "Multi-Tenant Application Development",
        "Subscription & Billing Integration",
        "Cloud Hosting (AWS, Azure, GCP)",
        "Data Security & Compliance",
        "Ongoing Maintenance & Scaling"
      ],
      whyChoose: [
        "Scalable Multi-Tenant Architecture",
        "Secure Subscription Management",
        "Enterprise-Grade Cloud Infrastructure",
        "Rapid Time-to-Market Deployment"
      ],
      image: "/Saas.jpg", 
      badge: "SaaS Platform"
    },
    {
      category: "iOS & Android",
      title: "Mobile Application Development",
      desc: "Create seamless, high-performance mobile experiences for Android and iOS devices with intuitive UI/UX.",
      highlights: [
        "Native App Development (iOS & Android)",
        "Cross-Platform (Flutter, React Native)",
        "UI/UX Design for Mobile Interfaces",
        "Mobile App API Integration",
        "App Store & Play Store Deployment",
        "Performance Optimization & Updates"
      ],
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=1200",
      badge: "Mobile Apps"
    },
    {
      category: "Web Platforms",
      title: "Web Application Development",
      desc: "High-performing, secure, and responsive web apps built with modern frontend frameworks and robust backend systems.",
      highlights: [
        "Progressive Web Apps (PWAs)",
        "Enterprise Portals & Dashboards",
        "Custom Web Platforms",
        "Real-Time Data Applications",
        "Third-Party Integrations"
      ],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
      badge: "Web Apps"
    },
    {
      category: "Quality Assurance",
      title: "Software Testing & QA",
      desc: "Ensure your software is bulletproof, secure, and performant before reaching your end users.",
      highlights: [
        "Functional & Performance Testing",
        "Security & Vulnerability Assessment",
        "Usability Testing",
        "Automated & Manual QA Pipelines"
      ],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1200",
      badge: "QA & Testing"
    },
    {
      category: "Enterprise Systems",
      title: "Enterprise Resource Planning (ERP)",
      desc: "Streamline your business operations, centralize data, and improve organization-wide efficiency with powerful ERP solutions.",
      highlights: [
        "ERP Software Development & Integration",
        "Finance & Accounting Management",
        "Inventory & Supply Chain Systems",
        "HR & Payroll Management",
        "Sales & Customer Management",
        "Real-Time Analytics & Reporting"
      ],
      whyChoose: [
        "Centralized Business Management",
        "Improved Operational Efficiency",
        "Customized Solutions for Your Business",
        "Real-Time Data & Reporting"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      badge: "ERP Systems"
    },
    {
      category: "Artificial Intelligence",
      title: "AI Integration & ML Solutions",
      desc: "Leverage AI to automate tasks, derive predictive insights, and build next-gen intelligent features into existing platforms.",
      highlights: [
        "AI-Powered Business Automation",
        "Custom AI Chatbots & Virtual Assistants",
        "Legacy System AI Integration",
        "Generative AI & LLM Solutions",
        "Predictive Data Analytics",
        "Workflow Process Optimization"
      ],
      whyChoose: [
        "Smarter & Faster Decision Making",
        "Customized AI Architecture",
        "Seamless API-Driven Integration",
        "Reduced Operational Overhead"
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      badge: "AI Solutions"
    },
    {
      category: "Smart Automation",
      title: "Intelligent Process Automation",
      desc: "Eliminate repetitive tasks and streamline workflows to empower teams for high-value strategic growth.",
      highlights: [
        "Workflow Automation Pipelines",
        "Automated Customer Support Systems",
        "Lead Generation & Nurture Automation",
        "Document Processing & OCR Systems",
        "Marketing & Sales Automation",
        "Automated Reporting & Analytics"
      ],
      whyChoose: [
        "Eliminate Manual Errors",
        "Up to 60% Faster Task Processing",
        "Seamless Integration with SaaS Tools",
        "24/7 Uninterrupted Operations"
      ],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
      badge: "Automation"
    },
    {
      category: "Process Engineering",
      title: "Workflow Orchestration",
      desc: "Connect people, software systems, and data pipelines into unified, high-efficiency business processes.",
      highlights: [
        "Enterprise Workflow Mapping",
        "Automated Task Management",
        "System & API Integration",
        "Real-time Workflow Monitoring",
        "Custom Approval Pipelines",
        "Process Optimization Consulting"
      ],
      whyChoose: [
        "End-to-End Operational Visibility",
        "Frictionless Departmental Handoffs",
        "Scalable Process Infrastructure",
        "Enterprise Security Standards"
      ],
      image: "/Workflow_Orchestration.jpg",
      badge: "Orchestration"
    }
  ];

  // WHY CHOOSE US DATA
  const whyChooseUs = [
    { title: "Bespoke Engineering", desc: "Every line of code is written to solve your specific business challenges.", icon: "" },
    { title: "Future-Proof Tech Stack", desc: "Built on modern architectures that scale as your company grows.", icon: "" },
    { title: "Security First Approach", desc: "Enterprise-grade security protocols embedded from day one.", icon: "" },
    { title: "Agile Development", desc: "Transparent sprints with regular demos and iterative feedback loops.", icon: "" },
    { title: "Post-Launch Support", desc: "Dedicated maintenance teams ensuring 99.9% uptime and performance.", icon: "" }
  ];

  // FAQ DATA
  const faqs = [
    { question: "How long does custom software development take?", answer: "Timelines vary based on complexity. A standard MVP typically takes 8-12 weeks, while complex enterprise systems may require 4-6 months. We provide detailed roadmaps after initial scoping." },
    { question: "Do you handle legacy system integration?", answer: "Yes. We specialize in connecting modern applications with legacy databases and systems using secure APIs and middleware to ensure seamless data flow without disrupting current operations." },
    { question: "What technologies do you use for development?", answer: "We work with a wide range of modern stacks including React, Next.js, Node.js, Python, .NET, Flutter, and cloud platforms like AWS and Azure, choosing the best fit for your specific requirements." },
    { question: "Can you maintain and update our existing software?", answer: "Absolutely. We offer comprehensive maintenance packages including security patching, feature enhancements, performance optimization, and dedicated support teams." }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAF8F5] text-[#2C2825] font-sans selection:bg-[#C87D55] selection:text-white relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <motion.div 
        style={{ y: yHeroBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C87D55]/10 rounded-full blur-[140px] pointer-events-none" 
      />

      {/* MAIN CONTENT WRAPPER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 relative z-10">
        
   {/* HERO SECTION */}
        <section className="text-center max-w-5xl mx-auto pt-10 sm:pt-16 lg:pt-1 pb-12 flex flex-col items-center">
          
          {/* Centered Breadcrumb Pill */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-[#E5DCD5] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)]"
          >
            <a href="/" className="text-[#867E77] text-sm md:text-[15px] font-semibold hover:text-[#2C2825] transition-colors">
              Home
            </a>
            
            <span className="text-[#D0C8C1] text-lg leading-none mt-[-2px]">›</span>
            
            <a href="/#services" className="text-[#867E77] text-sm md:text-[15px] font-semibold hover:text-[#2C2825] transition-colors">
              Services
            </a>
            
            <span className="text-[#D0C8C1] text-lg leading-none mt-[-2px]">›</span>
            
            <span className="text-[#BD6E44] text-sm md:text-[15px] font-bold">
              Software Development
            </span>
          </motion.nav>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 md:mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-[4rem] font-black text-[#272422] tracking-tighter leading-[1.05]"
          >
            Custom Software Built for a Digital-First Era
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10 md:mb-8 text-lg sm:text-xl md:text-2xl text-[#6B635B] leading-relaxed font-light max-w-3xl mx-auto px-4"
          >
            We engineer high-performance web applications, scalable cloud platforms, and automated workflows designed specifically to unlock real business growth.
          </motion.p>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-4.5 rounded-full bg-[#BD6E44] text-white font-bold text-sm md:text-base tracking-wide shadow-xl shadow-[#BD6E44]/30 hover:bg-[#A65E38] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Start Your Software Project →</span>
            </motion.a>
          </motion.div>
          
        </section>

        {/* INTRO BLOCK */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-20 max-w-4xl mx-auto text-center bg-[#F3EEEA] border border-[#E5DCD5] p-6 sm:p-10 rounded-2xl md:rounded-3xl shadow-sm relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-[#C87D55]/15 blur-3xl rounded-full" />
          <p className="text-sm sm:text-base md:text-lg text-[#4A433D] leading-relaxed relative z-10">
            At <strong>Digital Factory</strong>, we don't just write code — we architect digital ecosystems. From AI-powered automation to enterprise-grade ERPs, our engineering team builds software that becomes the backbone of your operational success.
          </p>
        </motion.section>

        {/* PARALLAX HERO SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: customEase }}
          className="mt-10 md:mt-20 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-[#E5DCD5] shadow-xl relative h-[250px] sm:h-[350px] md:h-[450px]"
        >
          <motion.img 
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]), scale: 1.15 }}
            src="/hero-banner-WD.png" 
            alt="Software Development Workspace" 
            className="w-full h-full object-cover transform-origin-top will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2825]/90 via-[#2C2825]/20 to-transparent flex items-end p-6 md:p-14">
            <div className="text-white space-y-3">
              <span className="text-[10px] md:text-xs font-mono font-bold text-[#FAF8F5] uppercase tracking-widest backdrop-blur-md bg-[#C87D55]/80 px-4 py-1.5 rounded-full border border-white/20">Full-Cycle Engineering</span>
              <h3 className="text-xl sm:text-3xl md:text-5xl font-bold tracking-tight">Scalable. Secure. Intelligent.</h3>
            </div>
          </div>
        </motion.div>

        {/* SERVICES ZIG-ZAG WITH DIRECTIONAL CURTAIN REVEAL */}
        <section id="services" className="mt-12 md:mt-24 space-y-8 md:space-y-24">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 md:mb-10 px-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">Engineering Capabilities</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#2C2825] tracking-tight">Our Software Services</h2>
          </div>

          <div className="space-y-12 md:space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              
              // LOGIC FOR DIRECTIONAL REVEAL
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
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-8 md:gap-16`}
                >
                  {/* IMAGE SIDE WITH DIRECTIONAL CURTAIN REVEAL EFFECT */}
                  <div className="w-full lg:w-5/12 relative group">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5, ease: customEase }}
                      className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-[#E5DCD5] shadow-xl bg-[#F3EEEA] h-full min-h-[300px] md:min-h-[400px]"
                    >
                      {/* The Mask Container using Clip Path */}
                      <motion.div 
                        initial={{ clipPath: revealClip[0] }}
                        whileInView={{ clipPath: revealClip[1] }}
                        transition={{ duration: 1.4, ease: customEase, delay: 0.2 }}
                        className="w-full h-full relative"
                      >
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/60 via-transparent to-transparent opacity-80" />
                      </motion.div>

                      {/* Floating Tech Badge */}
                      <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E5DCD5] px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-md flex items-center gap-3 z-20">
                        <span className="font-mono text-[10px] md:text-sm font-bold text-[#C87D55]">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-[10px] md:text-xs font-bold text-[#2C2825] uppercase tracking-wider">{service.badge}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* CONTENT BLOCK */}
                  <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-4 md:space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">
                        {service.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#2C2825] tracking-tight leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm md:text-base text-[#6B635B] leading-relaxed font-light">
                      {service.desc}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 md:gap-y-3 pt-2">
                      {service.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-[#4A433D]">
                          <span className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded bg-[#F3EEEA] text-[#C87D55] border border-[#E5DCD5] flex items-center justify-center font-bold text-[8px] md:text-[10px] mt-0.5">
                            ✦
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* WHY CHOOSE SECTION */}
                    {service.whyChoose && (
                      <div className="mt-6 md:mt-8 bg-[#F3EEEA] border border-[#E5DCD5] rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm">
                        <h4 className="text-[10px] md:text-sm font-bold text-[#2C2825] uppercase tracking-wider mb-3 md:mb-4 border-b border-[#E5DCD5] pb-2 md:pb-3">
                          Why Choose Our {service.badge}?
                        </h4>
                        <ul className="space-y-2 md:space-y-2.5">
                          {service.whyChoose.map((reason, i) => (
                            <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-[#6B635B]">
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

        {/* WHY CHOOSE US */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 md:mt-32 max-w-5xl mx-auto bg-[#F3EEEA] border border-[#E5DCD5] p-6 sm:p-10 md:p-14 rounded-2xl md:rounded-3xl shadow-sm relative overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-[#C87D55]/15 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-[#C87D55]/15 blur-3xl rounded-full" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 md:mb-12">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">The Digital Factory Advantage</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2C2825] tracking-tight">Why Partner With Us?</h2>
              <p className="text-[#6B635B] text-sm sm:text-base leading-relaxed font-light">
                We combine technical excellence with business strategy to deliver software that drives measurable outcomes.
              </p>
            </div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {whyChooseUs.map((item, idx) => (
                <motion.div 
                  key={idx} variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="bg-[#FAF8F5] border border-[#E5DCD5] p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm group hover:border-[#C87D55]/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#F3EEEA] border border-[#E5DCD5] text-[#C87D55] flex items-center justify-center text-lg md:text-xl mb-3 md:mb-4 group-hover:bg-[#C87D55] group-hover:text-white group-hover:border-[#C87D55] transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#2C2825] mb-2 group-hover:text-[#C87D55] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#6B635B] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ SECTION */}
        <section className="mt-16 md:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-4 md:space-y-6 lg:sticky lg:top-32">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">Common Questions</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2C2825] tracking-tight leading-tight">
                Frequently Asked <br className="hidden lg:block"/> Questions
              </h2>
              <p className="text-sm md:text-base text-[#6B635B] leading-relaxed font-light">
                Everything you need to know about our software development process, timelines, and support structure.
              </p>
              <div className="pt-2 md:pt-4 hidden lg:block">
                <p className="text-sm font-bold text-[#2C2825] mb-2">Still have questions?</p>
                <a href="#contact" className="text-sm font-bold text-[#C87D55] hover:text-[#2C2825] transition-colors flex items-center gap-2">
                  Talk to our tech consultant <span>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3 md:space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openAccordion === index;
                return (
                  <motion.div 
                    key={index}
                    className={`rounded-xl md:rounded-2xl border transition-all duration-500 ${isOpen ? 'bg-[#F3EEEA] border-[#E5DCD5] shadow-md' : 'bg-transparent border-transparent hover:bg-[#F3EEEA]/50'}`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-4 md:p-8 text-left flex items-start justify-between gap-4 md:gap-6 group"
                    >
                      <span className={`font-bold text-sm md:text-lg transition-colors ${isOpen ? 'text-[#C87D55]' : 'text-[#2C2825] group-hover:text-[#C87D55]'}`}>
                        {faq.question}
                      </span>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#C87D55] text-white' : 'bg-[#E5DCD5] text-[#2C2825]'}`}
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
                          <div className="px-4 md:px-8 pb-4 md:pb-8 text-xs md:text-base text-[#6B635B] leading-relaxed font-light">
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

        {/* HIGH-CONVERTING CTA SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="contact"
          className="mt-16 md:mt-32 relative"
        >
          <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] bg-[#F3EEEA] border border-[#E5DCD5] p-8 sm:p-14 md:p-20 text-center overflow-hidden shadow-lg">
            
            {/* Soft Glow Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#C87D55]/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#C87D55]/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#2C2825]">
                Ready to Build Your <br className="hidden sm:inline" />
                <span className="text-[#C87D55]">
                  Next Scalable Software Solution?
                </span>
              </h2>

              <p className="text-[#6B635B] text-sm sm:text-base md:text-xl font-light leading-relaxed max-w-xl mx-auto px-2">
                Let's discuss your technical requirements and craft a custom software architecture that delivers real business results.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 md:pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:hello@digitalfactory.com"
                  className="w-full sm:w-auto px-8 py-4 md:py-5 rounded-xl bg-[#C87D55] text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-[#C87D55]/20 hover:bg-[#B56E47] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Start Your Software Project</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-7 py-4 md:py-5 rounded-xl bg-[#FAF8F5] border border-[#E5DCD5] text-[#2C2825] font-semibold text-sm sm:text-base hover:bg-[#E5DCD5]/50 transition-all shadow-sm"
                >
                   Chat with Tech Consultant
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}