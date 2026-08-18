import SectionHeading from "../ui/SectionHeading";

/**
 * Experience.jsx
 * ---------------------------------------------------------------
 * Timeline of roles.
 * ---------------------------------------------------------------
 */
const EXPERIENCE = [
  {
    role: "Founder & Instructor",
    org: "Felcode Academy",
    period: "Ongoing",
    points: [
      "Design and deliver cybersecurity, networking, and IoT curricula",
      "Supervise student projects from concept through technical execution",
      "Teach practical, hands-on programming and systems courses",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    org: "Independent",
    period: "Ongoing",
    points: [
      "Build and deploy production web applications for clients (e.g. Kodich VTC, Seed Magazine)",
      "Design relational database schemas for subscription, LMS, and e-commerce systems",
      "Handle full project lifecycle — requirements, architecture, development, deployment",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="04" title="Experience" />

      <div className="space-y-10">
        {EXPERIENCE.map((job) => (
          <div key={job.role} className="grid md:grid-cols-4 gap-4">
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