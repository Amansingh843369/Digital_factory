'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  MessageSquare, 
  Cpu, 
  Layers, 
  Zap, 
  CheckCircle2,
  ChevronDown,
  X,
  Send,
  Loader2 // Loading icon ke liye add kiya
} from 'lucide-react';
import emailjs from '@emailjs/browser'; // EmailJS import kiya

const customEase = [0.22, 1, 0.36, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: customEase } 
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

const whyChooseUs = [
  { id: "01", title: "Modern, User-Friendly Designs", desc: "Visually appealing interfaces that engage users and reflect your brand identity perfectly.", icon: "🚀" },
  { id: "02", title: "Custom-Built Solutions", desc: "Tailored specifically to your needs, not just generic templates. Built for performance.", icon: "🛠️" },
  { id: "03", title: "End-to-End Support", desc: "From initial design and development to ongoing maintenance and updates.", icon: "🔄" },
  { id: "04", title: "Security & Compliance", desc: "Built-in security protocols including SSL, HTTPS, and encrypted data handling.", icon: "🔐" }
];

// ✅ NEW: FAQ Data for Software Development
const faqData = [
  {
    question: "How long does it take to develop custom software?",
    answer: "Timelines vary based on complexity. A simple MVP typically takes 8-12 weeks, while complex enterprise systems can take 4-6 months. We provide detailed timelines during our discovery phase."
  },
  {
    question: "Do you work with existing legacy systems?",
    answer: "Absolutely. We specialize in integrating modern solutions with legacy infrastructure, ensuring seamless data flow and minimal disruption to your current operations."
  },
  {
    question: "What technologies do you use for development?",
    answer: "We use a modern tech stack including React, Next.js, Node.js, Python, and cloud platforms like AWS/Azure. We choose the best technology based on your specific project requirements."
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes, we offer comprehensive support packages including bug fixes, performance monitoring, security updates, and feature enhancements to ensure your software stays reliable and up-to-date."
  }
];

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
    image: "/custom-dev.png",
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
    image: "/saas.png",
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
    image: "/an.png",
    badge: "Mobile Apps"
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
     
    image: "/ERP.png",
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
 
    image: "/ai.png",
    badge: "AI Solutions"
  },
  
  
];

export default function SoftwareDevelopmentPage() {
  // ✅ State for Popup Modal
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // ✅ State for FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // ✅ NEW: Form States
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  // ✅ Toggle FAQ Function
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAF8F5] text-[#2C2825] font-sans selection:bg-[#C87D55] selection:text-white relative overflow-hidden">
      
      {/* Background Soft Ambient Glow */}
      <motion.div 
        style={{ y: yHeroBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#C87D55]/15 to-transparent rounded-full blur-[140px] pointer-events-none" 
      />

      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-4 relative z-10">
        
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
            We engineer high-performance software applications, scalable cloud platforms, and automated workflows designed specifically to unlock real business growth.
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
    We develop custom software solutions that are scalable, secure, and built around your business requirements. From enterprise applications and business management systems to automation and cloud-based platforms, our solutions help streamline operations and drive digital growth.
  </p>
</motion.section>
        </section>

  
   {/* SERVICES SHOWCASE */}
        <section id="services" className="mt-28 sm:mt-6 space-y-24 sm:space-y-32 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C87D55]">Our Core Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2C2825] tracking-tight">Software Development </h2>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;
              
              // ✅ FIXED: Defined revealClip logic here so curtain animation works
              const revealClip = isEven 
                ? ["inset(0 100% 0 0)", "inset(0 0% 0 0)"] // Left to Right
                : ["inset(0 0 0 100%)", "inset(0 0 0 0%)"]; // Right to Left

              return (
                <motion.div 
                  key={service.num}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  // ✅ KEY FIX: items-stretch ensures both columns equal height
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-8 lg:gap-12`}
                >
                  {/* IMAGE CONTAINER WITH HORIZONTAL CURTAIN REVEAL */}
                  <div className="w-full lg:w-5/12">
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.4 }}
                      // ✅ KEY FIX: h-full stretches image to match text column height
                      // ✅ Removed fixed min-height values that caused gaps
                      className="relative rounded-[2rem] overflow-hidden border border-[#E5DCD5] shadow-md group bg-neutral-100 w-full h-full"
                    >
                      {/* 1. Image Zoom Reveal */}
                      <motion.div
                        variants={{
                          hidden: { scale: 1.25 },
                          visible: { scale: 1, transition: { duration: 1.2, ease: customEase } }
                        }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <Image
                          src={service.image} 
                          alt={service.title} 
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          // ✅ object-cover + no fixed height = fills parent perfectly
                          // ✅ FIXED: Added opacity-95 so image is visible on mobile
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

                    {/* ✅ NEW: KNOW MORE BUTTON ADDED HERE */}
                    <div className="pt-4">
                       <motion.button
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         onClick={() => setIsPopupOpen(true)}
                         className="inline-flex items-center gap-2 px-6 py-3 bg-[#F3EEEA] border border-[#E5DCD5] rounded-full text-[#2C2825] font-bold text-sm shadow-sm hover:bg-[#EBE4DF] hover:border-[#C87D55]/30 transition-all group"
                       >
                         <span>Know More</span>
                         <ArrowRight className="w-4 h-4 text-[#C87D55] transition-transform group-hover:translate-x-1" />
                       </motion.button>
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

        {/* ✅ NEW: FAQ SECTION (Cream Color) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mt-16 md:mt-32 max-w-4xl mx-auto px-4"
        >
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 md:mb-16">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">Support & Knowledge</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2C2825] tracking-tight">Frequently Asked Questions</h2>
            <p className="text-sm md:text-base text-[#6B635B] font-light">Everything you need to know about our software development process.</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F3EEEA] border border-[#E5DCD5] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className="text-base md:text-lg font-bold text-[#2C2825] group-hover:text-[#C87D55] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#C87D55]/10 flex items-center justify-center transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 bg-[#C87D55]' : ''}`}>
                    <ChevronDown className={`w-5 h-5 ${openFaqIndex === index ? 'text-white' : 'text-[#C87D55]'}`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: customEase }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <p className="text-sm md:text-base text-[#6B635B] leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
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
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#F3EEEA] border border-[#E5DCD5] flex items-center justify-center text-[#6B635B] hover:bg-[#C87D55] hover:text-white hover:border-[#C87D55] transition-all duration-300 z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="p-8 pb-0 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#C87D55]/10 flex items-center justify-center">
                    <Send className="w-8 h-8 text-[#C87D55]" />
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
                      className="w-full px-4 py-3 rounded-xl bg-[#F3EEEA] border border-[#E5DCD5] text-[#2C2825] placeholder-[#8C827A] focus:outline-none focus:border-[#C87D55] focus:ring-2 focus:ring-[#C87D55]/20 transition-all"
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
                      className="w-full px-4 py-3 rounded-xl bg-[#F3EEEA] border border-[#E5DCD5] text-[#2C2825] placeholder-[#8C827A] focus:outline-none focus:border-[#C87D55] focus:ring-2 focus:ring-[#C87D55]/20 transition-all"
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
                      placeholder="Tell us about your software requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F3EEEA] border border-[#E5DCD5] text-[#2C2825] placeholder-[#8C827A] focus:outline-none focus:border-[#C87D55] focus:ring-2 focus:ring-[#C87D55]/20 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 rounded-xl bg-[#C87D55] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#C87D55]/30 hover:bg-[#B56E47] transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
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