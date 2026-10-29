
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-5xl border-t border-line px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 font-mono text-sm text-accent">
          Have a project in mind?
        </p>

        <h2
          id="contact-heading"
          className="mb-6 font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl"
        >
          Let's build something useful.
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-base leading-8 text-muted md:text-lg">
          I’m interested in web development, backend APIs, and practical
          software solutions. If you have a project, an opportunity, or an
          idea worth exploring, let's talk.
        </p>

        <Button
          variant="solid"
          href="mailto:oumadeni33@gmail.com"
          className="mx-auto"
        >
          <Mail size={16} className="mr-2" aria-hidden="true" />
          Get in touch
        </Button>

        <div className="mt-12 flex items-center justify-center gap-7">
          <a
            href="https://github.com/Ouma254"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <FaGithub size={21} aria-hidden="true" />
          </a>

          <a
            href="https://linkedin.com/in/denis-ouma-254do"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <FaLinkedin size={21} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
