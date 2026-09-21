"use client";

import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const COLUMNS = [
  {
    title: "Services",
    links: [
      "Software Development",
      "Website Development",
      "Digital Marketing",
      "Cyber Security",
      "Penetration Testing",
      "eOMS",
    ],
  },
  {
    title: "Quick links",
    links: [
      "Home",
      "About Us",
      "Why Choose Us",
      "Careers",
      "Contact",
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
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
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, 40, 0],
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 -top-32 h-[350px] w-[350px] rounded-full bg-[#C46A42]/10 blur-[100px]"
        />

        {/* Right glow */}
        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.15, 1],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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
          viewport={{
            once: true,
            amount: 0.2,
          }}
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
              animate={
                reduceMotion ? {} : { y: [0, -10, 0], opacity: [0.4, 1, 0.4] }
              }
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
              <motion.div variants={fadeUp}>
                <motion.a
                  href="mailto:info@digital-factory.in"
                  whileHover={reduceMotion ? {} : { y: -4, scale: 1.03 }}
                  whileTap={reduceMotion ? {} : { scale: 0.97 }}
                  className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#C46A42] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_12px_28px_rgba(196,106,66,0.22)] transition-all duration-300 hover:bg-[#A95A37] sm:w-auto sm:px-7 sm:py-4"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative z-10">Start a project</span>
                  <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/15 sm:h-8 sm:w-8">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </motion.a>
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
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={stagger}
          className="border-t border-neutral-200/80 py-8 lg:py-10"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
            {/* =================================================
                BRAND + CONTACT
            ================================================== */}
            <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-5">
              {/* Logo */}
              <motion.a
                href="/"
                whileHover={reduceMotion ? {} : { y: -2 }}
                className="group inline-block"
              >
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
              </motion.a>

              {/* Description */}
              <p className="mt-4 max-w-md text-xs leading-relaxed text-neutral-500 sm:text-sm">
                A premium web design, development & cyber security agency
                helping brands ship exceptional digital products with
                round-the-clock support.
              </p>

              {/* Contact Information */}
             {/* Contact Information */}
              <motion.div variants={stagger} className="mt-5 space-y-2">
                {/* Phone Link */}
                <motion.a
                  variants={fadeUp}
                  href="tel:+919833624073"
                  className="group flex items-center justify-between gap-3 rounded-lg py-1.5 transition-all duration-300 hover:pl-1.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C46A42]/10 text-[#C46A42] transition-all duration-300 group-hover:bg-[#C46A42] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(196,106,66,0.3)]">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-xs font-medium text-neutral-600 transition-colors group-hover:text-neutral-950 sm:text-sm">
                      9833-624-073
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 -translate-x-1.5 text-[#C46A42] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </motion.a>

                {/* Email Link */}
                <motion.a
                  variants={fadeUp}
                  href="mailto:info@digital-factory.in"
                  className="group flex items-center justify-between gap-3 rounded-lg py-1.5 transition-all duration-300 hover:pl-1.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C46A42]/10 text-[#C46A42] transition-all duration-300 group-hover:bg-[#C46A42] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(196,106,66,0.3)]">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    <span className="break-all text-xs font-medium text-neutral-600 transition-colors group-hover:text-neutral-950 sm:text-sm">
                      info@digital-factory.in
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 -translate-x-1.5 text-[#C46A42] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </motion.a>

                {/* Location / Address Link (Google Maps) */}
                <motion.a
                  variants={fadeUp}
                  href="https://www.google.com/maps/search/?api=1&query=912+72+Corp+Saki+Vihar+Road+Sakinaka+Junction+Andheri+Mumbai+400072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-lg py-1.5 transition-all duration-300 hover:pl-1.5"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C46A42]/10 text-[#C46A42] transition-all duration-300 group-hover:bg-[#C46A42] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(196,106,66,0.3)]">
                      <MapPin className="h-3.5 w-3.5" />
                    </span>
                    <span className="max-w-[280px] text-xs leading-snug text-neutral-600 transition-colors group-hover:text-neutral-950 sm:text-sm">
                      912, 72 Corp, Saki Vihar Road,
                      <br />
                      Sakinaka Junction, Andheri, Mumbai 400072
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 -translate-x-1.5 text-[#C46A42] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* =================================================
                SERVICES
            ================================================== */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-2 lg:col-start-6"
            >
              <FooterColumn column={COLUMNS[0]} />
            </motion.div>

            {/* =================================================
                QUICK LINKS
            ================================================== */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <FooterColumn column={COLUMNS[1]} />
            </motion.div>

            {/* =================================================
                VISUAL CARD
            ================================================== */}
            <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-3">
              <motion.div
                whileHover={reduceMotion ? {} : { y: -4 }}
                className="relative overflow-hidden rounded-[20px] border border-neutral-200 bg-white p-4 shadow-sm transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:p-5"
              >
                {/* Glow */}
                <motion.div
                  animate={
                    reduceMotion
                      ? {}
                      : { scale: [1, 1.2, 1], opacity: [0.08, 0.18, 0.08] }
                  }
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#C46A42] blur-[50px]"
                />

                {/* Browser Card Visual */}
                <motion.div
                  animate={reduceMotion ? {} : { y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative rounded-xl border border-neutral-200 bg-[#faf9f7] p-3 shadow-sm"
                >
                  <div className="mb-2.5 flex items-center justify-between">
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C46A42]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                    </div>
                    <span className="text-[7px] uppercase tracking-widest text-neutral-400">
                      Digital Factory
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 w-2/3 rounded-full bg-neutral-300" />
                    <div className="h-1.5 w-1/2 rounded-full bg-neutral-200" />
                    <div className="grid grid-cols-3 gap-1.5 pt-1">
                      <div className="h-9 rounded-lg border border-[#C46A42]/20 bg-[#C46A42]/10" />
                      <div className="h-9 rounded-lg border border-neutral-200 bg-white" />
                      <div className="h-9 rounded-lg border border-neutral-200 bg-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Text */}
                <div className="relative mt-3.5">
                  <p className="font-serif text-lg leading-tight text-neutral-950 sm:text-xl">
                    Better Ideas
                    <br />
                    <span className="text-[#C46A42]">Bigger Impact.</span>
                  </p>
                  <div className="mt-2.5 h-[2px] w-10 bg-[#C46A42]" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* =====================================================
            COPYRIGHT
        ====================================================== */}
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

          <p>© {new Date().getFullYear()} Digital Factory. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with{" "}
            <span className="font-semibold text-[#C46A42]">Digital Factory</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

/* ============================================================
   FOOTER COLUMN COMPONENT
============================================================ */

function FooterColumn({ column }: { column: { title: string; links: string[] } }) {
  return (
    <div>
      <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C46A42] sm:text-xs">
        {column.title}
      </h3>

      <div className="mb-3 h-[2px] w-8 bg-[#C46A42]" />

      <ul className="space-y-0.5">
        {column.links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="group flex items-center justify-between gap-2 rounded-lg py-1.5 text-xs text-neutral-600 transition-all duration-300 hover:pl-1.5 hover:text-neutral-950 sm:text-sm"
            >
              <span>{link}</span>
              <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1.5 text-[#C46A42] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}