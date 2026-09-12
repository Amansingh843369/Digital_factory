import Image from 'next/image';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  ScanSearch, 
  ArrowRight, 
  ShieldAlert 
} from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#FAF7F2] py-24 lg:py-10">
      
      {/* Background Decor (Subtle Theme Colors) */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-[#C46A42]/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-neutral-900/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          
          {/* ================= LEFT: VISUAL STORYTELLING ================= */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-neutral-200/50 shadow-2xl shadow-neutral-900/10">
              <Image
                src="/images/cyber-defense.jpg" // Replace with your actual cyber security image
                alt="Cyber Security Operations"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay Dark Gradient for Stats Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-900/20 to-transparent" />
              
              {/* Bottom Stats Bar inside Image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/5 border-t border-white/10">
                <div className="flex justify-between text-white">
                  <div>
                    <p className="text-2xl font-bold text-[#C46A42]">10+</p>
                    <p className="text-xs font-medium uppercase tracking-wider opacity-80 mt-1">Years Securing</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#C46A42]">500+</p>
                    <p className="text-xs font-medium uppercase tracking-wider opacity-80 mt-1">VAPT Audits</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#C46A42]">99.9%</p>
                    <p className="text-xs font-medium uppercase tracking-wider opacity-80 mt-1">Threats Blocked</p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>

          {/* ================= RIGHT: CONTENT & ANIMATIONS ================= */}
          <div className="space-y-8">
            
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-[#C46A42]">
              <span className="h-px w-8 bg-[#C46A42]" />
              About Digital Factory
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-neutral-900 md:text-5xl lg:text-[52px]">
              Fortifying Your Digital Assets Against <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-[#C46A42]">
                Modern Threats
              </span>
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-6 text-[17px] leading-relaxed text-neutral-600">
              <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards [animation-delay:200ms]">
                At Digital Factory, we don't just build digital solutions; we secure them. We empower enterprises with robust cyber defense mechanisms, proactive threat hunting, and comprehensive <strong className="text-neutral-900">VAPT (Vulnerability Assessment & Penetration Testing)</strong>.
              </p>
              <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards [animation-delay:400ms]">
                Our mission is to deliver zero-trust architectures and resilient infrastructures that ensure your critical data remains uncompromised, allowing you to focus on scalable business growth with absolute peace of mind.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: ScanSearch, title: "Proactive Threat Hunting", desc: "Identify and neutralize risks before they impact your business." },
                { icon: Lock, title: "Zero Trust Architecture", desc: "Never trust, always verify for maximum internal security." },
                { icon: Server, title: "Infrastructure Security", desc: "Hardened networks designed to withstand targeted attacks." },
                { icon: ShieldCheck, title: "Compliance & VAPT", desc: "End-to-end security audits meeting global standards." },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="group flex gap-4 rounded-2xl border border-neutral-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C46A42]/30 hover:shadow-[0_10px_20px_-10px_rgba(196,106,66,0.15)] animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards"
                  style={{ animationDelay: `${600 + idx * 100}ms` }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0EBE1] text-[#C46A42] transition-colors duration-300 group-hover:bg-[#C46A42] group-hover:text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="pt-6 animate-in fade-in duration-1000 fill-mode-backwards [animation-delay:1200ms]">
              <a 
                href="#services" 
                className="group inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-wider text-neutral-900 transition-colors hover:text-[#C46A42]"
              >
                Explore our security methodology
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}