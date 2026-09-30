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
    transition: { staggerChildren: 0.15 } // Slightly slower stagger for better effect
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

  // Parallax Hooks
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Accordion State
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const toggleAccordion = (index: number) => setOpenAccordion(openAccordion === index ? null : index);

  // --- DATA ---
  const services = [
    {
      category: "Corporate Presence",
      title: "Corporate Websites",
      desc: "Showcase your brand, build trust, and communicate your story with a professional corporate website tailored to your business goals.",
      highlights: [
        "Custom Corporate Website Design",
        "Mobile-Responsive Development",
        "CMS Integration (WordPress, Drupal, Joomla)",
        "Corporate Blogs & News Sections",
        "Multi-Language Websites",
        "Corporate Intranet / Extranet Solutions",
        "Maintenance & Ongoing Support"
      ],
      image: "/corporates.png",
      badge: "Corporate"
    },
    {
      category: "Online Retail",
      title: "E-Commerce Websites",
      desc: "Sell online with secure, scalable, and conversion-focused e-commerce platforms designed to maximize your sales potential.",
      highlights: [
        "Online Store Design & Development",
        "Shopify, WooCommerce, Magento Solutions",
        "Product Catalog Management",
        "Secure Payment Gateway Integration",
        "Shopping Cart & Checkout Optimization",
        "Inventory & Order Management Systems",
        "User Account & Loyalty Programs",
        "Analytics & Sales Tracking"
      ],
      
      image: "/ecommerce.png", 
      badge: "E-Commerce"
    },
    {
      category: "Lead Generation",
      title: "Landing Pages",
      desc: "Convert visitors into leads and customers with high-performing landing pages optimized for campaigns and product launches.",
      highlights: [
        "Custom Landing Page Design",
        "Conversion-Optimized Layouts",
        "A/B Testing for Better Results",
        "Integration with CRM & Marketing Tools",
        "SEO & Speed Optimization",
        "Mobile-First Design",
        "Call-to-Action Strategy & Tracking"
      ],
      image: "/images/image.png",
      badge: "Landing Pages"
    }
  ];

  // UPDATED WHY CHOOSE US DATA WITH NUMBERS
  const whyChooseUs = [
    { id: "01", title: "Modern, User-Friendly Designs", desc: "Visually appealing interfaces that engage users and reflect your brand identity perfectly.", icon: "🚀" },
    { id: "02", title: "Custom-Built Solutions", desc: "Tailored specifically to your needs, not just generic templates. Built for performance.", icon: "🛠️" },
    { id: "03", title: "End-to-End Support", desc: "From initial design and development to ongoing maintenance and updates.", icon: "🔄" },
    { id: "04", title: "Security & Compliance", desc: "Built-in security protocols including SSL, HTTPS, and encrypted data handling.", icon: "🔐" }
  ];

  const faqs = [
    { question: "How long does it take to build a website?", answer: "Timelines vary based on complexity. A standard corporate site typically takes 4-6 weeks, while complex e-commerce platforms may require 8-12 weeks. We provide detailed roadmaps after initial scoping." },
    { question: "Do you provide SEO services with the website?", answer: "Yes. Every website we build comes with an SEO-friendly structure, fast loading speeds, and mobile-first design principles to ensure you rank well on search engines from day one." },
    { question: "Can I update the website content myself?", answer: "Absolutely. We integrate user-friendly CMS platforms like WordPress or custom dashboards that allow you to easily manage blogs, products, and pages without technical knowledge." },
    { question: "Is my website secure?", answer: "Security is a priority. We implement SSL certificates, HTTPS protocols, and secure data handling practices to protect your business and your customers' information." }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAF8F5] text-[#2C2825] font-sans selection:bg-[#BD6E44] selection:text-white relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <motion.div 
        style={{ y: yHeroBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#BD6E44]/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 relative z-10">
        
        {/* HERO SECTION */}
        <section className="text-center max-w-5xl mx-auto pt-10 sm:pt-16 lg:pt-1 pb-12 flex flex-col items-center">
          <motion.nav 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-[#E5DCD5] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)]"
          >
            <a href="/" className="text-[#867E77] text-sm md:text-[15px] font-semibold hover:text-[#2C2825] transition-colors">Home</a>
            <span className="text-[#D0C8C1] text-lg leading-none mt-[-2px]">›</span>
            <a href="/#services" className="text-[#867E77] text-sm md:text-[15px] font-semibold hover:text-[#2C2825] transition-colors">Services</a>
            <span className="text-[#D0C8C1] text-lg leading-none mt-[-2px]">›</span>
            <span className="text-[#BD6E44] text-sm md:text-[15px] font-bold">Website Development</span>
          </motion.nav>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 md:mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-[4rem] font-black text-[#272422] tracking-tighter leading-[1.05]"
          >
            Websites That Drive  <br /> Business Growth
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10 md:mb-8 text-lg sm:text-xl md:text-2xl text-[#6B635B] leading-relaxed font-light max-w-3xl mx-auto px-4"
          >
            At Digital Factory, we design and develop websites that are not only visually appealing but also optimized for performance, usability, and conversions.
          </motion.p>

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
              <span>Start Your Website </span>
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
          <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-[#BD6E44]/15 blur-3xl rounded-full" />
          <p className="text-sm sm:text-base md:text-lg text-[#4A433D] leading-relaxed relative z-10">
            Your website is often the first impression of your business. Whether you need a professional corporate site, a scalable e-commerce platform, or a high-impact landing page, our solutions are tailored to your brand and business goals.
          </p>
        </motion.section>

        {/* PARALLAX HERO SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.9, delay: 0.2, ease: customEase }}
          className="mt-10 md:mt-20 rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-[#E5DCD5] shadow-xl relative h-[300px] sm:h-[400px] md:h-[500px]"
        >
          <motion.img 
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]), scale: 1.15 }}
            src="/images/image2.png" 
            alt="Website Development Workspace" 
            className="absolute inset-0 w-full h-full object-cover transform-origin-top will-change-transform"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2825]/90 via-[#2C2825]/20 to-transparent flex items-end justify-start p-6 md:p-14">
            <div className="text-white space-y-3 max-w-3xl text-left">
              <span className="inline-block text-[10px] md:text-xs font-mono font-bold text-[#FAF8F5] uppercase tracking-widest backdrop-blur-md bg-[#BD6E44]/80 px-4 py-1.5 rounded-full border border-white/20">
                Digital Excellence
              </span>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Performance. Usability. Conversion.
              </h3>
            </div>
          </div>
        </motion.div>

        {/* SERVICES ZIG-ZAG */}
        <section id="services" className="py-12 md:py-24">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 md:mb-24 px-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BD6E44] font-bold">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2C2825] tracking-tight">Website Development Services</h2>
          </div>

          <div className="space-y-20 md:space-y-32">
            {services.map((service, index) => {
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
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-8 md:gap-16 px-4 md:px-0`}
                >
                  <div className="w-full lg:w-5/12 relative group">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5, ease: customEase }}
                      className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-[#E5DCD5] shadow-xl bg-[#F3EEEA] h-full min-h-[350px] md:min-h-[500px]"
                    >
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

                      <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E5DCD5] px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-md flex items-center gap-3 z-20">
                        <span className="font-mono text-[10px] md:text-sm font-bold text-[#BD6E44]">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-[10px] md:text-xs font-bold text-[#2C2825] uppercase tracking-wider">{service.badge}</span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-6 md:space-y-8">
                    <div className="space-y-3">
                      <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#BD6E44] font-bold">
                        {service.category}
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2C2825] tracking-tight leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm md:text-base text-[#6B635B] leading-relaxed font-light">
                      {service.desc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 md:gap-y-4 pt-2">
                      {service.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-[#4A433D]">
                          <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded bg-[#F3EEEA] text-[#BD6E44] border border-[#E5DCD5] flex items-center justify-center font-bold text-[10px] md:text-xs mt-0.5">
                            ✦
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {service.whyChoose && (
                      <div className="mt-4 md:mt-6 bg-[#F3EEEA] border border-[#E5DCD5] rounded-xl md:rounded-2xl p-5 md:p-8 shadow-sm">
                        <h4 className="text-xs md:text-sm font-bold text-[#2C2825] uppercase tracking-wider mb-4 md:mb-5 border-b border-[#E5DCD5] pb-3">
                          Why Choose Our {service.badge}?
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                          {service.whyChoose.map((reason, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[#6B635B]">
                              <span className="text-[#BD6E44] font-bold text-lg leading-none">✓</span>
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
    
        {/* UPDATED WHY CHOOSE US - 2x2 GRID WITH NUMBERED BOXES */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 md:mt-32 max-w-5xl mx-auto px-4"
        >
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 md:mb-16">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#BD6E44] font-bold">The Digital Factory Advantage</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2C2825] tracking-tight">Why Choose Digital Factory?</h2>
          </div>

          {/* 2x2 Grid Layout */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="relative bg-[#F3EEEA] border border-[#E5DCD5] p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm group hover:border-[#BD6E44]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Number Badge in Corner */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8 text-4xl md:text-5xl font-black text-[#BD6E44]/10 group-hover:text-[#BD6E44]/20 transition-colors select-none">
                  {item.id}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#FAF8F5] border border-[#E5DCD5] text-[#BD6E44] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#BD6E44] group-hover:text-white group-hover:border-[#BD6E44] transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-[#2C2825] mb-3 group-hover:text-[#BD6E44] transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-[#6B635B] leading-relaxed font-light pr-8">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* FAQ SECTION */}
        <section className="mt-16 md:mt-32 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start max-w-7xl mx-auto">
            
            <div className="lg:col-span-5 space-y-4 md:space-y-6 lg:sticky lg:top-32">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#BD6E44] font-bold">Common Questions</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2C2825] tracking-tight leading-tight">
                Frequently Asked <br className="hidden lg:block"/> Questions
              </h2>
              <p className="text-sm md:text-base text-[#6B635B] leading-relaxed font-light">
                Everything you need to know about our website development process, timelines, and support structure.
              </p>
              <div className="pt-2 md:pt-4 hidden lg:block">
                <p className="text-sm font-bold text-[#2C2825] mb-2">Still have questions?</p>
                <a href="#contact" className="text-sm font-bold text-[#BD6E44] hover:text-[#2C2825] transition-colors flex items-center gap-2">
                  Talk to our consultant <span>→</span>
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
                      <span className={`font-bold text-sm md:text-lg transition-colors ${isOpen ? 'text-[#BD6E44]' : 'text-[#2C2825] group-hover:text-[#BD6E44]'}`}>
                        {faq.question}
                      </span>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className={`flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#BD6E44] text-white' : 'bg-[#E5DCD5] text-[#2C2825]'}`}
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

        {/* CTA SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="contact"
          className="mt-12 md:mt-20 relative px-4"
        >
          <div className="relative rounded-2xl md:rounded-3xl bg-[#F3EEEA] border border-[#E5DCD5] p-6 sm:p-10 md:p-12 text-center overflow-hidden shadow-lg max-w-5xl mx-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#BD6E44]/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight text-[#2C2825]">
                Ready to Stand Out Online? <br />
                <span className="text-[#BD6E44]">Let’s Build Your Website.</span>
              </h2>

              <p className="text-[#6B635B] text-sm sm:text-base max-w-lg mx-auto">
                Turn visitors into customers with a custom high-converting website tailored for your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href="#contact-form"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#BD6E44] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#BD6E44]/25 hover:bg-[#A65E38] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Claim Free Consultation</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+919833624073"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#E5DCD5] text-[#2C2825] font-semibold text-sm hover:bg-[#E5DCD5]/60 transition-all"
                >
                  📞 9833-624-073
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}