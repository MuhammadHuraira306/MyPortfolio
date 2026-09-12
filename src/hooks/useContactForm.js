import { useState } from "react";

const initialState = { name: "", email: "", message: "" };

/**
 * ------------------------------------------------------------------
 * BACKEND INTEGRATION POINT
 * ------------------------------------------------------------------
 * This hook currently simulates a network request so the form is fully
 * functional in the UI without a backend. To connect a real service:
 *
 *   1. Replace the body of `submit()` below with a real request, e.g.
 *        await fetch("https://formspree.io/f/your-id", {
 *          method: "POST",
 *          headers: { "Content-Type": "application/json" },
 *          body: JSON.stringify(values),
 *        });
 *   2. Or wire up EmailJS, Resend, Netlify Forms, or your own API route.
 *   3. Keep the status states ("idle" | "sending" | "success" | "error")
 *      so the UI feedback continues to work unchanged.
 * ------------------------------------------------------------------
 */
export function useContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const update = (field) => (e) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "Please enter a valid email.";
    }
    if (!values.message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      // Simulated request — replace with a real backend call (see above).
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  };

  return { values, update, errors, status, submit, setStatus };
}
