"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { 
  Target, 
  Eye 
} from "lucide-react";

// ============== CUSTOM HOOK FOR NUMBER COUNTING ================
function AnimatedNumber({ value, isDecimal = false, suffix = "", duration = 2000 }: { value: number, isDecimal?: boolean, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentCount = easeOut * value;
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, value, duration]);

  const displayValue = isDecimal ? count.toFixed(1) : Math.floor(count);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}
// ===================================================================

export function About() {
  // Hook for Slow Left-to-Right Image Reveal
  const [isImageRevealed, setIsImageRevealed] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Starts revealing when 20% visible on screen
    );
    
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative overflow-hidden bg-[#FAF7F2] py-24 lg:py-3">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#C46A42]/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-neutral-900/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          
          {/* ================= LEFT: VISUAL STORYTELLING (SLOW LEFT-TO-RIGHT REVEAL) ================= */}
          <div ref={imageRef} className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* The Clip-path container for reveal effect */}
            <div 
              className="relative aspect-square rounded-[2rem] overflow-hidden border border-neutral-200/50 shadow-2xl shadow-neutral-900/10 group"
              style={{
                // Ye property image ko left se right kholti hai (0% hidden se 100% visible)
                clipPath: isImageRevealed ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                // Ye dheere dheere reveal karega (1.5 seconds delay ke sath smooth effect)
                transition: "clip-path 1.5s cubic-bezier(0.77, 0, 0.175, 1)"
              }}
            >
              <Image
                src="/fake.avif" // Aapki actual image path
                alt="Digital Factory Team"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Overlay Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-900/40 to-transparent" />
              
              {/* Bottom Stats Bar inside Image (Live Counters) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 backdrop-blur-md bg-white/5 border-t border-white/10">
                <div className="grid grid-cols-3 gap-4 text-white text-center sm:text-left">
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold text-[#C46A42]">
                      <AnimatedNumber value={10} suffix="+" duration={2000} />
                    </p>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider opacity-80 mt-1">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold text-[#C46A42]">
                      <AnimatedNumber value={240} suffix="+" duration={2500} />
                    </p>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider opacity-80 mt-1">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold text-[#C46A42]">
                      <AnimatedNumber value={82.1} isDecimal={true} suffix="%" duration={3000} />
                    </p>
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider opacity-80 mt-1">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: CONTENT (MISSION & VISION) ================= */}
          <div className="space-y-8">
            
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-[#C46A42]">
              <span className="h-px w-8 bg-[#C46A42]" />
              About Digital Factory
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-neutral-900 md:text-5xl lg:text-[52px]">
              Exploring Endless <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-[#C46A42]">
                Digital Possibilities
              </span>
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-5 text-[16px] leading-relaxed text-neutral-600 text-justify">
              <p>
                <strong className="text-neutral-900">Digital Factory</strong> is a forward-thinking digital solutions company. In today’s fast-paced and technology-driven world, organizations need more than just an online presence — they need strategic, secure, and innovative solutions that create real impact.
              </p>
              <p>
                We believe that technology and creativity must go hand-in-hand. Driven by innovation, integrity, and trust, our team brings together specialists from different domains to deliver measurable results. From startups to established enterprises, we are your one-stop partner for digital transformation.
              </p>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-2 gap-5 pt-4 ">
              {[
                { 
                  icon: Target, 
                  title: "Our Mission", 
                  desc: "To deliver innovative, secure, and result-driven digital solutions that empower businesses to scale, transform, and achieve sustainable growth." 
                },
                { 
                  icon: Eye, 
                  title: "Our Vision", 
                  desc: "To become a global leader in digital transformation by combining creativity, technology, and cybersecurity — building a future where every business can explore endless digital possibilities." 
                },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="group flex flex-col gap-4 text-justify  leading-7 tracking-normal hyphens-auto rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C46A42]/30 hover:shadow-[0_10px_20px_-10px_rgba(196,106,66,0.15)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0EBE1] text-[#C46A42] transition-colors duration-300 group-hover:bg-[#C46A42] group-hover:text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-[16px]">{item.title}</h3>
                    <p className="mt-2 text-[14px] text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}