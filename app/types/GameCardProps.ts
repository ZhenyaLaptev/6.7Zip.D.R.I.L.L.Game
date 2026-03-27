/**
 * Пропси компонента {@link Components/GameCard}.
 *
 * @property title - Назва гри
 * @property description - Короткий опис гри
 * @property link - URL сторінки з детальною інформацією про гру
 * @property imageSrc - Необов'язковий шлях до зображення-обкладинки;
 *   якщо не передано відображається текстова заглушка
 */
export interface GameCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc?: string;
}