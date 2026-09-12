import { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { photo } from "../../data/profile";

/**
 * Attempts to load /images/profile.jpg. If it isn't present, falls back to
 * an intentionally-designed placeholder frame instead of a broken image.
 */
export default function ProfileFrame({ className = "" }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`relative aspect-[4/5] w-full rounded-[28px] overflow-hidden glass-panel ${className}`}
    >
      {!errored && (
        <img
          src={photo.src}
          alt={photo.alt}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {(!loaded || errored) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(120%_100%_at_50%_0%,#161922_0%,#0C0E11_100%)]">
          <div className="w-14 h-14 rounded-full border border-line flex items-center justify-center text-ink-faint">
            <FiCamera size={22} />
          </div>
          <p className="font-mono text-xs tracking-[0.15em] text-ink-faint uppercase">
            [Your Photo Here]
          </p>
          <p className="text-[11px] text-ink-faint/70 px-8 text-center leading-relaxed">
            Add /public/images/profile.jpg to replace this placeholder
          </p>
        </div>
      )}

      <div className="absolute inset-0 border border-white/10 rounded-[28px] pointer-events-none" />
      <div className="absolute -inset-px rounded-[28px] pointer-events-none [box-shadow:inset_0_0_60px_rgba(179,33,46,0.08)]" />
    </div>
  );
}
