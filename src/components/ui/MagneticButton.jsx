import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  ariaLabel,
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  const handleMove = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 select-none";

  const variants = {
    primary: "bg-ink text-base-100 hover:bg-signal hover:text-ink",
    ghost:
      "border border-line text-ink hover:border-signal/60 hover:text-signal-bright",
  };

  const Comp = href ? motion.a : motion.button;

  return (
    <Comp
      ref={ref}
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      type={href ? undefined : type}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Comp>
  );
}
