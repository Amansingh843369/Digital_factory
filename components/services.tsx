"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import router for navigation
import { 
  TrendingUp, 
  MonitorSmartphone, 
  Settings2, 
  ShieldCheck, 
  TerminalSquare, 
  ScanSearch,
  ArrowUpRight,
  Sparkles,
  Check
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Digital Marketing",
    tagline: "Growth & Conversions",
    description: "Scale your reach and drive measurable conversions with data-backed marketing campaigns and precise audience targeting.",
    icon: TrendingUp,
   features: [
  "Organic Search Growth",
  "Performance Ad Campaigns",
  "Social Media Marketing",
  "Conversion Rate Optimization",
  "Qualified Lead Generation",
],

tags: [
  "SEO",
  "PPC",
  "Social Media",
  "Lead Gen",
  "Brand Awareness",
  "Conversion Optimization",
  "Analytics & Strategy",
],
    link: "/services/digital-marketing" 
  },
  {
    id: "02",
    title: "Website Development",
    tagline: "Web Design & Performance",
    description: "Fast, responsive, and visually stunning websites tailored to represent your brand identity and convert visitors into clients.",
    icon: MonitorSmartphone,
   features: [
  "Premium Business Websites",
  "High-Converting E-Commerce",
  "Conversion-Focused Landing Pages",
  "Responsive Web Experiences",
  "Custom UI & Interactions",
],

tags: [
  "Next.js",
  "React",
  "Modern UI/UX",
  "Node.js ",
  "Conversion Optimized",
],
    link: "/services/web-development"
  },
  {
    id: "03",
    title: "Software Development",
    tagline: "Custom Architecture",
    description: "Robust, secure, and scalable custom software solutions engineered to automate operations and solve complex business problems.",
    icon: Settings2,
    features: [
  "High-Performance Web Apps",
  "Scalable SaaS Platforms",
  "Cross-Platform Mobile Apps",
  "Custom API Development",
  "Enterprise Software Solutions",
],
  tags: [
  "Custom Solutions",
  "Full Stack",
  "API Integration",
  "High Performance"
],
    link: "/services/software-development"
  },
  {
    id: "04",
    title: "Cyber Security Solutions",
    tagline: "Infrastructure Protection",
    description: "Comprehensive enterprise security measures and protocols designed to guard your critical data and digital assets against threats.",
    icon: ShieldCheck,
    features: ["OWASP Top 10", "Data Protection", "IT Infrastructure Audits","Cyber Vadis",  "Continuous Threat Monitoring",],
    tags: ["NIST", "SIEM", "DORA", "CIS Controls", "VAPT"],
    link: "/services/cyber-security"
  },
  {
    id: "05",
    title: "Penetration Testing",
    tagline: "Offensive Security",
    description: "Simulated real-world cyber attacks to proactively find and patch security vulnerabilities before adversaries can exploit them.",
    icon: TerminalSquare,
    features: ["Web App Testing", "Network Testing", "API Security Testing" ,"Cloud Testing","Mobile Testing"],
    tags: ["Red Teaming", "Exploit Analysis", "OWASP Top 10", "Reporting"],
    link: "/services/penetration-testing"
  },
{
  id: "06",
  title: "e-Office Management Security",
  tagline: "Secure Digital Office Solutions",
  description:
    "Secure and efficient e-office management solutions that streamline digital workflows, protect sensitive data, and improve organizational productivity.",
  icon: ShieldCheck,
  features: [
    "Digital Document Management",
    "Access & Security Controls",
    "Workflow & Process Automation",
  ],
  tags: [
    "e-Office",
    "Data Security",
    "Access Control",
    "Digital Workflow",
  ],
  link: "/services/e-office-management-security"
}
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const router = useRouter();

  // Handle navigation click
  const handleNavigate = (link: string) => {
    router.push(link);
  };

  return (
    <section id="services" className="relative overflow-hidden bg-[#FAF7F2] py-20 sm:py-28 lg:py-10 text-neutral-900">
      
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[600px] w-[600px] rounded-full bg-[#C46A42]/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#C46A42]/[0.03] blur-[100px]" />

      <div className="mx-auto w-full max-w-[85rem] px-5 sm:px-8 lg:px-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-300/80 pb-12">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C46A42]/30 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C46A42] backdrop-blur-md shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Our Capabilities</span>
            </div>

            <h2 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.9rem]">
              Engineered for <span className="italic text-[#C46A42]">Scale</span> <br className="hidden sm:block" /> 
              & Secure by Design.
            </h2>
          </div>
          
          <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-sm md:text-right">
            Hover over a service to explore our specialized solutions and technology stack.
          </p>
        </div>

        {/* ================= FRAMER INTERACTIVE ROW LIST ================= */}
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
                <div className="px-4 sm:px-6 py-8 sm:py-10 flex items-center justify-between gap-4">
                  
                  {/* Left Side: Number + Title + Tag */}
                  <div className="flex items-center gap-6 sm:gap-12 md:gap-20">
                    <span className={`font-mono text-sm sm:text-base font-bold transition-colors duration-300 ${
                      isActive ? "text-[#C46A42]" : "text-neutral-400 group-hover:text-neutral-700"
                    }`}>
                      {service.id}
                    </span>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                      <h3 className={`text-2xl sm:text-3xl md:text-4xl font-serif tracking-tight transition-colors duration-300 ${
                        isActive ? "text-[#C46A42]" : "text-neutral-900 group-hover:text-[#C46A42]"
                      }`}>
                        {service.title}
                      </h3>

                      {/* Tagline Badge */}
                      <span className={`hidden lg:inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors duration-300 ${
                        isActive ? "border-[#C46A42]/30 bg-[#C46A42]/5 text-[#C46A42]" : "border-neutral-200 bg-white/50 text-neutral-400"
                      }`}>
                        {service.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Icons & Navigation Button */}
                  <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    
                    {/* Service Type Icon (Visual Only) */}
                    <div className={`hidden sm:flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 ease-out ${
                      isActive 
                        ? "bg-[#C46A42] text-white rotate-0 scale-100 shadow-lg shadow-[#C46A42]/20" 
                        : "bg-transparent text-neutral-400 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* MODIFIED: CLICKABLE DIAGONAL ARROW BUTTON */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents row expand/collapse when clicking this button
                        handleNavigate(service.link);
                      }}
                      className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border transition-all duration-500 ease-out ${
                        isActive 
                          ? "border-[#C46A42] bg-[#C46A42] text-white rotate-45 hover:bg-[#a85532]" // Added hover effect for button
                          : "border-neutral-300 text-neutral-500 group-hover:border-neutral-900 group-hover:text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white"
                      }`}
                      aria-label={`Go to ${service.title}`}
                    >
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300" />
                    </button>

                  </div>
                </div>

                {/* Expandable Content Area */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr] opacity-100 pb-10" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* Aligned with Title by matching the left gap */}
                    <div className="px-4 sm:px-6 ml-0 sm:ml-[4.5rem] md:ml-[7.5rem] grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
                      
                      {/* Description Column (Left) */}
                      <div className="md:col-span-6 lg:col-span-5">
                        <p className="text-lg sm:text-xl font-medium leading-relaxed text-neutral-600">
                          {service.description}
                        </p>
                      </div>

                      {/* Right Side: Tags & Features */}
                      <div className="md:col-span-6 lg:col-span-7 flex flex-col gap-5 items-start">
                        
                        {/* Tags Section (Small Pills) */}
                        {service.tags && (
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag, idx) => (
                              <span 
                                key={idx} 
                                className="inline-flex items-center rounded-full border border-neutral-200/60 bg-white/40 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-neutral-600 shadow-sm transition-all hover:border-[#C46A42]/30 hover:bg-white"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Features Column (Larger Glassmorphic Pills) */}
                        <div className="flex flex-wrap gap-3 items-start">
                          {service.features.map((feature, idx) => (
                            <div 
                              key={idx} 
                              className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200/80 bg-white/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-neutral-700 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#C46A42]/40 hover:bg-white"
                            >
                              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C46A42]/10">
                                <Check className="h-2.5 w-2.5 text-[#C46A42] stroke-[3]" />
                              </div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

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