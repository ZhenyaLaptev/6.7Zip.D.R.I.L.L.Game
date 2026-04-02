import { NewsCardProps } from "../types/NewsCardProps";
/**
 * Компонент картки з новинами (NewsCard) сайту "d.r.i.l.l."
 * * @remarks
 * Містить останні новини з розробки ігор 
 * та загальних новин від команди розробників.
 * @param props - Властивості компонента
 * @param props.id - Номер новини
 * @param props.date - Дата публікації
 * @param props.title - Заголовок новини
 * @param props.onDelete - Можливість видалення новини на сторінці
 * * @component
 */
export default function NewsCard({ id, date, title, description, onDelete }: NewsCardProps) {
  return (
    <article className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 relative group transition hover:border-slate-600">
        <div 
          className="rounded-xl p-6 border"
          style={{ background: "var(--card)", borderColor: "var(--border)" }}
        >        
        <span className="text-orange-500 text-sm font-bold">{date}</span>
        <button 
          onClick={() => onDelete(id)}
          className="text-slate-500 hover:text-red-500 transition opacity-0 group-hover:opacity-100 text-xl leading-none"
          title="Видалити новину"
        >
          ✕
        </button>
      </div>
      <h3 className="text-xl font-bold mt-2 mb-3">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </article>
  );
}