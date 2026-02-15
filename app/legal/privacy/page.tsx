import { site } from "@/content/site";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-3xl">Политика конфиденциальности</h1>
      <p className="mt-4 text-white/70">Документ доступен в PDF.</p>
      <a className="mt-6 inline-flex rounded-xl px-4 py-3 text-sm font-medium bg-accent/90 hover:bg-accent text-white shadow-glow transition" href={site.documents.privacy} target="_blank" rel="noreferrer">
        Открыть PDF
      </a>
    </div>
  );
}
