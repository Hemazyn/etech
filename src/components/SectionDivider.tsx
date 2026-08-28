"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionDividerProps {
  variant?: "gradient" | "dot" | "dots";
}

export default function SectionDivider({
  variant = "gradient",
}: SectionDividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (variant === "gradient") {
    return (
      <div ref={ref} className="relative w-full">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
          className="h-px w-full origin-center bg-linear-to-r from-transparent via-primary-200 to-transparent"
        />
      </div>
    );
  }

  if (variant === "dot") {
    return (
      <div ref={ref} className="flex w-full items-center">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="h-px flex-1 origin-right bg-linear-to-r from-transparent via-primary-200 to-transparent"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-4"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-primary-300" />
        </motion.div>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="h-px flex-1 origin-left bg-linear-to-r from-transparent via-primary-200 to-transparent"
        />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div ref={ref} className="flex items-center justify-center gap-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.35,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className={`${
              i === 1 ? "h-2 w-2" : "h-1.5 w-1.5"
            } rounded-full bg-primary-300`}
          />
        ))}
      </div>
    );
  }

  return null;
}
