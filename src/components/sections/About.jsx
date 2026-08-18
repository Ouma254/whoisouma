import SectionHeading from "../ui/SectionHeading";

/**
 * About.jsx
 * ---------------------------------------------------------------
 * Short narrative bio + a quick-glance "current focus" list.
 * ---------------------------------------------------------------
 */
const CURRENT_FOCUS = [
  "Building production APIs with FastAPI and Django REST Framework",
  "Architecting relational schemas for LMS, subscription, and magazine platforms",
  "Teaching cybersecurity, networking, and IoT at Felcode Academy",
  "Prototyping sensor-based systems on ESP32 and Arduino",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading number="01" title="About Me" />

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-muted leading-relaxed">
          <p>
            I'm a full-stack developer and technology educator based in
            Kenya. My work sits at the intersection of software engineering,
            cybersecurity, and hardware — I don't just learn a technology in
            isolation, I build something real with it and, often, teach it to
            someone else afterward.
          </p>
          <p>
            On the software side, I work primarily in Python (FastAPI,
            Django) and React, backed by PostgreSQL — building systems like
            learning management platforms, subscription services, and
            e-commerce APIs from schema design through deployment. I'm
            equally comfortable in a terminal: Linux administration, Docker,
            and networking are daily tools, not occasional ones.
          </p>
          <p>
            Alongside development, I run Felcode Academy, teaching
            cybersecurity and IoT curricula — and I take on freelance
            full-stack projects for clients who need real, working software,
            not just prototypes.
          </p>
        </div>

        <div>
          <p className="font-mono text-sm text-accent mb-4">Currently focused on:</p>
          <ul className="space-y-3">
            {CURRENT_FOCUS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted">
                <span className="text-accent mt-1 shrink-0">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}