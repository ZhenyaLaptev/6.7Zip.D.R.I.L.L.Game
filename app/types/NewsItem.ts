/**
 * Модель окремої новини у стрічці.
 *
 * @property id - Унікальний числовий ідентифікатор (генерується через `Date.now()`)
 * @property date - Дата публікації у довільному текстовому форматі (наприклад, «Березень 2026»)
 * @property title - Заголовок новини
 * @property description - Повний текст повідомлення
 */
export type NewsItem = {
  id: number;
  date: string;
  title: string;
  description: string;
};