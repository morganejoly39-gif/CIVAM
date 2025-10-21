'use client'

import { motion } from 'framer-motion'

export default function Frangines07Page() {
  return (
    <main className="bg-[#fefbf7] text-gray-900 font-sans">
      {/* COUVERTURE STYLE MAGAZINE */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden px-6">
        {/* Image collage fond */}
        <img
          src="https://www.civam.org/wp-content/uploads/2023/03/IMG_20190628_111805-scaled.jpg"
          alt="Collage Frangines 07"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Contenu central */}
        <motion.div
          className="relative z-10 space-y-6 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-serif font-bold text-green-800 drop-shadow-sm">
          Solidarité alimentaire
          </h1>
          <p className="text-xl font-hand text-gray-800 italic">
          vers une alimentation digne et choisie pour toutes et tous
          </p>
        </motion.div>

        {/* Texture décorative */}
        <motion.img
          src=""
          alt=""
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-10 pointer-events-none"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
        />
      </section>
            {/* BANDEAU MANIFESTE STYLE POSTER */}
            <section className="relative py-24 px-6 bg-[url('/images/texture-cloth.jpg')] bg-cover bg-center text-white text-center">
        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(2rem,5vw,1rem)] font-hand font-bold leading-snug tracking-tight text-green-800">
          Le CIVAM Ardèche s'engage activement dans des projets de solidarité alimentaire aux côtés de collectifs citoyens, d’agriculteurs.rices et de collectivités locales. 
          <br></br>
          Notre objectif : contribuer à la mise en place de dispositifs innovants, inspirés du modèle de la Sécurité Sociale de l’Alimentation, afin de garantir un accès digne, universel et choisi à une alimentation de qualité.
          </h2>
      
        </motion.div>

        {/* texture floue en overlay */}
        <div className="absolute inset-0 bg-orange-300/40" />
      </section>
            {/* ÉDITORIAL ILLUSTRÉ */}
            <section className="py-16 bg-[#fffefb] px-6">

        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Texte éditorial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-[--accent-green]">
            Le réseau JASA (Justice Alimentaire en Sud Ardèche) 
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            un collectif réunissant citoyen·nes, structures sociales, acteurs.rices 
            de la distribution et acteur·ices du monde agricole. 
            Le CIVAM Ardèche y collabore notamment avec un groupe de producteur·ices 
            engagé·es dans des pratiques de justice alimentaire, comme les marchés à 
            prix différenciés, permettant à chacun·e de contribuer selon ses moyens 
            tout en garantissant une rémunération juste aux paysan·nes.
            </p>
            
          </motion.div>

          {/* Illustration vectorielle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://www.civam.org/wp-content/uploads/2023/03/P1013187-scaled.jpg"
              alt="Illustration femme rurale"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </section>

{/* ÉDITORIAL ILLUSTRÉ */}
<section className="py-16 bg-[#fffefb] px-6">


        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Texte éditorial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-[--accent-green]">
            Des partenariats solidaires entre producteurs.rices 
            et structures d’aide alimentaire 
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            Facilités grâce aux financements du dispositif Mieux Manger 
            Pour Tous. <br></br>Ces collaborations permettent d’approvisionner les relais alimentaires 
            en produits frais, locaux et de saison.
            </p>
            
          </motion.div>

          {/* Illustration vectorielle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://www.civam.org/wp-content/uploads/2023/03/IMG_20190628_111805-scaled.jpg"
              alt="Illustration femme rurale"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* ÉDITORIAL ILLUSTRÉ */}
      <section className="py-16 bg-[#fffefb] px-6">


        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Texte éditorial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-[--accent-green]">
            La diffusion du rapport "L’Injuste Prix de notre Alimentation" 
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            ce rapport met en lumière les déséquilibres de notre système 
            alimentaire actuel, en particulier l’écart croissant entre le coût 
            réel de production d’une alimentation de qualité et les prix 
            de vente imposés par la grande distribution. 
            À travers sa présentation auprès des élu·es et collectivités, 
            le CIVAM Ardèche encourage une réflexion collective sur la justice 
            alimentaire et la relocalisation de notre alimentation.
            </p>
            
          </motion.div>

          {/* Illustration vectorielle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://www.civam.org/wp-content/uploads/2023/03/IMG_20181016_152949-scaled.jpg"
              alt="Illustration femme rurale"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </section>

            {/* CONCLUSION POSTER MANIFESTE */}
            <section className="relative py-32 bg-[url('/images/poster-texture.jpg')] bg-cover bg-center text-white text-center">
        <div className="absolute inset-0 bg-orange-300/60" />

        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6 space-y-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-serif font-bold leading-tight text-white">
            Ensemble, enracinées et debout
          </h2>

          <p className="text-lg font-hand text-white/90">
          En participant à ces actions, le CIVAM Ardèche soutient des modèles agricoles durables, ancrés dans les territoires, et porteurs de justice sociale.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
  

  <a
    href="https://www.civam.org/wp-content/uploads/2024/09/Civam_SSA_FICHE_RESSOURCE.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-beige-600 text-[--accent-green] px-6 py-3 rounded-full hover:bg-[#496942] transition shadow border border-[--accent-green]"
  >
    Approfondir ses connaissances sur la SSA
  </a>
</div>

        </motion.div>
      </section>
    </main>
  )
} 