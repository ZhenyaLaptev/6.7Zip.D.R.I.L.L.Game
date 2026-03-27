import { NewsItem } from "./NewsItem";

/**
 * Тип значення контексту новин {@link context/NewsContext}.
 *
 * @property news - Масив усіх поточних новин
 * @property addNews - Функція додавання нової новини;
 *   приймає об'єкт новини без поля `id` воно генерується автоматично
 * @property deleteNews - Функція видалення новини за її числовим `id`
 */
export type NewsContextType = {
  news: NewsItem[];
  addNews: (item: Omit<NewsItem, "id">) => void;
  deleteNews: (id: number) => void;
};