import Reveal from "../components/ui/Reveal";
import { profile } from "../data/profile";

export default function Statement() {
  return (
    <section className="relative py-28 md:py-40 border-t border-line">
      <div className="max-w-content mx-auto container-px">
        <Reveal>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl text-ink text-center max-w-3xl mx-auto leading-snug text-balance">
            "{profile.statement}"
          </p>
        </Reveal>
      </div>
    </section>
  );
}
