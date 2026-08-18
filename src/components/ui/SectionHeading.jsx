/**
 * SectionHeading.jsx
 * ---------------------------------------------------------------
 * Consistent numbered-heading pattern used across every section:
 * a small numeral, a title, and a line extending to the right —
 * a common developer-portfolio convention.
 * ---------------------------------------------------------------
 */
export default function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
        <span className="text-accent font-mono text-lg md:text-xl mr-2">
          {number}.
        </span>
        {title}
      </h2>
      <span className="h-px bg-white/10 flex-1" />
    </div>
  );
}