"use client";
import { useState } from "react";
import { ConsentPreferencesModal } from "@/components/consent/ConsentPreferencesModal";

export function CookiePreferencesTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="font-mono text-[11px] uppercase tracking-[.2em] text-white/40 transition hover:text-white text-left sm:text-right">
        Cookie Preferences
      </button>
      <ConsentPreferencesModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}