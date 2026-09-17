'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  MessageSquare, 
  Cpu, 
  Layers, 
  Zap, 
  CheckCircle2 
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

interface Service {
  num: string;
  category: string;
  title: string;
  desc: string;
  highlights: string[];
  whyChoose?: string[];
  image: string;
  badge: string;
}

const SERVICES: Service[] = [
  {
    num: "01",
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
    num: "02",
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
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    badge: "SaaS Platform"
  },
  {
    num: "03",
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
    num: "04",
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
    num: "05",
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
    num: "06",
    category: "Enterprise Systems",
    title: "Enterprise Resource Planning (ERP)",
    desc: "Streamline your business operations, centralize data, and improve organization-wide efficiency with powerful ERP solutions.",
    highlights: [
      "ERP Software Development & Integration",
      "Finance & Accounting Management",
      "Inventory & Supply Chain Systems",
      "HR & Payroll Management",
      "Sales & Customer Management",
      "Business Process Automation",
      "Real-Time Analytics & Reporting"
    ],
    whyChoose: [
      "Centralized Business Management",
      "Improved Operational Efficiency",
      "Customized Solutions for Your Business",
      "Real-Time Data & Reporting",
      "Scalable & Secure ERP Solutions"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    badge: "ERP Systems"
  },
  {
    num: "07",
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
    num: "08",
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
    num: "09",
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
    image: "https://images.unsplash.com/photo-1507925922837-326f12a5270d?auto=format&fit=crop&q=80&w=1200",
    badge: "Orchestration"
  }
];

export default function SoftwareDevelopmentPage() {
  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        function raf(time: number) {
          lenis?.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch (e) {
        console.log("Lenis initialization skipped.", e);
      }
    };
    initLenis();
    return () => { if (lenis) lenis.destroy(); };
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAF8F5] text-[#2C2825] font-sans selection:bg-[#C87D55] selection:text-white relative overflow-hidden">
      
      {/* Background Soft Ambient Glow */}
      <motion.div 
        style={{ y: yHeroBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#C87D55]/15 to-transparent rounded-full blur-[140px] pointer-events-none" 
      />

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-24 relative z-10">
        
        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-8 pt-8 sm:pt-14">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-[#E5DCD5] text-[#C87D55] text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C87D55]" />
            <span>Digital Factory Engineering</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#2C2825] tracking-tight leading-[1.08]"
          >
            Custom Software Built for a <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C87D55] to-[#A95A37]">
              Digital-First Era
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#6B635B] leading-relaxed font-light max-w-2xl mx-auto"
          >
            We engineer high-performance web applications, scalable cloud platforms, and automated workflows designed specifically to unlock real business growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C87D55] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#C87D55]/25 hover:bg-[#B56E47] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Start Your Software Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/70 border border-[#E5DCD5] text-[#2C2825] font-semibold text-sm hover:bg-white transition-all shadow-sm flex items-center justify-center"
            >
              Explore Capabilities
            </motion.a>
          </motion.div>
        </section>

        {/* INTRO GRID HIGHLIGHT */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-28 max-w-5xl mx-auto bg-white/80 border border-[#E5DCD5] p-8 sm:p-12 rounded-[2.5rem] shadow-sm backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C87D55]/10 blur-3xl rounded-full pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">Why Work With Us</span>
              <p className="text-base sm:text-lg text-[#3E3832] leading-relaxed font-normal">
                At <strong>Digital Factory</strong>, we don't just write code — we engineer scalable business engines. Whether you are modernizing legacy operations, launching a new SaaS product, or automating workflows, our software is built for long-term speed, security, and growth.
              </p>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#E5DCD5] lg:pl-8">
              <div>
                <div className="text-3xl font-extrabold text-[#2C2825]">99.9%</div>
                <div className="text-xs text-[#6B635B] font-medium mt-0.5">Uptime & Security First</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#C87D55]">100%</div>
                <div className="text-xs text-[#6B635B] font-medium mt-0.5">Tailored Solutions</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SERVICES SHOWCASE */}
        <section id="services" className="mt-28 sm:mt-36 space-y-24 sm:space-y-32">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">Our Core Expertise</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2825] tracking-tight">Software Engineering Services</h2>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={service.num}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeInUp}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-10 lg:gap-16`}
                >
                  {/* IMAGE CONTAINER */}
                  <div className="w-full lg:w-5/12 flex">
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.4 }}
                      className="relative rounded-[2rem] overflow-hidden border border-[#E5DCD5] shadow-md group bg-neutral-100 w-full min-h-[320px] sm:min-h-[420px]"
                    >
                      <Image
                        src={service.image} 
                        alt={service.title} 
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                      {/* Floating Badge */}
                      <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md border border-[#E5DCD5] px-4 py-2 rounded-2xl shadow-sm flex items-center gap-3">
                        <span className="font-mono text-xs font-extrabold text-[#C87D55]">{service.num}</span>
                        <span className="text-xs font-bold text-[#2C2825] uppercase tracking-wider">{service.badge}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* CONTENT BLOCK */}
                  <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">
                        {service.category}
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-[#2C2825] tracking-tight leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-base text-[#6B635B] leading-relaxed font-light">
                      {service.desc}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-[#3E3832]">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C87D55]/10 text-[#C87D55] flex items-center justify-center font-bold text-xs mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* WHY CHOOSE CARD */}
                    {service.whyChoose && (
                      <div className="mt-6 bg-white/90 border border-[#E5DCD5] rounded-2xl p-6 shadow-sm backdrop-blur-sm">
                        <h4 className="text-xs font-bold text-[#2C2825] uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-[#E5DCD5] pb-3">
                          <CheckCircle2 className="w-4 h-4 text-[#C87D55]" />
                          Key Advantages
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.whyChoose.map((reason, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#6B635B]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C87D55]" />
                              <span>{reason}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* HIGH CONVERTING CTA SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          id="contact"
          className="mt-32 sm:mt-40 relative"
        >
          <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#FAF8F5] to-[#F3EEEA] border border-[#E5DCD5] p-8 sm:p-16 lg:p-10 text-center overflow-hidden shadow-xl">
            
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C87D55]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C87D55]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto ">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5DCD5] text-[#C87D55] text-xs font-bold uppercase tracking-wider shadow-sm">
                <Zap className="w-3.5 h-3.5 text-[#C87D55]" />
                <span>Let's Build Together</span>
              </motion.div>

              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#2C2825]">
                Ready to Accelerate Your <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C87D55] to-[#A95A37]">
                  Digital Roadmap?
                </span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-[#6B635B] text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto">
                Schedule a call with our technical architects to scope your custom software needs and plan a scalable digital infrastructure.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="mailto:hello@digitalfactory.com"
                  className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#C87D55] text-white font-bold text-sm tracking-wide shadow-xl shadow-[#C87D55]/25 hover:bg-[#B56E47] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-[#E5DCD5] text-[#2C2825] font-semibold text-sm hover:bg-neutral-50 transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#C87D55]" />
                  <span>Talk to an Expert</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}