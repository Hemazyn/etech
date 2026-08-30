"use client";

import { useSyncExternalStore, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
}

function generateParticles(): Particle[] {
  return Array.from({ length: 16 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 20 + 16,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.12 + 0.02,
    drift: (Math.random() - 0.5) * 80,
  }));
}

function subscribeHeight(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getSnapshot() {
  return window.innerHeight;
}

function getServerSnapshot() {
  return 900;
}

export default function FloatingParticles() {
  const screenHeight = useSyncExternalStore(subscribeHeight, getSnapshot, getServerSnapshot);
  const [particles] = useState<Particle[]>(generateParticles);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary-400"
          style={{
            left: `${p.x}%`,
            bottom: "-2%",
            width: p.size,
            height: p.size,
            opacity: 0,
          }}
          animate={{
            y: [0, -(screenHeight + 80)],
            x: [0, p.drift],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.1, 0.85, 1],
          }}
        />
      ))}
    </div>
  );
}
