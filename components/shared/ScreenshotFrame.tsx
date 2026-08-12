export function ScreenshotFrame({ src, label, caption, detail }: {
  src: string; label: string; caption?: string; detail?: string;
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white card-shadow">
        <div className="flex items-center gap-1.5 border-b border-line bg-paper px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-900/10" />
          <span className="eyebrow ml-3 text-ink-500">{label}</span>
        </div>
        <img src={src} alt={label} className="block w-full" loading="lazy" />
      </div>
      {caption && <figcaption className="eyebrow mt-4 text-brand-600">{caption}</figcaption>}
      {detail && <p className="mt-2 text-sm leading-relaxed text-ink-500">{detail}</p>}
    </figure>
  );
}