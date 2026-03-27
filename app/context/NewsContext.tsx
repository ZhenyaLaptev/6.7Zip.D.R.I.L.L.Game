"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { NewsContextType } from "../types/NewsContextType";
import { NewsItem } from "../types/NewsItem";

/**
 * React-контекст для управління стрічкою новин.
 * Початкове значення `undefined`; доступ можливий лише через {@link useNews}.
 */
export const NewsContext = createContext<NewsContextType | undefined>(undefined);

/**
 * Провайдер контексту новин.
 *
 * Зберігає список новин у локальному стані та надає методи
 * для їх додавання і видалення всім дочірнім компонентам.
 *
 * Початково містить дві демонстраційні новини.
 *
 * @param children - Дочірні компоненти, що матимуть доступ до контексту
 * @returns Провайдер {@link NewsContext} із поточним станом та методами
 */
export function NewsProvider({ children }: { children: ReactNode }) {
  /** Поточний список новин. Сортується від найновішої до найстарішої. */
  const [news, setNews] = useState<NewsItem[]>([
    { id: 1, date: "Березень 2026", title: "Оновлення механіки перегріву", description: "Ми додали нову систему охолодження бура. Тепер видобуток у магматичних зонах потребує тактичного підходу." },
    { id: 2, date: "Лютий 2026", title: "Перший тизер-трейлер!", description: "Робота над візуальними ефектами руйнування астероїдів завершена. Дивіться наш перший концепт-трейлер на YouTube." }
  ]);

  /**
   * Додає нову новину на початок списку.
   * ID генерується автоматично через `Date.now()`.
   *
   * @param item - Дані новини без поля `id` (воно генерується автоматично)
   */
  const addNews = (item: Omit<NewsItem, "id">) => {
    const newId = Date.now();
    setNews((prev) => [{ ...item, id: newId }, ...prev]);
  };

  /**
   * Видаляє новину зі списку за її ідентифікатором.
   *
   * @param id - Унікальний ідентифікатор новини, яку потрібно видалити
   */
  const deleteNews = (id: number) => {
    setNews((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NewsContext.Provider value={{ news, addNews, deleteNews }}>
      {children}
    </NewsContext.Provider>
  );
}

/**
 * Хук для доступу до контексту новин.
 *
 * Повертає поточний список новин та методи управління ними.
 * Має викликатися лише всередині компонентів, обгорнутих у {@link NewsProvider}.
 *
 * @throws {Error} Якщо хук викликано поза межами `NewsProvider`
 * @returns Об'єкт {@link NewsContextType} із `news`, `addNews` та `deleteNews`
 */
export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) throw new Error("useNews must be used within a NewsProvider");
  return context;
};