"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, personalInfo } from "@/data/navigation";
import { overlayVariants, navItemVariants, EASE_OUT } from "@/lib/animations";

const currentYear = new Date().getFullYear();

const menuLineVariants = {
  closed: {
    rotate: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: EASE_OUT },
  },
  open: (i: number) => {
    if (i === 0)
      return {
        rotate: 45,
        y: 6.5,
        transition: { duration: 0.35, ease: EASE_OUT },
      };
    if (i === 1)
      return {
        opacity: 0,
        transition: { duration: 0.2, ease: EASE_OUT },
      };
    return {
      rotate: -45,
      y: -6.5,
      transition: { duration: 0.35, ease: EASE_OUT },
    };
  },
};

const footerVariants = {
  closed: { opacity: 0, y: 20 },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.45, ease: EASE_OUT },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* Header bar — glassmorphism */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-300",
          isScrolled
            ? "border-b border-primary-100/50 bg-white/80 py-3 shadow-lg backdrop-blur-xl"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group relative z-[101]"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 shadow-[0_2px_8px_rgba(79,70,229,0.25)] transition-all group-hover:bg-primary-700">
                  <Monitor className="h-5 w-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-display text-lg font-bold tracking-tight text-obsidian">
                    <span className="text-obsidian">Etech</span>
                  </span>
                  <span className="hidden text-[10px] font-semibold uppercase tracking-widest text-slate-custom/40 sm:block">
                    Computer Services
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Right controls */}
            <div className="relative z-[101] flex items-center gap-2 sm:gap-3">
              {/* Menu trigger */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "relative flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-xl border transition-all duration-300",
                  isOpen
                    ? "border-primary-200 bg-primary-50"
                    : "border-primary-100 bg-white hover:border-primary-300"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={isOpen}
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={menuLineVariants}
                    animate={isOpen ? "open" : "closed"}
                    className={cn(
                      "block h-[1.5px] rounded-full bg-obsidian transition-colors duration-300",
                      i === 1 ? "w-4" : "w-5"
                    )}
                  />
                ))}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="nav-overlay"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[99] bg-white/97 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 70% 20%, rgba(79,70,229,0.06), transparent 50%)",
                }}
              />
              <div className="dot-grid absolute inset-0 opacity-[0.03]" />
            </div>

            <div className="flex h-full flex-col justify-between pt-24 pb-10">
              <nav className="flex flex-col items-start justify-between container mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="space-y-1 sm:space-y-2">
                  {navLinks.map((link, i) => {
                    const active = isActive(link.href);
                    return (
                      <motion.li
                        key={link.name}
                        custom={i}
                        variants={navItemVariants}
                        initial="closed"
                        animate="open"
                        exit="exit"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-center gap-4 py-3 sm:gap-6 sm:py-4"
                        >
                          <span
                            className={cn(
                              "font-mono text-[11px] tracking-[0.2em] transition-colors duration-300",
                              active
                                ? "text-primary-600"
                                : "text-slate-custom/30 group-hover:text-primary-500/60"
                            )}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>

                          <span
                            className={cn(
                              "font-display text-3xl font-semibold tracking-tight transition-all duration-300 sm:text-4xl lg:text-5xl",
                              active
                                ? "text-primary-600"
                                : "text-obsidian/70 group-hover:text-obsidian group-hover:translate-x-2"
                            )}
                          >
                            {link.name}
                          </span>

                          {active && (
                            <motion.span
                              layoutId="activeOverlayNav"
                              className="h-1.5 w-1.5 rounded-full bg-primary-500"
                              transition={{
                                type: "spring",
                                bounce: 0.2,
                                duration: 0.5,
                              }}
                            />
                          )}

                          <span
                            className={cn(
                              "hidden h-px flex-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 sm:block",
                              active ? "bg-primary-500/30" : "bg-obsidian/10"
                            )}
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer inside overlay */}
              <motion.div
                variants={footerVariants}
                initial="closed"
                animate="open"
                className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-obsidian/10 px-4 pt-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] tracking-[0.35em] text-slate-custom/40 uppercase">
                    Get in touch
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-slate-custom/70 transition-colors duration-300 hover:text-primary-600"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                {personalInfo.socials && (
                  <div className="flex items-center gap-4">
                    {personalInfo.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] tracking-[0.25em] text-slate-custom/40 transition-colors duration-300 hover:text-primary-600 uppercase"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-slate-custom/40 transition-colors duration-300 hover:text-primary-600"
                  >
                    <Phone className="h-3 w-3" />
                    {personalInfo.phone}
                  </a>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-slate-custom/25">
                    &copy;{currentYear}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
