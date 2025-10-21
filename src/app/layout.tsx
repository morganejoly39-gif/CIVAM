import './globals.css'
import CurvedMenu from '@/app/components/CurvedMenu'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CIVAM Ardèche',
  description: 'Collectif pour une agriculture durable, solidaire et locale en Ardèche',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-[#fdf6ec] text-gray-900 font-sans antialiased selection:bg-[--accent-green]/40 relative overflow-x-hidden">

        {/* HEADER STICKY */}
        <header className="fixed top-0 left-0 w-full z-40 bg-[#fdfaf4]/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
  <div className="max-w-screen-xl mx-auto px-1 py-1 flex justify-between items-center">
    <Link
      href="/"
      className="ml-[20px] flex items-center gap-3 text-2xl font-serif font-bold text-[--accent-green] hover:opacity-80 transition py-2"
    >
      <img
        src="https://agir-ese.org/sites/default/files/acteurs/logos/2020-01/ARDECHE%20COULEUR.png" // ← mets ton chemin ici
        alt="Logo CIVAM Ardèche"
        className="w-10 h-10 object-contain"
      />
      <span>CIVAM Ardèche</span>
    </Link>

    <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
      {/* Tes liens de menu ici */}
    </nav>
  </div>
</header>



        {/* MENU LATÉRAL */}
        <CurvedMenu />

        <main style={{ paddingTop: '80px' }} className="pt-24 min-h-screen">{children}</main>

        <footer className="text-sm text-center text-gray-500 py-8 border-t border-gray-200 mt-16">
          © {new Date().getFullYear()} CIVAM Ardèche — Tous droits réservés.
        </footer>
      </body>
    </html>
  )
}
