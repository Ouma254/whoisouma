import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import SectionHeading from "../ui/SectionHeading";

/**
 * Projects.jsx
 * ---------------------------------------------------------------
 * Featured project cards.
 * ---------------------------------------------------------------
 */
const PROJECTS = [
  {
    name: "SKIhub",
    description:
      "A digital learning platform built with FastAPI, PostgreSQL, and Next.js — designed as a full LMS with structured course delivery and user management.",
    tech: ["FastAPI", "PostgreSQL", "Next.js"],
    repo: null,
    live: null,
  },
  {
    name: "Fashionest",
    description:
      "A Flask-based fashion e-commerce API with integrated M-PESA payment support, covering product catalog, cart, and order flows end to end.",
    tech: ["Flask", "M-PESA API", "PostgreSQL"],
    repo: null,
    live: null,
  },
  {
    name: "Seed Magazine Subscription System",
    description:
      "A full-stack subscription platform built for the Consolata Missionaries' Seed Magazine — managing subscriber records, renewals, and distribution.",
    tech: ["Full-stack", "PostgreSQL"],
    repo: null,
    live: null,
  },
  {
    name: "Kodich VTC",
    description:
      "A full-stack site built for freelance client Kodich VTC, covering their public-facing presence and core content management needs.",
    tech: ["React", "Full-stack"],
    repo: null,
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="03" title="Featured Projects" />

      <div className="grid sm:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="bg-surface rounded-xl p-6 border border-white/5 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-display text-lg font-bold text-white">
                {project.name}
              </h3>
              <div className="flex items-center gap-3 shrink-0">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} repository`}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} live site`}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-muted leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs text-accent bg-accent/10 px-2.5 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}