"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  highlight?: string;
}

export default function PageHeader({
  title,
  subtitle,
  highlight,
}: PageHeaderProps) {
  return (
    <section
      className="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-20 lg:px-8"
      style={{
        background: `
          radial-gradient(ellipse 100% 55% at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 65%),
          radial-gradient(ellipse 70% 50% at 0% 50%, rgba(99,102,241,0.04) 0%, transparent 55%),
          radial-gradient(ellipse 70% 50% at 100% 50%, rgba(15,23,42,0.03) 0%, transparent 55%),
          #ffffff
        `,
      }}
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-black tracking-tight text-obsidian sm:text-4xl lg:text-5xl"
        >
          {title.split(" ").map((word, i) => (
            <span key={i}>
              {highlight && word.toLowerCase() === highlight.toLowerCase() ? (
                <span className="text-primary-600">{word} </span>
              ) : (
                <span>{word} </span>
              )}
            </span>
          ))}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-custom/60 sm:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
