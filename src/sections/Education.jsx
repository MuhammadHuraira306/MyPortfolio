import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { education } from "../data/achievements";

export default function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto container-px">
        <SectionHeading eyebrow="Education" title="Academic Path" />

        <div className="mt-16 max-w-2xl relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
          <div className="space-y-12">
            {education.map((edu, i) => (
              <Reveal key={edu.id} delay={i * 0.08} className="relative pl-10">
                <span className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-base-100 border-2 border-signal-bright" />
                <p className="font-mono text-xs text-signal-bright tracking-wide">
                  {edu.period}
                </p>
                <h3 className="font-display text-xl md:text-2xl text-ink mt-2">
                  {edu.institute}
                </h3>
                <p className="text-ink-soft text-sm md:text-base mt-1">
                  {edu.program} · {edu.location}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
