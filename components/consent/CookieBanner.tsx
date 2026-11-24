"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useConsent } from "./ConsentProvider";
import { ConsentPreferencesModal } from "./ConsentPreferencesModal";

export function CookieBanner() {
  const { hasConsented, isHydrated , acceptAll, rejectOptional } = useConsent();
  const [showPreferences, setShowPreferences] = useState(false);

  if (!isHydrated || hasConsented) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-6 sm:px-6"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-5 rounded-2xl border border-line bg-card p-6 card-shadow sm:p-8">
            <div>
              <h3 className="font-display text-lg font-bold text-ink-900">Your Privacy Choices</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                We use essential local storage for site functionality. We do not use third-party tracking cookies. 
                Optional analytics help us improve the platform. You control what is enabled.
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-ink-500">
                <Link href="/privacy-policy" className="underline hover:text-brand-600">Privacy Policy</Link>
                <span>•</span>
                <Link href="/cookie-policy" className="underline hover:text-brand-600">Cookie Policy</Link>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={rejectOptional}
                className="rounded-full border border-ink-900/15 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[.15em] text-ink-700 transition hover:bg-ink-900/5"
              >
                Reject Optional
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="rounded-full border border-ink-900/15 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[.15em] text-ink-700 transition hover:bg-ink-900/5"
              >
                Customize
              </button>
              <button
                onClick={acceptAll}
                className="rounded-full bg-brand-500 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[.15em] text-forest-950 transition hover:bg-brand-400"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <ConsentPreferencesModal isOpen={showPreferences} onClose={() => setShowPreferences(false)} />
    </>
  );
}