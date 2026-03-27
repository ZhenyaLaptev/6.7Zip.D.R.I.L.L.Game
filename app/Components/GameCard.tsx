import Link from "next/link";
import { GameCardProps } from "../types/GameCardProps";

/**
 * Картка окремої гри у розділі проєктів.
 *
 * Відображає горизонтальний блок із зображенням або заглушкою,
 * назвою, описом та кнопкою-посиланням на детальну сторінку гри.
 *
 * @param props - Пропси компонента {@link GameCardProps}
 * @param props.title - Назва гри
 * @param props.description - Короткий опис гри (обрізається до 3 рядків)
 * @param props.link - URL детальної сторінки гри
 * @param props.imageSrc - Необов'язковий шлях до обкладинки гри;
 *   якщо не передано відображається текстова заглушка з назвою
 * @returns Розмітка картки гри
 */
export default function GameCard({ title, description, link, imageSrc }: GameCardProps) {
  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden flex flex-col md:flex-row shadow-lg">
      
      <div className="md:w-1/3 bg-slate-800 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-700 relative min-h-[200px]">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-6xl font-black text-orange-500/20 tracking-tighter p-8">{title}</span>
        )}
      </div>
      <div className="p-8 md:w-2/3 flex flex-col justify-center">
        <h2 className="text-3xl font-black text-white mb-2">{title}</h2>
        <p className="text-slate-400 mb-6 line-clamp-3">{description}</p>
        <div>
          <Link 
            href={link} 
            className="inline-block bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg transition"
          >
            Детальніше про гру
          </Link>
        </div>
      </div>
    </div>
  );
}