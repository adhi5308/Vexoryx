import { Reveal, Hairline } from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { caseStudies } from "@/lib/data";

export default function Work() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="pt-16 pb-16">
        <Reveal>
          <p className="text-gold text-sm mb-4">Selected work</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl md:text-5xl max-w-2xl">
            What we've built so far.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-paper/70">
            A short list on purpose — we'd rather show a few real projects
            than pad this page with anything half-finished.
          </p>
        </Reveal>
      </section>

      <Hairline />

      <section className="py-16 space-y-16">
        {caseStudies.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <TiltCard maxTilt={4} className="grid md:grid-cols-2 gap-8 items-center border border-line p-8">
              <div className="aspect-video bg-paper/5 border border-line flex items-center justify-center text-paper/30 text-sm">
                Project image
              </div>
              <div>
                <span className="inline-block text-xs text-gold border border-gold px-3 py-1 mb-4">
                  {c.tag}
                </span>
                <h2 className="font-display text-2xl md:text-3xl mb-3">{c.title}</h2>
                <p className="text-sm text-paper/60 max-w-md">{c.result}</p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
