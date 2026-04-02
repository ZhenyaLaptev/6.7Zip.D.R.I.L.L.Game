import Link from "next/link";
import { GameCardProps } from "../types/GameCardProps";
/**
 * Компонент картки ігор (GameCard) сайту "d.r.i.l.l."
 * * @remarks
 * Містить інформацію про кожну розроблену гру компанією,
 * зокрема її логотип текстовий опис та подробиці розробки.
 * @param props - Властивості компонента
 * @param props.title - Заголовок з назвою гри
 * @param props.description - Короткий опис особливостей гри
 * @param props.link - Динамічне посилання на сторінку з грою
 * @param props.imageSrc - Файл зображення логотипу гри
 * * @component
 */
export default function GameCard({ title, description, link, imageSrc }: GameCardProps) {
  return (
      <div 
        className="rounded-xl p-6 border"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      >      
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