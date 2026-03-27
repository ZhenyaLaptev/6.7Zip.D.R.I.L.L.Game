/**
 * Пропси компонента {@link Components/TeamMemberCard}.
 *
 * @property name - Повне ім'я учасника команди
 * @property role - Роль учасника у проєкті (наприклад, «Sound designer / Level designer»)
 * @property desc - Короткий опис внеску учасника у розробку гри
 */
export interface TeamMemberProps {
  name: string;
  role: string;
  desc: string;
}