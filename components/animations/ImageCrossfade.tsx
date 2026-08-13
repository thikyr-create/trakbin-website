"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type Frame = { src: string; alt: string; caption?: string };

export function ImageCrossfade({ frames, interval = 4200, className }: {
  frames: Frame[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const frame = frames[i];

  useEffect(() => {
    if (reduce || frames.length < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % frames.length), interval);
    return () => clearInterval(t);
  }, [reduce, frames.length, interval]);

  return (
    <div className={cn("relative overflow-hidden bg-forest-900", className)}>
      <AnimatePresence initial={false}>
        <motion.div
          key={frame.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={frame.src}
            alt={frame.alt}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: (interval + 1000) / 1000, ease: "linear" }}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      {frame.caption && (
        <p className="eyebrow absolute bottom-4 left-4 rounded-full bg-forest-950/70 px-3 py-1.5 text-mint-100 backdrop-blur-sm">
          {frame.caption}
        </p>
      )}
    </div>
  );
}