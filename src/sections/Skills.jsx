import { motion } from "framer-motion";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { skillGroups, levelWeight } from "../data/skills";

const levelColor = {
  Familiar: "bg-ink-faint",
  Intermediate: "bg-signal-bright",
  Learning: "bg-ink-soft",
  Exploring: "bg-ink-faint",
};

function SkillCard({ skill }) {
  const weight = levelWeight[skill.level] ?? 0.4;

  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(212,42,56,0.45)" }}
      transition={{ duration: 0.25 }}
      className="group relative rounded-2xl border border-line bg-base-200/50 px-5 py-4 cursor-default"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-ink text-sm md:text-[15px] font-medium">
          {skill.name}
        </span>
        <span className="font-mono text-[10px] text-ink-faint tracking-wide whitespace-nowrap">
          {skill.level}
        </span>
      </div>
      <div className="mt-3 h-1 w-full rounded-full bg-base-400 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${weight * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`h-full rounded-full ${levelColor[skill.level]} group-hover:bg-signal-bright transition-colors`}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto container-px">
        <SectionHeading
          eyebrow="Skills"
          title="What I Work With"
          description="An honest snapshot of where I am today — some areas I'm comfortable in, others I'm actively building."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-x-10 gap-y-14">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.05}>
              <h3 className="font-display text-lg text-ink mb-5">
                {group.title}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
