'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

const menuLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Carte interactive', href: '/carte' },
    { label: 'De ferme en ferme', href: '/de-ferme-en-ferme' },
    { label: 'En vie de ferme', href: '/en-vie-de-ferme' },
    { label: 'De ferme en fête', href: '/de-ferme-en-fete' },
    { label: 'Solidarité alimentaire', href: '/frangines-07' },
  ]
  
export default function CurvedMenu() {
  const [open, setOpen] = useState(false)
  const pathRef = useRef<SVGPathElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Bloque le scroll lorsque le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  useEffect(() => {
    if (open && pathRef.current) {
      gsap.fromTo(
        pathRef.current,
        { attr: { d: 'M0,0 C0,0 0,0 0,100 H0 Z' } },
        { attr: { d: 'M0,0 C80,50 80,50 0,100 H0 Z' }, duration: 0.5, ease: 'power3.out' }
      )
    } else if (!open && pathRef.current) {
      gsap.to(pathRef.current, {
        attr: { d: 'M0,0 C0,0 0,0 0,100 H0 Z' },
        duration: 0.4,
        ease: 'power3.in',
      })
    }
  }, [open])

  return (
    <>
      {/* Bouton hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-6 z-[60] w-10 h-10 bg-[--accent-green] text-black rounded-md flex items-center justify-center shadow shadow"
        aria-label="Open menu"
      >
        ☰
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Menu latéral */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4 }}
              ref={menuRef}
              className="fixed top-0 left-0 w-[300px] h-full bg-[#8BBB1A] z-50 px-8 py-12 space-y-8 shadow-xl"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-[--accent-green] text-2xl"
              >
                ×
              </button>

              <nav className="text-orange-100 flex flex-col gap-5 mt-8">
                {menuLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-xl font-serif text-[--accent-green] hover:underline"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* SVG incurvé visible uniquement si menu ouvert */}
            <svg className=" fixed top-0 left-0 h-full w-[80px] z-40 pointer-events-none">
              <path
                ref={pathRef}
                d="M0,0 C0,0 0,0 0,100 H0 Z"
                fill="#f3ead7"
              />
            </svg>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
