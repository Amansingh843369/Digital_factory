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
    title: "Proven Track Record",
    icon: Trophy,
    description: "500+ successful audits, custom software deployments, and digital campaigns. We don't just promise results — we deliver measurable impact.",
    whatYouGet: "A dedicated team backed by verifiable numbers and 99.9% reliability.",
    image: "/images/why-track-record.jpg"
  },
  {
    id: 1,
    title: "Client-Centered Focus",
    icon: Users,
    description: "We work as an extension of your team. Complete transparency, zero tech jargon, and iterative feedback ensure long-term trust.",
    whatYouGet: "Direct access to domain experts and dedicated project managers.",
    image: "/images/why-client-focus.jpg"
  },
  {
    id: 2,
    title: "End-to-End Partner",
    icon: Layers,
    description: "From digital marketing and web development to custom enterprise apps and cybersecurity, we are your one-stop digital transformation hub.",
    whatYouGet: "Seamless tech integration with zero multi-vendor management friction.",
    image: "/images/why-end-to-end.jpg"
  },
  {
    id: 3,
    title: "Zero-Trust Security",
    icon: ShieldCheck,
    description: "Security is engineered into every line of code. Protected infrastructures designed to safeguard your critical data against modern threats.",
    whatYouGet: "Enterprise-grade data protection meeting strict global VAPT standards.",
    image: "/images/why-cyber-security.jpg"
  }
];

export function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll sync logic
  useEffect(() => {
    const handleScroll = () => {
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
    <section ref={containerRef} className="relative bg-[#FAF7F2] py-24 min-h-[220vh]">
      
      {/* Sticky Container */}
      <div className="sticky top-20 mx-auto max-w-7xl px-6 lg:px-8 pt-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ================= LEFT SIDE: HEADINGS & TABS ================= */}
          <div className="lg:col-span-4 space-y-8">
            
            <div className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-neutral-800">
              <span className="h-2 w-2 rounded-full bg-neutral-900" />
              Why Choose Us
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl leading-[1.15] text-neutral-900 tracking-tight">
              See The Difference When You <br />
              <span className="italic font-normal">Choose Us.</span>
            </h2>

            {/* Vertical Tab Buttons */}
            <div className="space-y-3 pt-4">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                const isActive = activeTab === idx;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-left font-semibold text-[15px] transition-all duration-300 ${
                      isActive 
                        ? "bg-[#EFECE6] text-neutral-900 shadow-sm border border-neutral-300/40 translate-x-2" 
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-[#EFECE6]/50"
                    }`}
                  >
                    {/* Safe Icon Render */}
                    {IconComponent && (
                      <IconComponent className={`h-5 w-5 ${isActive ? "text-[#C46A42]" : "text-neutral-500"}`} />
                    )}
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* ================= RIGHT SIDE: DYNAMIC FRAMER CARD ================= */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 border border-neutral-200/80 shadow-xl shadow-neutral-900/5">
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeFeature.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
                >
                  
                  {/* Card Image */}
                  <div className="md:col-span-6 relative min-h-[320px] sm:min-h-[400px] rounded-2xl overflow-hidden border border-neutral-100">
                    <Image
                      src={activeFeature.image}
                      alt={activeFeature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Card Text & Callout */}
                  <div className="md:col-span-6 flex flex-col justify-between py-2 space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-serif text-3xl sm:text-4xl text-neutral-900 leading-tight">
                        {activeFeature.title}
                      </h3>
                      <p className="text-neutral-600 text-[15px] leading-relaxed">
                        {activeFeature.description}
                      </p>
                    </div>

                    {/* What You Get Box */}
                    <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-neutral-200/60">
                      <span className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                        What you get
                      </span>
                      <p className="text-sm font-medium text-neutral-800 leading-relaxed">
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