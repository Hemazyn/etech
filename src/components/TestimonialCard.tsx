"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating?: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  quote,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-primary-100 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-all hover:shadow-[0_8px_30px_rgba(79,70,229,0.06)] sm:p-8"
    >
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary-500 text-primary-500" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-slate-custom/70 sm:text-base">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-bold text-obsidian">{name}</p>
          <p className="text-xs text-slate-custom/50">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
