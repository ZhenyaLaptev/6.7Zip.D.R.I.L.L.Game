import { TeamMemberProps } from "../types/TeamMemberCard";

/**
 * Картка члена команди розробників.
 *
 * Відображає аватар-заглушку у вигляді емодзі астронавта,
 * ім'я, роль у проєкті та короткий опис внеску учасника.
 * При наведенні рамка картки підсвічується оранжевим.
 *
 * @param props - Пропси компонента {@link TeamMemberProps}
 * @param props.name - Повне ім'я учасника команди
 * @param props.role - Роль учасника у проєкті (наприклад, «Gameplay programmer»)
 * @param props.desc - Короткий опис внеску учасника у розробку
 * @returns Розмітка картки члена команди
 */
export default function TeamMemberCard({ name, role, desc }: TeamMemberProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-orange-500/50 transition">
      <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-4 border-2 border-slate-700 flex items-center justify-center">
        <span className="text-3xl">🧑‍🚀</span>
      </div>
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-orange-500 text-sm font-semibold mb-3">{role}</p>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
}