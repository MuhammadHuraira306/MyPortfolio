import { lazy, Suspense } from "react";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { achievements } from "../data/achievements";

const AwardMedal = lazy(() => import("../components/three/AwardMedal"));

export default function Achievements() {
  const featured = achievements.find((a) => a.featured);
  const rest = achievements.filter((a) => !a.featured);

  return (
    <section id="achievements" className="relative py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto container-px">
        <SectionHeading eyebrow="Achievements" title="Milestones So Far" />

        <div className="mt-16 grid md:grid-cols-5 gap-8 items-center">
          <Reveal className="md:col-span-2 relative">
            <div className="relative rounded-3xl border border-line bg-base-200/50 p-8 flex flex-col items-center text-center overflow-hidden">
              <div className="w-40 h-40 md:w-48 md:h-48">
                <Suspense fallback={null}>
                  <AwardMedal className="w-full h-full" />
                </Suspense>
              </div>
              <p className="font-display text-3xl text-ink mt-2">
                {featured.title}
              </p>
              <p className="text-signal-bright text-sm mt-2">{featured.detail}</p>
              <p className="text-ink-faint text-xs mt-1 font-mono">{featured.meta}</p>
            </div>
          </Reveal>

          <div className="md:col-span-3 grid sm:grid-cols-3 gap-5">
            {rest.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-base-200/40 p-6 hover:border-signal/40 transition-colors">
                  <p className="font-display text-2xl text-ink">{a.title}</p>
                  <p className="text-ink-soft text-sm mt-2">{a.detail}</p>
                  <p className="text-ink-faint text-xs mt-3 font-mono">{a.meta}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
