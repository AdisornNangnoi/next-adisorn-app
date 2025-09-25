"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const images = [
  "/images/mockvid.png",
  "/images/mockvid.png",
  "/images/mockvid.png",
  "/images/mockvid.png",
];

export default function ProjectsPage() {
  const [current, setCurrent] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const clampIndex = (i: number) => Math.max(0, Math.min(images.length - 1, i));

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    setStartX(e.clientX);
    setOffsetX(0);

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setOffsetX(e.clientX - startX);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setDragging(false);
    e.currentTarget.releasePointerCapture?.(e.pointerId);

    const threshold = 80; 
    if (offsetX > threshold) setCurrent((i) => clampIndex(i - 1));
    else if (offsetX < -threshold) setCurrent((i) => clampIndex(i + 1));

    setOffsetX(0);
  };

  return (
    <section className="space-y-4 mx-auto my-10 max-w-4xl px-5">
      <h2 className="text-4xl font-extrabold">
        Featured <span className="text-[#FF5C00]">Projects</span>
      </h2>

      <div>
        <h3 className="text-xl font-bold text-white">
          Manage Task App - fullstack web development
        </h3>
        <p className="mt-2 text-sm text-zinc-400 max-w-[700px]">
          {`Here's my latest project built with Next.js and Laravel, using
          TailwindCSS on the front-end. Watch the video to see the responsive
          landing page in action!`}
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className={[
          "relative mx-auto my-5 w-full max-w-[600px] overflow-hidden rounded-xl border border-zinc-700",
          "select-none",
          dragging ? "cursor-grabbing" : "cursor-grab",
        ].join(" ")}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* แถบสไลด์ */}
        <div
          className={[
            "flex ease-in-out",
            dragging ? "" : "transition-transform duration-500",
          ].join(" ")}
          style={{
            transform: `translateX(calc(-${current * 100}% + ${offsetX}px))`,
          }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="w-full flex-shrink-0">
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                width={600}
                height={340}
                className="w-full h-auto object-contain pointer-events-none " // กันรูปจับ pointer
                priority={idx === current}
                draggable={false} // กันลากรูปของเบราว์เซอร์
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`slide-${idx + 1}`}
            className={[
              "h-2 rounded-full transition-all duration-300",
              current === idx
                ? "w-8 bg-[#FF5C00]"
                : "w-2 bg-zinc-600 hover:bg-zinc-400",
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  );
}
