/**
 * Button.jsx
 * ---------------------------------------------------------------
 * Shared CTA button. variant "primary" is outlined (default),
 * "solid" is filled — used for the one or two highest-priority
 * actions on the page (e.g. "View My Work", resume download).
 * ---------------------------------------------------------------
 */
export default function Button({ children, variant = "primary", href, onClick, className = "" }) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-md font-mono text-sm font-medium transition-all duration-200";

  const variants = {
    primary: "border border-accent text-accent hover:bg-accent/10",
    solid: "bg-accent text-ink hover:bg-accent-dark",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}