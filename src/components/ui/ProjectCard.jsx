import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import ProjectImagePlaceholder from "./ProjectImagePlaceholder";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: reduced ? 0 : rotateX,
        rotateY: reduced ? 0 : rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl border border-line bg-base-200/40 overflow-hidden hover:border-signal/40 transition-colors duration-300 flex flex-col h-full"
    >
      <ProjectImagePlaceholder
        src={project.image}
        alt={`${project.title} preview`}
        label={project.imageLabel}
      />

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="font-mono text-xs text-ink-faint">{project.index}</span>
            <h3 className="font-display text-xl md:text-2xl text-ink mt-1">
              {project.title}
            </h3>
          </div>
          {project.status && (
            <span className="text-[11px] font-mono text-signal-bright border border-signal/30 rounded-full px-3 py-1 whitespace-nowrap">
              {project.status}
            </span>
          )}
        </div>

        <p className="mt-4 text-ink-soft text-sm md:text-[15px] leading-relaxed">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono text-ink-faint border border-line rounded-full px-2.5 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-ink-soft">
          {project.features.slice(0, 6).map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="mt-2 w-1 h-1 rounded-full bg-signal-bright shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 flex items-center gap-3">
          <button
            type="button"
            disabled={!project.links.live}
            className="inline-flex items-center gap-1.5 text-sm text-ink border border-line rounded-full px-4 py-2 disabled:opacity-40 disabled:cursor-not-allowed hover:border-signal/50 hover:text-signal-bright transition-colors"
            title={!project.links.live ? "Live link not published yet" : undefined}
          >
            View Project <FiArrowUpRight size={14} />
          </button>
          <button
            type="button"
            disabled={!project.links.github}
            className="inline-flex items-center gap-1.5 text-sm text-ink-soft border border-line rounded-full px-4 py-2 disabled:opacity-40 disabled:cursor-not-allowed hover:border-signal/50 hover:text-signal-bright transition-colors"
            title={!project.links.github ? "Repository not linked yet" : undefined}
          >
            <FiGithub size={14} /> Code
          </button>
        </div>
      </div>
    </motion.article>
  );
}
