'use client';

import { motion } from "framer-motion";
import { getMenu } from "../utils/content";

const MenuSection = () => {
  const menu = getMenu();

  return (
    <section id="menu" className="vl-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 space-y-3"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
          {menu.title}
        </p>
        <h2 className="vl-heading">
          {menu.title}{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
            {menu.highlight}
          </span>
        </h2>
        <p className="vl-subtitle">{menu.subtitle}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
      >
        <div className="vl-card space-y-4">
          {menu.signatureCocktails.map((drink) => (
            <div
              key={drink.name}
              className="flex items-start justify-between gap-3 border-b border-white/10 pb-3 last:border-0 last:pb-0"
            >
              <div>
                <h3 className="text-base font-semibold text-slate-100">{drink.name}</h3>
                <p className="text-sm text-slate-300">{drink.description}</p>
              </div>
              <span className="shrink-0 text-sm font-semibold text-slate-100">{drink.price}</span>
            </div>
          ))}
        </div>

        <div className="vl-card flex flex-col gap-4">
          <h3 className="text-base font-semibold text-slate-100">Bottle menu</h3>
          {menu.bottles.map((bottle) => (
            <div key={bottle.category} className="flex items-center justify-between border-b border-white/5 pb-2 text-sm text-slate-300 last:border-0 last:pb-0">
              <span>{bottle.category}</span>
              <span className="text-slate-100">{bottle.from}</span>
            </div>
          ))}
          <a
            href="#reservation"
            className="mt-auto inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 transition hover:bg-white/10"
          >
            {menu.ctaLabel}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default MenuSection;
