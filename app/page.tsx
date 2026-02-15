import { Hero } from "@/components/blocks/hero";
import { Section } from "@/components/blocks/section";
import { Reveal } from "@/components/blocks/reveal";
import { MediaSplit } from "@/components/blocks/media-split";
import { PricingCard } from "@/components/blocks/pricing";
import { site } from "@/content/site";
import { rentalPricing, trackRental } from "@/content/pricing";
import { certificates } from "@/content/certificates";

export default function Page() {
  return (
    <>
      <Hero
        title="Картодром Lemar"
        subtitle="Источник огромных спортивных эмоций. Прокат на Sodi, школа картинга, аренда трассы и подарочные сертификаты."
        image={{ src: "/images/hero/hero-bg.jpg", alt: "Lemar — картодром" }}
        primaryCta={{ href: site.links.telegram, label: "Записаться в Telegram", external: true }}
        secondaryCta={{ href: "/rental", label: "Цены и аренда" }}
      />

      <Reveal>
        <Section>
          <MediaSplit
            title="Прокат картов"
            text="Мы используем технику мирового лидера Sodi. Для вас доступны взрослые и детские карты (от 130 см). В стоимость входят экипировка, инструктаж, хронометраж и 10 минут на трассе."
            image={{ src: "/images/sections/rental.jpg", alt: "Прокат картов Lemar" }}
          >
            <div className="flex flex-wrap gap-3">
              <a className="rounded-xl px-4 py-3 text-sm font-medium bg-accent/90 hover:bg-accent text-white shadow-glow transition" href="/rental">
                Смотреть цены
              </a>
            </div>
          </MediaSplit>
        </Section>

        <Section className="pt-0">
          <div className="grid gap-6 md:grid-cols-3">
            <PricingCard
              title={`${rentalPricing.adult.kart} — ${rentalPricing.adult.power}`}
              subtitle="Взрослые"
              items={rentalPricing.adult.items}
            />
            <PricingCard
              title={`${rentalPricing.kids.kart} — ${rentalPricing.kids.power}`}
              subtitle="Дети"
              note={rentalPricing.kids.note}
              items={rentalPricing.kids.items}
            />
            <PricingCard title={trackRental.title} subtitle="Для компаний / турниров" items={trackRental.items} />
          </div>
        </Section>

        <Section>
          <MediaSplit
            title="Школа картинга"
            text="Индивидуальные и групповые занятия для разных возрастов и уровня подготовки. Теория, практика, тренерское сопровождение и внутренние соревнования."
            image={{ src: "/images/new-photo/new_school.jpg", alt: "Школа картинга Lemar" }}
            reverse
          >
            <div className="flex flex-wrap gap-3">
              <a className="rounded-xl px-4 py-3 text-sm font-medium bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition text-white/90" href="/school">
                Подробнее о школе
              </a>
              <a className="rounded-xl px-4 py-3 text-sm font-medium bg-accent/90 hover:bg-accent text-white shadow-glow transition" href={site.links.telegram} target="_blank" rel="noreferrer">
                Записаться на занятие
              </a>
            </div>
          </MediaSplit>
        </Section>

        <Section>
          <div data-reveal className="rounded-xl2 bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-10 shadow-glow">
            <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl md:text-3xl tracking-tight">{certificates.title}</h2>
                <p className="mt-3 text-white/70">{certificates.subtitle}</p>
                <p className="mt-2 text-sm text-white/55">{certificates.note}</p>
              </div>
              <a className="rounded-xl px-4 py-3 text-sm font-medium bg-accent/90 hover:bg-accent text-white shadow-glow transition" href="/certificates">
                Выбрать сертификат
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {certificates.items.map((i) => (
                <div key={i.rides} className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-4">
                  <div className="text-xs text-white/60">{i.caption}</div>
                  <div className="mt-2 text-lg font-semibold">{i.price}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </Reveal>
    </>
  );
}
