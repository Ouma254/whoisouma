
import SectionHeading from "../ui/SectionHeading";

const SPECIALIZATIONS = [
  {
    title: "Backend Engineering",
    description:
      "Python, REST APIs, PostgreSQL, database architecture, and application logic.",
  },
  {
    title: "Mobile Development",
    description:
      "Building practical mobile applications with React Native and TypeScript.",
  },
  {
    title: "Embedded Systems & IoT",
    description:
      "Arduino, ESP32, sensor integration, connected devices, and automation.",
  },
  {
    title: "Systems & Security",
    description:
      "Linux administration, networking, cybersecurity research, and system troubleshooting.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      <SectionHeading title="About Me" />

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
        <div>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Software · Systems · Engineering
          </p>

          <h3 className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            I build software that solves practical problems.
          </h3>

          <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
            <p>
              I'm a software developer and technology educator based
              in Kenya. My work focuses on backend engineering,
              database-driven applications, and the systems that
              make software useful and reliable.
            </p>

            <p>
              I work with Python, API development, PostgreSQL, and
              modern web technologies. From designing data models
              to implementing application logic, I enjoy solving
              problems across the stack and understanding how each
              part fits together.
            </p>

            <p>
              Beyond web development, I explore mobile applications
              and embedded systems, connecting software to sensors,
              devices, and real-world environments. I also teach
              programming, cybersecurity, networking, and IoT,
              translating technical concepts into practical work.
            </p>
          </div>
        </div>

        <div className="lg:pt-2">
          <div className="border-t border-white/15">
            {SPECIALIZATIONS.map((item) => (
              <article
                key={item.title}
                className="border-b border-white/15 py-6"
              >
                <h4 className="font-display text-base font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
