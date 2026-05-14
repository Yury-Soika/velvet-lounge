'use client';

import { useState } from "react";
import { Disc3, Menu, X } from "lucide-react";
import { getNavigation, getSite } from "../utils/content";

const Navbar = () => {
  const site = getSite();
  const navigation = getNavigation();
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <nav className="vl-container flex h-16 items-center justify-between gap-4 sm:h-20">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-medium text-slate-100"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-slate-50 shadow-lg shadow-purple-500/40">
            <Disc3 className="h-4 w-4" />
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight">
              {site.name}
            </span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
              {site.city} • Nightclub
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 text-xs font-medium uppercase tracking-[0.22em] text-slate-300">
            {navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-slate-50"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#reservation"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-lg shadow-purple-500/40 transition hover:bg-accent-soft"
          >
            {navigation.cta}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/40 p-2 text-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/80 backdrop-blur-xl md:hidden">
          <div className="vl-container flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-200">
              {navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-1 transition-colors hover:text-slate-50"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#reservation"
              onClick={handleNavClick}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-950 shadow-lg shadow-purple-500/40 transition hover:bg-accent-soft"
            >
              {navigation.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

