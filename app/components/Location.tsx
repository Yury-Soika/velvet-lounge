 "use client";

import { useEffect, useState } from "react";
import { getLocation } from "../utils/content";
import { X } from "lucide-react";

const Location = () => {
  const location = getLocation();
  const [isDirectionsOpen, setIsDirectionsOpen] = useState(false);

  useEffect(() => {
    if (!isDirectionsOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsDirectionsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isDirectionsOpen]);

  return (
    <section id="location" className="vl-section">
      <div className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
          {location.title}
        </p>
        <h2 className="vl-heading">
          {location.title}{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
            {location.highlight}
          </span>
        </h2>
        <p className="vl-subtitle">{location.subtitle}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="vl-card space-y-4">
          <p className="text-sm text-slate-200">{location.address}</p>
          <p className="text-sm text-slate-400">{location.mapLabel}</p>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <div className="relative h-56">
              <svg
                viewBox="0 0 800 360"
                className="absolute inset-0 h-full w-full"
                aria-label="Nocturne Bay fictional map"
                role="img"
              >
                <defs>
                  <linearGradient id="water" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#0b1223" />
                    <stop offset="1" stopColor="#05030d" />
                  </linearGradient>
                  <linearGradient id="street" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0" stopColor="rgba(148,163,184,0.35)" />
                    <stop offset="1" stopColor="rgba(236,72,153,0.25)" />
                  </linearGradient>
                  <radialGradient id="glow" cx="50%" cy="40%" r="70%">
                    <stop offset="0" stopColor="rgba(168,85,247,0.55)" />
                    <stop offset="1" stopColor="rgba(168,85,247,0)" />
                  </radialGradient>
                </defs>

                <rect x="0" y="0" width="800" height="360" fill="url(#water)" />
                <circle cx="520" cy="150" r="240" fill="url(#glow)" />

                <path
                  d="M70 40 C190 120, 210 210, 160 330 L40 330 L40 40 Z"
                  fill="rgba(255,255,255,0.04)"
                />
                <path
                  d="M210 10 C340 70, 360 160, 310 320 L780 320 L780 10 Z"
                  fill="rgba(255,255,255,0.03)"
                />

                <path
                  d="M120 70 L290 260"
                  stroke="url(#street)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  opacity="0.75"
                />
                <path
                  d="M250 60 L600 60"
                  stroke="rgba(148,163,184,0.25)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M260 210 L740 210"
                  stroke="rgba(148,163,184,0.2)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M420 100 L520 280"
                  stroke="rgba(236,72,153,0.22)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                <circle cx="290" cy="260" r="10" fill="rgba(52,211,153,0.95)" />
                <circle cx="290" cy="260" r="26" fill="rgba(52,211,153,0.15)" />

                <g transform="translate(290 260)">
                  <path
                    d="M0 -44 C18 -44, 32 -30, 32 -12 C32 8, 18 22, 0 46 C-18 22, -32 8, -32 -12 C-32 -30, -18 -44, 0 -44 Z"
                    fill="rgba(168,85,247,0.85)"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="2"
                  />
                  <circle cx="0" cy="-12" r="10" fill="rgba(2,6,23,0.9)" />
                </g>

                <text
                  x="42"
                  y="44"
                  fill="rgba(226,232,240,0.75)"
                  fontSize="14"
                  fontFamily="ui-sans-serif, system-ui"
                  letterSpacing="0.22em"
                >
                  NOCTURNE BAY • OLD QUARTER
                </text>
              </svg>

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    Fictional map
                  </p>
                  <p className="text-sm text-slate-100">
                    Velvet Lounge — Old Quarter
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsDirectionsOpen(true)}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 transition hover:bg-white/10"
                >
                  Get directions
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="vl-card space-y-5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Opening hours
            </p>
            <div className="mt-3 space-y-2 text-sm text-slate-200">
              {location.hours.map((hour) => (
                <div key={hour.day} className="flex items-center justify-between">
                  <span>{hour.day}</span>
                  <span>{hour.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1 text-sm text-slate-300">
            <p>{location.contacts.phone}</p>
            <p>{location.contacts.email}</p>
            <a href={location.contacts.instagram} className="hover:text-slate-100">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {isDirectionsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Directions"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsDirectionsOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full border border-white/10 bg-black/60 p-2 text-slate-100 transition hover:bg-black/80"
              onClick={() => setIsDirectionsOpen(false)}
              aria-label="Close directions"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                Directions (fictional)
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-50">
                Finding Velvet Lounge
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                {location.address}
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-slate-100">From Old Quarter Gate</p>
                  <p className="mt-1">
                    Walk two blocks toward the bay lights, then take the narrow
                    lane with the violet lamps. Look for the brass door with the
                    velvet rope.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-slate-100">Taxi drop-off</p>
                  <p className="mt-1">
                    Ask for “Velvet Row, Old Quarter.” Our host meets guests at
                    street level after 22:00.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-slate-100">Late-night note</p>
                  <p className="mt-1">
                    If you arrive after 23:00, send a WhatsApp message and we’ll
                    guide you in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Location;
