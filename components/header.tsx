"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import Image from "next/image";

const nav = [
  { href: "/", label: "Главная" },
  { href: "/rental", label: "Прокат" },
  { href: "/school", label: "Школа" },
  { href: "/certificates", label: "Сертификаты" },
  { href: "/cafe", label: "Кафе" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50", scrolled ? "backdrop-blur-xl bg-black/35 border-b border-white/10" : "bg-transparent")}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-28 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-24 w-24 rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-glow overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-transparent to-accent2/35 opacity-80" />
              <div className="absolute inset-0 gridlines opacity-30" />
              <Image
                src="/images/logo.png"
                alt="Логотип Lemar"
                fill
                className="object-contain p-3 opacity-95"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="font-display tracking-wide text-[13px] text-white/90 group-hover:text-white">LEMAR</div>
              {/* removed: Pit Lane Premium */}
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="hover:text-white transition-colors">
                {i.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={site.links.timing}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-3 py-2 text-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition"
              aria-label="Онлайн тайминг"
            >
              Live timing
            </a>
            <a
              href={site.links.telegram}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-3 py-2 text-sm bg-accent/90 hover:bg-accent text-white shadow-glow transition"
            >
              Записаться
            </a>
          </div>

          <button
            className="md:hidden rounded-xl p-2 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Открыть меню"
          >
            <div className="h-4 w-5 flex flex-col justify-between">
              <span className="block h-[2px] w-full bg-white/80" />
              <span className="block h-[2px] w-full bg-white/80" />
              <span className="block h-[2px] w-full bg-white/80" />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/55 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-2">
              {nav.map((i) => (
                <Link key={i.href} href={i.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 transition">
                  {i.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <a href={site.links.timing} target="_blank" rel="noreferrer" className="rounded-xl px-3 py-2 bg-white/5 ring-1 ring-white/10">
                Live timing
              </a>
              <a href={site.links.telegram} target="_blank" rel="noreferrer" className="rounded-xl px-3 py-2 bg-accent/90 text-white shadow-glow">
                Записаться
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
