'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  TrendingUp,
  BarChart3,
  Target,
  Lightbulb,
} from "lucide-react";
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

  // Parallax Hooks for Background Only
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Accordion State
  const [openAccordion, setOpenAccordion] = useState(0);
  const toggleAccordion = (index) => setOpenAccordion(openAccordion === index ? null : index);

  // DATA - Cleaned Content & Numbers Removed
  const detailedServices = [
    {
      category: "Search Engine Optimization", 
      title: "Search Engine Optimization (SEO)",
      desc: "Boost your visibility on Google and attract the right customers with effective SEO practices.",
      highlights: [ "Keyword Research & Strategy", "On-Page SEO (content, metadata, structure)", "Off-Page SEO (link building, outreach)", "Technical SEO (site speed, mobile optimization)", "Local SEO (Google Business Profile optimization)", "SEO Audits & Performance Reporting" ],
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200", 
      badge: "Organic Search"
    },
    {
      category: "Paid Advertising", 
      title: "Pay-Per-Click Advertising (PPC & Ads)",
      desc: "Drive targeted traffic instantly with well-optimized ad campaigns tailored for conversions.",
      highlights: [ "Google Ads (Search, Display, Shopping)", "Social Media Ads (Facebook, Instagram, LinkedIn)", "Remarketing & Retargeting Campaigns", "Conversion Rate Optimization (CRO)", "Ad Copywriting & Creative Design", "Campaign Monitoring & Analytics" ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRiTxwLfyMk3K2I_r1q2YepiYskOvy6Lb6sI1etJfEWwn-hpsjBvdSTtc&s=10", 
      badge: "Performance Ads"
    },
    {
      category: "Social Engagement", 
      title: "Social Media Marketing & Management",
      desc: "Engage your audience and build strong brand loyalty through high-impact social media platforms.",
      highlights: [ "Social Media Strategy & Planning", "Content Creation (graphics, videos, reels)", "Social Media Account Management", "Community Building & Engagement", "Influencer Collaboration & Campaigns", "Social Media Analytics & Reporting" ],
      image: "/social-media.jpg", 
      badge: "Social Media"
    },
    {
      category: "Brand Storytelling", 
      title: "Content Marketing",
      desc: "Tell your brand story and attract loyal customers with powerful, conversion-driven content.",
      highlights: [ "Blog Writing & Optimization", "Website & Landing Page Copywriting", "Case Studies & Whitepapers", "Infographics & Visual Content", "Video Content Strategy", "Email Newsletters" ],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200", 
      badge: "Content Strategy"
    },
    {
      category: "Customer Nurturing", 
      title: "Email Marketing & Automation",
      desc: "Build lasting relationships and drive consistent sales with personalized, automated email campaigns.",
      highlights: [ "Email Campaign Design", "Drip Campaigns & Automation", "Subscriber List Segmentation", "Performance Tracking & A/B Testing" ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200", 
      badge: "Automation"
    },
    {
      category: "Data & Insights", 
      title: "Analytics & Performance Tracking",
      desc: "Measure what matters, eliminate guesswork, and continuously optimize your digital ROI.",
      highlights: [ "Google Analytics & Tag Manager Setup", "Campaign Performance Dashboards", "ROI Tracking & Monthly Reports", "Actionable Insights & Recommendations" ],
      image: "https://media.licdn.com/dms/image/v2/D5612AQGNeSU2EHa0dw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1720763737572?e=2147483647&v=beta&t=sXZHyPZinxG5w_bM8GU1VHBENpoMaI0LXtEYr4KS9ko", 
      badge: "Analytics"
    },
    {
      category: "Google Search & Display", 
      title: "Google Ads Management",
      desc: "Reach the right audience, drive high-quality traffic, and maximize your advertising ROI.",
      highlights: [ "Google Search & Display Ads Setup", "Keyword Research & Campaign Optimization", "Ad Copy & Landing Page Optimization", "Conversion & ROI Tracking", "Performance Monitoring & Reports" ],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200", 
      badge: "Google Ads"
    },
    {
      category: "Identity & Strategy", 
      title: "Brand Development",
      desc: "Build a strong, memorable brand that connects with your target audience and creates lasting value.",
      highlights: [ "Brand Strategy & Positioning", "Logo & Visual Identity Design", "Brand Guidelines & Identity Systems", "Social Media Branding & Collateral", "Brand Messaging & Communication", "Brand Awareness Campaigns" ],
      image: "/brand.jpg", 
      badge: "Brand Identity"
    },
    {
      category: "Influencer & Local SEO", 
      title: "Influencer Marketing & GMB",
      desc: "Reach authentic audiences through trusted influencers and dominate local search rankings.",
      highlights: [ "Influencer Research & Campaign Management", "Google Business Profile Setup", "Local SEO & Map Pack Optimization", "Google Reviews & Reputation Management", "Audience Engagement & Tracking" ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200", 
      badge: "Influencers & Local"
    }
  ];

  const whyChooseUs = [
    { title: "Data-Driven Strategies", desc: "Every campaign is backed by real-time analytics, user behavior heatmaps, and clear ROI metrics.", icon: "" },
    { title: "Transparent Reporting", desc: "Get full access to live performance dashboards—no hidden costs, no vanity metrics.", icon: "" },
    { title: "Customized Solutions", desc: "Tailored digital strategies designed specifically for your industry vertical and growth goals.", icon: "" },
    { title: "Focus on ROI & Growth", desc: "We focus on real revenue, qualified leads, and sustainable long-term scale.", icon: "" },
  ];

  const faqs = [
    { question: "How long does it take to see tangible results?", answer: "PPC and Google Ads deliver immediate traffic and leads within 24-48 hours. Organic SEO, Brand Development, and Content Marketing typically build significant rank jumps over 60 to 90 days." },
    { question: "Do you design landing pages specifically for ads?", answer: "Yes, every ad campaign includes custom, high-converting landing pages built to convert paid traffic into qualified sales opportunities." },
    { question: "How do you track campaign performance?", answer: "We provide full transparency via custom Google Tag Manager, GA4, and live Looker Studio dashboards tracking Cost Per Lead (CPL) and Return on Ad Spend (ROAS)." }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAF8F5] text-[#1C1614] font-sans selection:bg-[#CD7F5D] selection:text-white relative overflow-hidden">
      
      {/* Dynamic Background */}
      <motion.div 
        style={{ y: yHeroBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] max-w-[1000px] h-[500px] bg-gradient-to-b from-[#F2E4DC]/80 to-transparent rounded-full blur-[100px] md:blur-[140px] pointer-events-none will-change-transform" 
      />

      {/* Reduced global padding for mobile responsiveness */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-6 relative z-10">
        
    {/* HERO SECTION */}
        <section className="text-center max-w-5xl mx-auto pt-10 sm:pt-14 lg:pt-0 pb-12 flex flex-col items-center">
          
          {/* Centered Breadcrumb Pill exactly matching the image */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-[#E5DCD5] shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]"
          >
            <a href="/" className="text-[#867E77] text-sm md:text-[15px] font-semibold hover:text-[#2C2825] transition-colors">
              Home
            </a>
            
            <span className="text-[#D0C8C1] text-lg leading-none mt-[-2px]">›</span>
            
            <a href="/#services" className="text-[#867E77] text-sm md:text-[15px] font-semibold hover:text-[#2C2825] transition-colors">
              Services
            </a>
            
            <span className="text-[#D0C8C1] text-lg leading-none mt-[-2px]">›</span>
            
            <span className="text-[#CD7F5D] text-sm md:text-[15px] font-bold">
              Digital Marketing
            </span>
          </motion.nav>

          {/* Ultra-Bold Monochromatic Headline matching image spacing and weight */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 md:mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-[#272422] tracking-tighter leading-[1.05]"
          >
            Data-Driven Marketing. <br className="hidden md:block"/>
            Unstoppable Growth.
          </motion.h1>

          {/* Large, Light-weight Paragraph perfectly spaced */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10 md:mb-12 text-lg sm:text-xl md:text-[22px] text-[#6B635B] leading-[1.6] font-light max-w-3xl mx-auto px-4"
          >
            Boost visibility, drive qualified leads, and maximize your return on ad spend with our end-to-end performance marketing suite.
          </motion.p>

          {/* CTA Section - Placed with proper spacing below paragraph */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/#contact"
              className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-4.5 rounded-full bg-[#CD7F5D] text-white font-bold text-sm md:text-base tracking-wide shadow-xl shadow-[#CD7F5D]/30 hover:bg-[#B35E3B] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Start Your Marketing Campaign</span>
            </motion.a>
          </motion.div>
          
        </section>

        {/* PARALLAX HERO SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: customEase }}
          className="mt-10 md:mt-20 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-[#E8DDD2] shadow-2xl relative h-[250px] sm:h-[400px] md:h-[550px]"
        >
          <motion.img 
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]), scale: 1.15 }}
            src="https://t4.ftcdn.net/jpg/07/07/02/79/360_F_707027965_o1Nawl8IUYvBowX2BWbJBO8lAyHtkuIa.jpg" 
            alt="Dashboard Analytics" 
            className="w-full h-full object-cover transform-origin-top will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1614] via-[#1C1614]/20 to-transparent flex items-end p-6 md:p-14">
            <div className="text-white space-y-3">
              <span className="text-[10px] md:text-xs font-mono font-bold text-[#E39878] uppercase tracking-widest backdrop-blur-md bg-white/10 px-4 py-1.5 rounded-full border border-white/20">Full-Funnel Execution</span>
              <h3 className="text-xl sm:text-3xl md:text-5xl font-bold tracking-tight">Transparent Results & Attribution</h3>
            </div>
          </div>
        </motion.div>

        {/* ZIG-ZAG SERVICES WITH DIRECTIONAL CURTAIN REVEAL */}
        <section id="capabilities" className="mt-12 md:mt-24 space-y-8 md:space-y-25">
          <div className="text-center max-w-3xl mx-auto space-y-3 md:space-y-4 px-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#CD7F5D] font-bold">Comprehensive Capabilities</span>
            <h2 className="text-2xl md:text-5xl font-extrabold text-[#1C1614] tracking-tight">Our Core Services</h2>
          </div>

          <div className="space-y-12 md:space-y-32">
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
                      className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl bg-white border border-[#E8DDD2]/50 aspect-[4/3] md:aspect-[16/10]"
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
                        <div className="absolute inset-0 bg-[#1C1614]/10 group-hover:bg-transparent transition-colors duration-700" />
                      </motion.div>
                      
                      {/* Badge stays on top of the reveal */}
                      <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg flex items-center gap-2 z-20">
                        <span className="font-mono text-[10px] md:text-xs font-bold text-[#CD7F5D]">0{index + 1}</span>
                        <span className="text-[10px] md:text-xs font-bold text-[#1C1614] uppercase tracking-wider">{service.badge}</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* TEXT SIDE */}
                  <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                    <div className="space-y-2 md:space-y-3">
                      <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#CD7F5D] font-bold">{service.category}</span>
                      <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-[#1C1614] tracking-tight leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-[#6B5D56] leading-relaxed font-light">{service.desc}</p>
                    <ul className="space-y-2 md:space-y-3 pt-2">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs md:text-sm font-medium text-[#382B27]">
                          <span className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#CD7F5D]/10 text-[#CD7F5D] flex items-center justify-center font-bold text-[8px] md:text-[10px] mt-0.5">✓</span>
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

       {/* WHY CHOOSE US / AGENCY ADVANTAGE SECTION */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.1 }}
  variants={fadeInUp}
  className="
    mt-16 md:mt-32
    relative
    bg-[#F5EFE6]
    rounded-[1.5rem] md:rounded-[3rem]
    p-6 md:p-16 lg:p-24
    overflow-hidden
    shadow-[0_25px_80px_rgba(71,52,39,0.12)]
    border border-[#E4D8C9]
  "
>
  {/* Ambient Background */}
  <div
    className="
      absolute -top-32 left-1/4
      w-[300px] h-[300px]
      md:w-[600px] md:h-[600px]
      bg-[#D7B79A]/25
      rounded-full
      blur-[80px] md:blur-[140px]
      pointer-events-none
    "
  />

  <div
    className="
      absolute -bottom-32 right-1/4
      w-[250px] h-[250px]
      md:w-[500px] md:h-[500px]
      bg-[#C6A083]/20
      rounded-full
      blur-[80px] md:blur-[140px]
      pointer-events-none
    "
  />

  {/* Top Decorative Line */}
  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B48A68]/40 to-transparent" />

  {/* Header */}
  <div
    className="
      relative z-10
      text-center
      max-w-3xl
      mx-auto
      space-y-4 md:space-y-5
      mb-10 md:mb-20
    "
  >
    {/* Small Label */}
    <span
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        text-[10px] md:text-xs
        font-mono
        uppercase
        tracking-[0.25em]
        text-[#8B5E3C]
        font-bold
      "
    >
      <span className="w-6 md:w-8 h-px bg-[#B48A68]" />

      The Agency Advantage

      <span className="w-6 md:w-8 h-px bg-[#B48A68]" />
    </span>

    {/* Heading */}
    <h2
      className="
        text-2xl
        sm:text-3xl
        md:text-5xl
        lg:text-6xl
        font-extrabold
        text-[#2B211B]
        tracking-tight
        leading-tight
      "
    >
      Why Brands Choose Us
    </h2>

    {/* Description */}
    <p
      className="
        text-[#75675D]
        text-sm
        md:text-base
        lg:text-lg
        leading-relaxed
        font-light
        max-w-2xl
        mx-auto
        px-4
      "
    >
      We don't just run ads; we engineer growth. Our ecosystem is built around
      transparency, creative strategy, measurable performance, and tangible ROI.
    </p>
  </div>

  {/* Card Grid */}
  <motion.div
    variants={staggerContainer}
    className="
      relative z-10
      grid
      grid-cols-1
      md:grid-cols-2
      gap-4 md:gap-8
    "
  >
    {whyChooseUs.map((item, idx) => (
      <motion.div
        key={idx}
        variants={fadeInUp}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35 }}
        className="
          relative
          bg-[#FFFDF9]
          p-6 md:p-12
          rounded-[1.5rem] md:rounded-[2rem]
          border border-[#E5D8CA]
          shadow-[0_15px_45px_rgba(70,50,35,0.07)]
          group
          overflow-hidden
          transition-all duration-500
          hover:border-[#B48A68]/70
          hover:shadow-[0_25px_65px_rgba(91,65,45,0.14)]
        "
      >

        {/* Hover Gradient */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-br
            from-[#F1E4D5]/70
            via-transparent
            to-[#E8D4C0]/30
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-500
          "
        />

        {/* Giant Number */}
        <div
          className="
            absolute
            -top-8
            -right-4
            text-[6rem] md:text-[10rem]
            font-extrabold
            leading-none
            text-[#5C4635]/[0.035]
            group-hover:text-[#8B5E3C]/[0.07]
            transition-colors duration-500
            pointer-events-none
            select-none
          "
        >
          0{idx + 1}
        </div>

        {/* Content */}
        <div className="relative z-10">

          {/* Icon */}
          <div
            className="
              w-12 h-12
              md:w-16 md:h-16
              rounded-xl md:rounded-2xl

              bg-[#F3E9DD]
              border border-[#E2D1BF]

              text-[#8B5E3C]

              flex
              items-center
              justify-center

              mb-6 md:mb-8

              group-hover:scale-110
              group-hover:bg-[#8B5E3C]
              group-hover:border-[#8B5E3C]
              group-hover:text-white

              transition-all
              duration-500

              shadow-[0_8px_25px_rgba(91,65,45,0.08)]
            "
          >
            {item.icon}
          </div>

          {/* Title */}
          <h3
            className="
              text-lg
              md:text-2xl
              font-bold
              text-[#2B211B]
              mb-3 md:mb-4
              group-hover:text-[#8B5E3C]
              transition-colors duration-300
            "
          >
            {item.title}
          </h3>

          {/* Description */}
          <p
            className="
              text-xs
              md:text-base
              text-[#75675D]
              leading-relaxed
              font-light
              group-hover:text-[#55463C]
              transition-colors duration-300
              max-w-xl
            "
          >
            {item.desc}
          </p>

          {/* Bottom Accent */}
          <div className="mt-6 md:mt-8 flex items-center gap-2">
            <span
              className="
                w-8 h-[2px]
                bg-[#B48A68]
                group-hover:w-14
                transition-all duration-500
              "
            />

            <span className="w-1.5 h-1.5 rounded-full bg-[#B48A68]" />
          </div>

        </div>
      </motion.div>
    ))}
  </motion.div>

  {/* Bottom Decorative Line */}
  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B48A68]/30 to-transparent" />
</motion.section>
        {/* FAQ (SPLIT STICKY LAYOUT) */}
        <section className="mt-16 md:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-20 items-start">
            
            <div className="lg:col-span-5 space-y-4 md:space-y-6 lg:sticky lg:top-32">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#CD7F5D] font-bold">Support & Knowledge</span>
              <h2 className="text-2xl md:text-5xl font-extrabold text-[#1C1614] tracking-tight leading-tight">
                Frequently Asked <br className="hidden lg:block"/> Questions
              </h2>
              <p className="text-sm md:text-base text-[#6B5D56] leading-relaxed">
                Everything you need to know about our digital marketing process, timelines, and reporting structure.
              </p>
              <div className="pt-2 md:pt-4 hidden lg:block">
                <p className="text-sm font-bold text-[#1C1614] mb-2">Still have questions?</p>
                <a href="#consultation" className="text-sm font-bold text-[#CD7F5D] hover:text-[#1C1614] transition-colors flex items-center gap-2">
                  Contact our strategy team <span>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3 md:space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openAccordion === index;
                return (
                  <motion.div 
                    key={index}
                    className={`rounded-xl md:rounded-2xl border transition-all duration-500 ${isOpen ? 'bg-white border-[#EBE2D8] shadow-md' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-4 md:p-8 text-left flex items-start justify-between gap-4 md:gap-6 group"
                    >
                      <span className={`font-bold text-sm md:text-lg transition-colors ${isOpen ? 'text-[#CD7F5D]' : 'text-[#1C1614] group-hover:text-[#CD7F5D]'}`}>
                        {faq.question}
                      </span>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#CD7F5D] text-white' : 'bg-[#EBE2D8] text-[#1C1614]'}`}
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
          <div className="relative rounded-[1.5rem] md:rounded-[3rem] bg-gradient-to-br from-[#CD7F5D] to-[#A05C3F] p-8 md:p-24 text-center overflow-hidden shadow-2xl text-white">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Ready to accelerate your revenue?
              </h2>
              <p className="text-white/80 text-sm md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                Book a free 30-minute strategy call with our team to audit your current performance and map out your growth trajectory.
              </p>
              <div className="pt-2 md:pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  href="mailto:contact@agency.com"
                  className="inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-5 rounded-full bg-[#1C1614] text-white font-bold text-sm md:text-base tracking-wide shadow-2xl hover:bg-black transition-colors w-full sm:w-auto"
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