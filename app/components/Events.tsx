import { getEvents } from "../utils/content";

const Events = () => {
  const events = getEvents();

  return (
    <section id="events" className="vl-section">
      <div className="mb-8 space-y-3">
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
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {events.items.map((event) => (
          <article key={event.name} className="vl-card flex h-full flex-col gap-4">
            <div className="flex items-start justify-between gap-2">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {event.date}
              </p>
              <span className="rounded-full border border-white/15 bg-black/30 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-slate-300">
                {event.tag}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-50">{event.name}</h3>
              <p className="mt-1 text-sm text-slate-300">{event.artist}</p>
            </div>
            <p className="text-sm text-slate-300">{event.description}</p>
            <a
              href="#reservation"
              className="mt-auto inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 transition hover:bg-white/10"
            >
              {event.ctaLabel}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Events;
