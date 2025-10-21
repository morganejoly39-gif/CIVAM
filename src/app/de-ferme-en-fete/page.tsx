'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function DeFermeEnFetePage() {
  return (
    <main className="bg-[#fdfaf4] text-gray-900 font-sans">
      {/* HERO FESTIF */}
      <section className="relative h-[90vh] overflow-hidden flex items-center justify-center text-center  text-green-700 px-6 py-3 hover:bg-white">
        <img
          src="https://solalim.civam-occitanie.fr/static/images/index-intro.jpg"
          alt="Ferme en fête Ardèche"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <motion.div
          className="relative z-10 px-6 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-serif font-bold text-[--accent-green] drop-shadow-sm">
            De ferme en fête
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Un rendez-vous joyeux, paysan et festif pour (re)découvrir nos fermes autrement.
          </p>
          <Link
            href="#programme"
            className="mt-8 inline-block bg-white text-[--accent-green] px-6 py-3 rounded-full hover:bg-[#adf3b1] transition shadow border border-[--accent-green]"
          >
             Voir le programme
          </Link>
        </motion.div>
      </section>
      {/* PROGRAMME FESTIF */}
      <section id="programme" className="py-28 px-6 text-green-700 relative z-10">
        <div className="max-w-screen-xl mx-auto text-center space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-[--accent-green]"
          >
            Un programme qui réunit, émerveille et régale
          </motion.h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {[
              {
                title: ' Concerts & spectacles',
                desc: 'Artistes locaux, fanfares champêtres et théâtre de rue dans les fermes !',
                img: 'https://www.civam-normands.org/images/phocagallery/VDP-2024/thumbs/phoca_thumb_l_20240608_FIHUE-EMA-5.jpg',
              },
              {
                title: ' Marché paysan',
                desc: 'Dégustez et achetez des produits fermiers et artisanaux 100% Ardèche.',
                img: 'https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/vdn_864w/2024/05/11/node_1504039/60768385/public/2024/05/11/17315657.jpeg?itok=PoTf_2M01726849958',
              },
              {
                title: ' Ateliers enfants',
                desc: 'Semis, peinture végétale, découverte des animaux pour les plus jeunes.',
                img: 'https://villagemagazine.fr/wp-content/uploads/2023/03/Civam-Serpolet-CPIE-Jura.jpg',
              },
              {
                title: ' Visites de fermes',
                desc: 'Rencontrez les producteurs et découvrez leur quotidien en pleine nature.',
                img: 'https://media.letelegramme.fr/api/v1/images/view/655b32d93b1ea914a455e1d9/web_golden_xl/655b32d93b1ea914a455e1d9.1',
              },
              {
                title: ' Restauration sur place',
                desc: 'Repas paysans et buvettes conviviales pour profiter en famille.',
                img: 'https://images.midilibre.fr/api/v1/images/view/67a4e26f4f0cef5c693b3a99/large/image.jpg?v=2',
              },
              {
                title: ' Jeux & ambiance',
                desc: 'Guinguette, slackline, musique, et surprises champêtres.',
                img: 'https://www.civam.org/wp-content/uploads/2020/07/500x300_Mission_ecophyto.jpg',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#fdf6ec] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* GALERIE PHOTO AFTERMOVIE */}
      <section className="py-28 bg-[#f3ead7] px-6">
        <div className="max-w-screen-xl mx-auto space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-[--accent-green] text-center"
          >
            Souvenirs d’éditions précédentes
          </motion.h2>

          <motion.div
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              'https://www.civam.org/wp-content/uploads/2020/07/500x300_Mission_ecophyto_partie.jpg',
              'https://images.ladepeche.fr/api/v1/images/view/66bec4595bc025229329a56c/large/image.jpg?v=1',
              'https://www.civam.org/wp-content/uploads/2024/04/content.jpeg',
              'https://medias.objectifgard.com/api/v1/images/view/644d1ddf3428fe6580375795/article/image.jpg',
              'https://images.ladepeche.fr/api/v1/images/view/615a72c03e45463bd776d1f4/large/image.jpg?v=1',
              'https://archive-radioevasion.fr/wp-content/uploads/2022/06/Invites_LEM-eco-paturage-Civam-Inra-Chevres-du-Garvan-1080x675.jpg',
            ].map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: -0.5 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="relative min-w-[280px] md:min-w-[340px] snap-start aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={src}
                  alt={`Ferme en fête ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* INFOS PRATIQUES */}
      <section className="mt-9 py-2 text-green-700 px-6">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Bloc texte infos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[--accent-green]">
              Infos pratiques
            </h2>
            <ul className="text-lg text-gray-700 space-y-3">
              <li>Lieux : plusieurs fermes du réseau CIVAM en Ardèche</li>
              <li>Dates : chaque printemps (édition spéciale en mai 2025)</li>
              <li>Entrée : gratuite ou participation libre</li>
              <li>Restauration paysanne sur place</li>
              <li>Public : ouvert à tous, familles, curieux, habitants</li>
            </ul>
            <p className="text-md text-gray-600">
              * Retrouvez les fermes participantes et leurs animations via la carte interactive.
            </p>
            <Link
              href="/carte"
              className="inline-block mt-4 bg-white text-[--accent-green] px-6 py-3 rounded-full hover:bg-[#f3ead7] transition shadow border border-[--accent-green]"
            >
              Accéder à la carte interactive
            </Link>
          </motion.div>

          {/* Image illustrative */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://www.civam44.org/wp-content/uploads/2023/01/qui-sommes-nous-scaled-e1674733610695-1024x601.jpg"
              alt="Plan accès ferme"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
     <br>
     </br>
     <br>
     </br>
     <br>
     </br>
      {/* CONCLUSION FINALE */}
      <section className=" relative h-[60vh] text-green-700 px-6 py-3 hover:bg-white overflow-hidden flex items-center justify-center text-center">
        <img
          src="https://cdn4.regie-agricole.com/ulf/CMS_Content/1/articles/202115/fiches_faire-comprendre-aux-cedants-que-leur-ferme-est-transmissible-1000x562.jpg"
          alt="Ferme fête coucher de soleil"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-3xl px-6 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-serif font-bold leading-tight drop-shadow-lg"
          >
            De la terre à la fête, un moment pour tous
          </motion.h2>
          <p className="text-lg text-black/90 leading-relaxed">
            Venez fêter l’agriculture vivante, locale et humaine. “De ferme en fête” vous attend au printemps prochain.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
           
          </div>
        </div>
      </section>
    </main>
  )
}