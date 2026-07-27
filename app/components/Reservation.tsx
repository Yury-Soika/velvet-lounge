"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { getReservation } from "../utils/content";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 outline-none ring-purple-400/50 placeholder:text-slate-500 focus:ring transition-colors";

const Reservation = () => {
  const reservation = getReservation();
  const labels = reservation.form;
  const [status, setStatus] = useState<"idle" | "demo" | "error">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (!form.checkValidity()) {
      setStatus("error");
      form.reportValidity();
      return;
    }

    if (!email && !phone) {
      setStatus("error");
      form.querySelector<HTMLInputElement>("#reservation-email")?.focus();
      return;
    }

    // This portfolio project is an interactive concept, not a live venue.
    // Keep the completed form visible so visitors can inspect the flow without
    // implying that a real reservation was transmitted.
    setStatus("demo");
  };

  return (
    <section id="reservation" className="vl-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 space-y-3"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
          {reservation.title}
        </p>
        <h2 className="vl-heading">
          {reservation.title}{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
            {reservation.highlight}
          </span>
        </h2>
        <p className="vl-subtitle">{reservation.subtitle}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
      >
        <form className="vl-card grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="reservation-name" className="mb-2 block text-xs font-medium text-slate-300">{labels.name}</label>
            <input id="reservation-name" name="name" type="text" autoComplete="name" required placeholder={labels.name} className={inputCls} />
          </div>
          <div>
            <label htmlFor="reservation-email" className="mb-2 block text-xs font-medium text-slate-300">{labels.email}</label>
            <input id="reservation-email" name="email" type="email" autoComplete="email" placeholder={labels.email} className={inputCls} />
          </div>
          <div>
            <label htmlFor="reservation-phone" className="mb-2 block text-xs font-medium text-slate-300">{labels.phone}</label>
            <input id="reservation-phone" name="phone" type="tel" autoComplete="tel" placeholder={labels.phone} className={inputCls} />
          </div>
          <div>
            <label htmlFor="reservation-date" className="mb-2 block text-xs font-medium text-slate-300">{labels.date}</label>
            <input id="reservation-date" name="date" type="date" required className={inputCls} />
          </div>
          <div>
            <label htmlFor="reservation-time" className="mb-2 block text-xs font-medium text-slate-300">{labels.time}</label>
            <input id="reservation-time" name="time" type="time" className={inputCls} />
          </div>
          <div>
            <label htmlFor="reservation-guests" className="mb-2 block text-xs font-medium text-slate-300">{labels.guests}</label>
            <input
              id="reservation-guests"
              name="guests"
              type="number"
              min={1}
              required
              placeholder={labels.guests}
              className={inputCls}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="reservation-message" className="mb-2 block text-xs font-medium text-slate-300">{labels.message}</label>
            <textarea id="reservation-message" name="message" rows={3} placeholder={labels.message} className={`${inputCls} resize-none`} />
          </div>
          <button
            type="submit"
            className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 transition hover:bg-accent-soft shadow-lg shadow-purple-500/30"
          >
            {labels.submit}
          </button>
          <div className="sm:col-span-2" aria-live="polite" aria-atomic="true">
            {status === "demo" && (
              <div className="rounded-xl border border-purple-400/30 bg-purple-500/10 px-4 py-3 text-sm text-purple-100">
                Concept preview only — your details were validated in this browser, but no reservation was sent or stored.
              </div>
            )}
            {status === "error" && (
              <div className="rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
                Complete the required fields and provide either an email address or phone number.
              </div>
            )}
          </div>
        </form>

        <aside className="vl-card">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
            {reservation.expectations.title}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {reservation.expectations.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </motion.div>
    </section>
  );
};

export default Reservation;
