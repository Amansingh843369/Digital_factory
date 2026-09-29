"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  TrendingUp, 
  MonitorSmartphone, 
  Settings2, 
  ShieldCheck, 
  TerminalSquare, 
  ArrowUpRight,
  Sparkles,
 
} from "lucide-react";

const services = [
    {
    id: "01",
    title: "Software Development",
    tag: "Custom Architecture",
    description: "At Digital Factory, we specialize in designing custom software applications and scalable platforms tailored to your specific business requirements. Whether you need enterprise-grade solutions, SaaS products, or mobile applications, our team ensures your software is secure, user-friendly, and future-ready.",
    icon: Settings2,
  
 
    link: "/services/software-development"
  },
  
  {
    id: "02",
    title: "Website Development",

    description: "Your website is often the first impression of your business. At Digital Factory, we design and develop websites that are not only visually appealing but also optimized for performance, usability, and conversions.",
    icon: MonitorSmartphone,
 
    link: "/services/website-development"
  },
  {
    id: "03",
    title: "Digital Marketing",
    
    description: "We design result-driven digital marketing strategies that help businesses grow their online presence, reach the right audience, and achieve measurable success. From SEO to social media campaigns and paid advertising, our team blends creativity with data-driven insights to maximize ROI.",
    icon: TrendingUp,
   
    link: "/services/digital-marketing" 
  },
  {
    id: "04",
    title: "Cyber Security Solutions",
   
    description: "We provide comprehensive cybersecurity solutions that ensure your digital assets remain secure, compliant, and resilient. Our team combines advanced security tools, proven methodologies, and industry expertise to protect your business from cyber threats while enabling growth and digital innovation.",
    icon: ShieldCheck,
 
    link: "/services/cyber-security"
  },
  {
    id: "05",
    title: "Penetration Testing",
    
    description: "Simulated real-world cyber attacks to proactively find and patch security vulnerabilities before adversaries can exploit them.",
    icon: TerminalSquare,
  
    link: "/services/penetration-testing"
  },
  {
    id: "06",
    title: "e-Office Management Security",
   
    description:
      "Secure and efficient e-office management solutions that streamline digital workflows, protect sensitive data, and improve organizational productivity.",
    icon: ShieldCheck,
   
    link: "/services/e-office-management-security"
  }
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const router = useRouter();

  const handleNavigate = (link: string) => {
    router.push(link);
  };

  return (
    <section id="service" className="relative overflow-hidden bg-[#FAF7F2] py-16 sm:py-24 lg:py-1 text-neutral-900">
      
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full bg-[#C46A42]/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full bg-[#C46A42]/[0.03] blur-[100px]" />

      <div className="mx-auto w-full max-w-[85rem] px-4 sm:px-8 lg:px-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-12 sm:mb-16 md:mb-2 flex flex-col items-center justify-center text-center gap-6 md:gap-8 border-b border-neutral-300/80 pb-8 sm:pb-12">
          
          <div className="mb-2 sm:mb-4 inline-flex items-center gap-2 rounded-full border border-[#C46A42]/30 bg-white/60 px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#C46A42] backdrop-blur-md shadow-sm">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            <span>Our Capabilities</span>
          </div>

          <h2 className=" text-1.9xl text-jutify sm:text-5xl lg:text-[2rem] font-normal leading-[1.1] sm:leading-[1.1] tracking-tight max-w-4xl mx-auto">
           We build smart, scalable software solutions designed to simplify operations and accelerate business growth.
          </h2>
          

        </div>

        {/* ================= INTERACTIVE ROW LIST ================= */}
        <div className="flex flex-col">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`group relative border-b border-neutral-300/80 transition-colors duration-500 cursor-pointer ${
                  isActive ? "bg-white/40" : "hover:bg-white/20"
                }`}
              >
                {/* Active Left Border Indicator */}
                <div className={`absolute left-0 top-0 h-full w-1 bg-[#C46A42] transition-transform duration-500 ease-out origin-top ${
                  isActive ? "scale-y-100" : "scale-y-0"
                }`} />

                {/* Main Row Header */}
                <div className="px-3 sm:px-6 py-6 sm:py-8 lg:py-10 flex items-center justify-between gap-3 sm:gap-4">
                  
                  {/* Left Side: Number + Title + Tag */}
                  <div className="flex items-center gap-3 sm:gap-8 md:gap-14 lg:gap-20 min-w-0">
                    <span className={`font-mono text-xs sm:text-base font-bold shrink-0 transition-colors duration-300 ${
                      isActive ? "text-[#C46A42]" : "text-neutral-400 group-hover:text-neutral-700"
                    }`}>
                      {service.id}
                    </span>

                    <div className="flex flex-col lg:flex-row lg:items-center gap-1 sm:gap-3 lg:gap-6 min-w-0">
                      <h3 className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif tracking-tight transition-colors duration-300 break-words ${
                        isActive ? "text-[#C46A42]" : "text-neutral-900 group-hover:text-[#C46A42]"
                      }`}>
                        {service.title}
                        <ArrowUpRight className="inline-block md:hidden h-4 w-4 ml-2 opacity-50"/>
                      </h3>

                     
                    </div>
                  </div>

                  
                  <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                    
                    {/* Service Type Icon */}
                    <div className={`hidden md:flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full transition-all duration-500 ease-out ${
                      isActive 
                        ? "bg-[#C46A42] text-white rotate-0 scale-100 shadow-lg shadow-[#C46A42]/20" 
                        : "bg-transparent text-neutral-400 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* CLICKABLE DIAGONAL ARROW BUTTON */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate(service.link);
                      }}
                      className={`flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full border transition-all duration-500 ease-out shrink-0 ${
                        isActive 
                          ? "border-[#C46A42] bg-[#C46A42] text-white rotate-45 hover:bg-[#a85532]" 
                          : "border-neutral-300 text-neutral-500 group-hover:border-neutral-900 group-hover:text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white"
                      }`}
                      aria-label={`Go to ${service.title}`}
                    >
                      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300" />
                    </button>

                  </div>
                </div>

                {/* Expandable Content Area */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] opacity-100 pb-8 sm:pb-10" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-3 sm:px-6 ml-0 sm:ml-12 md:ml-10 lg:ml-[6.1rem] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-0">
                      
                      {/* Description Column (Left)*/}
                      <div className="lg:col-span-11">
                        <p className="text-base sm:text-lg lg:text-xl text-justify font-medium leading-relaxed text-neutral-600">
                          {service.description}
                        </p>
                      </div>

               

                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}