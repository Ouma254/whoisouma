
import SectionHeading from "../ui/SectionHeading";

const SKILL_GROUPS = [
  {
    category: "Backend Development",
    skills: [
      "Python",
      "FastAPI",
      "Django REST Framework",
      "SQLAlchemy",
      "JWT Authentication",
      "REST API Design",
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Database Design",
      "SQL",
      "Alembic Migrations",
    ],
  },
  {
    category: "Linux & Systems",
    skills: [
      "Linux Administration",
      "Bash Scripting",
      "SSH",
      "Server Administration",
      "Docker",
    ],
  },
  {
    category: "Security & Networking",
    skills: [
      "Vulnerability Assessment",
      "Nmap",
      "Burp Suite",
      "TCP/IP",
      "Network Troubleshooting",
    ],
  },
  {
    category: "IoT & Embedded Systems",
    skills: [
      "Arduino",
      "ESP32",
      "Sensor Interfacing",
      "I2C",
      "GPIO",
      "PlatformIO",
    ],
  },
  {
    category: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker Compose",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-20 sm:py-24"
    >
      <SectionHeading title="Technical Skills" />

      <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <article
            key={group.category}
            className="border-t border-white/10 px-5 py-6 first:pt-6 sm:odd:border-r sm:odd:pr-7 sm:even:pl-7 lg:border-r lg:px-6 lg:py-7 lg:nth-[3n]:border-r-0"
          >
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white">
              {group.category}
            </h3>

            <ul className="flex flex-wrap gap-x-2 gap-y-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm leading-6 text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
