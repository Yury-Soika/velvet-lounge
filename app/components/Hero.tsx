'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { getHero } from "../utils/content";

const Hero = () => {
  const hero = getHero();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    if (!isPreviewOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsPreviewOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isPreviewOpen]);

  return (
    <section
      id="top"
      className="relative flex min-h-[80vh] items-center pt-24 sm:pt-28 lg:pt-32"
    >
      <div className="vl-section grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="vl-chip">{hero.badge}</span>
            <span className="text-xs text-slate-300">
              {hero.scrollCta}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
              {hero.title}
            </p>
            <h1 className="vl-heading">
              {hero.headline}{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                {hero.highlight}
              </span>
            </h1>
            <p className="vl-subtitle">{hero.subheadline}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#reservation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-xl shadow-purple-500/40 transition hover:bg-accent-soft"
            >
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#events"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100"
            >
              {hero.secondaryCta}
              <ArrowDownRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="flex flex-wrap gap-6 text-xs text-slate-300"
          >
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              <span>Reservations recommended after 23:00</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-purple-400" />
              <span>Deep house, disco & electronic</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="vl-card relative w-full overflow-hidden text-left transition hover:border-white/15 focus:outline-none focus:ring-2 focus:ring-purple-400/60"
            aria-label="Open room snapshot preview"
          >
            <Image
              src="/images/hero/room-snapshot.png"
              alt="Velvet Lounge room snapshot"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.92),rgba(2,6,23,0.45),rgba(2,6,23,0.22))]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.32),transparent_55%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.28),transparent_60%)] opacity-80" />
            <div className="relative flex h-64 flex-col justify-between sm:h-72">
              <div className="flex items-center justify-between text-xs text-slate-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Tonight at Velvet Lounge
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-slate-300">
                  Nocturne Bay • Old Quarter
                </span>
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
                  Room snapshot
                </p>
                <p className="text-sm text-slate-200">
                  Low light. Soft haze. A booth with your name on it and a room
                  tuned for conversations until closing.
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-200/90">
                  Click to preview
                </p>
              </div>
            </div>
          </button>
        </motion.div>
      </div>

      {isPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Room snapshot preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full border border-white/10 bg-black/60 p-2 text-slate-100 transition hover:bg-black/80"
              onClick={() => setIsPreviewOpen(false)}
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/hero/room-snapshot.png"
                alt="Velvet Lounge room snapshot preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

