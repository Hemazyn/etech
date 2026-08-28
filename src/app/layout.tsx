import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Space_Grotesk, VT323 } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FloatingParticles from "@/components/FloatingParticles"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
})

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Etech Computer Services | IT Services & IT Consulting",
    template: "%s | Etech Computer Services",
  },
  description: "Professional IT services, consulting, and technology solutions for businesses. Transform your infrastructure with Etech Computer Services.",
  keywords: ["IT services", "IT consulting", "computer services", "business technology", "IT infrastructure", "managed IT", "cybersecurity", "cloud computing", "network management", "Etech Computer Services"],
  authors: [{ name: "Etech Computer Services" }],
  creator: "Etech Computer Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://etechcomputerservices.com",
    siteName: "Etech Computer Services",
    title: "Etech Computer Services | IT Services & IT Consulting",
    description: "Professional IT services, consulting, and technology solutions for businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Etech Computer Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etech Computer Services | IT Services & IT Consulting",
    description: "Professional IT services, consulting, and technology solutions for businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  manifest: "/manifest.json",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Etech Computer Services",
  description: "Professional IT services, consulting, and technology solutions for businesses.",
  url: "https://etechcomputerservices.com",
  logo: "https://etechcomputerservices.com/icon.svg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-512-555-1234",
    contactType: "customer service",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Technology Drive, Suite 200",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78701",
    addressCountry: "US",
  },
  sameAs: [],
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: ["Managed IT Services", "Cloud Solutions", "Cybersecurity", "IT Consulting", "Network Infrastructure", "IT Support"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${vt323.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="noise-overlay relative min-h-screen bg-white">
        <FloatingParticles />
        <Navbar />
        <main id="main-content" className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
