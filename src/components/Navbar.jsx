import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-ink/10 bg-cream/75 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="focus-ring rounded-full font-serif text-2xl font-semibold tracking-tight">KM</a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="focus-ring rounded-full text-sm uppercase tracking-[0.22em] text-muted transition hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>

        <a href="mailto:kaoumo@hotmail.com" className="focus-ring hidden rounded-full border border-ink/20 px-5 py-2 text-sm transition hover:border-ink hover:bg-ink hover:text-cream md:inline-flex">
          Email Me
        </a>

        <button type="button" aria-label="Toggle menu" className="focus-ring rounded-full border border-ink/15 p-2 md:hidden" onClick={() => setIsOpen((value) => !value)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-ink/10 bg-cream/95 px-4 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="focus-ring rounded-xl px-3 py-2 text-sm uppercase tracking-[0.2em] text-muted" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="mailto:kaoumo@hotmail.com" className="focus-ring rounded-xl bg-ink px-3 py-3 text-center text-sm text-cream">Email Me</a>
          </div>
        </div>
      )}
    </header>
  );
}
