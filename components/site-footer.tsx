"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

// =========================================================
// COLUMNS DATA
// =========================================================
const COLUMNS = [
  {
    title: "Services",
    links: [
      { name: "Software Development", href: "/services/software-development" },
      { name: "Website Development", href: "/services/website-development" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Cyber Security", href: "/services/cyber-security" },
      { name: "Penetration Testing", href: "/services/penetration-testing" },
      { name: "eOMS", href: "/services/eoms" },
    ],
  },
  {
    title: "Quick links",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/#about" },
      { name: "Why Choose Us", href: "/#why-choose-us" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/#contact" },
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function SiteFooter() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden bg-[#faf9f7] text-neutral-950">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top orange glow */}
        <motion.div
          animate={reduceMotion ? {} : { x: [0, 40, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 -top-32 h-[350px] w-[350px] rounded-full bg-[#C46A42]/10 blur-[100px]"
        />

        {/* Right glow */}
        <motion.div
          animate={reduceMotion ? {} : { x: [0, -30, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-[20%] h-[400px] w-[400px] rounded-full bg-[#C46A42]/8 blur-[120px]"
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            CTA SECTION
        ====================================================== */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative py-6 sm:py-8 lg:py-10"
        >
          {/* Main CTA Card */}
          <div className="relative overflow-hidden rounded-[20px] border border-[#C46A42]/25 bg-white px-5 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)] sm:rounded-[28px] sm:px-8 sm:py-9 lg:px-12">
            <motion.div
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -right-28 -top-28 hidden h-[320px] w-[320px] rounded-full border border-[#C46A42]/20 sm:block"
            />
            <motion.div
              animate={reduceMotion ? {} : { rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -right-10 -top-10 hidden h-[220px] w-[220px] rounded-full border border-[#C46A42]/10 sm:block"
            />
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[28%] top-10 h-2 w-2 rounded-full bg-[#C46A42] shadow-[0_0_20px_rgba(196,106,66,0.7)]"
            />

            <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              {/* Heading */}
              <motion.div variants={fadeUp} className="max-w-3xl">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#C46A42]/30 bg-[#C46A42]/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C46A42] sm:text-xs">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C46A42]" />
                  Let&apos;s work together
                </span>
                <h2 className="mt-1 font-serif text-2xl leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-[48px]">
                  Your Business Deserves a Secure and Powerful{" "}
                  <span className="text-[#C46A42]">Digital Future.</span>
                </h2>
              </motion.div>

              {/* CTA Button - FIXED HYDRATION ERROR */}
              <motion.div variants={fadeUp} className="w-full sm:w-auto">
                <motion.div
                  whileHover={reduceMotion ? {} : { y: -4, scale: 1.03 }}
                  whileTap={reduceMotion ? {} : { scale: 0.97 }}
                  className="inline-block w-full sm:w-auto"
                >
                  <Link 
                    href="/#contact"
                    className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#C46A42] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_12px_28px_rgba(196,106,66,0.22)] transition-all duration-300 hover:bg-[#A95A37] sm:text-sm sm:px-7 sm:py-4"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative z-10">Start a project</span>
                    <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/15 sm:h-8 sm:w-8">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* =====================================================
            FOOTER CONTENT
        ====================================================== */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="border-t border-neutral-200/80 py-8 lg:py-10"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
            
            {/* BRAND + CONTACT */}
            <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-5">
              {/* Logo Link - FIXED HYDRATION ERROR */}
              <motion.div whileHover={reduceMotion ? {} : { y: -2 }} className="inline-block">
                <Link href="/" className="group inline-block">
                  <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white px-4 py-2 shadow-sm transition-all duration-500 group-hover:border-[#C46A42]/30 group-hover:shadow-[0_10px_30px_rgba(196,106,66,0.1)]">
                    <Image
                      src="/digital-factory.jpeg"
                      alt="Digital Factory Logo"
                      width={140}
                      height={40}
                      priority
                      className="h-auto w-[110px] object-contain sm:w-[130px]"
                    />
                    <div className="absolute -right-5 -top-5 h-14 w-14 rounded-full bg-[#C46A42]/10 blur-xl transition-all duration-500 group-hover:bg-[#C46A42]/20" />
                  </div>
                </Link>
              </motion.div>
              
              <p className="mt-4 max-w-md text-xs leading-relaxed text-neutral-500 sm:text-sm">
                A premium web design, development & cyber security company helping brands ship exceptional digital products with round-the-clock support.
              </p>
              
              <motion.div variants={stagger} className="mt-5 space-y-2">
                <motion.a variants={fadeUp} href="tel:+919833624073" className="group flex items-center justify-between gap-3 rounded-lg py-1.5 transition-all duration-300 hover:pl-1.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C46A42]/10 text-[#C46A42] transition-all duration-300 group-hover:bg-[#C46A42] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(196,106,66,0.3)]">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-xs font-medium text-neutral-600 transition-colors group-hover:text-neutral-950 sm:text-sm">9833-624-073</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 -translate-x-1.5 text-[#C46A42] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </motion.a>

                <motion.a variants={fadeUp} href="mailto:info@digital-factory.in" className="group flex items-center justify-between gap-3 rounded-lg py-1.5 transition-all duration-300 hover:pl-1.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C46A42]/10 text-[#C46A42] transition-all duration-300 group-hover:bg-[#C46A42] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(196,106,66,0.3)]">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    <span className="break-all text-xs font-medium text-neutral-600 transition-colors group-hover:text-neutral-950 sm:text-sm">info@digital-factory.in</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 -translate-x-1.5 text-[#C46A42] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </motion.a>

                <motion.a variants={fadeUp} href="https://www.google.com/maps/search/?api=1&query=912+72+Corp+Saki+Vihar+Road+Sakinaka+Junction+Andheri+Mumbai+400072" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 rounded-lg py-1.5 transition-all duration-300 hover:pl-1.5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C46A42]/10 text-[#C46A42] transition-all duration-300 group-hover:bg-[#C46A42] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(196,106,66,0.3)]">
                      <MapPin className="h-3.5 w-3.5" />
                    </span>
                    <span className="max-w-[280px] text-xs leading-snug text-neutral-600 transition-colors group-hover:text-neutral-950 sm:text-sm">
                      912, 72 Corp, Saki Vihar Road,<br />Sakinaka Junction, Andheri, Mumbai 400072
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 -translate-x-1.5 text-[#C46A42] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* SERVICES */}
            <motion.div variants={fadeUp} className="lg:col-span-2 lg:col-start-6">
              <FooterColumn column={COLUMNS[0]} />
            </motion.div>

            {/* QUICK LINKS */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <FooterColumn column={COLUMNS[1]} />
            </motion.div>

            {/* NEWSLETTER SIGNUP CARD */}
            <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-3">
              <motion.div whileHover={reduceMotion ? {} : { y: -4 }} className="relative overflow-hidden rounded-[20px] border border-[#C46A42]/20 bg-white p-5 shadow-sm transition-all duration-500 hover:border-[#C46A42]/40 hover:shadow-[0_20px_50px_rgba(196,106,66,0.08)]">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#C46A42]/10 blur-[40px]" />
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C46A42]/10 text-[#C46A42]">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C46A42]">Stay Updated</span>
                </div>
                <h4 className="font-serif text-lg font-medium leading-tight text-neutral-900">Subscribe to our <span className="text-[#C46A42]">Newsletter</span></h4>
                <p className="mt-2 text-[11px] leading-relaxed text-neutral-500">Get the latest insights on cyber security, web development, and digital trends.</p>
                <form className="relative mt-5 flex flex-col gap-2.5" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter your email" className="w-full rounded-xl border border-neutral-200 bg-[#faf9f7] px-4 py-2.5 text-xs text-neutral-900 placeholder:text-neutral-400 transition-all focus:border-[#C46A42] focus:outline-none focus:ring-1 focus:ring-[#C46A42]/50" required />
                  <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#C46A42] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#A95A37]">
                    Subscribe
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* COPYRIGHT */}
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="relative flex flex-col gap-2 border-t border-neutral-200/80 py-4 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease }} className="absolute left-0 top-0 h-[1px] w-full origin-left bg-[#C46A42]/20" />
          <p>© {new Date().getFullYear()} Digital Factory. All rights reserved.</p>
          <p className="flex items-center gap-1.5">Built with <span className="font-semibold text-[#C46A42]">Digital Factory</span></p>
        </motion.div>
      </div>
    </footer>
  );
}

/* ============================================================
   FOOTER COLUMN COMPONENT
============================================================ */

function FooterColumn({ column }: { column: { title: string; links: { name: string, href: string }[] } }) {
  return (
    <div>
      <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C46A42] sm:text-xs">
        {column.title}
      </h3>
      <div className="mb-3 h-[2px] w-8 bg-[#C46A42]" />
      <ul className="space-y-0.5">
        {column.links.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href} 
              className="group flex items-center justify-between gap-2 rounded-lg py-1.5 text-xs text-neutral-600 transition-all duration-300 hover:pl-1.5 hover:text-neutral-950 sm:text-sm"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1.5 text-[#C46A42] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}