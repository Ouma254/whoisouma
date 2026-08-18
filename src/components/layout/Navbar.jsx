import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Navbar.jsx
 * ---------------------------------------------------------------
 * Sticky nav with anchor links to each section. Since this is a
 * single-page site, links are plain <a href="#id"> rather than
 * react-router — the browser handles smooth scrolling natively
 * when combined with `scroll-behavior: smooth` in index.css.
 * ---------------------------------------------------------------
 */
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-ink/90 backdrop-blur-sm sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-18 py-4">
        <a href="#home" className="font-display font-bold text-white text-lg">
          Ouma<span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted hover:text-accent transition-colors"
            >
              <span className="text-accent">0{i + 1}.</span> {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-ink-light px-6 py-4 flex flex-col gap-4 border-t border-white/5">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-mono text-sm text-muted hover:text-accent transition-colors"
            >
              <span className="text-accent">0{i + 1}.</span> {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}