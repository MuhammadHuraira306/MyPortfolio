import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import MagneticButton from "../components/ui/MagneticButton";
import { profile, socials } from "../data/profile";
import { useContactForm } from "../hooks/useContactForm";

function FormField({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-ink-soft mb-2">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-signal-bright">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const { values, update, errors, status, submit } = useContactForm();

  const inputClass =
    "w-full rounded-xl bg-base-200/60 border border-line px-4 py-3 text-ink placeholder:text-ink-faint focus:border-signal/50 outline-none transition-colors text-sm";

  return (
    <section id="contact" className="relative py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto container-px grid md:grid-cols-2 gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something."
            description={profile.contactIntro}
          />

          <Reveal delay={0.15} className="mt-10 flex flex-col gap-3 max-w-sm">
            <a
              href={socials.linkedin}
              className="flex items-center justify-between rounded-2xl border border-line px-5 py-4 text-ink-soft hover:text-ink hover:border-signal/40 transition-colors group"
            >
              <span className="flex items-center gap-3">
                <FiLinkedin size={18} /> LinkedIn
              </span>
              <FiArrowUpRight
                size={16}
                className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
              />
            </a>
            <a
              href={socials.github}
              className="flex items-center justify-between rounded-2xl border border-line px-5 py-4 text-ink-soft hover:text-ink hover:border-signal/40 transition-colors group"
            >
              <span className="flex items-center gap-3">
                <FiGithub size={18} /> GitHub
              </span>
              <FiArrowUpRight
                size={16}
                className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
              />
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="flex items-center justify-between rounded-2xl border border-line px-5 py-4 text-ink-soft hover:text-ink hover:border-signal/40 transition-colors group"
            >
              <span className="flex items-center gap-3">
                <FiMail size={18} /> {socials.email}
              </span>
              <FiArrowUpRight
                size={16}
                className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="space-y-5">
            <FormField id="name" label="Name" error={errors.name}>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={update("name")}
                placeholder="Your name"
                className={inputClass}
                autoComplete="name"
              />
            </FormField>

            <FormField id="email" label="Email" error={errors.email}>
              <input
                id="email"
                type="email"
                value={values.email}
                onChange={update("email")}
                placeholder="you@example.com"
                className={inputClass}
                autoComplete="email"
              />
            </FormField>

            <FormField id="message" label="Message" error={errors.message}>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={update("message")}
                placeholder="What would you like to build or talk about?"
                className={`${inputClass} resize-none`}
              />
            </FormField>

            <div className="flex items-center gap-4 pt-2">
              <MagneticButton type="submit" variant="primary" className="min-w-[160px]">
                {status === "sending" ? "Sending…" : "Send Message"}
              </MagneticButton>

              {status === "success" && (
                <p className="text-sm text-signal-bright">
                  Thanks — message captured! Connect a backend to receive it by email.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-signal-bright">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
