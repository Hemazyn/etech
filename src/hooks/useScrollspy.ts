"use client";

import { useState, useEffect } from "react";

export default function useScrollspy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible: { id: string; top: number }[] = [];
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.push({
              id: entry.target.id,
              top: entry.boundingClientRect.top,
            });
          }
        });
        if (visible.length > 0) {
          visible.sort((a, b) => a.top - b.top);
          setActiveId(visible[0].id);
        }
      },
      {
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: 0,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
