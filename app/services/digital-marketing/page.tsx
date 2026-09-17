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

export default function DigitalMarketingPage() {
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

  // DATA
  const detailedServices = [
    {
      num: "01", category: "Search Engine Optimization", title: "1. Search Engine Optimization (SEO)",
      desc: "Boost your visibility on Google and attract the right customers with effective SEO practices.",
      highlights: [ "Keyword Research & Strategy", "On-Page SEO (content, metadata, structure)", "Off-Page SEO (link building, outreach)", "Technical SEO (site speed, mobile optimization, indexing)", "Local SEO (Google Business Profile optimization)", "SEO Audits & Performance Reporting" ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", badge: "Organic Search"
    },
    {
      num: "02", category: "Paid Advertising", title: "2. Pay-Per-Click Advertising (PPC & Ads)",
      desc: "Drive targeted traffic instantly with well-optimized ad campaigns tailored for conversions.",
      highlights: [ "Google Ads (Search, Display, Shopping, Video)", "Social Media Ads (Facebook, Instagram, LinkedIn, Twitter, YouTube)", "Remarketing & Retargeting Campaigns", "Conversion Rate Optimization (CRO)", "Ad Copywriting & Creative Design", "Campaign Monitoring & Analytics" ],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200", badge: "Performance Ads"
    },
    {
      num: "03", category: "Social Engagement", title: "3. Social Media Marketing & Management",
      desc: "Engage your audience and build strong brand loyalty through high-impact social media platforms.",
      highlights: [ "Social Media Strategy & Planning", "Content Creation (graphics, videos, reels, infographics)", "Social Media Account Management", "Community Building & Engagement", "Influencer Collaboration & Campaigns", "Social Media Analytics & Reporting" ],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200", badge: "Social Media"
    },
    {
      num: "04", category: "Brand Storytelling", title: "4. Content Marketing",
      desc: "Tell your brand story and attract loyal customers with powerful, conversion-driven content.",
      highlights: [ "Blog Writing & Optimization", "Website & Landing Page Copywriting", "Case Studies & Whitepapers", "Infographics & Visual Content", "Video Content Strategy", "Email Newsletters" ],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200", badge: "Content Strategy"
    },
    {
      num: "05", category: "Customer Nurturing", title: "5. Email Marketing & Automation",
      desc: "Build lasting relationships and drive consistent sales with personalized, automated email campaigns.",
      highlights: [ "Email Campaign Design", "Drip Campaigns & Automation", "Subscriber List Segmentation", "Performance Tracking & A/B Testing" ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200", badge: "Automation"
    },
    {
      num: "06", category: "Data & Insights", title: "6. Analytics & Performance Tracking",
      desc: "Measure what matters, eliminate guesswork, and continuously optimize your digital ROI.",
      highlights: [ "Google Analytics & Tag Manager Setup", "Campaign Performance Dashboards", "ROI Tracking & Monthly Reports", "Actionable Insights & Recommendations" ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", badge: "Analytics"
    },
    {
      num: "07", category: "Google Search & Display", title: "7. Google Ads Management & Performance",
      desc: "Reach the right audience, drive high-quality traffic, and maximize your advertising ROI.",
      highlights: [ "Google Search & Display Ads Setup", "Keyword Research & Campaign Optimization", "Ad Copy & Landing Page Optimization", "Conversion & ROI Tracking", "Performance Monitoring & Monthly Reports" ],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200", badge: "Google Ads"
    },
    {
      num: "08", category: "Identity & Strategy", title: "8. Brand Development",
      desc: "Build a strong, memorable brand that connects with your target audience and creates lasting business value.",
      highlights: [ "Brand Strategy & Positioning", "Logo & Visual Identity Design", "Brand Guidelines & Identity Systems", "Social Media Branding & Collateral Design", "Brand Messaging & Communication", "Brand Awareness Campaigns" ],
      image: "https://images.unsplash.com/photo-1542744094-3a31b272c390?auto=format&fit=crop&q=80&w=1200", badge: "Brand Identity"
    },
    {
      num: "09", category: "Influencer & Local SEO", title: "9. Influencer Marketing & GMB Optimization",
      desc: "Reach authentic audiences through trusted influencers and dominate local search rankings on Google Maps.",
      highlights: [ "Influencer Research, Selection & Campaign Management", "Google Business Profile Setup & Optimization", "Local SEO & Map Pack Optimization", "Google Reviews & Reputation Management", "Audience Engagement & Performance Tracking" ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200", badge: "Influencers & Local"
    }
  ];

  const whyChooseUs = [
    { title: "Data-Driven Strategies", desc: "Every campaign is backed by real-time analytics, user behavior heatmaps, and clear ROI metrics.", icon: "📊" },
    { title: "Transparent Reporting", desc: "Get full access to live performance dashboards—no hidden costs, no vanity metrics.", icon: "🔍" },
    { title: "Customized Solutions", desc: "Tailored digital strategies designed specifically for your industry vertical and growth goals.", icon: "🎯" },
    { title: "Focus on ROI & Growth", desc: "We focus on real revenue, qualified leads, and sustainable long-term scale.", icon: "📈" },
  ];

  const faqs = [
    { question: "How long does it take to see tangible results from digital marketing?", answer: "PPC and Google Ads deliver immediate traffic and leads within 24-48 hours. Organic SEO, Brand Development, and Content Marketing typically build significant rank jumps over 60 to 90 days." },
    { question: "Do you design landing pages specifically for ad campaigns?", answer: "Yes, every ad campaign includes custom, high-converting landing pages built to convert paid traffic into qualified sales opportunities." },
    { question: "How do you track campaign performance?", answer: "We provide full transparency via custom Google Tag Manager, GA4, and live Looker Studio dashboards tracking Cost Per Lead (CPL) and Return on Ad Spend (ROAS)." }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAF8F5] text-[#1C1614] font-sans selection:bg-[#CD7F5D] selection:text-white relative overflow-hidden">
      
      {/* Dynamic Background */}
      <motion.div 
        style={{ y: yHeroBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] max-w-[1000px] h-[500px] bg-gradient-to-b from-[#F2E4DC]/80 to-transparent rounded-full blur-[100px] md:blur-[140px] pointer-events-none will-change-transform" 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 relative z-10">
        
        {/* BREADCRUMB */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: customEase }}
          className="flex items-center gap-2 text-[10px] sm:text-xs font-medium text-[#7A6B63] mb-12 bg-white/60 backdrop-blur-xl border border-[#EBE2D8] px-5 py-2.5 rounded-full w-fit shadow-sm"
        >
          <a href="/" className="hover:text-[#CD7F5D] transition-colors">Home</a>
          <span className="text-[#C2B2A8]">&gt;</span>
          <a href="/services" className="hover:text-[#CD7F5D] transition-colors">Services</a>
          <span className="text-[#C2B2A8]">&gt;</span>
          <span className="text-[#CD7F5D] font-bold">Digital Marketing</span>
        </motion.nav>

        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-8">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-[#E5D7CD] text-[#B35E3B] text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#CD7F5D] animate-pulse" /> Digital Marketing Services
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: customEase }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#1C1614] tracking-tight leading-[1.05]"
          >
            Data-Driven Marketing. <br className="hidden md:block"/>
            <span className="text-[#CD7F5D] relative inline-block mt-2">
              Unstoppable Growth.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: customEase }}
            className="text-base sm:text-lg md:text-xl text-[#6B5D56] leading-relaxed font-light max-w-2xl mx-auto px-2"
          >
            Boost visibility, drive qualified leads, and maximize your return on ad spend with our end-to-end performance marketing suite.
          </motion.p>
        </section>

        {/* PARALLAX HERO SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: customEase }}
          className="mt-16 md:mt-24 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-[#E8DDD2] shadow-2xl relative h-[300px] sm:h-[450px] md:h-[550px]"
        >
          <motion.img 
            style={{ y: yImageParallax, scale: 1.15 }}
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1600" 
            alt="Dashboard" 
            className="w-full h-full object-cover transform-origin-top will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1614] via-[#1C1614]/20 to-transparent flex items-end p-6 md:p-14">
            <div className="text-white space-y-3">
              <span className="text-[10px] md:text-xs font-mono font-bold text-[#E39878] uppercase tracking-widest backdrop-blur-md bg-white/10 px-4 py-1.5 rounded-full border border-white/20">Full-Funnel Execution</span>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">Transparent Results & Attribution</h3>
            </div>
          </div>
        </motion.div>

        {/* ZIG-ZAG SERVICES */}
        <section id="capabilities" className="mt-24 md:mt-40 space-y-20 md:space-y-32">
          <div className="text-center max-w-3xl mx-auto space-y-4 px-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#CD7F5D] font-bold">Comprehensive Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C1614] tracking-tight">Our Core Services</h2>
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
                      className="relative rounded-[2rem] overflow-hidden shadow-xl bg-white group border border-[#E8DDD2]/50"
                    >
                      <div className="h-[300px] md:h-[450px] w-full overflow-hidden relative">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                        <div className="absolute inset-0 bg-[#1C1614]/20 group-hover:bg-transparent transition-colors duration-700" />
                      </div>
                      <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#CD7F5D]">{service.num}</span>
                        <span className="text-xs font-bold text-[#1C1614] uppercase tracking-wider">{service.badge}</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#CD7F5D] font-bold">{service.category}</span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1C1614] tracking-tight leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-base text-[#6B5D56] leading-relaxed font-light">{service.desc}</p>
                    <ul className="space-y-3 pt-2">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-[#382B27]">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#CD7F5D]/10 text-[#CD7F5D] flex items-center justify-center font-bold text-[10px] mt-0.5">✓</span>
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

 
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}
          className="mt-32 md:mt-48 relative bg-[#622e20] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden shadow-2xl border border-[#2A211E]"
        >
          {/* Subtle Ambient Background Orbs */}
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#CD7F5D]/15 rounded-full blur-[100px] md:blur-[140px] pointer-events-none opacity-50" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#A05C3F]/15 rounded-full blur-[100px] md:blur-[140px] pointer-events-none opacity-50" />

          {/* Header */}
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-5 mb-16 md:mb-20">
            <span className="text-xs font-mono uppercase tracking-widest text-[#CD7F5D] font-bold">The Agency Advantage</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Why Brands Choose Us
            </h2>
            <p className="text-[#A99A93] text-sm md:text-base lg:text-lg leading-relaxed font-light max-w-2xl mx-auto px-4">
              We don't just run ads; we engineer growth. Our entire ecosystem is built around transparency, relentless performance, and tangible ROI.
            </p>
          </div>

          {/* Card Grid */}
          <motion.div variants={staggerContainer} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div 
                key={idx} variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="relative bg-gradient-to-br from-[#1C1614] to-[#110D0B] p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-[#2A211E] shadow-2xl group overflow-hidden transition-all duration-500 hover:border-[#CD7F5D]/60 hover:shadow-[#CD7F5D]/10"
              >
                {/* Hover Glow Effect inside Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CD7F5D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Giant Watermark Number (01, 02) */}
                <div className="absolute -top-10 -right-6 text-[8rem] md:text-[10rem] font-extrabold text-white/[0.02] group-hover:text-[#CD7F5D]/[0.05] transition-colors duration-500 pointer-events-none leading-none">
                  0{idx + 1}
                </div>

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#2A211E] border border-[#382B27] text-[#CD7F5D] flex items-center justify-center text-2xl md:text-3xl mb-8 group-hover:scale-110 group-hover:bg-[#CD7F5D] group-hover:border-[#CD7F5D] group-hover:text-white transition-all duration-500 shadow-lg">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#CD7F5D] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#A99A93] leading-relaxed font-light group-hover:text-[#D8C9C1] transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* FAQ (SPLIT STICKY LAYOUT) */}
        <section className="mt-32 md:mt-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <span className="text-xs font-mono uppercase tracking-widest text-[#CD7F5D] font-bold">Support & Knowledge</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1C1614] tracking-tight leading-tight">
                Frequently Asked <br className="hidden lg:block"/> Questions
              </h2>
              <p className="text-base text-[#6B5D56] leading-relaxed">
                Everything you need to know about our digital marketing process, timelines, and reporting structure.
              </p>
              <div className="pt-4 hidden lg:block">
                <p className="text-sm font-bold text-[#1C1614] mb-2">Still have questions?</p>
                <a href="#consultation" className="text-sm font-bold text-[#CD7F5D] hover:text-[#1C1614] transition-colors flex items-center gap-2">
                  Contact our strategy team <span>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openAccordion === index;
                return (
                  <motion.div 
                    key={index}
                    className={`rounded-2xl border transition-all duration-500 ${isOpen ? 'bg-white border-[#EBE2D8] shadow-md' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-6 md:p-8 text-left flex items-start justify-between gap-6 group"
                    >
                      <span className={`font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-[#CD7F5D]' : 'text-[#1C1614] group-hover:text-[#CD7F5D]'}`}>
                        {faq.question}
                      </span>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#CD7F5D] text-white' : 'bg-[#EBE2D8] text-[#1C1614]'}`}
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
          id="consultation" className="mt-32 md:mt-48 pb-10"
        >
          <div className="relative rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[#CD7F5D] to-[#A05C3F] p-8 md:p-24 text-center overflow-hidden shadow-2xl text-white">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Ready to accelerate your revenue?
              </h2>
              <p className="text-white/80 text-sm md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                Book a free 30-minute strategy call with our team to audit your current performance and map out your growth trajectory.
              </p>
              <div className="pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  href="mailto:contact@agency.com"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 md:py-5 rounded-full bg-[#1C1614] text-white font-bold text-sm md:text-base tracking-wide shadow-2xl hover:bg-black transition-colors w-full sm:w-auto"
                >
                  Get Your Free Digital Audit Call
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