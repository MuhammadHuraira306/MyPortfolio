import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto container-px">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've Worked"
          description="Consulting and project work that shaped how I approach real-world development."
        />

        <div className="mt-16 relative">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-line" />

          <div className="space-y-14">
            {experience.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 0.08} className="relative pl-10 md:pl-12">
                <span className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-base-100 border-2 border-signal-bright" />

                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl md:text-2xl text-ink">
                    {exp.org}
                  </h3>
                  <span className="font-mono text-xs text-ink-faint">
                    {exp.type}
                  </span>
                </div>
                <p className="text-signal-bright text-sm mt-1">{exp.role}</p>

                {exp.description && (
                  <p className="mt-3 text-ink-soft text-sm md:text-base max-w-2xl leading-relaxed">
                    {exp.description}
                  </p>
                )}

                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="text-xs md:text-[13px] text-ink-soft border border-line rounded-full px-3 py-1.5"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
