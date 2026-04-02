import { TeamMemberProps } from "../types/TeamMemberCard";
import { NewsCardProps } from "../types/NewsCardProps";
/**
 * Компонент картки члена команди (TeamMemberCard) сайту "d.r.i.l.l."
 * * @remarks
 * Містить інформацію про поточну команду розробників гри,
 * їхні обов`язки і тд.
 * @param props - Властивості компонента
 * @param props.name - Ім`я розробника
 * @param props.role - Роль в загальній розробці
 * @param props.desc - Опис обов`язків
 * * @component
 */
export default function TeamMemberCard({ name, role, desc }: TeamMemberProps) {
  return (
      <div 
        className="rounded-xl p-6 border"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      >
      <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-4 border-2 border-slate-700 flex items-center justify-center">
      <span className="text-3xl">🧑‍🚀</span>
      </div>
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-orange-500 text-sm font-semibold mb-3">{role}</p>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
}