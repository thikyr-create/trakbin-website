"use client";
import { useConsent } from "./ConsentProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function AnalyticsTracker() {
  const { consent, isHydrated } = useConsent();
  
  // STRICT ENFORCEMENT: Do not initialize tracking without consent
  if (!isHydrated || !consent.analytics) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}