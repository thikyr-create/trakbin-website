 export type ConsentCategory = 'necessary' | 'analytics' | 'functional' | 'marketing';

export interface ConsentState {
  necessary: true; // Immutable
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
  choice: 'accepted' | 'rejected' | 'customized' | null;
  timestamp: string; // ISO-8601
  policyVersion: string;
  consentVersion: string;
}

export const CURRENT_CONSENT_VERSION = "1.0";
export const CURRENT_POLICY_VERSION = "1.0";
export const CONSENT_STORAGE_KEY = "trakbin_consent_record";

export const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
  choice: null,
  timestamp: "",
  policyVersion: CURRENT_POLICY_VERSION,
  consentVersion: CURRENT_CONSENT_VERSION,
};