import { motion } from "framer-motion";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { exploring } from "../data/achievements";

export default function Exploring() {
  return (
    <section className="relative py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto container-px">
        <SectionHeading eyebrow="Currently Exploring" title="Where My Curiosity Is Going" />

        <div className="mt-14 border-t border-line">
          {exploring.map((item, i) => (
            <Reveal key={item.index} delay={i * 0.04}>
              <motion.div
                whileHover={{ paddingLeft: 16 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center justify-between gap-6 py-5 border-b border-line cursor-default"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-sm text-ink-faint w-8">
                    {item.index}
                  </span>
                  <span className="font-display text-lg md:text-2xl text-ink-soft group-hover:text-ink transition-colors">
                    {item.title}
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-line group-hover:bg-signal-bright transition-colors shrink-0" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
