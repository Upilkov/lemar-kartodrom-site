import "./globals.css";
import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "Картодром Lemar — официальный сайт",
  description: "Картинг в Ростове-на-Дону. Прокат, школа картинга, сертификаты, аренда трассы.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${orbitron.variable}`}>
      <body>
        <div className="relative min-h-dvh overflow-x-clip">
          <div className="pointer-events-none absolute inset-0 gridlines opacity-40" />
          <div className="noise pointer-events-none absolute inset-0" />
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
