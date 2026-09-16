'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function VaptServicesPage() {
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

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // --- VAPT SERVICES DATA ---
  const services = [
    {
      num: "01",
      category: "Application Security",
      title: "Web Application Security Assessment (DAST)",
      desc: "Dynamic Application Security Testing to uncover runtime vulnerabilities, SQL injections, broken authentication, and XSS flaws in web platforms.",
      highlights: [
        "OWASP Top 10 Vulnerability Testing",
        "Business Logic Flaw Analysis",
        "Authentication & Session Management Audits",
        "SQL Injection & XSS Vulnerability Mitigation",
        "REST/GraphQL API Endpoint Security",
        "Detailed Remediation & Patching Roadmap"
      ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      badge: "DAST Security"
    },
    {
      num: "02",
      category: "Mobile Defense",
      title: "Mobile Application Security Assessment (MAST)",
      desc: "Deep-dive assessment for Android & iOS applications to secure client-side data storage, reverse engineering vectors, and API communication.",
      highlights: [
        "iOS & Android Code Reverse Engineering Checks",
        "Insecure Local Data Storage Audits",
        "API Endpoint Interception & Tampering",
        "Biometric & Auth Bypass Testing",
        "Third-Party SDK Vulnerability Scanning",
        "SSL Pinning & Traffic Encryption Audits"
      ],
      whyChoose: [
        "Prevents Reverse Engineering and Code Theft",
        "Protects User Data Stored On-Device",
        "Ensures Compliance with App Store Security Guidelines",
        "Hardens Mobile API Communication"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
      badge: "MAST Audits"
    },
    {
      num: "03",
      category: "Infrastructure",
      title: "Network Security Assessment (NRA)",
      desc: "Internal and external network vulnerability assessments to identify open ports, misconfigured firewalls, and unpatched network devices.",
      highlights: [
        "External Perimeter Port & Service Scanning",
        "Firewall, Switch & Router Config Audits",
        "Active Directory & Domain Controller Pentesting",
        "Internal Wireless Network Security Testing",
        "VPN & Remote Access Vulnerability Audits",
        "Rogue Access Point & Device Detection"
      ],
      whyChoose: [
        "Prevents Unauthorized Perimeter Ingress",
        "Blocks Lateral Movement Inside Internal Networks",
        "Helps Achieve ISO 27001 & SOC2 Compliance",
        "Provides 360-degree Infrastructure Visibility"
      ],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200",
      badge: "Network NRA"
    },
    {
      num: "04",
      category: "Code Quality",
      title: "Security Code Review (SAST)",
      desc: "Static Application Security Testing analyzing raw source code to catch hidden security flaws, hardcoded secrets, and logic bugs before deployment.",
      highlights: [
        "Automated & Manual Static Source Code Analysis",
        "Hardcoded Secrets, API Keys & Token Detection",
        "Input Sanitization & Escaping Verification",
        "Open-Source Dependency & Library Audits",
        "Secure SDLC (DevSecOps) Pipeline Integration",
        "Line-by-Line Code Remediation Guidance"
      ],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
      badge: "SAST Review"
    },
    {
      num: "05",
      category: "Automated Pentesting",
      title: "Robot & Automated Penetration Testing",
      desc: "Continuous, AI-driven bot penetration testing simulating attack vectors to discover attack surface vulnerabilities around the clock.",
      highlights: [
        "24/7 Continuous Attack Surface Scanning",
        "Automated Exploitation & Validation",
        "Rapid Zero-Day Vulnerability Identification",
        "Instant Alerting & Incident Triggering",
        "Low False-Positive AI Verification",
        "CI/CD Build Pipeline Security Checks"
      ],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
      badge: "Auto Pentest"
    },
    {
      num: "06",
      category: "Cloud Security",
      title: "Cloud Security Assessment (CSA)",
      desc: "End-to-end security audits across AWS, Azure, and GCP environments to prevent misconfigurations, data leaks, and identity exploits.",
      highlights: [
        "IAM Policy & Privilege Escalation Audits",
        "S3 Bucket & Cloud Storage Permission Checks",
        "Kubernetes & Container Security Audits",
        "Infrastructure as Code (IaC) Scanning",
        "CIS Benchmark Compliance Checks",
        "Cloud API Gateway Penetration Testing"
      ],
      whyChoose: [
        "Eliminates Dangerous Cloud Misconfigurations",
        "Prevents Costly Public Data Leaks",
        "Hardens Multi-Cloud Architecture",
        "Ensures Strict Identity Governance"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
      badge: "Cloud VAPT"
    },
    {
      num: "07",
      category: "Embedded Devices",
      title: "IoT Security & Embedded Device VAPT",
      desc: "Comprehensive security testing for smart hardware, connected sensors, embedded firmware, and IoT communication protocols.",
      highlights: [
        "Firmware Extraction & Binary Reverse Engineering",
        "Hardware Debug Port Exploitation (JTAG / UART)",
        "Wireless Protocol Analysis (Zigbee, BLE, Wi-Fi)",
        "Device-to-Cloud Authentication Hardening",
        "Over-The-Air (OTA) Update Tampering Checks",
        "Cryptographic Key Extraction Vulnerabilities"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
      badge: "IoT Security"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAF8F5] text-[#2C2825] font-sans selection:bg-[#C87D55] selection:text-white relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <motion.div 
        style={{ y: yHeroBg }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C87D55]/10 rounded-full blur-[140px] pointer-events-none" 
      />

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-20 relative z-10">
        
        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-8 pt-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EEEA] border border-[#E5DCD5] text-[#C87D55] text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#C87D55] animate-pulse" />
            Cybersecurity & Defense
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-7xl font-extrabold text-[#2C2825] tracking-tight leading-[1.1]"
          >
            Vulnerability Assessment & <br className="hidden sm:block"/>
            <span className="text-[#C87D55]">
              Penetration Testing (VAPT)
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#6B635B] leading-relaxed font-light max-w-3xl mx-auto"
          >
            Comprehensive insights into your operational and technical IT environment, helping you uncover hidden security blind spots and mitigate cyber risks before hackers exploit them.
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
              Schedule VAPT Audit →
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
            Our <strong>VAPT Services</strong> provide actionable intelligence on your security posture across web applications, mobile apps, networks, source code, and cloud infrastructure. We combine automated tools with skilled manual ethical hacking to deliver zero-false-positive audit reports.
          </p>
        </motion.section>

        {/* SERVICES ZIG-ZAG SHOWCASE */}
        <section id="services" className="mt-32 space-y-24 sm:space-y-36">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C87D55] font-bold">VAPT Offerings</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2825] tracking-tight">Our Security Services</h2>
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

                      {/* Floating Badge */}
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
                            🛡️
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* WHY CHOOSE SECTION */}
                    {service.whyChoose && (
                      <div className="mt-8 bg-[#F3EEEA] border border-[#E5DCD5] rounded-2xl p-6 shadow-sm">
                        <h4 className="text-sm font-bold text-[#2C2825] uppercase tracking-wider mb-4 border-b border-[#E5DCD5] pb-3">
                          Why Secure Your {service.badge}?
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
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C87D55]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C87D55]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#2C2825]">
                Secure Your Assets Before <br className="hidden sm:inline" />
                <span className="text-[#C87D55]">
                  They Are Exploited
                </span>
              </h2>

              <p className="text-[#6B635B] text-base sm:text-xl font-light leading-relaxed max-w-xl mx-auto">
                Connect with our certified cybersecurity experts to request a detailed security assessment proposal and sample report.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:security@digitalfactory.com"
                  className="w-full sm:w-auto px-9 py-5 rounded-xl bg-[#C87D55] text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-[#C87D55]/20 hover:bg-[#B56E47] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Request VAPT Assessment</span>
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
                  💬 Speak with Security Lead
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}