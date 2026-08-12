import type { Feature } from "@/lib/utils";

export const operatorFeatures: Feature[] = [
  { icon: "truck", title: "Fleet management", detail: "Every vehicle, its zone and its status—on the road or standing by." },
  { icon: "users", title: "Driver management", detail: "Crews, assignments and performance in one place." },
  { icon: "pin", title: "Zones", detail: "Operational territories, mapped and measurable." },
  { icon: "calendar", title: "Dispatch", detail: "Turn schedules into routes, and routes into executed collections." },
  { icon: "route", title: "Route optimization", detail: "Routes shaped by real demand and field evidence—not habit." },
  { icon: "check", title: "Collection tracking", detail: "Pickups confirmed, misses flagged, history preserved." },
  { icon: "wallet", title: "Billing", detail: "Service activity flows into clean invoices and treasury visibility." },
  { icon: "chart", title: "Analytics", detail: "Collections, coverage and performance as measurable operations." },
  { icon: "eye", title: "Operational visibility", detail: "A live command deck for the whole company." },
];

export const commandDeckPoints = [
  "Fleet standing by / on the road, in real time",
  "Crew and buildings served at a glance",
  "Dispatch planner: schedule → routes → execution",
  "Treasury and billing visibility built into operations",
];