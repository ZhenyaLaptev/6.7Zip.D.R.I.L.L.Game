/**
 * Пропси компонента {@link Components/NewsCard}.
 *
 * @property id - Унікальний числовий ідентифікатор новини
 * @property date - Дата публікації у довільному текстовому форматі
 * @property title - Заголовок новини
 * @property description - Повний текст повідомлення
 * @property onDelete - Колбек, що викликається при натисканні кнопки видалення;
 *   отримує `id` новини, яку потрібно видалити
 */
export interface NewsCardProps {
  id: number;
  date: string;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}