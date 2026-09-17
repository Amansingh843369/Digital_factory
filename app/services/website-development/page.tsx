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

export default function WebsiteDevelopmentPage() {
  // Lenis Smooth Scroll Integration
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

  // Accordion State for FAQ
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const toggleAccordion = (index: number) => setOpenAccordion(openAccordion === index ? null : index);

  // --- SERVICES DATA (Images Updated) ---
  const services = [
    {
      num: "01",
      category: "UI/UX & Branding",
      title: "Custom Web Design & UX/UI",
      desc: "Tailored website layouts designed to capture your brand identity and deliver seamless user experiences.",
      highlights: [
        "Bespoke UI/UX Wireframing & Prototyping",
        "Brand Identity & Style Guide Integration",
        "Mobile-First Responsive Layouts",
        "Interactive Micro-Animations",
        "Design Systems & Component Libraries",
        "User Journey & Conversion Optimization"
      ],
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1200",
      badge: "Custom Design"
    },
    {
      num: "02",
      category: "E-Commerce",
      title: "E-Commerce Website Development",
      desc: "High-converting online stores built with secure payment gateways, inventory sync, and fast checkout flows.",
      highlights: [
        "Shopify & WooCommerce Customization",
        "Headless E-Commerce Solutions",
        "Payment Gateway & Shipping Integration",
        "Inventory & Order Management",
        "Multi-Currency & Multi-Language Support",
        "High-Performance Cart & Checkout"
      ],
      whyChoose: [
        "Increased Checkout Conversion Rates",
        "Robust Security for Online Payments",
        "Scalable Infrastructure for Peak Sales",
        "Seamless Third-Party ERP/CRM Sync"
      ],
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200",
      badge: "E-Commerce"
    },
    {
      num: "03",
      category: "CMS Platforms",
      title: "WordPress & CMS Development",
      desc: "Easy-to-manage Content Management Systems empowering your team to update content effortlessly.",
      highlights: [
        "Custom WordPress Theme & Plugin Dev",
        "Webflow Development & Migration",
        "Headless CMS (Sanity, Strapi, Contentful)",
        "Intuitive Admin Dashboard Setup",
        "Role-Based User Permissions",
        "SEO-Friendly Content Workflows"
      ],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
      badge: "CMS Solutions"
    },
    {
      num: "04",
      category: "Full-Stack Tech",
      title: "Next.js & React Web Apps",
      desc: "Ultra-fast modern web applications built on cutting-edge JavaScript frameworks for maximum speed.",
      highlights: [
        "Server-Side Rendering (SSR) & Static Generation",
        "API Route & Backend Integration",
        "Progressive Web App (PWA) Capabilities",
        "State Management & Database Connections",
        "Blazing Fast Page Load Speeds",
        "Scalable Cloud Deployment (Vercel, AWS)"
      ],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200",
      badge: "Full-Stack"
    },
    {
      num: "05",
      category: "Growth & Leads",
      title: "Landing Page & Conversion Design",
      desc: "Purpose-built, high-converting landing pages tailored for ad campaigns and product launches.",
      highlights: [
        "A/B Testing Ready Architecture",
        "Lead Capture & Form Integrations",
        "CRM & Email Marketing Automation Sync",
        "Heatmap & User Analytics Setup",
        "Ultra-Fast Mobile Optimization"
      ],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200",
      badge: "Landing Pages"
    },
    {
      num: "06",
      category: "Performance",
      title: "Website Speed & Core Web Vitals Optimization",
      desc: "Boost your site ranking and user retention by transforming slow websites into lightning-fast platforms.",
      highlights: [
        "Google Core Web Vitals Optimization",
        "Code Splitting & Asset Compression",
        "CDN Setup & Caching Strategies",
        "Database Cleanup & Query Tuning",
        "Image & Video Format Optimization"
      ],
      whyChoose: [
        "Higher Google Search Rankings",
        "Lower Bounce Rates and Higher Retention",
        "Improved User Experience Across Devices",
        "Reduced Server Load & Bandwidth Costs"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      badge: "Optimization"
    },
    {
      num: "07",
      category: "Enterprise",
      title: "Web Portals & Enterprise Dashboards",
      desc: "Secure web portals designed for internal teams, clients, and partner collaboration.",
      highlights: [
        "Customer & Vendor Self-Service Portals",
        "Interactive Analytics Dashboards",
        "Single Sign-On (SSO) & Secure Auth",
        "Role-Based Data Access Control",
        "Custom API Integrations"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      badge: "Web Portals"
    },
    {
      num: "08",
      category: "Maintenance",
      title: "Website Maintenance & Support",
      desc: "Continuous monitoring, security patches, backups, and feature updates to keep your website running smoothly.",
      highlights: [
        "24/7 Security Monitoring & Malware Protection",
        "Regular Automated Cloud Backups",
        "Plugin, CMS & Framework Updates",
        "Uptime Monitoring & Emergency Fixes",
        "Content Updates & Ongoing Improvements"
      ],
      whyChoose: [
        "Peace of Mind with Zero Downtime Risk",
        "Dedicated Technical Support Team",
        "Proactive Vulnerability Patching",
        "Consistent High Performance"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1200",
      badge: "Maintenance"
    }
  ];

  // WHY CHOOSE US DATA
  const whyChooseUs = [
    { title: "Conversion-Focused Design", desc: "Every pixel is designed to turn visitors into customers.", icon: "🎯" },
    { title: "Lightning Fast Performance", desc: "Optimized for Core Web Vitals and instant load times.", icon: "⚡" },
    { title: "SEO-Ready Architecture", desc: "Built to rank higher on Google from day one.", icon: "📈" },
    { title: "Mobile-First Approach", desc: "Flawless experience across all devices and screens.", icon: "📱" },
    { title: "Scalable & Future-Proof", desc: "Modern tech stack that grows with your business.", icon: "🚀" }
  ];

  // FAQ DATA
  const faqs = [
    { question: "How long does it take to build a custom website?", answer: "Timeline depends on complexity. A standard business website takes 4-6 weeks, while complex e-commerce or web apps may take 8-12 weeks. We provide exact timelines after scoping." },
    { question: "Do you provide ongoing maintenance after launch?", answer: "Yes. We offer monthly maintenance packages covering security updates, backups, performance monitoring, and content changes to keep your site running smoothly." },
    { question: "Will my website be mobile-friendly and SEO optimized?", answer: "Absolutely. All our websites are built mobile-first and follow SEO best practices including fast load speeds, clean code, and proper metadata structure." },
    { question: "Can you redesign my existing website?", answer: "Yes. We can audit your current site, preserve your SEO rankings, and rebuild it with modern design and better performance." }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAF8F5] text-[#2C2825] font-sans selection:bg-[#C87D55] selection:text-white relative overflow-hidden">
      
      {/* Background Soft Glow */}
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
          <span className="text-[#C87D55] font-bold">Web Development</span>
        </motion.nav>

        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-8 pt-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EEEA] border border-[#E5DCD5] text-[#C87D55] text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#C87D55] animate-pulse" />
            Digital Factory Services
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-extrabold text-[#2C2825] tracking-tight leading-[1.1]"
          >
            Custom Website Design & <br className="hidden sm:block"/>
            <span className="text-[#C87D55]">
              Development Solutions
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#6B635B] leading-relaxed font-light max-w-3xl mx-auto"
          >
            We build fast, responsive, and SEO-optimized websites that turn casual visitors into loyal customers and drive sustainable business growth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#C87D55] text-white font-semibold text-sm tracking-wide shadow-lg shadow-[#C87D55]/20 hover:bg-[#B56E47] transition-all"
            >
              Start Your Web Project →
            </motion.a>
          </motion.div>
        </section>

        {/* INTRO BLOCK */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto text-center bg-[#F3EEEA] border border-[#E5DCD5] p-8 sm:p-12 rounded-3xl shadow-sm relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C87D55]/15 blur-3xl rounded-full" />
          <p className="text-base sm:text-lg text-[#4A433D] leading-relaxed relative z-10">
            At <strong>Digital Factory</strong>, your website is more than just a digital brochure — it's your primary growth engine. We combine stunning visuals, modern frontend architectures, and high-conversion layouts to ensure your online presence stands out in a crowded market.
          </p>
        </motion.section>

        {/* PARALLAX HERO SHOWCASE (Image Updated) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: customEase }}
          className="mt-16 md:mt-24 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[#E5DCD5] shadow-xl relative h-[300px] sm:h-[450px] md:h-[550px]"
        >
          <motion.img 
            style={{ y: yImageParallax, scale: 1.15 }}
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600" 
            alt="Web Development Workspace" 
            className="w-full h-full object-cover transform-origin-top will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2825]/90 via-[#2C2825]/20 to-transparent flex items-end p-6 md:p-14">
            <div className="text-white space-y-3">
              <span className="text-[10px] md:text-xs font-mono font-bold text-[#FAF8F5] uppercase tracking-widest backdrop-blur-md bg-[#C87D55]/80 px-4 py-1.5 rounded-full border border-white/20">Full-Stack Excellence</span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">Fast. Responsive. Conversion-Ready.</h3>
            </div>
          </div>
        </motion.div>

        {/* SERVICES ZIG-ZAG SHOWCASE */}
        <section id="services" className="mt-32 space-y-24 sm:space-y-36">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">Web Development Capabilities</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2825] tracking-tight">Our Website Services</h2>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeInUp}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
                >
                  {/* IMAGE CARD */}
                  <div className="w-full lg:w-5/12">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="relative rounded-[2rem] overflow-hidden border border-[#E5DCD5] shadow-xl group bg-[#F3EEEA]"
                    >
                      <div className="h-[350px] sm:h-[450px] w-full overflow-hidden relative">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/60 via-transparent to-transparent opacity-80" />
                      </div>

                      {/* Floating Tech Badge */}
                      <div className="absolute top-6 left-6 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E5DCD5] px-4 py-2 rounded-xl shadow-md flex items-center gap-3">
                        <span className="font-mono text-sm font-bold text-[#C87D55]">{service.num}</span>
                        <span className="text-xs font-bold text-[#2C2825] uppercase tracking-wider">{service.badge}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* CONTENT BLOCK */}
                  <div className="w-full lg:w-7/12 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">
                        {service.category}
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-[#2C2825] tracking-tight leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-base text-[#6B635B] leading-relaxed font-light">
                      {service.desc}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 pt-2">
                      {service.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-[#4A433D]">
                          <span className="flex-shrink-0 w-5 h-5 rounded bg-[#F3EEEA] text-[#C87D55] border border-[#E5DCD5] flex items-center justify-center font-bold text-[10px] mt-0.5">
                            ✦
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* WHY CHOOSE SECTION */}
                    {service.whyChoose && (
                      <div className="mt-8 bg-[#F3EEEA] border border-[#E5DCD5] rounded-2xl p-6 shadow-sm">
                        <h4 className="text-sm font-bold text-[#2C2825] uppercase tracking-wider mb-4 border-b border-[#E5DCD5] pb-3">
                          Why Choose Our {service.badge}?
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

        {/* WHY CHOOSE US (Matching Intro Block Style) */}
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
                We don't just build websites — we engineer digital growth engines tailored to your business goals.
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

        {/* FAQ SECTION */}
        <section className="mt-32 md:mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">Common Questions</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2825] tracking-tight leading-tight">
                Frequently Asked <br className="hidden lg:block"/> Questions
              </h2>
              <p className="text-base text-[#6B635B] leading-relaxed font-light">
                Everything you need to know about our web development process, timelines, and support structure.
              </p>
              <div className="pt-4 hidden lg:block">
                <p className="text-sm font-bold text-[#2C2825] mb-2">Still have questions?</p>
                <a href="#contact" className="text-sm font-bold text-[#C87D55] hover:text-[#2C2825] transition-colors flex items-center gap-2">
                  Talk to our web consultant <span>→</span>
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

        {/* HIGH-CONVERTING CTA SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="contact"
          className="mt-40 relative"
        >
          <div className="relative rounded-[2.5rem] bg-[#F3EEEA] border border-[#E5DCD5] p-10 sm:p-20 text-center overflow-hidden shadow-lg">
            
            {/* Soft Glow Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C87D55]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C87D55]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#2C2825]">
                Ready to Build Your <br className="hidden sm:inline" />
                <span className="text-[#C87D55]">
                  Next High-Performing Website?
                </span>
              </h2>

              <p className="text-[#6B635B] text-base sm:text-xl font-light leading-relaxed max-w-xl mx-auto">
                Let's discuss your web project requirements and craft a custom solution that delivers real business results.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:hello@digitalfactory.com"
                  className="w-full sm:w-auto px-9 py-5 rounded-xl bg-[#C87D55] text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-[#C87D55]/20 hover:bg-[#B56E47] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Start Your Web Project</span>
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
                   Chat with Web Consultant
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}