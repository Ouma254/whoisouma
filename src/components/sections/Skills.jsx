import SectionHeading from "../ui/SectionHeading";

/**
 * Skills.jsx
 * ---------------------------------------------------------------
 * Technical toolbox — kept intentionally lean since Experience.jsx
 * now carries the real narrative of what was built and where.
 * This section exists for quick scanning, not storytelling.
 * ---------------------------------------------------------------
 */
const SKILL_GROUPS = [
  {
    category: "Backend & APIs",
    skills: ["Python", "FastAPI", "Django / DRF", "SQLAlchemy", "JWT authentication", "REST API design"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "JavaScript / TypeScript"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "Schema design", "Migrations (Alembic)"],
  },
  {
    category: "Linux & Systems",
    skills: ["Linux administration", "Bash scripting", "SSH & server administration", "Docker"],
  },
  {
    category: "Cybersecurity & Networking",
    skills: ["Vulnerability assessment", "Nmap", "Burp Suite", "TCP/IP & network troubleshooting"],
  },
  {
    category: "IoT & Hardware",
    skills: ["Arduino", "ESP32 family", "Sensor interfacing (I2C, GPIO)", "PlatformIO"],
  },
  {
    category: "DevOps & Tooling",
    skills: ["Git & GitHub", "Docker Compose", "Vercel deployment"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="02" title="Technical Toolbox" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.category}
            className="bg-surface rounded-xl p-5 border border-white/5 hover:border-accent/40 transition-colors"
          >
            <h3 className="font-mono text-sm text-accent mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-muted bg-white/5 px-2.5 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}