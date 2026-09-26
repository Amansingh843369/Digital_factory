"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, ArrowRight } from "lucide-react"; 

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
      { threshold: 0.2 } 
    );
    
    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative overflow-hidden bg-[#FAF7F2] py-16 sm:py-20 lg:py-24">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center lg:items-stretch gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* ================= LEFT: VISUAL STORYTELLING ================= */}
          <div ref={imageRef} className="relative mx-auto w-full h-full min-h-[450px] lg:min-h-0 max-w-md sm:max-w-lg lg:max-w-none">
            <div 
              className="relative h-full w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-neutral-200/10 shadow-2xl shadow-neutral-900/10 group"
              style={{
                clipPath: isImageRevealed ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                transition: "clip-path 1.5s cubic-bezier(0.77, 0, 0.175, 1)"
              }}
            >
              <Image
                src="/about.jpg" 
                alt="Digital Factory Team"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-900/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 backdrop-blur-md bg-white/5 border-t border-white/10 z-10">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-white text-center">
                  <div>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#C46A42]">
                      <AnimatedNumber value={10} suffix="+" duration={2000} />
                    </p>
                    <p className="text-[9px] sm:text-[10px] lg:text-xs font-semibold uppercase tracking-wider opacity-80 mt-1 sm:mt-1.5">Years Exp.</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#C46A42]">
                      <AnimatedNumber value={240} suffix="+" duration={2500} />
                    </p>
                    <p className="text-[9px] sm:text-[10px] lg:text-xs font-semibold uppercase tracking-wider opacity-80 mt-1 sm:mt-1.5">Delivered</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#C46A42]">
                      <AnimatedNumber value={82.1} isDecimal={true} suffix="%" duration={3000} />
                    </p>
                    <p className="text-[9px] sm:text-[10px] lg:text-xs font-semibold uppercase tracking-wider opacity-80 mt-1 sm:mt-1.5">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: CONTENT (MISSION & VISION) ================= */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 py-2">
            
            <div className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#C46A42]">
              <span className="h-px w-6 sm:w-8 bg-[#C46A42]" />
              About Digital Factory
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl leading-[1.2] sm:leading-[1.1] tracking-tight text-neutral-900 md:text-5xl lg:text-[52px]">
              Exploring Endless <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-[#C46A42]">
                Digital Possibilities
              </span>
            </h2>

            {/* Description Paragraphs with Added Bullet Points */}
            <div className="space-y-4 sm:space-y-5 text-[15px] sm:text-[16px] leading-relaxed text-neutral-600 text-justify">
              <p>
                <strong className="text-neutral-900">Digital Factory</strong> is a forward-thinking digital solutions company. In today’s fast-paced and technology-driven world, organizations need more than just an online presence — they need strategic, secure, and innovative solutions that create real impact.
              </p>
              <p>
                At Digital Factory, we believe that technology and creativity must go hand-in-hand. Our team brings together specialists from different domains who collaborate to deliver measurable results, not just promises. We adopt a client-first approach, ensuring transparency, reliability, and long-term success in every project we undertake.
              </p>
              
              <div className="pt-2 text-left">
                <p className="mb-3">
                  We work with businesses across industries — from startups to established enterprises — enabling them to:
                </p>
                <ul className="list-disc pl-5 space-y-2 marker:text-[#C46A42]">
                  <li>
                    <strong className="text-neutral-900 font-medium">Build</strong> a strong and lasting digital identity.
                  </li>
                  <li>
                    <strong className="text-neutral-900 font-medium">Enhance</strong> customer engagement through effective marketing strategies.
                  </li>
                  <li>
                    <strong className="text-neutral-900 font-medium">Deploy</strong> custom software to improve efficiency and growth.
                  </li>
                  <li>
                    <strong className="text-neutral-900 font-medium">Protect</strong> their data and systems with cutting-edge cybersecurity solutions.
                  </li>
                </ul>
              </div>
            </div>

            {/* ================= NEW ABOUT PAGE BUTTON ================= */}
            <div className="pt-4 sm:pt-6">
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-2 rounded-full bg-[#C46A42] px-7 py-3.5 text-[14px] sm:text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#a65633] hover:shadow-lg hover:shadow-[#C46A42]/20 hover:-translate-y-1"
              >
                Know More About Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}