"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactLink from "@/components/ContactLink";
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
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
      { name: "eOMS", href: "/services/e-office-management-security" },
    ],
  },
  {
    title: "Quick links",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/#about" },
      { name: "Why Choose Us", href: "/#why-choose-us" },
      { name: "Careers", href: "/career" },
      { name: "Contact", href: "/#contact" },
      { name: "Privacy Policy", href: "/privacy-policy" },
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
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll detection to show/hide "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
            backgroundImage:
              "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
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

              {/* CTA Button */}
              <motion.div variants={fadeUp} className="w-full sm:w-auto">
                <motion.div
                  whileHover={reduceMotion ? {} : { y: -4, scale: 1.03 }}
                  whileTap={reduceMotion ? {} : { scale: 0.97 }}
                  className="inline-block w-full sm:w-auto"
                >
                  <ContactLink
                    className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#C46A42] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_12px_28px_rgba(196,106,66,0.22)] transition-all duration-300 hover:bg-[#A95A37] sm:px-7 sm:py-4 sm:text-sm"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    <span className="relative z-10">Start a project</span>

                    <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/15 sm:h-8 sm:w-8">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </ContactLink>
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
          className="border-t border-neutral-200/80 py-8 lg:py-12"
        >
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* 1. BRAND + SOCIAL LINKS */}
            <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-4">
              <motion.div
                whileHover={reduceMotion ? {} : { y: -2 }}
                className="inline-flex w-fit max-w-full"
              >
                <Link
                  href="/"
                  aria-label="Digital Theory Labs Home"
                  className="inline-flex items-center"
                >
                  <Image
                    src="/digitalfactorytheorylab.png"
                    alt="Digital Theory Labs Logo"
                    width={310}
                    height={100}
                    priority
                    sizes="(max-width: 639px) 190px, (max-width: 1023px) 240px, 310px"
                     className="
                      h-auto
                      w-[230px]
                      max-w-full
                      object-contain
                      sm:w-[220px]
                      lg:w-[270px]
                      xl:w-[310px]
  "
                  />
                </Link>
              </motion.div>

              <p className="mt-4 max-w-sm text-justify text-xs leading-relaxed text-neutral-500 sm:text-sm">
                Digital Theory Labs delivers innovative web, software, and cybersecurity solutions that help businesses build, grow, and scale in the digital world.
              </p>

              {/* Social Media Links */}
              <div className="mt-6 flex items-center gap-3">
                <Link
                  href="https://www.facebook.com/profile.php?id=100067236799779" target="_blank" rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C46A42]/10 text-[#C46A42] transition-all hover:bg-[#C46A42] hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </Link>

                <Link
                  href="https://www.instagram.com/digital_factory2010/?hl=en" target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C46A42]/10 text-[#C46A42] transition-all hover:bg-[#C46A42] hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </Link>
                {/* <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C46A42]/10 text-[#C46A42] transition-all hover:bg-[#C46A42] hover:text-white"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </Link> */}
              </div>
            </motion.div>

            {/* 2. QUICK LINKS */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <FooterColumn column={COLUMNS[1]} />
            </motion.div>

            {/* 3. SERVICES */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              <FooterColumn column={COLUMNS[0]} />
            </motion.div>

            {/* 4. CONTACT INFO & ADDRESS */}
            <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-3">
              <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C46A42] sm:text-xs">
                Contact
              </h3>
              <div className="mb-4 h-[2px] w-8 bg-[#C46A42]" />

              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+919833624073"
                    className="group flex items-start gap-3 transition-all duration-300 hover:text-neutral-950"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#C46A42]" />
                    <span className="text-[13px] text-neutral-600 transition-colors group-hover:text-neutral-950">
                      97680 19387 / 98670 81041
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@digitaltheorylabs.com"
                    className="group flex items-start gap-3 transition-all duration-300 hover:text-neutral-950"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#C46A42]" />
                    <span className="break-all text-[13px] text-neutral-600 transition-colors group-hover:text-neutral-950">
                      info@digitaltheorylabs.com
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=912+72+Corp+Saki+Vihar+Road+Sakinaka+Junction+Andheri+Mumbai+400072"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 transition-all duration-300 hover:text-neutral-950"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C46A42]" />
                    <span className="text-[13px] leading-relaxed text-neutral-600 transition-colors group-hover:text-neutral-950">
                      912, 72 Corp, Saki Vihar Road, <br /> Sakinaka Junction, Andheri East, Mumbai – 400072, Maharashtra,  <br /> India
                    </span>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="relative flex flex-col gap-2 border-t border-neutral-200/80 py-4 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="absolute left-0 top-0 h-[1px] w-full origin-left bg-[#C46A42]/20"
          />
          <p>© {new Date().getFullYear()} Digital Theory Labs. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <span className="font-semibold text-[#C46A42]">Digital Theory Labs</span>
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          FLOATING BACK TO TOP BUTTON
      ====================================================== */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#C46A42] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#A95A37] hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}

      {/* =====================================================
          FLOATING WHATSAPP BUTTON (Global Position)
      ====================================================== */}
      <a
        href="https://wa.me/9768019387"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </footer>
  );
}

/* ============================================================
   FOOTER COLUMN COMPONENT
============================================================ */

function FooterColumn({ column }: { column: { title: string; links: { name: string; href: string }[] } }) {
  return (
    <div>
      <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C46A42] sm:text-xs">
        {column.title}
      </h3>
      <div className="mb-3 h-[2px] w-8 bg-[#C46A42]" />
      <ul className="space-y-2">
        {column.links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              onClick={(e) => {
                const isHomePage = window.location.pathname === "/";
                const isHomeSection =
                  link.href === "/" ||
                  link.href === "/#about" ||
                  link.href === "/#why-choose-us" ||
                  link.href === "/#contact";

                if (isHomePage && isHomeSection) {
                  e.preventDefault();

                  if (link.href === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    const sectionId = link.href.split("#")[1];
                    document.getElementById(sectionId)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });

                    window.history.replaceState(null, "", link.href);
                  }
                }
              }}
              className="group flex items-center gap-2 text-[13px] text-neutral-600 transition-all duration-300 hover:text-neutral-950"
            >
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}