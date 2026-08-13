"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type CycleFrame = { src: string; alt: string };

export function ImageFocusCycle({ frames, interval = 3000, className, showDots = true, index, onIndexChange }: {
  frames: CycleFrame[];
  interval?: number;
  className?: string;
  showDots?: boolean;
  index?: number;
  onIndexChange?: (i: number) => void;
}) {
  const [auto, setAuto] = useState(0);
  const controlled = index !== undefined;
  const i = controlled ? index : auto;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px 0px -80px 0px" });
  const frame = frames[i];

  const set = (v: number) => (controlled ? onIndexChange?.(v) : setAuto(v));

  useEffect(() => {
    if (reduce || frames.length < 2 || !inView) return;
    const t = setInterval(() => set((i + 1) % frames.length), interval);
    return () => clearInterval(t);
  }, [reduce, frames.length, interval, inView, i, controlled]);

  return (
    <div ref={ref} className={cn("overflow-hidden bg-forest-900", className)}>
      <AnimatePresence initial={false}>
        <motion.div
          key={frame.src}
          initial={{ opacity: 0, scale: 1.08, filter: "blur(14px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={frame.src} alt={frame.alt} loading={i === 0 ? "eager" : "lazy"} decoding="async"
            className="h-full w-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {showDots && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {frames.map((f, d) => (
            <button key={f.src} aria-label={`Show image ${d + 1}`} onClick={() => set(d)}
              className={cn("h-1.5 rounded-full transition-all duration-300",
                d === i ? "w-8 bg-brand-400" : "w-3 bg-white/30 hover:bg-white/60")} />
          ))}
        </div>
      )}
    </div>
  );
}