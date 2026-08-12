"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { EASE } from "./Reveal";

export function MotionCard({ children, delay = 0, hover = false, className }: {
  children: ReactNode;
  delay?: number;
  hover?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      whileHover={hover ? { y: -4 } : undefined}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}