import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display tracking-wide text-white">LEMAR</div>
            <p className="mt-2 text-sm text-white/70 max-w-md">
              {site.city}. {site.address}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <a className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 hover:bg-white/10 transition" href={`tel:${site.phone.replace(/\D/g, "")}`}>
                {site.phone}
              </a>
              <a className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 hover:bg-white/10 transition" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <a className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 hover:bg-white/10 transition" href={site.links.vk} target="_blank" rel="noreferrer">
                VK
              </a>
              <a className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 hover:bg-white/10 transition" href={site.links.telegram} target="_blank" rel="noreferrer">
                Telegram
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm text-white/70">График</div>
            <div className="mt-2 space-y-1 text-sm text-white/85">
              <div>{site.hours.weekdays}</div>
              <div>{site.hours.weekends}</div>
              <div className="text-white/60">{site.hours.note}</div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm text-white/70">Документы</div>
            <div className="mt-2 flex flex-col gap-2 text-sm">
              <a className="text-white/80 hover:text-white transition" href={site.documents.privacy} target="_blank" rel="noreferrer">
                Политика конфиденциальности (PDF)
              </a>
              <a className="text-white/80 hover:text-white transition" href={site.documents.cafeMenu} target="_blank" rel="noreferrer">
                Меню кафе (PDF)
              </a>
              <Link className="text-white/60 hover:text-white/80 transition mt-2" href="/contacts">
                Контакты
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/45">
          © {new Date().getFullYear()} {site.name}. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
