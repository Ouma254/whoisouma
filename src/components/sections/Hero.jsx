
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "../ui/Button";

const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    href: "https://github.com/Ouma254",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/denis-ouma-254do",
    label: "LinkedIn",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[85vh] max-w-6xl items-center px-6 py-24 sm:min-h-[90vh] sm:py-28"
    >
      <div className="max-w-4xl">
        <p className="mb-6 text-sm font-medium tracking-wide text-accent">
          Software Developer & Technology Educator
        </p>

        <h1 className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-7xl lg:text-5xl">
          Ouma Denis<span className="text-accent"></span>
        </h1>

        <h2 className="mt-6 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-muted sm:text-4xl lg:text-5xl">
          Engineering reliable software for practical problems.
        </h2>

        <p className="mt-7 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
          I'm a Kenya-based developer focused on Python, backend APIs,
          and PostgreSQL. My work also spans React applications,
          mobile development, Linux systems, cybersecurity, and
          embedded IoT projects using Arduino and ESP32.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-5">
          <Button variant="primary" href="#projects">
            Explore Projects
          </Button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent"
          >
            Get in Touch
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-5 border-t border-white/10 pt-6">
          <span className="text-xs text-muted">
            Find me online
          </span>

          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted hover:text-white"
                >
                  <Icon size={19} />
                </a>
              );
            })}

            <a
              href="mailto:oumadeni33@gmail.com"
              aria-label="Send an email"
              className="text-muted hover:text-white"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
