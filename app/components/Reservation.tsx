 "use client";

import { useState } from "react";
import { getReservation } from "../utils/content";

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
      <div className="mb-8 space-y-3">
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
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <form
          className="vl-card grid gap-4 sm:grid-cols-2"
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            type="text"
            placeholder={labels.name}
            className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 outline-none ring-purple-400/50 placeholder:text-slate-500 focus:ring"
          />
          <input
            type="email"
            placeholder={labels.email}
            className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 outline-none ring-purple-400/50 placeholder:text-slate-500 focus:ring"
          />
          <input
            type="tel"
            placeholder={labels.phone}
            className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 outline-none ring-purple-400/50 placeholder:text-slate-500 focus:ring"
          />
          <input
            type="date"
            aria-label={labels.date}
            className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 outline-none ring-purple-400/50 focus:ring"
          />
          <input
            type="time"
            aria-label={labels.time}
            className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 outline-none ring-purple-400/50 focus:ring"
          />
          <input
            type="number"
            min={1}
            placeholder={labels.guests}
            className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 outline-none ring-purple-400/50 placeholder:text-slate-500 focus:ring"
          />
          <input
            type="text"
            placeholder={labels.occasion}
            className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 outline-none ring-purple-400/50 placeholder:text-slate-500 focus:ring sm:col-span-2"
          />
          <textarea
            placeholder={labels.message}
            rows={4}
            className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-100 outline-none ring-purple-400/50 placeholder:text-slate-500 focus:ring sm:col-span-2"
          />
          <button
            type="submit"
            className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 transition hover:bg-accent-soft"
          >
            {labels.submit}
          </button>
          {isSubmitted && (
            <div className="sm:col-span-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              We got your request. Our team will contact you soon with confirmation details.
            </div>
          )}
        </form>

        <aside className="vl-card">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
            {reservation.expectations.title}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {reservation.expectations.items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default Reservation;
