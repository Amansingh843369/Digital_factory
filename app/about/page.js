"use client";


import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Home ,ChevronRight,MonitorPlay, Code2, Sparkles, ShieldCheck, TrendingUp, CheckCircle2, ArrowRight, User, Globe2, Network } from 'lucide-react';

const AboutUs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-[#FCFBF9] min-h-screen font-sans selection:bg-[#A64B2A] selection:text-white pb-20">
      
 


      {/* 1. HERO & COMPANY OVERVIEW (Redesigned matching the reference layout) */}
      <section className="relative pt-24 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-white">
        
        {/* Decorative Background Element (matches the purple circle in reference, updated to brand color) */}
        <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-96 h-96 bg-[#A64B2A] rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
        <div className="absolute top-1/3 -left-20 w-40 h-40 bg-[#A64B2A] rounded-full opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* LEFT COLUMN - Visuals */}
            <motion.div 
              initial="hidden" animate="visible" variants={fadeUp}
              className="relative z-10 w-full h-[500px] sm:h-[600px] mt-10 lg:mt-0"
            >
              {/* Main Back Image */}
              <div className="absolute top-0 right-0 w-[85%] h-[80%] bg-gray-200 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Office Team" 
                  className="w-full h-full object-cover brightness-75"
                />
              </div>

              {/* Overlapping Front Image with stylized corner */}
              <div className="absolute bottom-16 left-0 w-[70%] h-[55%] bg-white border-[10px] border-white shadow-2xl rounded-bl-[5rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Working at desk" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Stat Box */}
              <div className="absolute -bottom-6 left-6 bg-white border-2 border-[#A64B2A] rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-lg rounded-br-lg p-6 sm:p-8 flex items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20">
                <div className="text-[#2A2320]">
                  <User size={36} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-[#2A2320] leading-none mb-1">2010</h4>
                  <p className="text-sm sm:text-base text-gray-500 font-medium leading-none">Since</p>
                </div>
              </div>
            </motion.div>


            {/* RIGHT COLUMN - Text Content */}
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="space-y-6 lg:pl-8"
            >
              {/* Overline Label */}
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <div className="w-12 h-1.5 bg-[#A64B2A]"></div>
                <span className="uppercase text-sm sm:text-base font-semibold tracking-[0.2em] text-gray-500">
                  Company Overview
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#2A2320] leading-[1.1] tracking-tight">
                Explore Endless   <br className="hidden lg:block"/>
                <span className="text-[#A64B2A]"> Digital Possibilities for Growth.</span>
              </motion.h2>

             <motion.div 
  variants={fadeUp} 
  className="space-y-6 text-gray-700 text-lg leading-relaxed font-normal text-left sm:text-justify hyphens-auto"
>
  <p>
    At <strong className="text-[#2A2320] font-bold">Digital Factory</strong>, we harness the power of technology to provide exceptional support to our clients. In today’s fast-paced and technology-driven world, organizations need more than just an online presence — they need strategic, secure, and innovative solutions that create real impact.
  </p>
  <p>
    We provide end-to-end services in <strong className="text-[#2A2320] font-bold">Digital Marketing</strong>, <strong className="text-[#2A2320] font-bold">Website Development</strong>, <strong className="text-[#2A2320] font-bold">Software Development</strong>, and <strong className="text-[#2A2320] font-bold">Cyber Security Solutions</strong>  , making us a one-stop partner for digital transformation. Our solutions are tailored to meet the unique needs of every client, whether it’s building brand visibility, designing user-friendly websites, developing enterprise-grade applications, or ensuring robust digital security.
  </p>
</motion.div>

             
            </motion.div>
          </div>
        </div>
      </section>

<section className="py-16 md:py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-[#7b3f00] font-semibold rounded-full text-sm tracking-wide">
            About Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Empowering Your <span className="text-[#7b3f00]">Digital Growth</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            At <strong>Digital Factory</strong>, we believe that technology and creativity must go hand-in-hand. Our team brings together specialists from different domains who collaborate to deliver measurable results, not just promises. We adopt a client-first approach, ensuring transparency, reliability, and long-term success in every project we undertake.
          </p>

          <div className="pt-4 space-y-4">
            <h3 className="font-semibold text-gray-900 text-lg">
              We work with businesses across industries, enabling them to:
            </h3>
            
            <ul className="space-y-4">
              {[
                { title: 'Build', desc: 'a strong and lasting digital identity.' },
                { title: 'Enhance', desc: 'customer engagement through effective marketing strategies.' },
                { title: 'Deploy', desc: 'custom software to improve efficiency and growth.' },
                { title: 'Protect', desc: 'their data and systems with cutting-edge cybersecurity solutions.' }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#7b3f00] text-white flex items-center justify-center mt-0.5 shadow-md">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-gray-700">
                    <strong className="text-gray-900">{item.title}</strong> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-600 pt-4 pb-2 italic border-l-4 pl-4 text-justify">
            Driven by innovation and guided by values of integrity, quality, and trust, Digital Factory is committed to shaping a future where businesses of every size can thrive digitally and unlock their true potential.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute inset-0 bg-[#7b3f00] rounded-3xl rotate-3 scale-105 opacity-20 transition-transform duration-500 group-hover:rotate-6"></div>
          <img
            // Using a high-quality Unsplash image related to digital marketing and analytics
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
            alt="Digital Marketing and Analytics Team"
            className="relative z-10 w-full h-auto object-cover rounded-3xl shadow-xl transition-transform duration-500 group-hover:-translate-y-2"
          />
        </div>

      </div>
    </section>





      {/* 2. MISSION & VISION (Unchanged) */}
      <section className="py-16 md:py-14 bg-[#FCFBF9] border-y border-[#E5D7CD]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Mission Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white rounded-3xl p-8 md:p-12 border border-[#E5D7CD] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#A64B2A]/10 flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-[#A64B2A]" />
              </div>
              <h2 className="text-3xl font-bold text-[#2A2320] mb-4 tracking-tight">Our Mission</h2>
              <p className="text-[#6B5D56] text-lg font-light leading-relaxed">
                To deliver innovative, secure, and result-driven digital solutions that empower businesses to scale, transform, and achieve sustainable growth.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white rounded-3xl p-8 md:p-12 border border-[#E5D7CD] hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#A64B2A]/10 flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-[#A64B2A]" />
              </div>
              <h2 className="text-3xl font-bold text-[#2A2320] mb-4 tracking-tight">Our Vision</h2>
              <p className="text-[#6B5D56] text-lg font-light leading-relaxed">
                To become a global leader in digital transformation by combining creativity, technology, and cybersecurity — building a future where every business can explore endless digital possibilities.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

 

      {/* 4. CALL-TO-ACTION (BOTTOM BANNER) (Unchanged) */}
      <section className="px-4 pb-9 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative rounded-[2.5rem] overflow-hidden bg-[#2A2320] px-6 py-16 md:py-20 text-center shadow-2xl"
          >
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#A64B2A]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#A64B2A]/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-8">
                Ready to explore endless digital possibilities with us?
              </h2>
              
              <motion.a
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.97 }}
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4.5 rounded-full bg-[#A64B2A] text-white font-semibold text-lg tracking-wide shadow-xl shadow-[#A64B2A]/30 hover:bg-[#8a3d22] transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-1" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;