import { Reveal, Hairline } from "@/components/Reveal";
import ServiceAccordion from "@/components/ServiceAccordion";
import { services, process } from "@/lib/data";

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="pt-16 pb-16">
        <Reveal>
          <p className="text-gold text-sm mb-4">Services</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl md:text-5xl max-w-2xl">
            Software, built to spec.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-paper/70">
            Describe what you need — a web app, a SaaS product, an AI-driven
            feature, or something that doesn't fit a category at all. We'll
            scope it honestly and build it.
          </p>
        </Reveal>
      </section>

      <section className="pb-24">
        <Reveal>
          <ServiceAccordion rows={services} />
        </Reveal>
      </section>

      <Hairline />

      <section className="py-24">
        <Reveal>
          <p className="text-gold text-sm mb-3">Workflow</p>
          <h2 className="font-display text-2xl md:text-3xl mb-12">How we work</h2>
        </Reveal>
        <div className="space-y-0">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.05}>
              <div className="flex gap-6 py-5 border-t border-line items-start">
                <span className="font-display text-2xl text-paper/25 w-10 shrink-0">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-display text-lg">{p.title}</h3>
                  <p className="text-sm text-paper/60 mt-1 max-w-lg">{p.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </section>
    </div>
  );
}
