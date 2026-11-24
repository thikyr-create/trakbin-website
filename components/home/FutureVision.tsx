import { Icon } from "@/components/shared/Icon";

export function FutureVision() {
  return (
    <section className="dot-grid-light relative overflow-hidden bg-forest-950 py-24 text-white sm:py-28">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
          <div className="lg:w-1/3">
            <p className="eyebrow text-brand-300">The long-term vision</p>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
              Beyond waste collection.
            </h2>
            <p className="mt-4 font-mono text-sm uppercase tracking-[.2em] text-brand-300">
              Building connected infrastructure for better-managed communities.
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-mint-100/80 sm:text-lg lg:w-2/3">
            <p>
              Waste management is where we begin, but the infrastructure required to manage
              cities extends much further. Trakbin is being developed with a broader vision of
              connecting physical infrastructure, service providers, communities and public
              institutions through technology.
            </p>
            <p>
              Our long-term development includes connected waste infrastructure, recycling
              networks, environmental monitoring, sanitation services, infrastructure
              intelligence and AI-assisted operations.
            </p>
            <p>
              By connecting activities on the ground with structured digital information, we
              aim to make essential urban services more visible, measurable and coordinated.
            </p>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <Icon name="globe" className="h-6 w-6 shrink-0 text-brand-400" />
              <p className="font-display text-lg font-bold text-white">
                We are building from individual communities towards connected cities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}