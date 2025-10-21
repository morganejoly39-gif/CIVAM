'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function EnVieDeFermePage() {
  return (
    <main className="bg-[#fdfaf4] text-gray-900 font-sans">
      {/* HERO */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <img
          src="https://accueilpedagogiquealaferme.fr/cache/bf_imageDSC_0004_(Copier)_vignette_1600_1200.JPG"
          alt="En vie de ferme"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 px-6 max-w-2xl"
        >
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-serif font-bold text-green-800 drop-shadow-sm">
            En vie de ferme
          </h1>
          <p className="mt-6 text-lg text-gray-800 leading-relaxed">
            Une immersion pédagogique et humaine au cœur des fermes ardéchoises.
          </p>
        </motion.div>
      </section>

     

      {/* INTRODUCTION + OBJECTIFS */}
      <section className="py-18 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto space-y-16">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-serif font-bold text-[--accent-green]">
              L'agriculture comme lieu de transmission vivante
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              “En vie de ferme” est un projet d’éducation à l’agriculture paysanne, porté par le CIVAM Ardèche.
              Il connecte écoles, centres sociaux, citoyens et fermes engagées pour retisser du lien au vivant.
            </p>
          </motion.div>

          {/* Objectifs pédagogiques en grille */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
          >
            {[
              'Faire le lien entre alimentation et agriculture',
              'Comprendre les enjeux de l’agroécologie',
              'Découvrir les pratiques concrètes sur le terrain',
              'Observer, expérimenter, éveiller les sens',
              'Susciter l’échange et le questionnement',
              'Sensibiliser aux circuits courts et à la saisonnalité',
            ].map((obj, i) => (
              <motion.div
                key={i}
                className="bg-white border border-green-800/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition hover:-translate-y-1 flex items-center justify-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-green-800 leading-snug tracking-wide">
                  {obj}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PÉDAGOGIE ACTIVE */}
      <section className="py-22 bg-[#ffffff]">
        <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://accueilpedagogiquealaferme.fr/cache/bf_image20160503_140139_(Copier)_vignette_1600_1200.jpg"
              alt="Atelier pédagogique en ferme"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-serif font-bold text-[--accent-green]">
              Une pédagogie concrète et sensorielle
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Les fermes sont des lieux vivants où l’on apprend par le faire : observer les cultures, comprendre la saisonnalité, participer à la traite ou découvrir les semis.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              “En vie de ferme” valorise une pédagogie active, où l’enfant, l’adolescent ou l’adulte devient acteur de son expérience.
              Curiosité, observation, dialogue et expérimentation sont au cœur de chaque visite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RESSOURCES & OUTILS */}
      <section className="py-18 px-6 bg-[#f9f4ec]">
        <div className="max-w-screen-xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[--accent-green]">
              Des ressources pour apprendre autrement
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Le projet “En vie de ferme” s’appuie sur des outils pédagogiques concrets pour construire des visites dynamiques, adaptées à tous les âges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 md:p-10 shadow-lg text-center max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              La mallette “Enquêtes d’agriculture”
            </h3>
            <p className="mt-3 text-gray-700 text-md">
              Une mallette pédagogique complète pour animer des ateliers sur l’agriculture, le sol, les circuits courts, le vivant. Outils à destination des enseignants, animateurs et éducateurs.
            </p>
            <a
              href="https://www.accueilpedagogiquealaferme.fr"
              target="_blank"
              className="mt-8 inline-block bg-white text-[--accent-green] px-6 py-3 rounded-full hover:bg-[#adf3b1] transition shadow border border-[--accent-green]"
            >
              Accéder à la plateforme pédagogique
            </a>
          </motion.div>
        </div>
      </section>

       {/* VIDÉO DE CLÔTURE */}
       <section className="py-18 bg-[#ffffff]">
        <div className="max-w-screen-lg mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
        
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Plongez au cœur du projet “En vie de ferme” à travers cette vidéo qui met en lumière la passion des agriculteurs, leurs savoir-faire et les échanges vécus lors des visites pédagogiques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-xl max-w-4xl mx-auto"
          >
            <video
              className="w-full h-full object-cover"
              controls
              poster="https://youtu.be/zBwWMxB7-6w?si=XTBtuMZYa0nFKTI0"
            >
              <source src="/videos/en-vie-de-ferme.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </motion.div>
        </div>
      </section>

      {/* CONTACT + DÉPLIANT */}
      <section className="py-18 px-6 bg-white">
        <div className="max-w-screen-md mx-auto space-y-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[--accent-green]">
              Organiser une visite pédagogique ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Le CIVAM Ardèche coordonne l’accueil pédagogique en ferme.
              Écoles, centres sociaux, maisons de retraite, collectivités : contactez-nous pour co-construire un projet.
            </p>

            <div className="text-gray-700 text-md space-y-1">
              <p>📞 06.75.09.72.67</p>
              <p>📧 <a href="mailto:enviedefermes.civam07@gmail.com" className="underline">enviedefermes.civam07@gmail.com</a></p>
              <p>📍 Domaine Olivier de Serres, 07170 MIRABEL</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="https://drive.google.com/file/d/18ASF4szQLDv3sBDXv3FwFcxtm20-KNba/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-white text-[--accent-green] px-6 py-3 rounded-full hover:bg-[#adf3b1] transition shadow border border-[--accent-green]"
            >
              Télécharger le dépliant “En vie de ferme” (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONCLUSION + CTA FINAL */}
      <section className="py-20 bg-[#fdfaf4] text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-serif font-bold text-[--accent-green] leading-tight">
            Les fermes vous ouvrent leurs portes
          </h2>
          <p className="text-lg text-gray-700">
            Explorez les fermes pédagogiques engagées dans le projet “En vie de ferme”.
            Rencontrez les acteurs du territoire, découvrez leurs pratiques et vivez une expérience éducative et humaine.
          </p>
          <Link
            href="/carte"
            className="mt-8 inline-block bg-white text-[--accent-green] px-6 py-3 rounded-full hover:bg-[#adf3b1] transition shadow border border-[--accent-green]"
          >
            Voir la carte des fermes participantes
          </Link>
        </motion.div>
      </section>

      
    </main>
  )
}
