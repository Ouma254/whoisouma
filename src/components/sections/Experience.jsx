
import SectionHeading from "../ui/SectionHeading";

const EXPERIENCE = [
  {
    role: "Founder & Owner",
    org: "SKIhub Labs",
    period: "Ongoing",
    points: [
      "Lead a technology and digital-skills initiative focused on software development, cybersecurity, and IoT.",
      "Develop practical training programs, technical projects, and structured learning materials.",
      "Coordinate training activities and mentor learners through hands-on projects.",
      "Guide technical and product decisions across SKIhub initiatives.",
    ],
  },
  {
    role: "Cybersecurity Researcher",
    org: "SKIhub Labs",
    period: "Ongoing",
    points: [
      "Research security issues involving software, operating systems, and emerging technologies.",
      "Investigate technical security problems and evaluate practical solutions.",
      "Support cybersecurity learning and research-oriented student projects.",
    ],
  },
  {
    role: "Software Developer",
    org: "Seed Magazine",
    period: "Freelance",
    points: [
      "Develop software for magazine subscription and management workflows.",
      "Work across application interfaces, backend functionality, and database systems.",
      "Design relational database structures for subscribers, subscriptions, invoices, payments, and deliveries.",
      "Implement application features and integrate APIs.",
    ],
  },
  {
    role: "Software Developer",
    org: "Modcom Institute of Technology",
    period: "2026 – Present",
    points: [
      "Develop software applications and backend functionality.",
      "Work with databases, API integration, and web technologies.",
      "Contribute to implementation, testing, and technical problem-solving.",
    ],
  },
  {
    role: "Cybersecurity Researcher",
    org: "Felcode Academy",
    period: "Ongoing",
    points: [
      "Conduct cybersecurity research and technical investigations.",
      "Support practical cybersecurity training and research activities.",
      "Guide learners working on cybersecurity projects.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-20 sm:py-24"
    >
      <SectionHeading title="Professional Experience" />

      <div className="mt-10">
        {EXPERIENCE.map((job) => (
          <article
            key={`${job.role}-${job.org}`}
            className="grid gap-3 border-t border-white/10 py-7 md:grid-cols-[190px_1fr] md:gap-10 md:py-8"
          >
            <p className="text-sm text-muted">
              {job.period}
            </p>

            <div>
              <h3 className="font-display text-lg font-semibold leading-snug text-white">
                {job.role}
              </h3>

              <p className="mt-1 text-sm text-accent">
                {job.org}
              </p>

              <ul className="mt-5 space-y-3">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm leading-7 text-muted"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
