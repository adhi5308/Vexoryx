import Link from "next/link";
import { Reveal, Hairline, StampIndex } from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { services } from "@/lib/data";
import HeroSignal from "@/components/HeroSignal";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <section className="hero-section pt-20 pb-28">
        <HeroSignal />
        <Reveal>
          <p className="eyebrow text-gold text-sm tracking-wide mb-6">Software studio <span>•</span> Chennai, India</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.1] max-w-3xl">
            We build the software you describe.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="outline-text font-display text-4xl md:text-6xl leading-[1.1] max-w-3xl mt-2">
            Not the one we'd rather sell you.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-paper/70">
            Vexoryx is a small studio of four engineers. No fixed product, no
            templated package — we take a brief, ask the questions that
            matter, and build the application, site, or system it actually
            needs.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className="bg-gold text-ink px-6 py-3 text-sm font-medium hover:bg-goldsoft transition-colors"
            >
              Start a project
            </Link>
            <Link
              href="/work"
              className="border border-line px-6 py-3 text-sm hover:border-gold hover:text-gold transition-colors"
            >
              See our work
            </Link>
          </div>
        </Reveal>
      </section>

      <Hairline />

      {/* Services teaser */}
      <section className="py-24">
        <Reveal>
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="font-display text-2xl md:text-3xl">What we build</h2>
            <Link href="/services" className="text-sm text-gold hover:underline">
              All services
            </Link>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.index} delay={i * 0.05}>
              <TiltCard className="border border-line p-6 h-full">
                <StampIndex index={s.index} />
                <h3 className="font-display text-xl mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-paper/60">{s.detail}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Hairline />

      {/* Facts strip */}
      <section className="py-24 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Engineers", value: "4" },
          { label: "Based in", value: "Chennai" },
          { label: "Engagement", value: "Fixed or ongoing" },
          { label: "Reply time", value: "2 business days" },
        ].map((f, i) => (
          <Reveal key={f.label} delay={i * 0.05}>
            <div>
              <div className="font-display text-2xl md:text-3xl text-gold">{f.value}</div>
              <div className="text-xs text-paper/50 mt-1">{f.label}</div>
            </div>
          </Reveal>
        ))}
      </section>

      <Hairline />

      <section className="py-24 md:py-32 process-section">
        <Reveal>
          <p className="text-gold text-sm tracking-wide mb-5">From thought to working system</p>
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl">A clear path from the first brief to something real.</h2>
        </Reveal>
        <div className="process-grid mt-14">
          {[
            ["01", "Listen", "The brief, the constraints, and the questions under the question."],
            ["02", "Shape", "A practical scope and a system that has room to grow."],
            ["03", "Build", "Small releases, direct feedback, no layers between you and the work."],
            ["04", "Launch", "A finished product, handed over with everything you need."],
          ].map(([number, title, copy], i) => (
            <Reveal key={number} delay={i * 0.08}>
              <article className="process-step">
                <span>{number}</span>
                <h3 className="font-display text-2xl mt-8">{title}</h3>
                <p className="text-sm text-paper/60 mt-3">{copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
