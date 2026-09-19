// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// const customEase = [0.22, 1, 0.36, 1];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.6, ease: customEase } 
//   }
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 }
//   }
// };

// export default function VaptServicesPage() {
//   // Lenis Smooth Scroll Integration
//   useEffect(() => {
//     let lenis;
//     const initLenis = async () => {
//       try {
//         const Lenis = (await import('lenis')).default;
//         lenis = new Lenis({
//           duration: 1.2,
//           easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//           smoothWheel: true,
//         });

//         function raf(time) {
//           lenis.raf(time);
//           requestAnimationFrame(raf);
//         }
//         requestAnimationFrame(raf);
//       } catch (e) {
//         console.log("Lenis initialization skipped.");
//       }
//     };
//     initLenis();
//     return () => { if (lenis) lenis.destroy(); };
//   }, []);

//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
//   const yHeroBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

//   // Accordion State for FAQ
//   const [openAccordion, setOpenAccordion] = useState(0);
//   const toggleAccordion = (index) => setOpenAccordion(openAccordion === index ? null : index);

//   // --- VAPT SERVICES DATA ---
//   const services = [
//     {
//       num: "01",
//       category: "Application Security",
//       title: "Web Application Security (DAST)",
//       desc: "Dynamic testing to uncover runtime vulnerabilities like SQL injection, XSS, and broken authentication in your web platforms.",
//       highlights: [
//         "OWASP Top 10 Testing",
//         "Business Logic Analysis",
//         "Auth & Session Audits",
//         "SQLi & XSS Mitigation",
//         "API Endpoint Security",
//         "Remediation Roadmap"
//       ],
//       image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
//       badge: "DAST Security"
//     },
//     {
//       num: "02",
//       category: "Mobile Defense",
//       title: "Mobile App Security (MAST)",
//       desc: "Deep assessment for Android & iOS apps to secure data storage, prevent reverse engineering, and harden API communication.",
//       highlights: [
//         "Reverse Engineering Checks",
//         "Local Data Storage Audit",
//         "API Interception Testing",
//         "Biometric Bypass Tests",
//         "SDK Vulnerability Scan",
//         "SSL Pinning Audit"
//       ],
//       image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
//       badge: "MAST Audits"
//     },
//     {
//       num: "03",
//       category: "Infrastructure",
//       title: "Network Security Assessment",
//       desc: "Internal and external network scans to find open ports, misconfigured firewalls, and unpatched devices.",
//       highlights: [
//         "Perimeter Port Scanning",
//         "Firewall Config Audit",
//         "Active Directory Pentest",
//         "Wireless Security Test",
//         "VPN Vulnerability Audit",
//         "Rogue Device Detection"
//       ],
//       image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",
//       badge: "Network NRA"
//     },
//     {
//       num: "04",
//       category: "Code Quality",
//       title: "Security Code Review (SAST)",
//       desc: "Static analysis of source code to catch hidden flaws, hardcoded secrets, and logic bugs before deployment.",
//       highlights: [
//         "Static Source Analysis",
//         "Secrets & Key Detection",
//         "Input Sanitization Check",
//         "Dependency Audit",
//         "DevSecOps Integration",
//         "Code Remediation Guide"
//       ],
//       image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
//       badge: "SAST Review"
//     },
//     {
//       num: "05",
//       category: "Cloud Security",
//       title: "Cloud Security Assessment",
//       desc: "Audits across AWS, Azure, and GCP to prevent misconfigurations, data leaks, and identity exploits.",
//       highlights: [
//         "IAM Policy Audit",
//         "Storage Permission Check",
//         "Kubernetes Security",
//         "IaC Scanning",
//         "CIS Benchmark Check",
//         "Cloud API Pentest"
//       ],
//       image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
//       badge: "Cloud VAPT"
//     }
//   ];

//   // WHY CHOOSE US DATA
//   const whyChooseUs = [
//     { title: "Zero False Positives", desc: "Manual verification by experts ensures every reported vulnerability is real and actionable.", icon: "🎯" },
//     { title: "Compliance Ready", desc: "Reports tailored for ISO 27001, SOC 2, GDPR, and PCI-DSS compliance requirements.", icon: "📋" },
//     { title: "Remediation Support", desc: "We don't just find bugs; we guide your developers on exactly how to fix them.", icon: "🛠️" },
//     { title: "Continuous Security", desc: "Options for continuous monitoring and re-testing after fixes are deployed.", icon: "🔄" },
//   ];

