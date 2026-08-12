export type Feature = { icon: string; title: string; detail: string };
export type FlowStep = { title: string; detail?: string };

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}