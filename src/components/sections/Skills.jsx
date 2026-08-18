import SectionHeading from "../ui/SectionHeading";

/**
 * Skills.jsx
 * ---------------------------------------------------------------
 * Skills grouped into scannable categories.
 * ---------------------------------------------------------------
 */
const SKILL_GROUPS = [
  {
    category: "Backend & APIs",
    skills: ["Python", "FastAPI", "Django / DRF", "SQLAlchemy", "Pydantic", "REST API design", "JWT authentication"],
  },
  {
    category: "Frontend",
    skills: ["React", "Vite", "JavaScript / TypeScript", "Tailwind CSS", "Responsive UI development"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "Schema design", "Database migrations (Alembic)", "Dockerized PostgreSQL"],
  },
  {
    category: "Linux & Systems",
    skills: ["Linux administration (Fedora, Arch, Ubuntu)", "Bash scripting", "systemd", "SSH & server administration", "Docker"],
  },
  {
    category: "Cybersecurity & Networking",
    skills: ["Ethical hacking fundamentals", "Vulnerability assessment", "Nmap", "Burp Suite", "TCP/IP & network troubleshooting", "Firewall configuration"],
  },
  {
    category: "IoT & Hardware",
    skills: ["Arduino (Mega, Nano 33 IoT)", "ESP32 / ESP32-S3 / ESP32-C6", "Raspberry Pi", "Sensor interfacing (I2C, GPIO)", "PlatformIO"],
  },
  {
    category: "DevOps & Tooling",
    skills: ["Git & GitHub", "Docker & Docker Compose", "Vercel deployment", "Environment configuration"],
  },
  {
    category: "Teaching & Research",
    skills: ["Curriculum development", "Cybersecurity & IoT instruction", "Student project supervision", "Technical documentation"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="02" title="Skills & Tools" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.category}
            className="bg-surface rounded-xl p-6 border border-white/5 hover:border-accent/40 transition-colors"
          >
            <h3 className="font-mono text-sm text-accent mb-4">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.skills.map((skill) => (
                <li key={skill} className="text-sm text-muted leading-snug">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}