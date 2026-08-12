import type { FlowStep } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

export function FlowChain({ steps, tone = "light" }: { steps: FlowStep[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ol className="mx-auto flex max-w-xl flex-col">
      {steps.map((s, i) => (
        <li key={s.title}>
          {i > 0 && (
            <div className="flex flex-col items-center py-1" aria-hidden>
              <span className={cn("h-6 w-px border-l border-dashed", dark ? "border-white/30" : "border-ink-900/25")} />
              <Icon name="chevronDown" className={cn("-mt-1 h-4 w-4", dark ? "text-brand-300" : "text-brand-600")} />
            </div>
          )}
          <div className={cn("flex items-start gap-4 rounded-2xl border p-5", dark ? "border-white/10 bg-white/5" : "border-line bg-card card-shadow")}>
            <span className={cn("eyebrow mt-1", dark ? "text-brand-300" : "text-brand-600")}>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className={cn("font-display text-lg font-bold", dark ? "text-white" : "text-ink-900")}>{s.title}</p>
              {s.detail && <p className={cn("mt-1 text-sm", dark ? "text-mint-100/70" : "text-ink-500")}>{s.detail}</p>}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}