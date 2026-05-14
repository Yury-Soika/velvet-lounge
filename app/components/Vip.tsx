import { getVip } from "../utils/content";

const Vip = () => {
  const vip = getVip();

  return (
    <section id="vip" className="vl-section">
      <div className="mb-8 space-y-3">
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
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {vip.packages.map((pkg) => (
          <article
            key={pkg.name}
            className={`vl-card flex h-full flex-col gap-3 ${
              pkg.highlighted ? "border-purple-400/50 shadow-xl shadow-purple-500/20" : ""
            }`}
          >
            <h3 className="text-xl font-semibold text-slate-50">{pkg.name}</h3>
            <p className="text-sm text-slate-300">{pkg.description}</p>
            <div className="space-y-1 text-sm text-slate-300">
              <p>{pkg.minSpend}</p>
              <p>{pkg.guests}</p>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              {pkg.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-purple-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#reservation"
              className="mt-auto inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-accent-soft"
            >
              Reserve VIP
            </a>
          </article>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-400">{vip.note}</p>
    </section>
  );
};

export default Vip;
