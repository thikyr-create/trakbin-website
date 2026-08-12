import { Container, Section, SectionHead } from "@/components/shared/Section";

const photos = [
  { src: "/photos/crew.jpg", label: "01", title: "Collection crews", detail: "Field teams executing confirmed pickups." },
  { src: "/photos/fleet.jpg", label: "02", title: "Mixed fleet", detail: "From rear-loaders to compact carts, matched to the zone." },
  { src: "/photos/bins.jpg", label: "03", title: "Standardized containers", detail: "Every bin size and type, registered and trackable." },
  { src: "/photos/tools.jpg", label: "04", title: "Field tools", detail: "The instruments that turn fieldwork into data." },
];

export function Operations() {
  return (
    <Section className="dot-grid-dark">
      <Container>
        <SectionHead eyebrow="Built for the field" title="Built with operators. Tested in the field."
          lead="No stock promises. Real mapping work, real interfaces, real deployments, and pilots measured from day one." />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {photos.map((p) => (
            <figure key={p.src} className="group overflow-hidden rounded-2xl border border-line bg-card card-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.src} alt={p.title} loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <figcaption className="p-5">
                <p className="eyebrow text-brand-600">{p.label}</p>
                <p className="mt-2 font-display text-lg font-bold text-ink-900">{p.title}</p>
                <p className="mt-1 text-sm text-ink-500">{p.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}