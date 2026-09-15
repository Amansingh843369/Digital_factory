'use client'

import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Image from "next/image";


const NAV = [
  { label: 'Home', href: '#home' },
   { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
   { label: 'FAQ', href: '#faq' },
   { label: 'Career', href: '/career' },
  { label: 'Contact Us', href: '#contact' },
]

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
      
        <Image
    src="/digital-factory.png"
    alt="Digital Factory Logo"
    width={170}
    height={140}
    className="object-contain" />
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-20 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-background transition-colors hover:bg-brand sm:inline-flex"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-muted hover:text-brand"
                >
                  {item.label}
                </a> 
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-background"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
