import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { journey } from "../data/achievements";

export default function Journey() {
  return (
    <section className="relative py-28 md:py-36 border-t border-line overflow-hidden">
      <div className="max-w-content mx-auto container-px">
        <SectionHeading eyebrow="Journey" title="How I Got Here" />

        <div className="mt-16">
          {/* Mobile: vertical. Desktop: horizontal scroll-free row */}
          <div className="hidden md:grid md:grid-cols-6 gap-4">
            {journey.map((step, i) => (
              <Reveal key={i} delay={i * 0.06} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-full flex items-center">
                    <div
                      className={`h-px flex-1 ${i === 0 ? "bg-transparent" : "bg-line"}`}
                    />
                    <div className="w-2.5 h-2.5 rounded-full bg-signal-bright shrink-0" />
                    <div
                      className={`h-px flex-1 ${
                        i === journey.length - 1 ? "bg-transparent" : "bg-line"
                      }`}
                    />
                  </div>
                  <p className="font-mono text-xs text-signal-bright mt-4">
                    {step.year}
                  </p>
                  <p className="text-ink-soft text-sm mt-2 leading-snug">
                    {step.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="md:hidden relative pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
            <div className="space-y-8">
              {journey.map((step, i) => (
                <Reveal key={i} delay={i * 0.05} className="relative">
                  <span className="absolute -left-8 top-1 w-[15px] h-[15px] rounded-full bg-base-100 border-2 border-signal-bright" />
                  <p className="font-mono text-xs text-signal-bright">{step.year}</p>
                  <p className="text-ink-soft text-sm mt-1">{step.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
