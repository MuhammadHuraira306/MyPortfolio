import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Wraps children in a subtle, professional fade/rise reveal on scroll into view.
 * Disabled automatically when the user prefers reduced motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 20,
  className = "",
  as = "div",
  once = true,
}) {
  const reduced = useReducedMotion();
  const Comp = motion[as] || motion.div;

  if (reduced) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
}