//   // FAQ DATA
//   const faqs = [
//     { question: "How long does a typical VAPT engagement take?", answer: "Timelines depend on scope. A standard web app test takes 5-7 days, while comprehensive network or cloud assessments may take 2-3 weeks." },
//     { question: "Will testing disrupt our production systems?", answer: "We prioritize safety. Tests are scheduled during maintenance windows or performed with strict rate-limiting to avoid downtime." },
//     { question: "Do you provide support after the report?", answer: "Yes. We include a free re-test after your team applies fixes to verify that vulnerabilities are properly closed." },
//     { question: "What standards do you follow?", answer: "Our methodology aligns with OWASP Top 10, PTES, NIST, and OSSTMM frameworks for comprehensive coverage." }
//   ];

//   return (
//     <div ref={containerRef} className="min-h-screen bg-[#FAF8F5] text-[#2C2825] font-sans selection:bg-[#C87D55] selection:text-white relative overflow-hidden">
      
//       {/* Background Soft Glow */}
//       <motion.div 
//         style={{ y: yHeroBg }}
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C87D55]/10 rounded-full blur-[140px] pointer-events-none" 
//       />

//       {/* MAIN CONTENT (Constrained Width) */}
//       <main className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-20 relative z-10">
        
//         {/* BREADCRUMB */}
//         <motion.nav 
//           initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: customEase }}
//           className="flex items-center gap-2 text-[10px] sm:text-xs font-medium text-[#8A8279] mb-8 bg-[#F3EEEA] backdrop-blur-xl border border-[#E5DCD5] px-4 py-2 rounded-full w-fit shadow-sm"
//         >
//           <a href="/" className="hover:text-[#C87D55] transition-colors">Home</a>
//           <span className="text-[#C2B2A8]">&gt;</span>
//           <a href="/services" className="hover:text-[#C87D55] transition-colors">Services</a>
//           <span className="text-[#C2B2A8]">&gt;</span>
//           <span className="text-[#C87D55] font-semibold">VAPT</span>
//         </motion.nav>

//         {/* HERO SECTION */}
//         <section className="text-center max-w-4xl mx-auto space-y-6 pt-6">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EEEA] border border-[#E5DCD5] text-[#C87D55] text-xs font-semibold uppercase tracking-wider shadow-sm"
//           >
//             <span className="w-2 h-2 rounded-full bg-[#C87D55] animate-pulse" /> VAPT Services
//           </motion.div>

//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
//             className="text-4xl sm:text-6xl font-semibold text-[#2C2825] tracking-tight leading-[1.1]"
//           >
//             Vulnerability Assessment & <br className="hidden sm:block"/>
//             <span className="text-[#C87D55]">Penetration Testing (VAPT)</span>
//           </motion.h1>

