import Image from 'next/image'
import { Cpu, TrendingUp, Zap, ShieldCheck, ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-32">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-blue-50/80 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-yellow-50/60 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          
          {/* ================= LEFT: VISUAL STORYTELLING ================= */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-slate-100 shadow-2xl shadow-blue-900/5">
              <Image
                src="/images/about-factory.png" // Smart manufacturing/tech team image
                alt="Digital Factory Operations"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 via-transparent to-transparent" />
              
              {/* Bottom Stats Bar inside Image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10 border-t border-white/20">
                <div className="flex justify-between text-white">
                  <div>
                    <p className="text-2xl font-bold text-[#ffd700]">10+</p>
                    <p className="text-xs opacity-80">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#ffd700]">500+</p>
                    <p className="text-xs opacity-80">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#ffd700]">98%</p>
                    <p className="text-xs opacity-80">Client Retention</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge: Industry 4.0 */}
            <div className="absolute -top-6 -right-6 rounded-2xl bg-[#0a192f] p-4 shadow-xl animate-bounce [animation-duration:4s]">
              <Cpu className="h-8 w-8 text-[#ffd700]" />
            </div>
          </div>

          {/* ================= RIGHT: CONTENT & ANIMATIONS ================= */}
          <div className="space-y-8">
            
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#ffd700]">
              <span className="h-px w-8 bg-[#ffd700]" />
              About Digital Factory
            </div>

            {/* Headline with Reveal Effect */}
            <h2 className="font-display text-4xl font-extrabold leading-tight text-[#0a192f] sm:text-5xl">
              Empowering Business Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a192f] to-blue-600">
                Smart Innovation
              </span>
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-6 text-lg leading-relaxed text-slate-600">
              <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards [animation-delay:200ms]">
                Digital Factory empowers businesses with smart manufacturing and digital transformation solutions. We help organizations enhance productivity, automate processes, and embrace <strong className="text-[#0a192f]">Industry 4.0 technologies</strong>.
              </p>
              <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards [animation-delay:400ms]">
                Our goal is to deliver innovative, efficient, and scalable digital solutions that drive operational excellence and sustainable business growth through data-powered intelligent environments.
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: Zap, title: "Smart Automation", desc: "Streamline workflows with AI-driven process optimization." },
                { icon: TrendingUp, title: "Scalable Growth", desc: "Infrastructure designed to expand as your business grows." },
                { icon: ShieldCheck, title: "Operational Excellence", desc: "Data-backed strategies for maximum efficiency and safety." },
                { icon: Cpu, title: "Industry 4.0 Ready", desc: "Future-proof tech stack for modern manufacturing." },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="group flex gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-all hover:border-[#ffd700]/50 hover:shadow-md animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards"
                  style={{ animationDelay: `${600 + idx * 100}ms` }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0a192f] group-hover:bg-[#ffd700] group-hover:text-white transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a192f]">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="pt-6 animate-in fade-in duration-1000 fill-mode-backwards [animation-delay:1200ms]">
              <a href="#contact" className="group inline-flex items-center gap-2 font-bold text-[#0a192f] hover:text-[#ffd700] transition-colors">
                Learn more about our process
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}