import type { Feature } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

export function FeatureGrid({ items, cols = 3 }: { items: Feature[]; cols?: 2 | 3 }) {
  return (
    <div className={cn("grid gap-5 sm:grid-cols-2", cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2")}>
      {items.map((f) => (
        <div key={f.title} className="rounded-2xl border border-line bg-card p-6 card-shadow">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-100 text-forest-700">
            <Icon name={f.icon} />
          </div>
          <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{f.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">{f.detail}</p>
        </div>
      ))}
    </div>
  );
}