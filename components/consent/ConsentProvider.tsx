"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ConsentState, defaultConsent, CONSENT_STORAGE_KEY, CURRENT_CONSENT_VERSION, CURRENT_POLICY_VERSION } from "@/lib/consent";

interface ConsentContextType {
  consent: ConsentState;
  hasConsented: boolean;
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
        // Validate schema and version
        if (parsed.consentVersion === CURRENT_CONSENT_VERSION && typeof parsed.necessary === 'boolean') {
          setConsentState(parsed);
        } else {
          // Version mismatch or corruption: reset to prompt user again
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
    const newState: ConsentState = {
      ...consent,
      [category]: value,
      choice: 'customized',
      timestamp: new Date().toISOString(),
    };
    saveConsent(newState);
  };

  const acceptAll = () => {
    const newState: ConsentState = {
      ...defaultConsent,
      analytics: true,
      functional: true,
      marketing: true,
      choice: 'accepted',
      timestamp: new Date().toISOString(),
    };
    saveConsent(newState);
  };

  const rejectOptional = () => {
    const newState: ConsentState = {
      ...defaultConsent,
      analytics: false,
      functional: false,
      marketing: false,
      choice: 'rejected',
      timestamp: new Date().toISOString(),
    };
    saveConsent(newState);
  };

  const resetConsent = () => {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    setConsentState(defaultConsent);
  };

  // Prevent hydration mismatch by rendering nothing until client-side state is loaded
  if (!isHydrated) return null;

  return (
    <ConsentContext.Provider value={{ consent, hasConsented: consent.choice !== null, setConsent, acceptAll, rejectOptional, resetConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("useConsent must be used within ConsentProvider");
  return context;
};