import { lazy, Suspense } from "react";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import ProfileFrame from "../components/ui/ProfileFrame";
import { profile } from "../data/profile";

const AmbientCrystal = lazy(() => import("../components/three/AmbientCrystal"));

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto container-px grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading eyebrow="About" title="Who I Am" />
          <Reveal delay={0.15}>
            <p className="mt-8 text-ink-soft text-base md:text-lg leading-relaxed max-w-lg">
              {profile.about}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {profile.aboutFocus.map((focus) => (
                <span
                  key={focus}
                  className="text-sm text-ink-soft border border-line rounded-full px-4 py-1.5 hover:border-signal/50 hover:text-ink transition-colors"
                >
                  {focus}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 grid grid-cols-2 gap-6 max-w-sm">
              <div>
                <p className="font-display text-2xl text-ink">NUST</p>
                <p className="text-ink-faint text-sm mt-1">
                  BS Computer Science, {profile.started}
                </p>
              </div>
              <div>
                <p className="font-display text-2xl text-ink">{profile.location}</p>
                <p className="text-ink-faint text-sm mt-1">Based in</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="absolute -inset-10 -z-10 opacity-60 hidden md:block">
            <Suspense fallback={null}>
              <AmbientCrystal className="w-full h-full" />
            </Suspense>
          </div>
          <ProfileFrame className="max-w-sm mx-auto" />
        </Reveal>
      </div>
    </section>
  );
}
