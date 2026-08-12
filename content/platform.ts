import type { Feature } from "@/lib/utils";

export const platformFeatures: Feature[] = [
  { icon: "network", title: "Connected network", detail: "Properties, caretakers, operators, drivers and agencies on one operational graph." },
  { icon: "calendar", title: "Dispatch planner", detail: "Schedule → routes → materialization. Collections planned as live operations." },
  { icon: "route", title: "Zones & routing", detail: "Operational territories and routes structured around real-world collection." },
  { icon: "wallet", title: "Billing & wallets", detail: "Service records flow into transparent billing for properties and operators." },
  { icon: "signal", title: "Field intelligence", detail: "Every field action becomes structured, confidence-scored operational data." },
  { icon: "chart", title: "Operational visibility", detail: "One command view for fleet, crew, buildings, requests and treasury." },
];

export const dashboards = [
  {
    src: "/screenshots/operator-console.png",
    label: "Operator · Command Deck",
    caption: "Waste company dashboard",
    detail: "Fleet standing, crew, buildings served, dispatch and treasury—the operator's live picture of the entire operation.",
  },
  {
    src: "/screenshots/customer-dashboard.png",
    label: "Property · Dashboard",
    caption: "Customer dashboard",
    detail: "Schedules, billing, wallet and service status—the property's view of the same network.",
  },
];