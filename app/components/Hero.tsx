'use client';

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { getHero } from "../utils/content";

const Hero = () => {
  const hero = getHero();

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/room-snapshot.png"
          alt="Velvet Lounge"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050509]/60 via-[#050509]/30 to-[#050509]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.22),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.18),transparent_55%)]" />
      </div>

      <div className="vl-container relative z-10 flex flex-col items-center text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-slate-100 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Tonight at Velvet Lounge
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-50 sm:text-6xl lg:text-7xl"
        >
          {hero.headline}{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
            {hero.highlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-sm text-slate-300 sm:text-base"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-xl shadow-purple-500/40 transition hover:bg-accent-soft"
          >
            {hero.primaryCta}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#events"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100 backdrop-blur-sm transition hover:bg-white/10"
          >
            {hero.secondaryCta}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-slate-400"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Reservations recommended after 23:00
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            Deep house, disco & electronic
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">{hero.scrollCta}</span>
        <div className="h-8 w-px bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
