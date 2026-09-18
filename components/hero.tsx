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

// Animation Variants for Staggered Text (Niche se upar aane ke liye)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Har element thode delay se aayega
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 }, // 40px niche se start
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
    <section className="relative min-h-screen overflow-hidden bg-background pt-12 pb-16 lg:pt-16 lg:pb-24">
      
      {/* BACKGROUND IMAGE LAYER (Right Side Reveal) */}
      {/* Ye layer image ko handle karega jo right se left ki taraf reveal hogi */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-end lg:justify-end pointer-events-none"
        initial={{ clipPath: "inset(0 100% 0 0)" }} // Start: Fully hidden on right
        animate={{ clipPath: "inset(0 0% 0 0)" }}   // End: Fully visible
        transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }} // Slow, luxurious ease
      >
        <div className="relative h-full w-full lg:w-[50%] bg-gray-100">
          <Image
            src="/images/hero-workspace.png" 
            alt="Digital Factory Engineering Team"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay to make text pop if needed, optional */}
          <div className="absolute inset-0 bg-black/10 lg:bg-transparent" />
        </div>
      </motion.div>

      {/* CONTENT LAYER (Left Side - Sliding Up) */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 h-full flex items-center">
        <div className="w-full lg:w-[45%]">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            
            {/* Badge - Slide Up 1 */}
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand backdrop-blur-sm">
              <Cpu className="h-4 w-4 animate-pulse" />
              We are Software Engineer Team
            </motion.div>

            {/* Headline - Slide Up 2 */}
            <motion.h1 variants={itemVariants} className="max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Digital Factory
              <br />
              <span className="bg-gradient-to-r from-brand via-teal-400 to-indigo-500 bg-clip-text text-transparent">
                {typeWriterText}
              </span>
              <span className="animate-pulse text-indigo-500 font-light">|</span>
            </motion.h1>

            {/* Description - Slide Up 3 */}
            <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Digital Factory provides world-class engineering teams to architect, build, and scale digital products. We turn complex ideas into elegant, reliable, and high-performance software.
            </motion.p>

            {/* Features Grid - Slide Up 4 */}
            <motion.div variants={itemVariants} className="mt-8 grid max-w-2xl gap-4 text-sm font-medium text-foreground/80 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-emerald-500" />
                <span>Custom Web & Mobile Apps</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-emerald-500" />
                <span>Cloud Infrastructure</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-emerald-500" />
                <span>AI & Machine Learning</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-emerald-500" />
                <span>24/7 DevOps Support</span>
              </div>
            </motion.div>

            {/* Buttons - Slide Up 5 */}
            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-4 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/30"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-xl border border-border bg-background/50 px-7 py-4 text-sm font-bold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-muted/50"
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