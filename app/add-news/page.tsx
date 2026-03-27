"use client";

import { useState } from "react";
import Link from "next/link";
import { useNews } from "@/app/context/NewsContext";

/**
 * Сторінка додавання нової новини «Термінал Зв'язку».
 *
 * Надає форму з трьома полями: заголовок, дата та опис новини.
 * Після успішного відправлення показує підтвердження на 3 секунди
 * та очищає форму.
 *
 * Використовує {@link useNews} для запису новини у глобальний контекст.
 *
 * @returns Розмітка сторінки з формою додавання новини
 */
export default function AddNews() {
  const { addNews } = useNews();

  /**
   * Стан полів форми.
   *
   * @property title - Заголовок новини
   * @property date - Дата публікації (зоряна дата)
   * @property description - Текст повідомлення
   */
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
  });

  /** Прапорець успішного відправлення форми. Показує підтвердження на 3 секунди. */
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Обробник відправлення форми.
   * Додає нову новину через контекст, скидає поля та запускає таймер підтвердження.
   *
   * @param e - Подія відправлення HTML-форми
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addNews({
      title: formData.title,
      date: formData.date,
      description: formData.description
    });
    
    setIsSubmitted(true);
    setFormData({ title: "", date: "", description: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  /**
   * Універсальний обробник зміни полів форми.
   * Оновлює відповідне поле у стані `formData` за атрибутом `name` елемента.
   *
   * @param e - Подія зміни значення поля введення або текстового поля
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-black text-white">Термінал <span className="text-orange-500">Зв&apos;язку</span></h1>
        <Link href="/" className="text-sm font-mono text-slate-400 hover:text-orange-400">
          [ ПОВЕРНУТИСЯ НА ГОЛОВНУ ]
        </Link>
      </div>

      <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {isSubmitted && (
          <div className="mb-6 p-4 bg-emerald-900/30 border border-emerald-500/50 text-emerald-400 rounded-lg font-mono text-sm">
            &gt; СТАТУС: Новину успішно завантажено в інфомережу.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
              Заголовок передачі
            </label>
            <input
              type="text" id="title" name="title" required
              value={formData.title} onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none font-mono"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
              Зоряна дата
            </label>
            <input
              type="text" id="date" name="date" required
              value={formData.date} onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none font-mono"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">
              Вміст повідомлення
            </label>
            <textarea
              id="description" name="description" required rows={5}
              value={formData.description} onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest py-4 rounded-lg transition"
          >
            Відправити в мережу
          </button>
        </form>
      </div>
    </div>
  );
}