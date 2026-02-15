"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Image from "next/image";

export function PricingCard({
  title,
  subtitle,
  items,
  note,
  image,
}: {
  title: string;
  subtitle?: string;
  note?: string;
  items: ReadonlyArray<{ label: string; price: string; sub?: string }>;
  image?: { src: string; alt: string };
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="rounded-xl2 bg-white/[0.03] ring-1 ring-white/10 p-6 shadow-glow"
    >
      {image ? (
        <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
          <Image
            src={image.src}
            alt={image.alt}
            width={900}
            height={520}
            className="w-full h-auto object-cover"
          />
        </div>
      ) : null}

      <div className="text-sm text-white/65">{subtitle}</div>
      <h3 className="mt-1 font-display text-xl tracking-tight">{title}</h3>
      {note ? <div className="mt-3 text-sm text-white/60">{note}</div> : null}

      <div className="mt-5 space-y-3">
        {items.map((i) => (
          <div key={i.label} className="flex items-start justify-between gap-4 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
            <div>
              <div className="text-sm text-white/80">{i.label}</div>
              {i.sub ? <div className="text-xs text-white/55 mt-1">{i.sub}</div> : null}
            </div>
            <div className="text-sm font-semibold text-white">{i.price}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
