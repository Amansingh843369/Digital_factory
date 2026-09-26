"use client";


import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, MonitorPlay, Code2, ShieldCheck, TrendingUp, CheckCircle2, ArrowRight, User, Globe2, Network } from 'lucide-react';

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
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
        
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
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-[#2A2320] leading-none mb-1">500+</h4>
                  <p className="text-sm sm:text-base text-gray-500 font-medium leading-none">Projects Completed</p>
                </div>
              </div>
            </motion.div>


            {/* RIGHT COLUMN - Text Content */}
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="space-y-8 lg:pl-8"
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
                Explore Endless Digital <br className="hidden lg:block"/>
                <span className="text-[#A64B2A]">Possibilities for Growth.</span>
              </motion.h2>

              {/* Paragraph Content */}
              <motion.div variants={fadeUp} className="space-y-6 text-gray-700 text-lg leading-relaxed font-normal">
                <p>
                  At <strong className="text-[#2A2320] font-bold">Digital Factory</strong>, we harness the power of technology to provide exceptional support to our clients. In today’s fast-paced and technology-driven world, organizations need more than just an online presence — they need strategic, secure, and innovative solutions that create real impact.
                </p>
                <p>
                  We provide end-to-end services in Digital Marketing, Website Development, Software Development, and Cyber Security Solutions, making us a one-stop partner for digital transformation tailored to exceed expectations.
                </p>
                    <p className="font-light text-[#2A2320] text-1xl leading-tight">
                  Driven by innovation and guided by values of integrity, quality, and trust, <strong className='font-bold'>Digital Factory</strong> is committed to shaping a future where businesses of every size can thrive digitally and unlock their true potential.
                  </p>
              </motion.div>

             
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION (Unchanged) */}
      <section className="py-16 md:py-24 bg-[#FCFBF9] border-y border-[#E5D7CD]">
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

      {/* 3. OUR TEAM & LEADERSHIP (Unchanged) */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2A2320] tracking-tight mb-6">Our Team & Leadership</h2>
            <p className="text-[#6B5D56] text-lg font-light leading-relaxed">
              At Digital Factory, our strength lies in a team of passionate professionals who bring diverse expertise to the table. Our leadership and specialists work hand-in-hand to ensure we deliver solutions that are both innovative and secure.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              {
                icon: <TrendingUp className="w-6 h-6 text-[#A64B2A]" />,
                title: "Digital Marketing Experts",
                desc: "Crafting data-driven strategies to boost visibility and engagement.",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                icon: <MonitorPlay className="w-6 h-6 text-[#A64B2A]" />,
                title: "Web Development Specialists",
                desc: "Building responsive, user-friendly, and high-performance websites.",
                img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                icon: <Code2 className="w-6 h-6 text-[#A64B2A]" />,
                title: "Software Engineers",
                desc: "Designing custom applications and scalable platforms tailored to business needs.",
                img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-[#A64B2A]" />,
                title: "Cyber Security Professionals",
                desc: "Safeguarding digital assets with robust security frameworks and compliance standards.",
                img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              }
            ].map((role, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group relative bg-[#FCFBF9] rounded-3xl overflow-hidden border border-[#E5D7CD] hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={role.img} alt={role.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#2A2320]/20 group-hover:bg-[#2A2320]/40 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    {role.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2A2320] mb-2">{role.title}</h3>
                  <p className="text-[#6B5D56] font-light text-sm leading-relaxed">{role.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-[#6B5D56] text-lg font-light leading-relaxed italic">
              Together, our team is committed to helping businesses achieve their goals while maintaining the highest standards of quality, security, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. CALL-TO-ACTION (BOTTOM BANNER) (Unchanged) */}
      <section className="px-4 pb-10 bg-white">
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
                href="#contact"
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