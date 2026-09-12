import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { socials } from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="max-w-content mx-auto container-px py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-ink text-sm">
            © {year} Muhammad Huraira
          </p>
          <p className="text-ink-faint text-sm mt-1">
            Computer Science Student @ NUST
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={socials.linkedin}
            aria-label="LinkedIn"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-line text-ink-soft hover:text-signal-bright hover:border-signal/50 transition-colors"
          >
            <FiLinkedin size={16} />
          </a>
          <a
            href={socials.github}
            aria-label="GitHub"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-line text-ink-soft hover:text-signal-bright hover:border-signal/50 transition-colors"
          >
            <FiGithub size={16} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-line text-ink-soft hover:text-signal-bright hover:border-signal/50 transition-colors"
          >
            <FiMail size={16} />
          </a>
          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Back to top"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-base-400 text-ink hover:bg-signal transition-colors"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
