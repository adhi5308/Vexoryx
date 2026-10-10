import { Reveal, Hairline } from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import TeamPhoto from "@/components/TeamPhoto";
import { team } from "@/lib/data";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="pt-16 pb-20">
        <Reveal>
          <p className="text-gold text-sm mb-4">The team</p>
        </Reveal>
        <TiltCard maxTilt={6} className="inline-block">
          <Reveal delay={0.05}>
            <h1 className="font-display text-4xl md:text-5xl max-w-2xl">We are</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="outline-text font-display text-4xl md:text-5xl max-w-2xl mt-1">
              Vexoryx.
            </h2>
          </Reveal>
        </TiltCard>
        <Reveal delay={0.18}>
          <p className="mt-8 max-w-xl text-paper/70">
            Four engineers, one project at a time. We keep the team small on
            purpose — whoever you talk to about your project is one of the
            people building it, not a layer between you and the work.
          </p>
        </Reveal>
      </section>

      <Hairline />

      <section className="py-20">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl mb-10">Who we are</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <Reveal key={member.role} delay={i * 0.06}>
              <TiltCard maxTilt={5} className="border border-line p-4">
                <TeamPhoto photo={member.photo} initials={member.initials} />
                <h3 className="font-display text-lg mt-4">{member.name}</h3>
                <p className="text-xs text-gold mt-0.5">{member.role}</p>
                <p className="text-sm text-paper/60 mt-1">{member.detail}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Hairline />

      <section className="py-20 grid md:grid-cols-2 gap-10">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl mb-4">How we think</h2>
          <p className="text-paper/70 text-sm max-w-md">
            We'd rather ship something small and real than promise something
            large and vague. Every engagement starts with a written scope, not
            a sales deck.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="space-y-4 text-sm">
            <li className="border-l border-gold pl-4">
              <strong className="text-paper">Built, not templated.</strong>{" "}
              <span className="text-paper/60">Every project starts from the actual brief, not a starter kit.</span>
            </li>
            <li className="border-l border-gold pl-4">
              <strong className="text-paper">Direct access.</strong>{" "}
              <span className="text-paper/60">You talk to the person building your software.</span>
            </li>
            <li className="border-l border-gold pl-4">
              <strong className="text-paper">Honest scope.</strong>{" "}
              <span className="text-paper/60">We tell you what's realistic before we tell you what sounds good.</span>
            </li>
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
