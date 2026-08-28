"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-primary-200 hover:shadow-[0_12px_40px_rgba(79,70,229,0.08)]"
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-primary-500/0 transition-all duration-300 group-hover:bg-primary-500 group-hover:w-1.5" />

      <div className="p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 transition-colors group-hover:bg-primary-100">
          <Icon
            className="h-6 w-6 text-primary-600 transition-transform group-hover:scale-110"
            strokeWidth={1.75}
          />
        </div>
        <h3 className="mt-4 font-display text-lg font-black tracking-tight text-obsidian">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-custom/60">
          {description}
        </p>
        {features && features.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-semibold text-primary-600/80"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
