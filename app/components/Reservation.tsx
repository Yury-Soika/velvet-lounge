"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { getReservation } from "../utils/content";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 outline-none ring-purple-400/50 placeholder:text-slate-500 focus:ring transition-colors";

const Reservation = () => {
  const reservation = getReservation();
  const labels = reservation.form;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    event.currentTarget.reset();
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
        <form className="vl-card grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
          <input type="text" placeholder={labels.name} className={inputCls} />
          <input type="email" placeholder={labels.email} className={inputCls} />
          <input type="tel" placeholder={labels.phone} className={inputCls} />
          <input type="date" aria-label={labels.date} className={inputCls} />
          <input
            type="number"
            min={1}
            placeholder={labels.guests}
            className={`${inputCls} sm:col-span-2`}
          />
          <button
            type="submit"
            className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 transition hover:bg-accent-soft shadow-lg shadow-purple-500/30"
          >
            {labels.submit}
          </button>
          {isSubmitted && (
            <div className="sm:col-span-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              We got your request. Our team will confirm within 24 hours via WhatsApp or email.
            </div>
          )}
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
