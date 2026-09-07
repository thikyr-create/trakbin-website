"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "trakbin-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const decide = (choice: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, at: Date.now() }));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-line bg-card p-5 card-shadow sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <p className="text-sm leading-relaxed text-ink-700">
              Trakbin uses no tracking cookies. We collect only anonymized analytics to improve the site.{" "}
              <Link href="/privacy" className="font-semibold text-brand-600 underline">
                Read our policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={() => decide("declined")}
                className="rounded-full border border-ink-900/15 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[.15em] text-ink-700 transition hover:bg-ink-900/5"
              >
                Decline
              </button>
              <button
                onClick={() => decide("accepted")}
                className="rounded-full bg-brand-500 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[.15em] text-forest-950 transition hover:bg-brand-400"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}