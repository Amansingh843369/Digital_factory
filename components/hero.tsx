"use client"; // Required for state and effects in Next.js

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Server,
  Activity,
  GitCommit,
  Terminal,
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

export function Hero() {
  // Words to cycle through in the typewriter effect
const typeWriterText = useTypewriter([
  "Services",
  "Business ",
  "Success",
  "Secure Platforms.",
]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-background pt-12 pb-16 lg:pt-16 lg:pb-24"
    >
      {/* Background Grid & Blurs */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_80%,transparent_100%)]" />
      <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
              
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand backdrop-blur-sm">
                <Cpu className="h-4 w-4 animate-pulse" />
                We are Software Engineer Team
              </div>

              {/* Headline with Typewriter */}
              <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Digital Factory
                <br />
                <span className="bg-gradient-to-r from-brand via-teal-400 to-indigo-500 bg-clip-text text-transparent">
                  {typeWriterText}
                </span>
                {/* Blinking Cursor */}
                <span className="animate-pulse text-indigo-500 font-light">|</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Digital Factory provides world-class engineering teams to
                architect, build, and scale digital products. We turn complex
                ideas into elegant, reliable, and high-performance software.
              </p>

              {/* Features */}
              <div className="mt-8 grid max-w-2xl gap-4 text-sm font-medium text-foreground/80 sm:grid-cols-2">
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
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
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
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mt-4 lg:mt-0">
            <div className="relative mx-auto w-full max-w-xl animate-in fade-in slide-in-from-right-8 duration-1000 lg:max-w-none">
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-brand via-teal-400 to-indigo-500 opacity-30 blur-2xl" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-muted/20 shadow-2xl">
                <Image
                  src="/images/hero-workspace.png"
                  alt="Digital Factory Engineering Team"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}