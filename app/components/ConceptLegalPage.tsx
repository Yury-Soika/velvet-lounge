import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Section = { title: string; body: string };

const ConceptLegalPage = ({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: Section[];
}) => (
  <main id="top" className="min-h-screen">
    <Navbar />
    <article className="pb-24 pt-32 sm:pt-40">
      <div className="vl-container">
        <Link href="/" className="text-sm text-slate-400 transition hover:text-purple-300">
          ← Back to Velvet Lounge
        </Link>
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
          Interactive portfolio concept
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{intro}</p>

        <div className="mt-14 max-w-4xl divide-y divide-white/10 border-y border-white/10">
          {sections.map((section) => (
            <section key={section.title} className="py-8">
              <h2 className="text-xl font-semibold text-slate-100">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-slate-300">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
    <Footer />
  </main>
);

export default ConceptLegalPage;
