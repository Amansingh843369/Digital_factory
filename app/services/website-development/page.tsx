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

export default function WebsiteDevelopmentPage() {
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

  // Accordion State for FAQ
  const [openAccordion, setOpenAccordion] = useState(0);
  const toggleAccordion = (index) => setOpenAccordion(openAccordion === index ? null : index);

  // --- SERVICES DATA (Fresh Free Images & Cleaned Content) ---
  const services = [
    {
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
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1200", // Designer Workspace / Sketches
      badge: "Custom Design"
    },
    {
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
      image: "/e.png", 
      badge: "E-Commerce"
    },
    {
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
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200", // Laptop / Coding Screen
      badge: "CMS Solutions"
    },
    {
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
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200", // React Logo / Code
      badge: "Full-Stack"
    },
    {
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
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200", // Modern Web Layout / Landing Page
      badge: "Landing Pages"
    },
    {
      category: "Performance",
      title: "Website Speed & Core Web Vitals",
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
      image: "/vital.png", // Analytics / Speed Chart
      badge: "Optimization"
    },
    {
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
      image: "/enterprises.png", 
      badge: "Web Portals"
    },
    {
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
      image: "/maintain.png",  
      badge: "Maintenance"
    }
  ];

  // WHY CHOOSE US DATA
  const whyChooseUs = [
    { title: "Conversion-Focused Design", desc: "Every pixel is designed to turn visitors into customers.", icon: "" },
    { title: "Lightning Fast Performance", desc: "Optimized for Core Web Vitals and instant load times.", icon: "" },
    { title: "SEO-Ready Architecture", desc: "Built to rank higher on Google from day one.", icon: "" },
    { title: "Mobile-First Approach", desc: "Flawless experience across all devices and screens.", icon: "" },
    { title: "Scalable & Future-Proof", desc: "Modern tech stack that grows with your business.", icon: "" }
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

      {/* MAIN CONTENT WRAPPER (Tightened Padding) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 relative z-10">
        
   {/* HERO SECTION */}
        <section className="text-center max-w-5xl mx-auto pt-10 sm:pt-16 lg:pt-1 pb-12 flex flex-col items-center">
          
          {/* Centered Breadcrumb Pill matching the image style */}
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
              Web Development
            </span>
          </motion.nav>

          {/* Solid Color & Ultra-Bold Headline with your provided text */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 md:mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-[4rem] font-black text-[#272422] tracking-tighter leading-[1.05]"
          >
            Custom Website Design & Development Solutions
          </motion.h1>

          {/* Your provided paragraph content */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10 md:mb-8 text-lg sm:text-xl md:text-2xl text-[#6B635B] leading-relaxed font-light max-w-3xl mx-auto px-4"
          >
            We build fast, responsive, and SEO-optimized websites that turn casual visitors into loyal customers and drive sustainable business growth.
          </motion.p>

          {/* CTA Section - Adapted to Image Style with your Text */}
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
              <span>Start Your Web Project →</span>
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
            At <strong>Digital Factory</strong>, your website is more than just a digital brochure — it's your primary growth engine. We combine stunning visuals, modern frontend architectures, and high-conversion layouts to ensure your online presence stands out in a crowded market.
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
            alt="Web Development Workspace" 
            className="w-full h-full object-cover transform-origin-top will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2825]/90 via-[#2C2825]/20 to-transparent flex items-end p-6 md:p-14">
            <div className="text-white space-y-3">
              <span className="text-[10px] md:text-xs font-mono font-bold text-[#FAF8F5] uppercase tracking-widest backdrop-blur-md bg-[#C87D55]/80 px-4 py-1.5 rounded-full border border-white/20">Full-Stack Excellence</span>
              <h3 className="text-xl sm:text-3xl md:text-5xl font-bold tracking-tight">Fast. Responsive. Conversion-Ready.</h3>
            </div>
          </div>
        </motion.div>

        {/* SERVICES ZIG-ZAG WITH DIRECTIONAL CURTAIN REVEAL */}
        <section id="services" className="mt-12 md:mt-24 space-y-8 md:space-y-24">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 md:mb-10 px-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">Web Development Capabilities</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#2C2825] tracking-tight">Our Website Services</h2>
          </div>

          <div className="space-y-12 md:space-y-32">
            {services.map((service, index) => {
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
                  <div className="w-full lg:w-5/12 relative group">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5, ease: customEase }}
                      className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-[#E5DCD5] shadow-xl bg-[#F3EEEA] aspect-[4/3] md:aspect-[16/10]"
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
                  <div className="w-full lg:w-7/12 space-y-4 md:space-y-6">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2C2825] tracking-tight">Why Choose Us?</h2>
              <p className="text-[#6B635B] text-sm sm:text-base leading-relaxed font-light">
                We don't just build websites — we engineer digital growth engines tailored to your business goals.
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
                Everything you need to know about our web development process, timelines, and support structure.
              </p>
              <div className="pt-2 md:pt-4 hidden lg:block">
                <p className="text-sm font-bold text-[#2C2825] mb-2">Still have questions?</p>
                <a href="#contact" className="text-sm font-bold text-[#C87D55] hover:text-[#2C2825] transition-colors flex items-center gap-2">
                  Talk to our web consultant <span>→</span>
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
                  Next High-Performing Website?
                </span>
              </h2>

              <p className="text-[#6B635B] text-sm sm:text-base md:text-xl font-light leading-relaxed max-w-xl mx-auto px-2">
                Let's discuss your web project requirements and craft a custom solution that delivers real business results.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 md:pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:hello@digitalfactory.com"
                  className="w-full sm:w-auto px-8 py-4 md:py-5 rounded-xl bg-[#C87D55] text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-[#C87D55]/20 hover:bg-[#B56E47] transition-all flex items-center justify-center gap-2 group"
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
                  className="w-full sm:w-auto px-7 py-4 md:py-5 rounded-xl bg-[#FAF8F5] border border-[#E5DCD5] text-[#2C2825] font-semibold text-sm sm:text-base hover:bg-[#E5DCD5]/50 transition-all shadow-sm"
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