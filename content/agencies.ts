import type { Feature } from "@/lib/utils";

export const agencyCapabilities: Feature[] = [
  { icon: "pin", title: "Geographic visibility", detail: "See collection activity across zones and territories." },
  { icon: "layers", title: "Service coverage", detail: "Understand which properties and areas are served, and which are not." },
  { icon: "signal", title: "Operational intelligence", detail: "Field-generated data, structured for oversight." },
  { icon: "leaf", title: "Environmental data", detail: "Collection activity as an environmental signal for cities." },
  { icon: "chart", title: "Collection performance", detail: "Operator performance measured against real activity." },
  { icon: "eye", title: "Monitoring", detail: "From reactive complaints to proactive oversight." },
  { icon: "building", title: "Infrastructure planning", detail: "Evidence for where the system needs to grow next." },
];

export const roadmap = [
  "Regulatory dashboards & coverage analytics",
  "Standardized environmental reporting",
  "City-scale infrastructure planning tools",
];