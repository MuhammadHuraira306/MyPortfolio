import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center mx-auto" : ""}>
      {eyebrow && (
        <Reveal>
          <p className="section-label mb-4">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-ink text-balance tracking-tight">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={`mt-4 text-ink-soft text-base md:text-lg max-w-xl ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
