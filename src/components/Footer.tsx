"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Monitor, Mail, Phone, MapPin, Check } from "lucide-react";

const footerLinks = {
  Services: [
    { name: "Computer Sales", href: "/services" },
    { name: "Computer Repairs", href: "/services" },
    { name: "Data Recovery", href: "/services" },
    { name: "Peripherals & Accessories", href: "/services" },
    { name: "Network Setup", href: "/services" },
    { name: "IT Support", href: "/services" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "SLA Agreement", href: "/sla" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

function FooterLinkGroup({
  title,
  links,
  delay,
}: {
  title: string;
  links: { name: string; href: string }[];
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="mb-4 text-sm font-black tracking-wider text-obsidian uppercase">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="inline-flex items-center gap-2 text-sm text-slate-custom/50 transition-colors hover:text-primary-600"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-white">
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary-200/50 to-transparent" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-primary-500/3 blur-[150px]" />
        <div className="absolute right-1/4 top-1/2 h-80 w-80 rounded-full bg-primary-300/3 blur-[120px]" />
      </div>

      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span
          className="select-none text-[12rem] leading-none tracking-wider text-primary-500/[0.03] sm:text-[18rem] md:text-[22rem]"
          style={{ fontFamily: 'var(--font-vt323), ui-monospace, monospace' }}
          aria-hidden="true"
        >
          etech
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 transition-all group-hover:bg-primary-700">
                <Monitor className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-tight text-obsidian">
                  Etech
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-custom/40">
                  Computer Services
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-custom/50">
              Quality computer sales, expert repairs, and reliable tech
              solutions for Austin businesses and individuals.
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href="tel:+15125551234"
                className="flex items-center gap-2.5 text-sm text-slate-custom/50 transition-colors hover:text-primary-600"
              >
                <Phone className="h-3.5 w-3.5" />
                (512) 555-1234
              </a>
              <a
                href="mailto:info@etechcomputerservices.com"
                className="flex items-center gap-2.5 text-sm text-slate-custom/50 transition-colors hover:text-primary-600"
              >
                <Mail className="h-3.5 w-3.5" />
                info@etechcomputerservices.com
              </a>
              <div className="flex items-center gap-2.5 text-sm text-slate-custom/50">
                <MapPin className="h-3.5 w-3.5" />
                Austin, TX 78701
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-100 bg-white text-slate-custom/40 shadow-sm transition-all hover:border-primary-200 hover:text-primary-600 hover:shadow-md"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-4">
            <FooterLinkGroup
              title="Services"
              links={footerLinks.Services}
              delay={0.1}
            />
            <FooterLinkGroup
              title="Company"
              links={footerLinks.Company}
              delay={0.2}
            />
            <FooterLinkGroup
              title="Legal"
              links={footerLinks.Legal}
              delay={0.3}
            />
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl border border-primary-100 bg-primary-50/50 p-6 sm:p-8"
        >
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="text-lg font-black text-obsidian">
                Stay Updated
              </h3>
              <p className="mt-1 text-sm text-slate-custom/50">
                Get the latest IT insights, tips, and company news.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full gap-3 sm:w-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-12 w-full rounded-xl border-0 bg-white px-4 text-sm text-obsidian shadow-sm transition-all placeholder:text-slate-custom/30 focus:ring-2 focus:ring-primary-100 sm:w-64"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-12 shrink-0 rounded-xl bg-primary-600 px-6 text-sm font-bold text-white shadow-[0_4px_16px_rgba(79,70,229,0.25)] transition-shadow hover:bg-primary-700 hover:shadow-[0_6px_24px_rgba(79,70,229,0.35)]"
              >
                {subscribed ? (
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                    Subscribed!
                  </span>
                ) : (
                  "Subscribe"
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-100 pt-8 sm:flex-row"
        >
          <p className="text-sm text-slate-custom/40">
            &copy; {new Date().getFullYear()} Etech Computer Services. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-xs text-slate-custom/40">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              All systems operational
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
