import { Hero } from "@/components/blocks/hero";
import { Section } from "@/components/blocks/section";
import { Reveal } from "@/components/blocks/reveal";
import { site } from "@/content/site";
import { certificates } from "@/content/certificates";
import Image from "next/image";

export default function CertificatesPage() {
  return (
    <>
      <Hero
        title={certificates.title}
        subtitle="Подарите эмоции: сертификаты на несколько заездов."
        image={{ src: "/images/new-photo/foot-photo.jpg", alt: "Сертификаты Lemar" }}
        primaryCta={{ href: site.links.telegram, label: "Уточнить и купить", external: true }}
        secondaryCta={{ href: "/rental", label: "Цены проката" }}
      />

      <Reveal>
        <Section>
        <div className="rounded-xl2 bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-10 shadow-glow">
          <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl md:text-3xl tracking-tight">Варианты сертификатов</h2>
              <p className="mt-3 text-white/70">{certificates.subtitle}</p>
              <p className="mt-2 text-sm text-white/55">{certificates.note}</p>
            </div>
            <a
              className="rounded-xl px-4 py-3 text-sm font-medium bg-accent/90 hover:bg-accent text-white shadow-glow transition"
              href={site.links.telegram}
              target="_blank"
              rel="noreferrer"
            >
              Уточнить и купить
            </a>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certificates.items.map((i) => (
              <div key={i.rides} className="rounded-xl2 bg-white/[0.02] ring-1 ring-white/10 overflow-hidden">
                <Image
                  src={i.image}
                  alt={`Сертификат Lemar: ${i.caption}`}
                  width={800}
                  height={520}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <div className="text-xs text-white/60">{i.caption}</div>
                  <div className="mt-2 text-lg font-semibold">{i.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div data-reveal className="grid gap-6 md:grid-cols-12 items-start">
          <div className="md:col-span-12 rounded-xl2 bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8 shadow-glow">
            <h2 className="font-display text-2xl tracking-tight">{certificates.salePointsTitle}</h2>
            <div className="mt-5 space-y-3">
              {certificates.salePoints.map((p) => (
                <div key={p.name} className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-4">
                  <div className="text-sm font-semibold text-white">{p.name}</div>
                  <div className="mt-1 text-sm text-white/70">{p.address}</div>
                  <div className="mt-2 text-xs text-white/55">{p.hours}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      </Reveal>
    </>
  );
}
