import type { Feature, FlowStep } from "@/lib/utils";

export const pipeline: FlowStep[] = [
  { title: "Driver movement", detail: "Location and progress captured during routes." },
  { title: "Pickup confirmation", detail: "Each collection confirmed at the point of service." },
  { title: "Field observations", detail: "Crews report real conditions—misses, contamination, blocked access." },
  { title: "Data ingestion", detail: "Field events enter the system as structured records." },
  { title: "Analysis", detail: "Patterns extracted across routes, zones and time." },
  { title: "Confidence scoring", detail: "Every signal carries a measure of how much it can be trusted." },
  { title: "Correction", detail: "Operators and crews confirm or correct—and the system learns." },
  { title: "Improved operational intelligence", detail: "The network gets smarter with every collection." },
];

export const principles: Feature[] = [
  { icon: "gauge", title: "Measured, not guessed", detail: "Intelligence built from real field activity, not assumptions." },
  { icon: "shield", title: "Confidence-scored", detail: "The system knows how sure it is—and says so." },
  { icon: "users", title: "Humans in the loop", detail: "Operators and drivers correct the system. That correction compounds." },
  { icon: "activity", title: "Compounding", detail: "Every collection makes the next one smarter." },
];