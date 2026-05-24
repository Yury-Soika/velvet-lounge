'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { getEvents } from "../utils/content";

const EVENT_IMAGES = [
  "/images/gallery/music-dj-booth.png",
  "/images/gallery/atmosphere-late-night.png",
  "/images/gallery/seating-lounge-corners.png",
];

const Events = () => {
  const events = getEvents();

  return (
    <section id="events" className="vl-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 space-y-3"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
          {events.title}
        </p>
        <h2 className="vl-heading">
          {events.title}{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
            {events.highlight}
          </span>
        </h2>
        <p className="vl-subtitle">{events.subtitle}</p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-3">
        {events.items.map((event, i) => (
          <motion.article
            key={event.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="vl-card flex h-full flex-col gap-0 overflow-hidden !p-0"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={EVENT_IMAGES[i] ?? EVENT_IMAGES[0]}
                alt={event.name}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050509]/80 via-[#050509]/30 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.2),transparent_60%)]" />
              <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-slate-300 backdrop-blur-sm">
                {event.tag}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{event.date}</p>
              <div>
                <h3 className="text-xl font-semibold text-slate-50">{event.name}</h3>
                <p className="mt-0.5 text-sm text-purple-300">{event.artist}</p>
              </div>
              <p className="text-sm text-slate-300">{event.description}</p>
              <a
                href="#reservation"
                className="mt-auto inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 transition hover:bg-white/10"
              >
                {event.ctaLabel}
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Events;
