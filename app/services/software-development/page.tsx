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
    image: "/Saas.jpg",
    badge: "Saas Platform"
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
    image: "/Workflow_Orchestration.jpg",
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

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-14 relative z-10">
        
      {/* HERO SECTION */}
        <section className="text-center max-w-5xl mx-auto pt-10 sm:pt-16 lg:pt-0 pb-12 flex flex-col items-center">
          
          {/* Updated Breadcrumb Pill with Smooth Scroll Link */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#F8F5F2] border border-[#E5DCD5] shadow-sm backdrop-blur-md"
          >
            <a href="/" className="text-[#8C827A] text-sm md:text-base font-semibold hover:text-[#2C2825] transition-colors">
              Home
            </a>
            
            <span className="text-[#CFC8C2] text-xs font-bold">❯</span>
            
            {/* Smooth Scroll Anchor Link */}
            <a 
              href="/#service" 
              className="flex items-baseline text-[#8C827A] text-sm md:text-base font-semibold hover:text-[#2C2825] transition-colors group"
            >
              Services
             
              
            </a>
            
            <span className="text-[#CFC8C2] text-xs font-bold ml-1">❯</span>
            
            <span className="text-[#C87D55] text-sm md:text-base font-bold">
              Software Development
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 md:mb-8 text-5xl sm:text-6xl lg:text-[5rem] font-extrabold text-[#2C2825] tracking-tight leading-[1.1] md:leading-[1.05] max-w-4xl"
          >
            Custom Software Built <br className="hidden sm:block"/>
            for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C87D55] to-[#A95A37]">
              Digital-First Era
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-10 md:mb-6 text-lg sm:text-xl md:text-2xl text-[#6B635B] leading-relaxed font-light max-w-3xl mx-auto"
          >
            We engineer high-performance web applications, scalable cloud platforms, and automated workflows designed specifically to unlock real business growth.
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
              className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-4.5 rounded-full bg-[#C87D55] text-white font-bold text-sm md:text-base tracking-wide shadow-xl shadow-[#C87D55]/30 hover:bg-[#B56E47] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Start Your Software Project</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-4.5 rounded-full bg-white/70 border border-[#E5DCD5] text-[#2C2825] font-semibold text-sm md:text-base hover:bg-white hover:shadow-md transition-all shadow-sm flex items-center justify-center"
            >
              Explore Capabilities
            </motion.a>
          </motion.div>
          
        </section>

  
   {/* SERVICES SHOWCASE */}
        <section id="services" className="mt-28 sm:mt-16 space-y-24 sm:space-y-32 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">Our Core Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2825] tracking-tight">Software Engineering Services</h2>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={service.num}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-10 lg:gap-16`}
                >
                  {/* IMAGE CONTAINER WITH HORIZONTAL CURTAIN REVEAL */}
                  <div className="w-full lg:w-5/12 flex">
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.4 }}
                      className="relative rounded-[2rem] overflow-hidden border border-[#E5DCD5] shadow-md group bg-neutral-100 w-full min-h-[320px] sm:min-h-[420px]"
                    >
                      {/* 1. Image Zoom Reveal */}
                      <motion.div
                        variants={{
                          hidden: { scale: 1.25 },
                          visible: { scale: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
                        }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src={service.image} 
                          alt={service.title} 
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                      </motion.div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />

                      {/* 2. Floating Badge (Pops in after curtain opens) */}
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0, x: isEven ? -15 : 15 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } }
                        }}
                        className="absolute top-5 left-5 bg-white/90 backdrop-blur-md border border-[#E5DCD5] px-4 py-2 rounded-2xl shadow-sm flex items-center gap-3 z-20 pointer-events-none"
                      >
                        <span className="font-mono text-xs font-extrabold text-[#C87D55]">{service.num}</span>
                        <span className="text-xs font-bold text-[#2C2825] uppercase tracking-wider">{service.badge}</span>
                      </motion.div>

                      {/* 3. Horizontal Curtain Overlay (Slides Left/Right) */}
                      <motion.div
                        variants={{
                          hidden: { scaleX: 1 },
                          visible: { scaleX: 0, transition: { duration: 0.9, ease: [0.77, 0, 0.175, 1], delay: 0.1 } }
                        }}
                        // originX: 1 makes it slide left-to-right | originX: 0 makes it slide right-to-left
                        style={{ originX: isEven ? 1 : 0 }} 
                        className="absolute inset-0 bg-[#FAF8F5] z-30 pointer-events-none"
                      />
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
  viewport={{ once: true, amount: 0.15 }}
  variants={staggerContainer}
  id="contact"
  className="
    relative
    mt-20
    px-4
    sm:mt-28 sm:px-6
    md:mt-32
    lg:mt-40 lg:px-8
  "
