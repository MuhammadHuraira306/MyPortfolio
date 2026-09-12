import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../../data/navigation";
import { profile } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          marginTop: scrolled ? 12 : 20,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-[92%] md:w-auto flex items-center justify-between md:justify-center gap-2 md:gap-1 rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-line bg-base-200/80 backdrop-blur-xl px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "border-transparent bg-base-200/40 backdrop-blur-md px-4 py-2.5"
        }`}
        aria-label="Primary"
      >
        <a
          href="#home"
          onClick={handleNav("home")}
          className="font-display text-ink font-semibold text-sm tracking-widest px-3 py-1.5 rounded-full hover:text-signal-bright transition-colors"
        >
          {profile.initials}
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.slice(1).map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={handleNav(link.id)}
                aria-current={active === link.id ? "page" : undefined}
                className={`relative px-3.5 py-1.5 rounded-full text-sm transition-colors duration-200 ${
                  active === link.id
                    ? "text-ink"
                    : "text-ink-faint hover:text-ink-soft"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-base-400/90 border border-line -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-line text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="w-4 flex flex-col gap-[5px] items-center">
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="h-[1.5px] w-4 bg-ink block origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="h-[1.5px] w-4 bg-ink block"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="h-[1.5px] w-4 bg-ink block origin-center"
            />
          </div>
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto md:hidden fixed top-20 inset-x-4 rounded-3xl border border-line bg-base-200/95 backdrop-blur-xl p-3 shadow-2xl z-50"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={handleNav(link.id)}
                    className={`block px-4 py-3 rounded-2xl text-base transition-colors ${
                      active === link.id
                        ? "text-ink bg-base-400/70"
                        : "text-ink-soft"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
