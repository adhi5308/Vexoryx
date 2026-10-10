"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Vexoryx" className="h-8 w-auto" />
          <span className="font-display text-lg tracking-tight">
            Vexoryx<span className="text-gold">.</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors ${
                  active ? "text-gold" : "text-paper/70 hover:text-paper"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="hidden md:inline-block border border-gold text-gold text-sm px-4 py-2 hover:bg-gold hover:text-ink transition-colors"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
}
