import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import Providers from "@/app/Components/Providers";

const inter = Inter({ subsets: ["latin"] });

/**
 * Метадані сторінок сайту для SEO та браузерної вкладки.
 *
 * @property title - Заголовок вкладки браузера
 * @property description - Опис сайту для пошукових систем
 */
export const metadata: Metadata = {
  title: "D.R.I.L.L. - Космічний бур",
  description: "Офіційний сайт гри d.r.i.l.l.",
};

/**
 * Кореневий layout усього застосунку Next.js.
 *
 * Обгортає всі сторінки спільною структурою:
 * - {@link Header} верхня навігаційна панель
 * - {@link Footer} нижній колонтитул
 * - {@link Providers} глобальні контекст-провайдери
 *
 * @param children - Вміст поточної сторінки, який рендериться у `<main>`
 * @returns Повна HTML-структура сторінки з підключеними шрифтами та стилями
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body className={`${inter.className} bg-slate-950 text-slate-200 min-h-screen flex flex-col`}>
        <Providers>
          <Header />
          <main className="flex-grow container mx-auto p-4 md:p-8">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}