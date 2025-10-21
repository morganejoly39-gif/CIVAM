'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-black text-white font-sans relative overflow-hidden">
      {/* BACKGROUND VIDEO OR IMAGE LOOP */}
      <div className="absolute inset-0 z-0">
  <img
    src="https://i.postimg.cc/Y26Vpfk4/59a1f5627b35a15a487710471c0bbd47.jpg"
    alt="background"
    className="w-full object-cover opacity-60"
  />
</div>


      {/* HERO TEXT */}
      <div className="relative z-10 h-screen w-full flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[clamp(3rem,8vw,6rem)] font-serif font-bold leading-tight text-white mix-blend-difference"
        >
          CIVAM Ardèche
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl max-w-xl text-white/80 mt-6 font-light"
        >
          Ensemble, cultivons une transition agricole durable, locale et solidaire.
        </motion.p>

        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-10"
            >
              <Link
                href="#intro"
                className="inline-block border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm tracking-wide uppercase"
              >
                Entrer sur le site
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* SECTION INTRO : QUI SOMMES-NOUS */}
      <section
        id="intro"
        className="relative bg-[#fdf6ec] text-gray-900 pt-32 pb-28 overflow-hidden"
      >
      

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          {/* TEXTE GAUCHE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-serif font-bold text-[--accent-green] leading-tight mb-6">
              Une agriculture humaine,<br /> connectée aux territoires
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le CIVAM Ardèche est un collectif citoyen qui accompagne la transition
              agroécologique et sociale en Ardèche. Des fermes ouvertes aux événements de
              solidarité alimentaire, chaque action tisse du lien entre producteurs, habitantes,
              curieux et citoyens engagés.
            </p>
          </motion.div>

          {/* IMAGE DROITE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 max-w-md rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="https://i.pinimg.com/736x/fa/cb/3a/facb3acf160062b0ff3b0319655f666a.jpg"
              alt="Animation civam"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* SVG DIAGONAL BOTTOM */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32 text-[#fdf6ec]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="#fdf6ec" points="0,0 100,100 0,100" />
        </svg>
      </section>
      {/* TIMELINE NARRATIVE */}
      <section className="bg-[#ffffff] text-gray-900 py-32 px-6 relative">
        <div className="max-w-screen-md mx-auto space-y-20">
          <motion.h2
            className="text-3xl md:text-4xl font-serif font-bold text-center text-[--accent-green]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Une dynamique de terrain, humaine et engagée
          </motion.h2>

          {[
            {
              year: '2001',
              title: 'Naissance du CIVAM Ardèche',
              desc: 'Un collectif de paysan·nes et citoyens se réunit pour partager, apprendre, et agir localement.',
            },
            {
              year: '2012',
              title: 'Premiers projets de sensibilisation',
              desc: 'Animations en milieu scolaire, ateliers alimentation, ouverture de fermes au public.',
            },
            {
              year: '2018',
              title: 'Frangines 07 & De Ferme en Fête',
              desc: 'Place aux femmes dans l’agriculture et mise en lumière des savoir-faire locaux.',
            },
            {
              year: '2025',
              title: 'Édition spéciale : 25 ans d’engagement',
              desc: 'Un parcours anniversaire pour célébrer les agricultures durables et solidaires.',
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              className="relative pl-10 border-l-2 border-[--accent-green]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {/* Dot */}
              <div className="w-4 h-4 bg-[--accent-green] rounded-full absolute left-[-10px] top-1.5 border-4 border-white shadow" />
              <div className="ml-2">
                <p className="text-sm uppercase tracking-wide text-gray-500">{step.year}</p>
                <h3 className="text-xl font-serif font-semibold text-gray-900 mt-1">{step.title}</h3>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* GALERIE 3D PROJETS */}
      <section className="bg-[#fdfaf4] py-28 px-6 overflow-hidden">
        <div className="max-w-screen-xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 drop-shadow-sm">
              Les projets qui donnent vie au territoire
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Chaque action du CIVAM Ardèche est une histoire locale, un engagement concret, une rencontre.
            </p>
          </motion.div>

          {/* SCROLLABLE WRAPPER */}
          <motion.div
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
  

{[
  {
    title: 'De ferme en ferme',
    img: 'https://i.postimg.cc/jS8JHNhF/Capture-d-cran-2025-10-17-10-50-25.png',
    href: '/de-ferme-en-ferme',
  },
  {
    title: 'Solidarité alimentaire',
    img: 'https://i.postimg.cc/Hx0Y21gY/Capture-d-cran-2025-10-17-10-51-56.png',
    href: '/frangines-07',
  },
  {
    title: 'En vie de ferme',
    img: 'https://i.postimg.cc/TPrC2txV/IMG-2892.jpg',
    href: '/en-vie-de-ferme',
  },
  {
    title: 'De ferme en fête',
    img: 'https://www.civam.org/wp-content/uploads/2024/04/content.jpeg',
    href: '/de-ferme-en-fete',
  },
].map((project, i) => (
  <Link
    key={i}
    href={project.href}
    className="relative min-w-[280px] md:min-w-[340px] snap-start group aspect-[3/2] rounded-2xl overflow-hidden shadow-xl bg-black/5 cursor-pointer"
  >
    <img
      src={project.img}
      alt={project.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-500" />
    <div className="absolute bottom-4 left-4 z-10">
      <h3 className="text-white font-serif text-lg font-semibold">
        {project.title}
      </h3>
    </div>
  </Link>
))}

          </motion.div>
        </div>
      </section>
      
      {/* CONCLUSION + ADHÉSION */}
      <section className="relative py-36 bg-[#f3ead7] overflow-hidden">
        {/* BACKGROUND DECOR */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/12/c9/f6/12c9f6e832cf8d99006f0846271e5145.jpg"
            alt="fond carte"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-8"
        >
          <h2 className="text-[clamp(2rem,6vw,3rem)] font-serif font-bold text-green-800 drop-shadow-sm leading-tight">
          Rejoignez le réseau<br />CIVAM Ardèche
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
          Vous êtes citoyen·ne, paysan·ne, bénévole ou simplement curieux·se ?  
Adhérer au CIVAM, c’est rejoindre un collectif d’acteurs engagés pour une agriculture locale, solidaire et respectueuse du vivant.  
Ensemble, construisons une transition agricole durable en Ardèche.

          </p>
          <Link
            href="https://www.helloasso.com/associations/federation-civam-de-l-ardeche"
            className="mt-8 inline-block bg-white text-green-800 px-6 py-3 rounded-full hover:bg-[#adf3b1] transition shadow border border-[--accent-green]"
          >
            Rejoignez le réseau
          </Link>
        </motion.div>
      </section>
  
    </main>
  )
}
