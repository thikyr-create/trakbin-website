"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ConsentState, defaultConsent, CONSENT_STORAGE_KEY, CURRENT_CONSENT_VERSION } from "@/lib/consent";

interface ConsentContextType {
  consent: ConsentState;
  hasConsented: boolean;
  isHydrated: boolean;
  setConsent: (category: 'analytics' | 'functional' | 'marketing', value: boolean) => void;
  acceptAll: () => void;
  rejectOptional: () => void;
  resetConsent: () => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<ConsentState>(defaultConsent);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.consentVersion === CURRENT_CONSENT_VERSION && typeof parsed.necessary === 'boolean') {
          setConsentState(parsed);
        } else {
          localStorage.removeItem(CONSENT_STORAGE_KEY);
        }
      }
    } catch (e) {
      console.error("Trakbin Consent: Failed to parse consent state", e);
      localStorage.removeItem(CONSENT_STORAGE_KEY);
    }
    setIsHydrated(true);
  }, []);

  const saveConsent = (newState: ConsentState) => {
    setConsentState(newState);
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(newState));
  };

  const setConsent = (category: 'analytics' | 'functional' | 'marketing', value: boolean) => {
    saveConsent({ ...consent, [category]: value, choice: 'customized', timestamp: new Date().toISOString() });
  };

  const acceptAll = () => {
    saveConsent({ ...defaultConsent, analytics: true, functional: true, marketing: true, choice: 'accepted', timestamp: new Date().toISOString() });
  };

  const rejectOptional = () => {
    saveConsent({ ...defaultConsent, analytics: false, functional: false, marketing: false, choice: 'rejected', timestamp: new Date().toISOString() });
  };

  const resetConsent = () => {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    setConsentState(defaultConsent);
  };

  // Always render children so server HTML is never blank (SEO + no-JS).
  return (
    <ConsentContext.Provider value={{ consent, hasConsented: consent.choice !== null, isHydrated, setConsent, acceptAll, rejectOptional, resetConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("useConsent must be used within ConsentProvider");
  return context;
};