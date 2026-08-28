"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor } from "lucide-react";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500);
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-white"
        >
          {/* Subtle grid background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #4f46e5 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/5 blur-[120px]" />
          </div>

          <div className="relative flex flex-col items-center gap-6">
            {/* Logo icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-600 shadow-[0_8px_32px_rgba(79,70,229,0.3)]"
            >
              <Monitor className="h-10 w-10 text-white" strokeWidth={2} />
            </motion.div>

            {/* Company name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
              className="text-center"
            >
              <h1 className="font-display text-3xl font-black tracking-tight text-obsidian">
                Etech
              </h1>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-custom/40">
                Computer Services
              </p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="h-0.5 w-32 overflow-hidden rounded-full bg-primary-100"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full bg-primary-500"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
