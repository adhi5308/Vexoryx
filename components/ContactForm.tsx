"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldClass =
    "w-full bg-transparent border border-line px-4 py-3 text-sm outline-none focus:border-gold transition-colors placeholder:text-paper/30";

  return (
    <div className="border border-line p-6 md:p-8 relative">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-16 text-center"
          >
            <div className="text-gold text-3xl mb-4">✓</div>
            <h3 className="font-display text-xl mb-2">Message sent.</h3>
            <p className="text-sm text-paper/60">
              We typically reply within 2 business days.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
          >
            <h3 className="font-display text-xl mb-2">Enquiry form</h3>

            <div>
              <label className="block text-xs text-paper/50 mb-2">
                Full name *
              </label>
              <input name="name" required className={fieldClass} />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-paper/50 mb-2">
                  Email address *
                </label>
                <input type="email" name="email" required className={fieldClass} />
              </div>
              <div>
                <label className="block text-xs text-paper/50 mb-2">
                  Service needed *
                </label>
                <select name="service" required className={fieldClass}>
                  <option value="">Select service</option>
                  <option>Web application</option>
                  <option>SaaS product</option>
                  <option>AI-driven feature</option>
                  <option>Custom software</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-paper/50 mb-2">
                Tell us about your project *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className={fieldClass}
                placeholder="What's the problem you're trying to solve?"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong — please try again or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-gold text-ink px-6 py-3 text-sm font-medium hover:bg-goldsoft transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send enquiry"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
