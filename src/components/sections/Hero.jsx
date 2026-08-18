import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "../ui/Button";

// -----------------------------------------------------------------
// Brand icons (GitHub, LinkedIn) come from react-icons/fa6, not
// lucide-react — Lucide removed trademarked brand logos from its
// core icon set.
// -----------------------------------------------------------------
const SOCIAL_LINKS = [
  { icon: FaGithub, href: "https://github.com/YOUR_USERNAME", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/YOUR_USERNAME", label: "LinkedIn" },
  { icon: Mail, href: "mailto:your@email.com", label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto"
    >
      <p className="text-accent font-mono text-sm mb-4">Hi, my name is</p>

      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
        Ouma.
      </h1>
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-muted leading-tight mt-2">
        I build systems — software, security, and hardware.
      </h2>

      <p className="mt-6 text-muted max-w-xl leading-relaxed">
        Full-stack developer and technology educator based in Kenya. I build
        production web systems with Python, FastAPI, React, and PostgreSQL,
        work across Linux and cybersecurity, prototype IoT devices on ESP32
        and Arduino, and teach all of it at Felcode Academy.
      </p>

      <div className="flex items-center gap-6 mt-8">
        <Button variant="primary" href="#projects">
          View My Work
        </Button>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted hover:text-accent transition-colors"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>

      <a
        href="#about"
        className="mt-16 text-muted hover:text-accent transition-colors animate-bounce w-fit"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}