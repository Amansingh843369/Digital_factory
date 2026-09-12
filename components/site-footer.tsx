import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Company',
    links: ['About Us', 'Our Services', 'Why Choose Us', 'Careers'],
  },
  {
    title: 'Quick links',
    links: ['Home', 'About Us', 'Our Work', 'Contact'],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ================= CTA SECTION ================= */}
        <div className="grid gap-8 border-b border-neutral-800 py-16 md:grid-cols-2 md:items-center md:py-20 lg:py-24">
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-[52px]">
            Let&apos;s build something <span className="text-[#C46A42]">worth sharing.</span>
          </h2>
          <div className="md:justify-self-end">
            <a
              href="mailto:aman@singh.com"
              className="group inline-flex items-center gap-2 rounded-full bg-[#C46A42] px-8 py-4 text-[15px] font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#A95A37] hover:shadow-[0_10px_20px_-10px_rgba(196,106,66,0.5)] hover:-translate-y-1"
            >
              Start a project
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* ================= LINKS & INFO SECTION ================= */}
        <div className="grid gap-12 py-16 md:grid-cols-4 lg:py-20">
          
          {/* Logo & Contact Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <a href="/" className="inline-block transition-transform hover:opacity-90">
                <Image
                  src="/digital-factory.jpeg" // Make sure this path is correct
                  alt="Digital Factory Logo"
                  width={150}
                  height={50}
                  className="h-auto w-[150px] object-contain"
                />
              </a>
            </div>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-neutral-400">
              A premium web design, development & cyber security agency helping brands ship exceptional digital products with round-the-clock support.
            </p>
            
            <ul className="mt-8 space-y-4 text-[15px] text-neutral-300">
              <li className="flex items-center gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 transition-colors group-hover:bg-[#C46A42]/20">
                  <Phone className="h-4 w-4 text-[#C46A42]" />
                </div>
                <a href="tel:+918433694423" className="transition-colors hover:text-[#C46A42]">
                  +91 8433694423
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 transition-colors group-hover:bg-[#C46A42]/20">
                  <Mail className="h-4 w-4 text-[#C46A42]" />
                </div>
                <a href="mailto:aman@singh.com" className="transition-colors hover:text-[#C46A42]">
                  aman@singh.com
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 transition-colors group-hover:bg-[#C46A42]/20">
                  <MapPin className="h-4 w-4 text-[#C46A42]" />
                </div>
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>

          {/* Nav Columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-6 text-[13px] font-bold uppercase tracking-wider text-[#C46A42]">
                {col.title}
              </h3>
              <ul className="space-y-4">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="group inline-flex items-center text-[15px] text-neutral-400 transition-colors hover:text-white"
                    >
                      <span className="relative overflow-hidden">
                        {l}
                        {/* Custom animated underline effect */}
                        <span className="absolute bottom-0 left-0 h-[1px] w-full origin-right scale-x-0 bg-[#C46A42] transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ================= COPYRIGHT BAR ================= */}
        <div className="flex flex-col gap-4 border-t border-neutral-800 py-8 text-[14px] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Digital Factory. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-[#C46A42] font-semibold">Digital Factory</span>
          </p>
        </div>
        
      </div>
    </footer>
  );
}