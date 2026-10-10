import { Reveal, Hairline } from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { companyEmail, team } from "@/lib/data";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="pt-16 pb-16">
        <Reveal>
          <p className="text-gold text-sm mb-4">Get in touch</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl md:text-5xl max-w-xl">
            Tell us what you need built.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-xl text-paper/70">
            Send a short description of the problem and what you're
            picturing. We'll come back with questions, a rough scope, and a
            straight answer on whether we're the right fit.
          </p>
        </Reveal>
      </section>

      <Hairline />

      <section className="py-16 grid md:grid-cols-[1fr_1.4fr] gap-12">
        <Reveal>
          <div className="space-y-8">
            <div>
              <p className="text-xs text-paper/50 mb-1">Email</p>
              <p className="text-sm">{companyEmail}</p>
            </div>
            <div>
              <p className="text-xs text-paper/50 mb-1">Location</p>
              <p className="text-sm">Chennai, India</p>
            </div>
            <div>
              <p className="text-xs text-paper/50 mb-1">Response time</p>
              <p className="text-sm">Within 2 business days</p>
            </div>
            <div>
              <p className="text-xs text-paper/50 mb-3">Founders</p>
              <ul className="space-y-3 text-sm">
                {team.map((member) => (
                  <li key={member.role}>
                    <span className="block">{member.name}</span>
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, "")}`}
                      className="text-paper/60 hover:text-paper"
                    >
                      {member.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </section>
    </div>
  );
}
