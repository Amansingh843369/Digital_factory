"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, 
  Users, 
  Layers, 
  ShieldCheck 
} from "lucide-react";

// Data array with verified icons
const features = [
  {
    id: 0,
    title: "Innovation First",
    icon: Trophy,
    description: "500+ successful audits, custom software deployments, and digital campaigns. We don't just promise results — we deliver measurable impact.",
    whatYouGet: "A dedicated team backed by verifiable numbers and 99.9% reliability.",
    image: "/f1.jpg"
  },
  {
    id: 1,
    title: "Custom-Built Solutions",
    icon: Users,
    description: "We work as an extension of your team. Complete transparency, zero tech jargon, and iterative feedback ensure long-term trust.",
    whatYouGet: "Direct access to domain experts and dedicated project managers.",
    image: "/f3.jpg"
  },
  {
    id: 2,
    title: "Secure & Reliable",
    icon: Layers,
    description: "From digital marketing and web development to custom enterprise apps and cybersecurity, we are your one-stop digital transformation hub.",
    whatYouGet: "Seamless tech integration with zero multi-vendor management friction.",
    image: "/f4.jpg"
  },
  {
    id: 3,
    title: "Affordable Packages",
    icon: ShieldCheck,
    description: "Security is engineered into every line of code. Protected infrastructures designed to safeguard your critical data against modern threats.",
    whatYouGet: "Enterprise-grade data protection meeting strict global VAPT standards.",
    image: "/fake.avif"
  }
];

export function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll sync logic - Only active on Desktop (lg screens and above)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) return; 
      
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top <= 100 && top > -height + windowHeight) {
        const scrolledRatio = Math.abs(top - 100) / (height - windowHeight);
        const nextIndex = Math.min(
          features.length - 1,
          Math.floor(scrolledRatio * features.length)
        );
        setActiveTab(nextIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeFeature = features[activeTab];

  return (
    <section 
      ref={containerRef} 
      // Desktop par 220vh hogi for scroll sync, mobile par content ke hisaab se normal height
      className="relative bg-[#FAF7F2] py-16 lg:py-10 lg:min-h-[220vh]"
    >
      
      {/* Sticky Container (Sticky only on Desktop) */}
      <div className="lg:sticky lg:top-20 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 lg:pt-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center">
          
          {/* ================= LEFT SIDE: HEADINGS & TABS ================= */}
          <div className="lg:col-span-4 space-y-6 lg:space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-neutral-800">
                <span className="h-2 w-2 rounded-full bg-neutral-900" />
                Why Choose Us
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-4xl  text-neutral-900 tracking-tight">
                See The Difference When You <br className="hidden sm:block" />
                <span className="italic font-normal">Choose Us.</span>
              </h2>
            </div>

            {/* Tabs - Horizontal on Mobile, Vertical on Desktop */}
            <div className="flex flex-row lg:flex-col gap-3 lg:gap-0 lg:space-y-3 pt-2 lg:pt-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                const isActive = activeTab === idx;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-shrink-0 snap-start w-auto lg:w-full flex items-center gap-3 lg:gap-4 px-5 py-3.5 lg:px-6 lg:py-4 rounded-2xl text-left font-semibold text-[14px] lg:text-[15px] transition-all duration-300 border ${
                      isActive 
                        ? "bg-[#EFECE6] text-neutral-900 shadow-sm border-neutral-300/40 lg:translate-x-2" 
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-[#EFECE6]/50 border-transparent"
                    }`}
                  >
                    {IconComponent && (
                      <IconComponent className={`h-5 w-5 ${isActive ? "text-[#C46A42]" : "text-neutral-500"}`} />
                    )}
                    <span className="whitespace-nowrap lg:whitespace-normal">{item.title}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* ================= RIGHT SIDE: DYNAMIC FRAMER CARD ================= */}
          <div className="lg:col-span-8 w-full">
            <div className="bg-white rounded-[2rem] lg:rounded-[2.5rem] p-5 sm:p-6 lg:p-8 border border-neutral-200/80 shadow-xl shadow-neutral-900/5">
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeFeature.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch"
                >
                  
                  {/* Card Image */}
                  <div className="md:col-span-5 relative min-h-[260px] sm:min-h-[320px] md:min-h-full rounded-2xl overflow-hidden border border-neutral-100">
                    <Image
                      src={activeFeature.image}
                      alt={activeFeature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Card Text & Callout */}
                  <div className="md:col-span-7 flex flex-col justify-center py-2 lg:py-4 space-y-5 lg:space-y-6">
                    <div className="space-y-3 lg:space-y-4">
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 leading-tight">
                        {activeFeature.title}
                      </h3>
                      <p className="text-neutral-600 text-[14px] sm:text-[15px] leading-relaxed">
                        {activeFeature.description}
                      </p>
                    </div>

                    {/* What You Get Box */}
                    <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-neutral-200/60 mt-auto">
                      <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                        What you get
                      </span>
                      <p className="text-[13px] sm:text-sm font-medium text-neutral-800 leading-relaxed">
                        {activeFeature.whatYouGet}
                      </p>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}