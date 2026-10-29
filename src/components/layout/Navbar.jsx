
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="home"
          onClick={closeMenu}
          className="font-display text-xl font-bold text-white"
          aria-label="Ouma home"
        >
          Ouma<span className="text-accent"></span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-sm p-2 text-white hover:bg-white/5 md:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-ink px-6 py-3 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block border-b border-white/5 py-3 font-mono text-sm text-muted last:border-b-0 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
