import { Hero } from "@/components/blocks/hero";
import { Section } from "@/components/blocks/section";
import { Reveal } from "@/components/blocks/reveal";
import { PricingCard } from "@/components/blocks/pricing";
import { site } from "@/content/site";
import { rentalPricing, trackRental } from "@/content/pricing";
import Image from "next/image";

export default function RentalPage() {
  return (
    <>
      <Hero
        title="Прокат и аренда трассы"
        subtitle="Цены на прокат для взрослых и детей, а также аренда трассы для компаний и любительских турниров."
        image={{ src: "/images/new-photo/IMG_3201.png", alt: "Прокат Lemar" }}
        primaryCta={{ href: site.links.telegram, label: "Записаться", external: true }}
      />

      <Reveal>
        <Section>
          <div className="grid gap-6 md:grid-cols-3">
            <PricingCard
              title={`${rentalPricing.adult.kart} — ${rentalPricing.adult.power}`}
              subtitle={`${rentalPricing.adult.title} / ${rentalPricing.duration}`}
              image={{ src: "/images/rental/adult-karts.jpg", alt: "Взрослые карты" }}
              items={rentalPricing.adult.items}
            />
            <PricingCard
              title={`${rentalPricing.kids.kart} — ${rentalPricing.kids.power}`}
              subtitle={`${rentalPricing.kids.title} / ${rentalPricing.duration}`}
              note={rentalPricing.kids.note}
              image={{ src: "/images/rental/kids-karts.jpg", alt: "Детские карты" }}
              items={rentalPricing.kids.items}
            />
            <PricingCard
              title={trackRental.title}
              subtitle="Трасса целиком"
              image={{ src: "/images/rental/track-rent.jpg", alt: "Аренда трассы" }}
              items={trackRental.items}
            />
          </div>
        </Section>

        <Section className="pt-0">
          <div data-reveal className="grid gap-6 md:grid-cols-12 items-start">
            <div className="md:col-span-7 rounded-xl2 bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8 shadow-glow">
              <h2 className="font-display text-2xl tracking-tight">На каких картах проходит прокат</h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Для проката мы предоставляем технику Sodi: взрослые карты <b>Sodi SR5 (9.5 л.с.)</b>, а для детей ростом от 130 см — <b>Sodi LR6 (6.5 л.с.)</b>.
                В стоимость входят экипировка (костюмы, шлемы, подшлемники, перчатки), инструктаж, хронометраж и 10 минут на трассе.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="rounded-xl px-4 py-3 text-sm font-medium bg-accent/90 hover:bg-accent text-white shadow-glow transition" href={site.links.telegram} target="_blank" rel="noreferrer">
                  Записаться в Telegram
                </a>
              </div>
            </div>

            <div className="md:col-span-5 overflow-hidden rounded-xl2 border border-white/10 bg-white/[0.02] shadow-glow">
              <div className="relative">
                <Image src="/images/new-photo/about-img4.png" alt="Картинг техника" width={900} height={700} className="w-full h-auto object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="p-5 text-sm text-white/70">
                Совет: приходите за 15–20 минут, чтобы спокойно пройти инструктаж и подобрать экипировку.
              </div>
            </div>
          </div>
        </Section>
      </Reveal>
    </>
  );
}
