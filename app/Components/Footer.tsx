import Link from "next/link";
/**
 * Компонент нижнього колонтитула (footer) сайту "d.r.i.l.l."
 * * @remarks
 * Містить динамічне відображення поточного року, статус системи та
 * навігаційні посилання на соціальні платформи проекту.
 * * @component
 */
export default function Footer() {
  return (
      <footer 
        className="p-6 mt-12"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>   
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-slate-400 text-base">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>© {new Date().getFullYear()} D.R.I.L.L. Studio. Всі права захищено.</p>
          
          <p className="mt-1 font-mono text-sm text-slate-500">Система життєзабезпечення: ОНЛАЙН</p>
        </div>
        
        <div className="flex gap-6">
          <Link href="#" className="hover:text-orange-400 transition hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">
            Discord
          </Link>
          <Link href="#" className="hover:text-orange-400 transition hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">
            YouTube
          </Link>
          <Link href="#" className="hover:text-orange-400 transition hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}