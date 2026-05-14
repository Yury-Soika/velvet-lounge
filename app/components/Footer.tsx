import { getFooter, getSite } from "../utils/content";

const Footer = () => {
  const site = getSite();
  const footer = getFooter();

  return (
    <footer className="border-t border-white/10">
      <div className="vl-section py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-slate-100">{site.name}</h3>
            <p className="text-sm text-slate-300">{footer.disclaimer}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Explore
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {footer.links.primary.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-slate-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Legal</p>
            <div className="mt-3 flex flex-col gap-2">
              {footer.links.legal.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-300 transition hover:text-slate-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500">{footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