//           <motion.p 
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-base sm:text-lg text-[#6B635B] leading-relaxed font-normal max-w-2xl mx-auto"
//           >
//             Uncover hidden security blind spots across your apps, networks, and cloud. We help you mitigate risks before hackers exploit them.
//           </motion.p>

//           <motion.div 
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
//             className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
//           >
//             <motion.a
//               whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
//               href="#contact"
//               className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#C87D55] text-white font-medium text-sm tracking-wide shadow-md hover:bg-[#B56E47] transition-all"
//             >
//               Schedule VAPT Audit →
//             </motion.a>
//           </motion.div>
//         </section>

//         {/* INTRO BLOCK */}
//         <motion.section
//           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//           className="mt-16 max-w-3xl mx-auto text-center bg-[#F3EEEA] border border-[#E5DCD5] p-6 sm:p-10 rounded-2xl shadow-sm relative overflow-hidden"
//         >
//           <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C87D55]/10 blur-2xl rounded-full" />
//           <p className="text-sm sm:text-base text-[#4A433D] leading-relaxed relative z-10">
//             Our <strong>VAPT Services</strong> combine automated scanning with manual ethical hacking. We deliver actionable intelligence on your security posture with zero false positives.
//           </p>
//         </motion.section>

//         {/* SERVICES ZIG-ZAG SHOWCASE */}
//         <section id="services" className="mt-20 space-y-16 sm:space-y-24">
//           <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
//             <span className="text-xs font-mono uppercase tracking-wider text-[#C87D55] font-medium">VAPT Offerings</span>
//             <h2 className="text-2xl sm:text-4xl font-semibold text-[#2C2825] tracking-tight">Our Security Services</h2>
//           </div>

//           <div className="space-y-16 sm:space-y-24">
//             {services.map((service, index) => {
//               const isEven = index % 2 === 0;
//               return (
//                 <motion.div 
//                   key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
//                   className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
//                 >
//                   {/* IMAGE CARD */}
//                   <div className="w-full lg:w-5/12">
//                     <motion.div 
//                       whileHover={{ scale: 1.01 }} transition={{ duration: 0.4 }}
//                       className="relative rounded-2xl overflow-hidden border border-[#E5DCD5] shadow-lg group bg-[#F3EEEA]"
//                     >
//                       <div className="h-[280px] sm:h-[350px] w-full overflow-hidden relative">
//                         <img 
//                           src={service.image} alt={service.title} 
//                           className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/40 via-transparent to-transparent opacity-80" />
//                       </div>
//                       <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#E5DCD5] px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2">
//                         <span className="font-mono text-xs font-medium text-[#C87D55]">{service.num}</span>
//                         <span className="text-xs font-medium text-[#2C2825] uppercase tracking-wide">{service.badge}</span>
//                       </div>
//                     </motion.div>
//                   </div>

//                   {/* CONTENT BLOCK */}
//                   <div className="w-full lg:w-7/12 space-y-4">
//                     <div className="space-y-1">
//                       <span className="text-xs font-mono uppercase tracking-wider text-[#C87D55] font-medium">{service.category}</span>
//                       <h3 className="text-xl sm:text-3xl font-semibold text-[#2C2825] tracking-tight leading-tight">{service.title}</h3>
//                     </div>
//                     <p className="text-sm sm:text-base text-[#6B635B] leading-relaxed font-normal">{service.desc}</p>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-2">
//                       {service.highlights.map((item, i) => (
//                         <div key={i} className="flex items-start gap-2 text-sm text-[#4A433D]">
//                           <span className="flex-shrink-0 w-4 h-4 rounded bg-[#F3EEEA] text-[#C87D55] border border-[#E5DCD5] flex items-center justify-center font-bold text-[9px] mt-0.5">✓</span>
//                           <span>{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </section>

//         {/* FAQ SECTION (Inside Container) */}
//         <section className="mt-24 sm:mt-32">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
//             <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
//               <span className="text-xs font-mono uppercase tracking-wider text-[#C87D55] font-medium">Common Questions</span>
//               <h2 className="text-2xl sm:text-4xl font-semibold text-[#2C2825] tracking-tight leading-tight">
//                 Frequently Asked <br/> Questions
//               </h2>
//               <p className="text-sm text-[#6B635B] leading-relaxed">
//                 Everything you need to know about our VAPT process, timelines, and reporting.
//               </p>
//             </div>

//             <div className="lg:col-span-7 space-y-3">
//               {faqs.map((faq, index) => {
//                 const isOpen = openAccordion === index;
//                 return (
//                   <motion.div 
//                     key={index}
//                     className={`rounded-xl border transition-all duration-300 ${isOpen ? 'bg-white border-[#E5DCD5] shadow-sm' : 'bg-transparent border-transparent hover:bg-white/50'}`}
//                   >
//                     <button
//                       onClick={() => toggleAccordion(index)}
//                       className="w-full p-5 text-left flex items-start justify-between gap-4 group"
//                     >
//                       <span className={`font-medium text-sm sm:text-base transition-colors ${isOpen ? 'text-[#C87D55]' : 'text-[#2C2825] group-hover:text-[#C87D55]'}`}>
//                         {faq.question}
//                       </span>
//                       <motion.div 
//                         animate={{ rotate: isOpen ? 180 : 0 }}
//                         className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors text-xs ${isOpen ? 'bg-[#C87D55] text-white' : 'bg-[#F3EEEA] text-[#2C2825]'}`}
//                       >
//                         ↓
//                       </motion.div>
//                     </button>
//                     <AnimatePresence initial={false}>
//                       {isOpen && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3, ease: customEase }}
//                         >
//                           <div className="px-5 pb-5 text-sm text-[#6B635B] leading-relaxed">
//                             {faq.answer}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </section>

//       </main>

//       {/* FULL WIDTH SECTIONS (Outside max-w-6xl) */}

//       {/* WHY CHOOSE US - Full Width, Tight Padding */}
//       <motion.section 
//         initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp}
//         className="mt-20 sm:mt-28 relative bg-[#2C2825] w-full py-12 sm:py-16 overflow-hidden border-y border-[#1A1816]"
//       >
//         <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#C87D55]/15 rounded-full blur-[100px] pointer-events-none opacity-50" />
        
//         <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
//           <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
//             <span className="text-xs font-mono uppercase tracking-wider text-[#C87D55] font-medium">The Advantage</span>
//             <h2 className="text-2xl sm:text-3xl font-semibold text-[#FAF8F5] tracking-tight">Why Choose Us?</h2>
//             <p className="text-[#A99A93] text-sm leading-relaxed font-normal">
//               We go beyond automated scans to deliver real security value.
//             </p>
//           </div>

//           <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {whyChooseUs.map((item, idx) => (
//               <motion.div 
//                 key={idx} variants={fadeInUp} whileHover={{ y: -4 }}
//                 className="relative bg-gradient-to-br from-[#3D3632] to-[#1A1816] p-6 rounded-xl border border-[#4A433D] shadow-lg group overflow-hidden transition-all duration-300 hover:border-[#C87D55]/50"
//               >
//                 <div className="relative z-10">
//                   <div className="w-10 h-10 rounded-lg bg-[#2C2825] border border-[#4A433D] text-[#C87D55] flex items-center justify-center text-xl mb-4 group-hover:scale-110 group-hover:bg-[#C87D55] group-hover:text-white transition-all duration-300">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-base font-medium text-[#FAF8F5] mb-2 group-hover:text-[#C87D55] transition-colors duration-300">
//                     {item.title}
//                   </h3>
//                   <p className="text-xs text-[#A99A93] leading-relaxed font-normal group-hover:text-[#D8C9C1] transition-colors duration-300">
//                     {item.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* CTA SECTION - Full Width, Tight Padding */}
//       <motion.section 
//         initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
//         id="contact" className="mt-0 w-full relative"
//       >
//         <div className="w-full bg-[#F3EEEA] border-t border-[#E5DCD5] py-12 sm:py-16 px-5 text-center overflow-hidden relative">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-[#C87D55]/10 rounded-full blur-[80px] pointer-events-none" />
          
//           <div className="relative z-10 max-w-3xl mx-auto space-y-6">
//             <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight leading-tight text-[#2C2825]">
//               Secure Your Assets Before <br className="hidden sm:inline" />
//               <span className="text-[#C87D55]">They Are Exploited</span>
//             </h2>
//             <p className="text-[#6B635B] text-sm sm:text-base font-normal leading-relaxed max-w-xl mx-auto">
//               Connect with our experts for a detailed security assessment proposal and sample report.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
//               <motion.a
//                 whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
//                 href="mailto:security@digitalfactory.com"
//                 className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#C87D55] text-white font-medium text-sm tracking-wide shadow-md hover:bg-[#B56E47] transition-all flex items-center justify-center gap-2"
//               >
//                 Request VAPT Assessment →
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
//                 href="#"
//                 className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-[#E5DCD5] text-[#2C2825] font-medium text-sm hover:bg-[#E5DCD5]/30 transition-all shadow-sm"
//               >
//                 💬 Speak with Lead
//               </motion.a>
//             </div>
//           </div>
//         </div>
//       </motion.section>

//     </div>
//   );
// }


export default function EOfficeManagementSecurity() {
  return (
    <main>
      {/* your page content */}
    </main>
  );
}