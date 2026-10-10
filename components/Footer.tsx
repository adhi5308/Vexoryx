import Link from "next/link";
import { social, companyEmail, team } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-32">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-[1.1fr_0.8fr_0.9fr_1.1fr] gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.png" alt="Vexoryx" className="h-8 w-auto" />
            <span className="font-display text-lg tracking-tight">
              Vexoryx<span className="text-gold">.</span>
            </span>
          </div>
          <p className="text-sm text-paper/60 max-w-xs">
            Software, built to spec. A small studio building web
            applications, SaaS products, and AI-driven features.
          </p>
          <div className="flex gap-3 mt-6">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center border border-line text-xs text-paper/70 hover:border-gold hover:text-gold transition-colors"
              >
                {s.label.slice(0, 2).toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs text-gold mb-3">Pages</p>
          <ul className="space-y-2 text-sm text-paper/70">
            <li><Link href="/about" className="hover:text-paper">About</Link></li>
            <li><Link href="/services" className="hover:text-paper">Services</Link></li>
            <li><Link href="/work" className="hover:text-paper">Work</Link></li>
            <li><Link href="/contact" className="hover:text-paper">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs text-gold mb-3">Contact</p>
          <ul className="space-y-2 text-sm text-paper/70">
            <li>
              <a href={`mailto:${companyEmail}`} className="hover:text-paper">
                {companyEmail}
              </a>
            </li>
            <li>Chennai, India</li>
          </ul>
        </div>

        <div>
          <p className="text-xs text-gold mb-3">Founders</p>
          <ul className="space-y-2 text-sm text-paper/70">
            {team.map((member) => (
              <li key={member.role}>
                <span className="text-paper/90">{member.name}</span>
                <br />
                <a
                  href={`tel:${member.phone.replace(/\s+/g, "")}`}
                  className="hover:text-paper"
                >
                  {member.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs text-paper/40">
          © {new Date().getFullYear()} Vexoryx. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
