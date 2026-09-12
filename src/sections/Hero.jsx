import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import MagneticButton from "../components/ui/MagneticButton";
import { profile } from "../data/profile";
import { useReducedMotion } from "../hooks/useReducedMotion";

const HeroScene = lazy(() => import("../components/three/HeroScene"));

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_35%,rgba(179,33,46,0.14),transparent)]" />
      <div className="absolute inset-0 bg-grain" />

      {!reduced && (
        <Suspense fallback={null}>
          <div className="absolute inset-y-0 right-0 w-full md:w-[62%] opacity-90">
            <HeroScene />
          </div>
        </Suspense>
      )}

      <div className="relative z-10 max-w-content w-full mx-auto container-px pt-28 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-base-200/60 backdrop-blur-md px-4 py-1.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-bright" />
            </span>
            <span className="font-mono text-xs text-ink-soft tracking-wide">
              {profile.status}
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="font-display text-ink-soft text-lg md:text-xl mb-3"
          >
            {profile.heroLine1}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.05] font-medium text-ink text-balance"
          >
            {profile.heroLine2}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-ink-soft text-base md:text-lg max-w-lg leading-relaxed"
          >
            {profile.heroSupport}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="primary"
            >
              View my work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="ghost"
            >
              Let's connect
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink-faint">
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <motion.span
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-ink-faint to-transparent"
        />
      </div>
    </section>
  );
}
