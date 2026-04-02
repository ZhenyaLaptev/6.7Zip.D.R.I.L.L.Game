"use client";

import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
/**
 * Компонент верхнього колонтитула (header) сайту "d.r.i.l.l."
 * * @remarks
 * Містить компоненти навігації між основними сторінками "Головна", "Ігри", "Команда"
 * також містить логотип команди розробників.
 * * @component
 */
export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-slate-900 border-b border-orange-500/30 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <Link href="/" className="transition" style={{ color: "var(--text)" }}>
          <img src="/logo1.png" alt="Logo" className="h-14 sm:h-16 md:h-20 w-auto" />
        </Link>

        <nav className="flex gap-6 md:gap-10 font-semibold text-lg sm:text-xl md:text-2xl">
          <Link href="/" className="transition" style={{ color: "var(--text)" }}>
            Головна
          </Link>

          <Link href="/games" className="transition" style={{ color: "var(--text)" }}>
            Ігри
          </Link>

          <Link href="/team" className="transition" style={{ color: "var(--text)" }}>
            Команда
          </Link>
        </nav>
        <div className="flex gap-2">
        <button 
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "text-orange-500" : ""}
        >
          Темна
        </button>
            <button 
          onClick={() => setTheme("light")}
          className={theme === "light" ? "text-orange-500" : ""}
        >
          Світла
        </button>
        </div>
      </div>
    </header>
  );
}