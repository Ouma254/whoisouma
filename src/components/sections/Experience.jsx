import SectionHeading from "../ui/SectionHeading";

/**
 * Experience.jsx
 * ---------------------------------------------------------------
 * Professional experience, treated as real roles with real
 * responsibilities — not a skills list dressed up as a timeline.
 * Update `period` fields with actual date ranges once confirmed.
 * ---------------------------------------------------------------
 */
const EXPERIENCE = [
  {
    role: "Founder & Owner",
    org: "SKIhub Labs",
    period: "Ongoing",
    points: [
      "Founded and lead a technology and digital-skills initiative from the ground up",
      "Develop and coordinate software, cybersecurity, programming, and IoT training activities",
      "Design practical technology projects and structured learning programs",
      "Provide technical mentorship and supervise student projects",
      "Lead product and technology decisions across SKIhub initiatives",
    ],
  },
  {
    role: "Cybersecurity Researcher",
    org: "SKIhub Labs",
    period: "Ongoing",
    points: [
      "Conduct cybersecurity research around software, systems, and emerging technologies",
      "Develop and evaluate cybersecurity research projects",
      "Investigate security problems and translate findings into practical technical solutions",
      "Mentor and guide cybersecurity-related student projects",
    ],
  },
  {
    role: "Software Developer",
    org: "Seed Magazine",
    period: "Freelance engagement",
    points: [
      "Developed software systems for magazine subscription and management workflows",
      "Worked across frontend, backend, and database components",
      "Designed relational database structures for subscribers, subscriptions, payments, invoices, and deliveries",
      "Developed and integrated APIs and application functionality",
    ],
  },
  {
    role: "Software Developer",
    org: "Modcom Institute of Technology",
    period: "Engagement",
    points: [
      "Developed software applications and technical solutions",
      "Worked with web technologies, databases, and backend systems",
      "Participated in practical software-development projects and technical problem solving",
    ],
  },
  {
    role: "Cybersecurity Researcher",
    org: "Felcode Academy",
    period: "Ongoing",
    points: [
      "Conduct cybersecurity research and technical investigations",
      "Support cybersecurity training and practical research activities",
      "Guide learners through cybersecurity projects and research problems",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="04" title="Professional Experience" />

      <div className="space-y-12">
        {EXPERIENCE.map((job) => (
          <div key={`${job.role}-${job.org}`} className="grid md:grid-cols-4 gap-4">
            <p className="font-mono text-sm text-muted">{job.period}</p>

            <div className="md:col-span-3">
              <h3 className="font-display text-lg font-bold text-white">
                {job.role}{" "}
                <span className="text-accent font-normal">@ {job.org}</span>
              </h3>
              <ul className="mt-3 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-accent mt-1 shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}