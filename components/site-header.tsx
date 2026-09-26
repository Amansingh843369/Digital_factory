"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; 

const NAV = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/#services",
    children: [
       {
        label: "Software Development",
        href: "/services/software-development",
      },
      {
        label: "Website Development",
        href: "/services/website-development",
      },
        {
        label: "Digital Marketing",
        href: "/services/digital-marketing",
      },
      {
        label: "Cyber Security",
        href: "/services/cyber-security",
      },
      {
        label: "Penetration Testing",
        href: "/services/penetration-testing",
      },
      {
        label: "eOMS",
        href: "/services/e-office-management-security",
      },
    ],
  },
  { label: "Blog", href: "/#blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/#contact" },
];

function Logo() {
  return (
    <Link
      href="/#home"
      className="flex items-center gap-2 font-display text-xl font-bold tracking-tight"
    >
      <Image
        src="/digital-factory.png"
        alt="Digital Factory Logo"
        width={170}
        height={140}
        className="object-contain"
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
  // Refs define kiye hain detect karne ke liye
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);

  // Outside click handle karne ke liye useEffect
  useEffect(() => {
    function handleClickOutside(event) {
      // Agar Desktop dropdown ke bahar click hua toh dropdown close karein
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      // Agar pure header ke bahar click hua toh mobile menu bhi close karein
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Event listener attach karna
    document.addEventListener("mousedown", handleClickOutside);
    
    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-20 lg:px-8">
        <Logo />

        {/* ================= DESKTOP NAV ================= */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <div 
              key={item.label} 
              className="relative"
              // Ref attach kiya gaya hai sirf services wale item par
              ref={item.children ? dropdownRef : null}
            >
              {item.children ? (
                <>
                  {/* Services Button */}
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
                    aria-expanded={servicesOpen}
                  >
                    {item.label}

                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 rounded-xl border border-border/70 bg-background p-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setServicesOpen(false)}
                          className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-background transition-colors hover:bg-brand sm:inline-flex"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}
      {open && (
        <nav
          className="border-t border-border bg-background px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    {/* Mobile Services Button */}
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-muted hover:text-brand"
                      aria-expanded={servicesOpen}
                    >
                      <span>{item.label}</span>

                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Services Items */}
                    {servicesOpen && (
                      <div className="mt-1 ml-3 border-l border-border pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => {
                              setOpen(false);
                              setServicesOpen(false);
                            }}
                            className="block rounded-lg px-3 py-2.5 text-sm text-foreground/70 hover:bg-muted hover:text-brand"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-muted hover:text-brand"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}

            {/* Mobile Get In Touch */}
            <li className="mt-2">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-background"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}