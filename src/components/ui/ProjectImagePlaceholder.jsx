import { useState } from "react";
import { FiImage } from "react-icons/fi";

export default function ProjectImagePlaceholder({ src, alt, label }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-3xl bg-base-300">
      {!errored && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {(!loaded || errored) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#161922_0%,#0C0E11_100%)]">
          <div className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-ink-faint">
            <FiImage size={18} />
          </div>
          <p className="font-mono text-[11px] tracking-[0.12em] text-ink-faint">
            [{label}]
          </p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-base-100/60 via-transparent to-transparent" />
    </div>
  );
}
