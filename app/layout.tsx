import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import Providers from "@/app/Components/Providers";
import ProvidersTheme from "./Components/ProvidersTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D.R.I.L.L. - Космічний бур",
  description: "Офіційний сайт гри d.r.i.l.l.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" suppressHydrationWarning>
        <body className={`${inter.className} min-h-screen flex flex-col`} 
        style={{ background: "var(--bg)", color: "var(--text)" }}>
        <Providers>
          <ProvidersTheme>
          <Header />
          <main className="flex-grow container mx-auto p-4 md:p-8">
            {children}
          </main>
          <Footer />
          </ProvidersTheme>
        </Providers>
      </body>
    </html>
  );
}