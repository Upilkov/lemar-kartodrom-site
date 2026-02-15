"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function Hero({
  title,
  subtitle,
  image,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  subtitle: string;
  image: { src: string; alt: string };
  primaryCta: { href: string; label: string; external?: boolean };
  secondaryCta?: { href: string; label: string; external?: boolean };
}) {
  return (
    <div className="relative">
      <div className="mx-auto max-w-6xl px-4 pt-10 md:pt-16">
        <div className="relative overflow-hidden rounded-xl2 border border-white/10 bg-white/[0.03] shadow-glow">
          <div className="absolute inset-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
            <div className="absolute inset-0 gridlines opacity-40" />
          </div>

          <div className="relative px-6 py-12 md:px-12 md:py-16">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-white/75"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
              Картинг • Ростов‑на‑Дону
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.06 }}
              className="mt-4 font-display text-3xl md:text-5xl tracking-tight text-white"
            >
              {title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.12 }}
              className="mt-4 max-w-2xl text-base md:text-lg text-white/70"
            >
              {subtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.18 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium text-white shadow-glow transition",
                  "bg-accent/90 hover:bg-accent"
                )}
                href={primaryCta.href}
                target={primaryCta.external ? "_blank" : undefined}
                rel={primaryCta.external ? "noreferrer" : undefined}
              >
                {primaryCta.label}
              </a>

              {secondaryCta && (
                <a
                  className="rounded-xl px-4 py-3 text-sm font-medium bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition text-white/90"
                  href={secondaryCta.href}
                  target={secondaryCta.external ? "_blank" : undefined}
                  rel={secondaryCta.external ? "noreferrer" : undefined}
                >
                  {secondaryCta.label}
                </a>
              )}
            </motion.div>

            <div className="mt-10 grid gap-3 md:grid-cols-4">
              {[
                { k: "Формат", v: "10 минут заезд" },
                { k: "Техника", v: "Sodi SR5 / LR6" },
                { k: "Школа", v: "Взрослые и дети" },
                { k: "Подарки", v: "Сертификаты" },
              ].map((i) => (
                <div key={i.k} className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3">
                  <div className="text-xs text-white/60">{i.k}</div>
                  <div className="mt-1 text-sm text-white/90">{i.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
