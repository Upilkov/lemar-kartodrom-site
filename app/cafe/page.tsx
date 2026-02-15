import { Hero } from "@/components/blocks/hero";
import { Section } from "@/components/blocks/section";
import { site } from "@/content/site";
import Image from "next/image";

export default function CafePage() {
  return (
    <>
      <Hero
        title="Кафе"
        subtitle="Перерыв между заездами — тоже часть атмосферы. Меню доступно в PDF."
        image={{ src: "/images/cafe/cafe-1.jpg", alt: "Кафе Lemar" }}
        primaryCta={{ href: site.documents.cafeMenu, label: "Открыть меню (PDF)", external: true }}
        secondaryCta={{ href: "/contacts", label: "Контакты" }}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { src: "/images/cafe/cafe-1.jpg", alt: "Кафе фото 1" },
            { src: "/images/cafe/cafe-2.jpg", alt: "Кафе фото 2" },
            { src: "/images/cafe/cafe-3.jpg", alt: "Кафе фото 3" },
          ].map((i) => (
            <div key={i.src} className="overflow-hidden rounded-xl2 border border-white/10 bg-white/[0.02] shadow-glow">
              <Image src={i.src} alt={i.alt} width={1200} height={900} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl2 bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8 shadow-glow">
          <h2 className="font-display text-2xl tracking-tight">Меню</h2>
          <p className="mt-3 text-white/70">Откройте меню в PDF — удобно сохранить или отправить друзьям.</p>
          <a className="mt-6 inline-flex rounded-xl px-4 py-3 text-sm font-medium bg-accent/90 hover:bg-accent text-white shadow-glow transition" href={site.documents.cafeMenu} target="_blank" rel="noreferrer">
            Открыть меню (PDF)
          </a>
        </div>
      </Section>
    </>
  );
}
