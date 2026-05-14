 "use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { getGallery } from "../utils/content";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  const gallery = getGallery();
  const previewItems = useMemo(
    () =>
      gallery.items
        .map((item) => ({
          src: item.imageSrc,
          alt: `${item.tag} — ${item.label}`,
        }))
        .filter(
          (item): item is { src: string; alt: string } => Boolean(item.src)
        ),
    [gallery.items]
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage =
    activeIndex === null ? null : (previewItems[activeIndex] ?? null);

  const itemsCount = previewItems.length;

  const goPrev = useCallback(() => {
    if (itemsCount === 0) return;
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + itemsCount) % itemsCount;
    });
  }, [itemsCount]);

  const goNext = useCallback(() => {
    if (itemsCount === 0) return;
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % itemsCount;
    });
  }, [itemsCount]);

  useEffect(() => {
    if (!activeImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeImage, goNext, goPrev]);

  return (
    <section id="gallery" className="vl-section">
      <div className="mb-8 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
          {gallery.title}
        </p>
        <h2 className="vl-heading">
          {gallery.title}{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
            {gallery.highlight}
          </span>
        </h2>
        <p className="vl-subtitle">{gallery.subtitle}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.items.map((item) => {
          const itemPreviewIndex = previewItems.findIndex(
            (p) => p.src === item.imageSrc
          );

          return (
          <button
            type="button"
            key={item.label}
            className="vl-card group relative cursor-pointer overflow-hidden p-0 text-left transition hover:border-white/15 focus:outline-none focus:ring-2 focus:ring-purple-400/60"
            onClick={() => {
              if (!item.imageSrc) return;
              setActiveIndex(itemPreviewIndex === -1 ? 0 : itemPreviewIndex);
            }}
            aria-label={`Open preview: ${item.tag} — ${item.label}`}
          >
            {item.imageSrc && (
              <Image
                src={item.imageSrc}
                alt={`${item.tag} — ${item.label}`}
                fill
                sizes="(min-width: 1024px) 330px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.92),rgba(2,6,23,0.35),rgba(2,6,23,0.12))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),transparent_50%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.2),transparent_55%)] opacity-80 transition group-hover:opacity-100" />
            <div className="relative flex h-40 flex-col justify-end p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
                {item.tag}
              </p>
              <h3 className="text-xl font-semibold text-slate-50">{item.label}</h3>
            </div>
          </button>
          );
        })}
      </div>

      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full border border-white/10 bg-black/60 p-2 text-slate-100 transition hover:bg-black/80"
              onClick={() => setActiveIndex(null)}
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-white/10 bg-black/60 p-2 text-slate-100 transition hover:bg-black/80"
              onClick={goPrev}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-white/10 bg-black/60 p-2 text-slate-100 transition hover:bg-black/80"
              onClick={goNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="relative aspect-[16/10] w-full">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
