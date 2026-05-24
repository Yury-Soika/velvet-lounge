'use client';

import { motion } from "framer-motion";
import { getVip } from "../utils/content";

const TIER_STYLES = [
  {
    dot: "bg-purple-400",
    badge: null,
    card: "",
    cta: "rounded-full border border-white/20 bg-white/5 text-slate-100 hover:bg-white/10",
  },
  {
    dot: "bg-pink-400",
    badge: "Most Popular",
    card: "border-purple-400/40 shadow-2xl shadow-purple-500/20",
    cta: "rounded-full bg-accent text-slate-950 shadow-lg shadow-purple-500/30 hover:bg-accent-soft",
  },
  {
    dot: "bg-amber-400",
    badge: null,
    card: "border-amber-400/20",
    cta: "rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-200 hover:bg-amber-400/20",
  },
];

const Vip = () => {
  const vip = getVip();

  return (
    <section id="vip" className="vl-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 space-y-3"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
          {vip.title}
        </p>
        <h2 className="vl-heading">
          {vip.title}{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
            {vip.highlight}
          </span>
        </h2>
        <p className="vl-subtitle">{vip.subtitle}</p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-3">
        {vip.packages.map((pkg, i) => {
          const tier = TIER_STYLES[i] ?? TIER_STYLES[0];
          return (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`vl-card relative flex h-full flex-col gap-3 ${tier.card}`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-purple-500/30">
                  {tier.badge}
                </span>
              )}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-semibold text-slate-50">{pkg.name}</h3>
                <span className={`mt-1.5 inline-flex h-2 w-2 rounded-full ${tier.dot}`} />
              </div>
              <p className="text-sm text-slate-300">{pkg.description}</p>
              <div className="space-y-0.5 text-sm">
                <p className="font-semibold text-slate-100">{pkg.minSpend}</p>
                <p className="text-slate-400">{pkg.guests}</p>
              </div>
              <ul className="mt-1 space-y-1.5 text-sm text-slate-300">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className={`mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full ${tier.dot}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#reservation"
                className={`mt-auto inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${tier.cta}`}
              >
                Reserve VIP
              </a>
            </motion.article>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-slate-400">{vip.note}</p>
    </section>
  );
};

export default Vip;
