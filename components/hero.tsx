"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Layers,
  CheckCircle,
} from "lucide-react";

// ================= CUSTOM TYPEWRITER HOOK =================
const useTypewriter = (words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const currentWord = words[loopNum % words.length];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          timer = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

// Animation Variants for Staggered Text
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

export function Hero() {
  const typeWriterText = useTypewriter([
    "Software Design ",
    "Website Design ",
    "Cyber Security ",
    "Pen Testing ",
  ]);

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-24">
      
      {/* BACKGROUND IMAGE LAYER (Responsive Reveal) */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="relative h-full w-full lg:w-[50%] bg-gray-100 opacity-20 lg:opacity-100 transition-opacity">
          <Image
            src="/images/hero-workspace.png" 
            alt="Digital Factory Engineering Team"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Mobile Overlay for guaranteed text readability on small screens */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent lg:hidden" />
        </div>
      </motion.div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full lg:w-[50%] xl:w-[45%]">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            
            {/* Badge */}
            <motion.div 
              variants={itemVariants} 
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3.5 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-brand backdrop-blur-sm"
            >
              <Cpu className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-pulse shrink-0" />
              <span>We are Software Engineer Team</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="max-w-4xl font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] sm:leading-[1.02] tracking-tight text-foreground"
            >
              Digital Factory
              <br />
              <span className="bg-gradient-to-r from-brand via-teal-400 to-indigo-500 bg-clip-text text-transparent inline-block min-h-[1.2em]">
                {typeWriterText}
              </span>
              <span className="animate-pulse text-indigo-500 font-light">|</span>
            </motion.h1>

            {/* Description Paragraphs */}
            <motion.p 
              variants={itemVariants} 
              className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground"
            >
              Digital Factory empowers businesses with expert engineering teams to design, build, and scale high-impact digital products.  
            </motion.p>
            
            <motion.p 
              variants={itemVariants} 
              className="mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground"
            >
              We transform complex challenges into secure, scalable, and high-performance solutions built for long-term growth.
            </motion.p>

            {/* Features Grid */}
            <motion.div 
              variants={itemVariants} 
              className="mt-6 sm:mt-8 grid w-full max-w-2xl gap-3 text-xs sm:text-sm font-medium text-foreground/80 grid-cols-1 sm:grid-cols-2"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
                <span>Custom Web & Mobile Apps</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
                <span>Cybersecurity & Pen Testing</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
                <span>AI & Automation Learning</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500" />
                <span>UI/UX & Product Design</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div 
              variants={itemVariants} 
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 rounded-xl bg-brand px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/30 text-center"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="group flex items-center justify-center gap-2 rounded-xl border border-border bg-background/50 px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-muted/50 text-center"
              >
                <Layers className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-brand" />
                Explore Services
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}