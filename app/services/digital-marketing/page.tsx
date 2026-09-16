'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function DigitalMarketingPage() {
  // Lenis Smooth Scroll Integration
  useEffect(() => {
    let lenis: any;
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

  // Parallax Hooks
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yImageParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Accordion State
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const toggleAccordion = (index: number) => setOpenAccordion(openAccordion === index ? null : index);

  // ALL 9 SERVICES DATA FROM YOUR CONTENT
  const detailedServices = [
    {
      num: "01",
      category: "Search Engine Optimization",
      title: "1. Search Engine Optimization (SEO)",
      desc: "Boost your visibility on Google and attract the right customers with effective SEO practices.",
      highlights: [
        "Keyword Research & Strategy",
        "On-Page SEO (content, metadata, structure)",
        "Off-Page SEO (link building, outreach)",
        "Technical SEO (site speed, mobile optimization, indexing)",
        "Local SEO (Google Business Profile optimization)",
        "SEO Audits & Performance Reporting"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      badge: "Organic Search"
    },
    {
      num: "02",
      category: "Paid Advertising",
      title: "2. Pay-Per-Click Advertising (PPC & Ads)",
      desc: "Drive targeted traffic instantly with well-optimized ad campaigns tailored for conversions.",
      highlights: [
        "Google Ads (Search, Display, Shopping, Video)",
        "Social Media Ads (Facebook, Instagram, LinkedIn, Twitter, YouTube)",
        "Remarketing & Retargeting Campaigns",
        "Conversion Rate Optimization (CRO)",
        "Ad Copywriting & Creative Design",
        "Campaign Monitoring & Analytics"
      ],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200",
      badge: "Performance Ads"
    },
    {
      num: "03",
      category: "Social Engagement",
      title: "3. Social Media Marketing & Management",
      desc: "Engage your audience and build strong brand loyalty through high-impact social media platforms.",
      highlights: [
        "Social Media Strategy & Planning",
        "Content Creation (graphics, videos, reels, infographics)",
        "Social Media Account Management",
        "Community Building & Engagement",
        "Influencer Collaboration & Campaigns",
        "Social Media Analytics & Reporting"
      ],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
      badge: "Social Media"
    },
    {
      num: "04",
      category: "Brand Storytelling",
      title: "4. Content Marketing",
      desc: "Tell your brand story and attract loyal customers with powerful, conversion-driven content.",
      highlights: [
        "Blog Writing & Optimization",
        "Website & Landing Page Copywriting",
        "Case Studies & Whitepapers",
        "Infographics & Visual Content",
        "Video Content Strategy",
        "Email Newsletters"
      ],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200",
      badge: "Content Strategy"
    },
    {
      num: "05",
      category: "Customer Nurturing",
      title: "5. Email Marketing & Automation",
      desc: "Build lasting relationships and drive consistent sales with personalized, automated email campaigns.",
      highlights: [
        "Email Campaign Design",
        "Drip Campaigns & Automation",
        "Subscriber List Segmentation",
        "Performance Tracking & A/B Testing"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
      badge: "Automation"
    },
    {
      num: "06",
      category: "Data & Insights",
      title: "6. Analytics & Performance Tracking",
      desc: "Measure what matters, eliminate guesswork, and continuously optimize your digital ROI.",
      highlights: [
        "Google Analytics & Tag Manager Setup",
        "Campaign Performance Dashboards",
        "ROI Tracking & Monthly Reports",
        "Actionable Insights & Recommendations"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      badge: "Analytics"
    },
    {
      num: "07",
      category: "Google Search & Display",
      title: "7. Google Ads Management & Performance",
      desc: "Reach the right audience, drive high-quality traffic, and maximize your advertising ROI.",
      highlights: [
        "Google Search & Display Ads Setup",
        "Keyword Research & Campaign Optimization",
        "Ad Copy & Landing Page Optimization",
        "Conversion & ROI Tracking",
        "Performance Monitoring & Monthly Reports"
      ],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
      badge: "Google Ads"
    },
    {
      num: "08",
      category: "Identity & Strategy",
      title: "8. Brand Development",
      desc: "Build a strong, memorable brand that connects with your target audience and creates lasting business value.",
      highlights: [
        "Brand Strategy & Positioning",
        "Logo & Visual Identity Design",
        "Brand Guidelines & Identity Systems",
        "Social Media Branding & Collateral Design",
        "Brand Messaging & Communication",
        "Brand Awareness Campaigns"
      ],
      image: "https://images.unsplash.com/photo-1542744094-3a31b272c390?auto=format&fit=crop&q=80&w=1200",
      badge: "Brand Identity"
    },
    {
      num: "09",
      category: "Influencer & Local SEO",
      title: "9. Influencer Marketing & GMB Optimization",
      desc: "Reach authentic audiences through trusted influencers and dominate local search rankings on Google Maps.",
      highlights: [
        "Influencer Research, Selection & Campaign Management",
        "Google Business Profile Setup & Optimization",
        "Local SEO & Map Pack Optimization",
        "Google Reviews & Reputation Management",
        "Audience Engagement & Performance Tracking"
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
      badge: "Influencers & Local"
    }
  ];

  const whyChooseUs = [
    { title: "Data-Driven Strategies", desc: "Every campaign is backed by real-time analytics, user behavior heatmaps, and ROI metrics." },
    { title: "Transparent Reporting", desc: "Get full access to live performance dashboards—no hidden costs or vanity metrics." },
    { title: "Customized Solutions", desc: "Tailored digital strategies designed specifically for your industry vertical and growth goals." },
    { title: "Focus on ROI & Growth", desc: "We focus on real revenue, qualified leads, and sustainable long-term scale." },
  ];

  const faqs = [
    {
      question: "How long does it take to see tangible results from digital marketing?",
      answer: "PPC and Google Ads deliver immediate traffic and leads within 24-48 hours. Organic SEO, Brand Development, and Content Marketing typically build significant rank jumps over 60 to 90 days."
    },
    {
      question: "Do you design landing pages specifically for ad campaigns?",
      answer: "Yes, every ad campaign includes custom, high-converting landing pages built to convert paid traffic into qualified sales opportunities."
    },
    {
      question: "How do you track campaign performance?",
      answer: "We provide full transparency via custom Google Tag Manager, GA4, and live Looker Studio dashboards tracking Cost Per Lead (CPL) and Return on Ad Spend (ROAS)."
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAF8F5] text-[#1C1614] font-sans selection:bg-[#CD7F5D] selection:text-white relative overflow-hidden">
      
      {/* Background Lighting */}
      <motion.div 
        style={{ y: yHeroBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#F2E4DC]/60 rounded-full blur-[140px] pointer-events-none" 
      />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-16 relative z-10">
        
        {/* BREADCRUMB NAVIGATION */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-medium text-[#7A6B63] mb-8 bg-white/80 backdrop-blur-md border border-[#EBE2D8] px-4 py-2 rounded-full w-fit shadow-sm"
        >
          <a href="/" className="hover:text-[#CD7F5D] transition-colors">Home</a>
          <span className="text-[#C2B2A8]">&gt;</span>
          <a href="/services" className="hover:text-[#CD7F5D] transition-colors">Services</a>
          <span className="text-[#C2B2A8]">&gt;</span>
          <span className="text-[#CD7F5D] font-bold">Digital Marketing</span>
        </motion.nav>

        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3ECE5] border border-[#E5D7CD] text-[#B35E3B] text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#CD7F5D] animate-ping" />
            Full-Service Digital Marketing
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-extrabold text-[#1C1614] tracking-tight leading-[1.08]"
          >
            Data-Driven Marketing. <br />
            <span className="text-[#CD7F5D] relative inline-block mt-1">
              Unstoppable Growth.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E5D7CD]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#6B5D56] leading-relaxed font-light max-w-2xl mx-auto"
          >
            Boost visibility, drive qualified leads, and maximize your return on ad spend with our end-to-end performance marketing suite.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#consultation"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#CD7F5D] text-white font-semibold text-sm tracking-wide shadow-lg shadow-[#CD7F5D]/25"
            >
              Book Free Strategy Call
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#capabilities"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-[#E5D7CD] text-[#1C1614] font-semibold text-sm shadow-sm hover:border-[#CD7F5D]/50"
            >
              Explore All 9 Services
            </motion.a>
          </motion.div>
        </section>

        {/* PARALLAX HERO SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-16 rounded-3xl overflow-hidden border border-[#E8DDD2] shadow-2xl relative h-[380px] sm:h-[480px]"
        >
          <motion.img 
            style={{ y: yImageParallax, scale: 1.12 }}
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1600" 
            alt="Digital Growth Dashboard" 
            className="w-full h-full object-cover transform-origin-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1614]/90 via-[#1C1614]/30 to-transparent flex items-end p-8 sm:p-12">
            <div className="text-white space-y-2">
              <span className="text-xs font-mono font-bold text-[#E39878] uppercase tracking-widest backdrop-blur-md bg-black/30 px-3 py-1 rounded-md border border-white/10">Full-Funnel Execution</span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight">100% Transparent Results & Attribution</h3>
            </div>
          </div>
        </motion.div>

        {/* ZIG-ZAG SERVICES SHOWCASE */}
        <section id="capabilities" className="mt-32 space-y-24">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#CD7F5D] font-bold">Comprehensive Capabilities</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1C1614] tracking-tight">Our Core Services</h2>
            <p className="text-sm sm:text-base text-[#7A6B63]">Integrated digital marketing solutions engineered to win market share.</p>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {detailedServices.map((service, index) => {
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
                  {/* IMAGE CARD (Zig-Zag Alternating) */}
                  <div className="w-full lg:w-1/2">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="relative rounded-3xl overflow-hidden border border-[#E8DDD2] shadow-xl group bg-white"
                    >
                      <div className="h-[320px] sm:h-[400px] w-full overflow-hidden relative">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      </div>

                      {/* Floating Badge */}
                      <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md border border-[#EBE2D8] px-4 py-1.5 rounded-full shadow-md flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#CD7F5D]">{service.num}</span>
                        <span className="text-xs font-bold text-[#1C1614] uppercase tracking-wider">{service.badge}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* CONTENT BLOCK (Zig-Zag Alternating) */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#CD7F5D] font-bold">
                        {service.category}
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1C1614] tracking-tight leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-base text-[#6B5D56] leading-relaxed font-light">
                      {service.desc}
                    </p>

                    {/* Sub-Bullets List from Your Input */}
                    <ul className="space-y-2.5 pt-1">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-[#382B27]">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F3ECE5] text-[#CD7F5D] flex items-center justify-center font-bold text-xs mt-0.5">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <a 
                        href="#consultation" 
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#CD7F5D] hover:text-[#B35E3B] group transition-colors"
                      >
                        Inquire about {service.badge}
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="mt-32 pt-16 border-t border-[#E8DDD2] space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#CD7F5D] font-bold">The Difference</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1C1614] tracking-tight">Why Choose Our Digital Marketing Services?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded-2xl border border-[#EBE2D8] shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF0EA] text-[#CD7F5D] flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-[#1C1614]">{item.title}</h3>
                <p className="text-xs text-[#6B5D56] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE ACCORDION */}
        <section className="mt-32 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#CD7F5D] font-bold">FAQ</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1C1614] tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openAccordion === index;
              return (
                <motion.div 
                  key={index}
                  initial={false}
                  className="rounded-2xl bg-white border border-[#EBE2D8] overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 font-bold text-[#1C1614] text-base sm:text-lg hover:text-[#CD7F5D] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <motion.span 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.4, type: "spring" }}
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FAF0EA] text-[#CD7F5D] flex items-center justify-center text-xl"
                    >
                      ↓
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-sm sm:text-base text-[#6B5D56] leading-relaxed border-t border-[#F5EDE6] pt-4 sm:pt-6">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="consultation" 
          className="mt-32"
        >
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#1C1614] via-[#2A211E] to-[#382B27] border border-[#483B36] p-12 sm:p-20 text-center overflow-hidden shadow-2xl text-white">
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#CD7F5D]/30 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E39878] font-semibold tracking-[0.2em]">Start Scaling Today</span>
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Ready to accelerate your revenue?
              </h2>
              <p className="text-[#D8C9C1] text-base sm:text-lg font-light leading-relaxed">
                Book a free 30-minute strategy call with our team to audit your current performance and map out your growth trajectory.
              </p>
              <div className="pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:contact@agency.com"
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-[#CD7F5D] text-white font-bold text-sm sm:text-base tracking-wide shadow-2xl hover:bg-[#B56C4C] transition-colors"
                >
                  Get Your Free Digital Audit Call
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}