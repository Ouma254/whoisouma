
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import SectionHeading from "../ui/SectionHeading";

const PROJECTS = [
  {
    name: "SKIhub",
    description:
      "A digital learning platform built around structured course delivery and user management, using FastAPI, PostgreSQL, and Next.js.",
    tech: ["FastAPI", "PostgreSQL", "Next.js"],
    repo: null,
    live: null,
  },
  {
    name: "Fashionest",
    description:
      "A fashion e-commerce API covering product catalog management, shopping carts, orders, and M-PESA payment integration.",
    tech: ["Flask", "PostgreSQL", "M-PESA API"],
    repo: null,
    live: null,
  },
  {
    name: "Seed Magazine Subscription System",
    description:
      "A subscription management platform for Seed Magazine, supporting subscriber records, renewals, and distribution workflows.",
    tech: ["Full-stack Development", "PostgreSQL"],
    repo: null,
    live: null,
  },
  {
    name: "Kodich VTC",
    description:
      "A website developed for a vocational training centre, providing a public-facing platform for its information and content.",
    tech: ["React", "Full-stack Development"],
    repo: null,
    live: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-20 sm:py-24"
    >
      <SectionHeading title="Selected Projects" />

      <div className="mt-10 grid gap-x-10 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <article
            key={project.name}
            className="flex flex-col border-t border-white/10 py-7 sm:py-8"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="font-display text-lg font-semibold leading-snug text-white">
                {project.name}
              </h3>

              <div className="flex shrink-0 items-center gap-4">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source code on GitHub`}
                    className="text-muted hover:text-white"
                  >
                    <FaGithub size={19} />
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name} website`}
                    className="text-muted hover:text-white"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="mb-5 text-sm leading-7 text-muted">
              {project.description}
            </p>

            <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2">
              {project.tech.map((technology) => (
                <li
                  key={technology}
                  className="text-xs text-muted"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
