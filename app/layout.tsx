import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

// 1. Mandatory Poppins Font Setup
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

// 2. SVG Logo Component (Pure Code - No External Image Required)
export function DigitalFactoryLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Digital Factory Logo"
    >
      {/* Factory Shape combined with Digital Nodes */}
      <path
        d="M4 26V12L10 16V12L16 16V6L28 12V26H4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1.5" fill="currentColor" />
      <circle cx="16" cy="20" r="1.5" fill="currentColor" />
      <circle cx="22" cy="20" r="1.5" fill="currentColor" />
      <path d="M10 20H22" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  )
}

// 3. Digital Factory Unique Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://digitalfactory.agency'), // Apni actual domain URL yahan dalein
  title: {
    default: 'Digital Factory — Next-Gen Web Design & Software Engineering Studio',
    template: '%s | Digital Factory',
  },
  description:
    'Digital Factory is an elite digital production studio crafting high-performance websites, web applications, and scalable digital products with 24/7 technical support.',
  keywords: [
    'Digital Factory',
    'Web Design Studio',
    'Software Factory',
    'Web Development Agency',
    'UI/UX Design',
    'Next.js Engineering',
    'Digital Product Studio',
    'Custom Web Solutions',
  ],
  authors: [{ name: 'Digital Factory Team' }],
  creator: 'Digital Factory Studio',
  publisher: 'Digital Factory',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Digital Factory — Next-Gen Web Design & Software Engineering Studio',
    description:
      'We build, scale, and maintain high-performance digital products and web experiences for ambitious brands.',
    url: 'https://digitalfactory.agency',
    siteName: 'Digital Factory',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Digital Factory Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Factory — Web Design & Development Agency',
    description:
      'Building high-performance websites and modern digital products with 24/7 support.',
    creator: '@digitalfactory',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f6f2' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} bg-background`}>
      <body className={`${poppins.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}