>
  {/* Main CTA Card */}
  <div
    className="
      relative
      mx-auto
      w-full
      max-w-7xl
      overflow-hidden
      rounded-[1.5rem]
      border border-[#E5DCD5]
      bg-gradient-to-b from-[#FAF8F5] to-[#F3EEEA]
      px-5 py-10
      text-center
      shadow-xl

      sm:rounded-[2rem]
      sm:px-8 sm:py-12

      md:px-12 md:py-14

      lg:rounded-[2.5rem]
      lg:px-20 lg:py-20

      xl:px-24 xl:py-24
    "
  >

    {/* Ambient Glow - Top Right */}
    <div
      className="
        pointer-events-none
        absolute
        -right-24 -top-24
        h-52 w-52
        rounded-full
        bg-[#C87D55]/15
        blur-[70px]

        sm:-right-28 sm:-top-28
        sm:h-72 sm:w-72
        sm:blur-[90px]

        lg:-right-24 lg:-top-24
        lg:h-96 lg:w-96
        lg:blur-[100px]
      "
    />

    {/* Ambient Glow - Bottom Left */}
    <div
      className="
        pointer-events-none
        absolute
        -bottom-24 -left-24
        h-52 w-52
        rounded-full
        bg-[#C87D55]/10
        blur-[70px]

        sm:-bottom-28 sm:-left-28
        sm:h-72 sm:w-72
        sm:blur-[90px]

        lg:-bottom-24 lg:-left-24
        lg:h-96 lg:w-96
        lg:blur-[100px]
      "
    />

    {/* Content */}
    <div
      className="
        relative
        z-10
        mx-auto
        flex
        w-full
        max-w-4xl
        flex-col
        items-center
      "
    >

      {/* Badge */}
      <motion.div
        variants={fadeInUp}
        className="
          inline-flex
          max-w-full
          items-center
          gap-2
          rounded-full
          border border-[#E5DCD5]
          bg-white
          px-3
          py-1.5
          text-[10px]
          font-bold
          uppercase
          tracking-[0.12em]
          text-[#C87D55]
          shadow-sm

          sm:px-4 sm:py-2
          sm:text-xs
          sm:tracking-wider
        "
      >
        <Zap className="h-3.5 w-3.5 shrink-0" />

        <span className="whitespace-nowrap">
          Let's Build Together
        </span>
      </motion.div>


      {/* Heading */}
      <motion.h2
        variants={fadeInUp}
        className="
          mt-6
          max-w-[340px]
          text-[2rem]
          font-extrabold
          leading-[1.12]
          tracking-[-0.03em]
          text-[#2C2825]

          sm:mt-7
          sm:max-w-2xl
          sm:text-4xl

          md:max-w-3xl
          md:text-5xl

          lg:mt-8
          lg:max-w-4xl
          lg:text-6xl
          lg:leading-[1.08]
        "
      >
        Ready to Accelerate{" "}

        {/* Mobile line break */}
        <span className="sm:hidden">
          <br />
        </span>

        <span className="sm:inline">
          Your
        </span>

        {/* Desktop line break */}
        <br className="hidden sm:block" />

        <span
          className="
            bg-gradient-to-r
            from-[#C87D55]
            to-[#A95A37]
            bg-clip-text
            text-transparent
          "
        >
          Digital Roadmap?
        </span>
      </motion.h2>


      {/* Description */}
      <motion.p
        variants={fadeInUp}
        className="
          mt-5
          max-w-[340px]
          text-sm
          font-light
          leading-6
          text-[#6B635B]

          sm:mt-6
          sm:max-w-xl
          sm:px-2
          sm:text-base
          sm:leading-7

          md:max-w-2xl
          md:text-lg
          md:leading-8

          lg:mt-7
          lg:text-xl
        "
      >
        Schedule a call with our technical architects to scope your
        custom software needs and plan a scalable digital infrastructure.
      </motion.p>


      {/* CTA Button */}
      <motion.div
        variants={fadeInUp}
        className="
          mt-7
          w-full
          max-w-[320px]

          sm:mt-8
          sm:w-auto
          sm:max-w-none

          lg:mt-9
        "
      >
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          href="mailto:hello@digitalfactory.com"
          className="
            group
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-full
            bg-[#C87D55]
            px-6
            py-4
            text-[15px]
            font-bold
            tracking-wide
            text-white
            shadow-xl
            shadow-[#C87D55]/30
            transition-all
            duration-300
            hover:bg-[#B56E47]

            sm:w-auto
            sm:px-9
            sm:py-4

            lg:px-10
            lg:py-5
            lg:text-base
          "
        >
          <span className="whitespace-nowrap">
            Start Your Project
          </span>

          <ArrowRight
            className="
              h-5
              w-5
              shrink-0
              transition-transform
              duration-300
              group-hover:translate-x-1.5
            "
          />
        </motion.a>
      </motion.div>

    </div>
  </div>
</motion.section>
      </main>
    </div>
  );
}