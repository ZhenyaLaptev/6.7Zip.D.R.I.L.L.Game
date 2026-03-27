"use client";

import { NewsProvider } from "@/app/context/NewsContext";

/**
 * Кореневий компонент-обгортка для глобальних провайдерів контексту.
 *
 * Обгортає дочірні компоненти у {@link NewsProvider},
 * забезпечуючи доступ до контексту новин по всьому застосунку.
 * Використовується у layout для підключення провайдерів на рівні `<body>`.
 *
 * @param children - Дочірні компоненти, що матимуть доступ до контекстів
 * @returns Дерево провайдерів, що огортає `children`
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <NewsProvider>{children}</NewsProvider>;
}