import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "../ui/Button";

/**
 * Contact.jsx
 * ---------------------------------------------------------------
 * Simple closing CTA.
 * ---------------------------------------------------------------
 */
export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-2xl mx-auto text-center">
      <p className="font-mono text-accent text-sm mb-4">05. What's Next?</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
        Get In Touch
      </h2>
      <p className="text-muted leading-relaxed mb-10">
        Whether you have a project in mind, want to collaborate, or just want
        to talk about cybersecurity, IoT, or software — my inbox is open.
      </p>

      <Button variant="solid" href="mailto:your@email.com" className="mx-auto">
        <Mail size={16} className="mr-2" />
        Say Hello
      </Button>

      <div className="flex items-center justify-center gap-6 mt-12">
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={20} />
        </a>
        
        <a
          href="https://linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </section>
  );
}