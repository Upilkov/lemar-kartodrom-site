import { Hero } from "@/components/blocks/hero";
import { Section } from "@/components/blocks/section";
import { site } from "@/content/site";

export default function ContactsPage() {
  return (
    <>
      <Hero
        title="Контакты"
        subtitle="Свяжитесь с нами удобным способом — и приезжайте за эмоциями."
        image={{ src: "/images/new-photo/store.jpg", alt: "Контакты Lemar" }}
        primaryCta={{ href: site.links.telegram, label: "Написать в Telegram", external: true }}
        secondaryCta={{ href: site.links.vk, label: "Группа VK", external: true }}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7 rounded-xl2 bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8 shadow-glow">
            <h2 className="font-display text-2xl tracking-tight">Как нас найти</h2>
            <div className="mt-4 space-y-2 text-white/75">
              <div><span className="text-white/60">Адрес:</span> {site.address}</div>
              <div><span className="text-white/60">Телефон:</span> {site.phone}</div>
              <div><span className="text-white/60">Email:</span> {site.email}</div>
            </div>

            <div className="mt-6 rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
              <div className="text-sm text-white/80">График</div>
              <div className="mt-2 text-sm text-white/75">
                <div>{site.hours.weekdays}</div>
                <div>{site.hours.weekends}</div>
                <div className="text-white/55 mt-1">{site.hours.note}</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="rounded-xl px-4 py-3 text-sm font-medium bg-accent/90 hover:bg-accent text-white shadow-glow transition" href={site.links.telegram} target="_blank" rel="noreferrer">Telegram</a>
              <a className="rounded-xl px-4 py-3 text-sm font-medium bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition text-white/90" href={site.links.vk} target="_blank" rel="noreferrer">VK</a>
              <a className="rounded-xl px-4 py-3 text-sm font-medium bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition text-white/90" href={site.links.timing} target="_blank" rel="noreferrer">Live timing</a>
            </div>
          </div>

          <div className="md:col-span-5 overflow-hidden rounded-xl2 border border-white/10 bg-white/[0.02] shadow-glow">
            <iframe
              title="Карта"
              className="h-[420px] w-full"
              src="https://yandex.ru/map-widget/v1/?ll=39.655194%2C47.109535&z=16&pt=39.655194%2C47.109535,pm2rdm"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
