'use client';

import { motion } from "framer-motion";
import { getAbout } from "../utils/content";

const About = () => {
  const about = getAbout();

  return (
    <section id="about" className="vl-section">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
            {about.title}
          </p>
          <h2 className="vl-heading">
            {about.title}{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              {about.highlight}
            </span>
          </h2>
          <p className="vl-subtitle">{about.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="vl-card space-y-6"
        >
          <div className="space-y-3">
            {about.highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between border-b border-white/10 pb-2 text-sm text-slate-200"
              >
                <span className="text-slate-400">{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {about.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                <p className="mt-1 text-sm font-medium text-slate-100">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
