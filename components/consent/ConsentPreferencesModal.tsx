"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useConsent } from "./ConsentProvider";
import { Icon } from "@/components/shared/Icon";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsentPreferencesModal({ isOpen, onClose }: Props) {
  const { consent, setConsent, acceptAll, rejectOptional } = useConsent();

  const Toggle = ({ label, description, checked, onChange, locked }: { label: string; description: string; checked: boolean; onChange: () => void; locked?: boolean }) => (
    <div className="flex items-start justify-between gap-4 border-b border-line pb-4 last:border-0 last:pb-0">
      <div>
        <p className="font-semibold text-ink-900">{label} {locked && <span className="ml-1 text-[10px] uppercase tracking-wider text-brand-600">(Required)</span>}</p>
        <p className="mt-1 text-sm text-ink-600">{description}</p>
      </div>
      <button
        onClick={onChange}
        disabled={locked}
        className={`relative mt-1 h-6 w-11 shrink-0 rounded-full transition-colors ${checked ? 'bg-brand-500' : 'bg-ink-900/10'} ${locked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
        aria-pressed={checked}
      >
        <span className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
      </button>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[60] bg-forest-950/60 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-1/2 z-[70] mx-auto max-w-lg -translate-y-1/2 rounded-2xl border border-line bg-card p-6 shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-ink-900">Cookie Preferences</h2>
              <button onClick={onClose} className="rounded-full p-2 text-ink-500 hover:bg-ink-900/5 hover:text-ink-900" aria-label="Close preferences">
                <Icon name="x" className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              <Toggle label="Strictly Necessary" description="Required for site functionality, security, and session management. Cannot be disabled." checked={true} onChange={() => {}} locked />
              <Toggle label="Analytics" description="Helps us understand site usage and fix technical issues. Anonymized and cookieless." checked={consent.analytics} onChange={() => setConsent('analytics', !consent.analytics)} />
              <Toggle label="Functional" description="Remembers non-essential preferences to enhance your experience." checked={consent.functional} onChange={() => setConsent('functional', !consent.functional)} />
              <Toggle label="Marketing" description="Used for advertising measurement and attribution. Currently not used on Trakbin." checked={consent.marketing} onChange={() => setConsent('marketing', !consent.marketing)} />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <button onClick={rejectOptional} className="rounded-full border border-ink-900/15 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[.15em] text-ink-700 transition hover:bg-ink-900/5">
                Reject All Optional
              </button>
              <div className="flex gap-3">
                <button onClick={onClose} className="rounded-full border border-ink-900/15 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[.15em] text-ink-700 transition hover:bg-ink-900/5">
                  Cancel
                </button>
                <button onClick={() => { acceptAll(); onClose(); }} className="rounded-full bg-brand-500 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-[.15em] text-forest-950 transition hover:bg-brand-400">
                  Save Preferences
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}