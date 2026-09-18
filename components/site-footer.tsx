"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const COLUMNS = [
  {
    title: "Company",
    links: ["About Us", "Our Services", "Why Choose Us", "Careers"],
  },
  {
    title: "Quick links",
    links: ["Home", "About Us", "Our Work", "Contact"],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
          className="absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-[#C46A42]/10 blur-[110px]"
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
          className="absolute -right-40 top-[20%] h-[450px] w-[450px] rounded-full bg-[#C46A42]/8 blur-[130px]"
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

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
          className="relative  sm:py-16 lg:py-12"
        >

          {/* Main CTA Card */}
          <div className="relative overflow-hidden rounded-[28px] border border-[#C46A42]/25 bg-white px-6 py-3 shadow-[0_25px_80px_rgba(0,0,0,0.06)] sm:rounded-[36px] sm:px-10 sm:py-14 lg:px-14 ">

            {/* Decorative orange circle */}
            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -right-28 -top-28 hidden h-[360px] w-[360px] rounded-full border border-[#C46A42]/20 sm:block"
            />

            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      rotate: -360,
                    }
              }
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -right-10 -top-10 hidden h-[250px] w-[250px] rounded-full border border-[#C46A42]/10 sm:block"
            />

            {/* Orange glowing dot */}
            <motion.div
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [0, -10, 0],
                      opacity: [0.4, 1, 0.4],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[28%] top-12 h-2 w-2 rounded-full bg-[#C46A42] shadow-[0_0_20px_rgba(196,106,66,0.7)]"
            />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">

              {/* Heading */}
              <motion.div
                variants={fadeUp}
                className="max-w-3xl"
              >

                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C46A42]/30 bg-[#C46A42]/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C46A42] sm:text-xs">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C46A42]" />
                  Let&apos;s work together
                </span>

                <h2 className="mt-1 font-serif text-[40px] leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[62px]">
                  Your Business Deserves a Secure and Powerful  &nbsp;
                  <span className="text-[#C46A42]">
                    Digital Future . 
                  </span>
                </h2>

                {/* Decorative line */}
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 70,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease,
                  }}
                  className="mt-6 h-[2px] bg-[#C46A42]"
                />
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={fadeUp}>
                <motion.a
                  href="mailto:aman@singh.com"
                  whileHover={
                    reduceMotion
                      ? {}
                      : {
                          y: -5,
                          scale: 1.04,
                        }
                  }
                  whileTap={
                    reduceMotion
                      ? {}
                      : {
                          scale: 0.97,
                        }
                  }
                  className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#C46A42] px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_15px_35px_rgba(196,106,66,0.22)] transition-all duration-300 hover:bg-[#A95A37] sm:w-auto sm:px-8 sm:py-5"
                >

                  {/* Shine */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative z-10">
                    Start a project
                  </span>

                  <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/15">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
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
          className="border-t border-neutral-200 py-14 sm:py-16 lg:py-20"
        >

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

            {/* =================================================
                BRAND + CONTACT
            ================================================== */}

            <motion.div
              variants={fadeUp}
              className="lg:col-span-5"
            >

              {/* Logo */}
              <motion.a
                href="/"
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -3,
                      }
                }
                className="group inline-block"
              >
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white px-5  shadow-sm transition-all duration-500 group-hover:border-[#C46A42]/30 group-hover:shadow-[0_15px_40px_rgba(196,106,66,0.1)]">

                  <Image
                    src="/digital-factory.jpeg"
                    alt="Digital Factory Logo"
                    width={150}
                    height={50}
                    priority
                    className="h-auto w-[125px] object-contain sm:w-[150px]"
                  />

                  {/* Logo glow */}
                  <div className="absolute -right-5 -top-5 h-16 w-16 rounded-full bg-[#C46A42]/10 blur-2xl transition-all duration-500 group-hover:bg-[#C46A42]/20" />
                </div>
              </motion.a>

              {/* Description */}
              <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500 sm:text-[15px]">
                A premium web design, development & cyber security agency
                helping brands ship exceptional digital products with
                round-the-clock support.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 space-y-3">

                {/* Phone */}
                <motion.a
                  href="tel:+918433694423"
                  whileHover={
                    reduceMotion
                      ? {}
                      : {
                          x: 6,
                        }
                  }
                  className="group flex items-center gap-4 rounded-2xl border border-transparent p-2 transition-all duration-300 hover:border-[#C46A42]/20 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C46A42]/10 text-[#C46A42] transition-all duration-300 group-hover:bg-[#C46A42] group-hover:text-white">
                    <Phone className="h-4 w-4" />
                  </span>

                  <span className="text-sm text-neutral-600 transition-colors group-hover:text-neutral-950 sm:text-[15px]">
                    +91 8433694423
                  </span>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:aman@singh.com"
                  whileHover={
                    reduceMotion
                      ? {}
                      : {
                          x: 6,
                        }
                  }
                  className="group flex items-center gap-4 rounded-2xl border border-transparent p-2 transition-all duration-300 hover:border-[#C46A42]/20 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C46A42]/10 text-[#C46A42] transition-all duration-300 group-hover:bg-[#C46A42] group-hover:text-white">
                    <Mail className="h-4 w-4" />
                  </span>

                  <span className="break-all text-sm text-neutral-600 transition-colors group-hover:text-neutral-950 sm:text-[15px]">
                    aman@singh.com
                  </span>
                </motion.a>

                {/* Location */}
                <motion.div
                  whileHover={
                    reduceMotion
                      ? {}
                      : {
                          x: 6,
                        }
                  }
                  className="group flex items-center gap-4 rounded-2xl border border-transparent p-2 transition-all duration-300 hover:border-[#C46A42]/20 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C46A42]/10 text-[#C46A42] transition-all duration-300 group-hover:bg-[#C46A42] group-hover:text-white">
                    <MapPin className="h-4 w-4" />
                  </span>

                  <span className="text-sm text-neutral-600 sm:text-[15px]">
                    Mumbai, India
                  </span>
                </motion.div>

              </div>
            </motion.div>

            {/* =================================================
                COMPANY
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

            <motion.div
              variants={fadeUp}
              className="lg:col-span-2"
            >
              <FooterColumn column={COLUMNS[1]} />
            </motion.div>

            {/* =================================================
                VISUAL CARD
            ================================================== */}

            <motion.div
              variants={fadeUp}
              className="lg:col-span-3"
            >
              <motion.div
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -8,
                      }
                }
                className="relative min-h-[250px] overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >

                {/* Orange Glow */}
                <motion.div
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          scale: [1, 1.2, 1],
                          opacity: [0.08, 0.18, 0.08],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C46A42] blur-[70px]"
                />

                {/* Browser */}
                <motion.div
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          y: [0, -7, 0],
                        }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative rounded-2xl border border-neutral-200 bg-[#faf9f7] p-4 shadow-sm"
                >

                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#C46A42]" />
                      <span className="h-2 w-2 rounded-full bg-neutral-300" />
                      <span className="h-2 w-2 rounded-full bg-neutral-300" />
                    </div>

                    <span className="text-[8px] uppercase tracking-widest text-neutral-400">
                      Digital Factory
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="h-2 w-2/3 rounded-full bg-neutral-300" />
                    <div className="h-2 w-1/2 rounded-full bg-neutral-200" />

                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="h-14 rounded-xl border border-[#C46A42]/20 bg-[#C46A42]/10" />
                      <div className="h-14 rounded-xl border border-neutral-200 bg-white" />
                      <div className="h-14 rounded-xl border border-neutral-200 bg-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Text */}
                <div className="relative mt-6">
                  <p className="font-serif text-2xl leading-tight text-neutral-950">
                    Better Ideas
                    <br />
                    <span className="text-[#C46A42]">
                      Bigger Impact.
                    </span>
                  </p>

                  <div className="mt-4 h-[2px] w-14 bg-[#C46A42]" />
                </div>

              </motion.div>
            </motion.div>

          </div>
        </motion.section>

        {/* =====================================================
            COPYRIGHT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="relative flex flex-col gap-4 border-t border-neutral-200  text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:py-1 sm:text-sm"
        >

          {/* Animated orange line */}
          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
              ease,
            }}
            className="absolute left-0 top-0 h-[1px] w-full origin-left  "
          />

          <p>
            © {new Date().getFullYear()} Digital Factory. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Built with{" "}
            <span className="font-semibold text-[#C46A42]">
              Digital Factory
            </span>
          </p>

        </motion.div>

      </div>
    </footer>
  );
}

/* ============================================================
   FOOTER COLUMN
============================================================ */

function FooterColumn({
  column,
}: {
  column: {
    title: string;
    links: string[];
  };
}) {
  return (
    <div>
      <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#C46A42] sm:text-xs">
        {column.title}
      </h3>

      <div className="mb-5 h-[2px] w-10 bg-[#C46A42]" />

      <ul className="space-y-1">
        {column.links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="group flex items-center justify-between gap-4 rounded-xl px-0 py-2.5 text-sm text-neutral-500 transition-all duration-300 hover:pl-2 hover:text-neutral-950 sm:text-[15px]"
            >
              <span>{link}</span>

              <ArrowUpRight className="h-4 w-4 -translate-x-2 text-[#C46A42] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}