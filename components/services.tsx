import { 
  TrendingUp, 
  MonitorSmartphone, 
  Settings2, 
  ShieldCheck, 
  TerminalSquare, 
  ScanSearch,
  Check
} from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Digital Marketing",
      description: "Scale your reach and drive conversions with data-driven marketing strategies.",
      icon: <TrendingUp className="h-7 w-7 text-[#C46A42]" />,
      features: ["SEO Optimization", "Paid Ads (PPC)", "Social Media Management"],
    },
    {
      title: "Website Development",
      description: "Fast, responsive, and visually stunning websites tailored to your brand.",
      icon: <MonitorSmartphone className="h-7 w-7 text-[#C46A42]" />,
      features: ["Corporate Sites", "E-commerce Platforms", "High-Converting Landing Pages"],
    },
    {
      title: "Software Development",
      description: "Robust and scalable digital solutions built for your specific business needs.",
      icon: <Settings2 className="h-7 w-7 text-[#C46A42]" />,
      features: ["Custom Web Apps", "SaaS Development", "Mobile Applications"],
    },
    {
      title: "Cyber Security Solutions",
      description: "Comprehensive security measures to protect your critical digital assets.",
      icon: <ShieldCheck className="h-7 w-7 text-[#ededed]" />,
      features: ["Network & Cloud Security", "Data Protection", "IT Infrastructure Audits"],
    },
    {
      title: "Penetration Testing",
      description: "Simulated cyber attacks to identify and patch exploitable vulnerabilities.",
      icon: <TerminalSquare className="h-7 w-7 text-[#C46A42]" />,
      features: ["Web App Pen-Testing", "Network Pen-Testing", "API Security Testing"],
    },
    {
      title: "VAPT Services",
      description: "End-to-end Vulnerability Assessment and Penetration Testing for compliance.",
      icon: <ScanSearch className="h-7 w-7 text-[#C46A42]" />,
      features: ["Automated Risk Scanning", "Manual Vulnerability Checks", "Compliance Reporting"],
    },
  ];

  return (
    <section id="services" className="w-full bg-[#FAF7F2] py-20 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <span className="mb-4 block text-[13px] font-bold uppercase tracking-wider text-[#C46A42]">
            Our Capabilities
          </span>
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-neutral-900 md:text-5xl lg:text-[52px]">
            End-to-End Digital & Security Solutions
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-neutral-600">
            From building scalable software to securing your IT infrastructure, we provide the complete technology stack for modern businesses.
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative flex flex-col rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-neutral-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(196,106,66,0.15)] hover:ring-[#C46A42]/30"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0EBE1] transition-colors duration-300 group-hover:bg-[#C46A42]/10">
                {service.icon}
              </div>

              {/* Text Content */}
              <h3 className="mb-3 text-2xl font-bold text-neutral-900">
                {service.title}
              </h3>
              <p className="mb-8 text-neutral-600 leading-relaxed">
                {service.description}
              </p>

              {/* Sub-services / Features List */}
              <div className="mt-auto space-y-3 pt-6 border-t border-neutral-100">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-neutral-700">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#C46A42]" />
                    <span className="text-[15px] font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}