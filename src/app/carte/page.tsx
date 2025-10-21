"use client";

import dynamic from "next/dynamic";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useFermeStore } from "@/app/lib/fermeStore";
import { useAuth } from "@/app/lib/authClient";

const Map = dynamic(() => import("./Map"), { ssr: false });

const CATEGORIES = [
  'De ferme en ferme',
  'En vie de ferme',
  'De ferme en fête',
  'Solidarité alimentaire',
]

const CATEGORY_COLORS: Record<string, string> = {
  'De ferme en ferme': '#6A994E',
  'En vie de ferme': '#F4A261',
  'De ferme en fête': '#A7C957',
  'Solidarité alimentaire': '#E9C46A',

}

  export default function CartePage() {
  const { fermes, addFerme, removeFerme, updateFerme, loadFromServer } = useFermeStore();
  const { auth, loading: authLoading, login, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<string | null>(null)

  const [nom, setNom] = useState('')
  const [adresse, setAdresse] = useState('')
  const [coordonnees, setCoordonnees] = useState('')
  const [description, setDescription] = useState('')
  const [categories, setCategories] = useState<string[]>([])
  const [note, setNote] = useState('') // MODIFICATION 1

  useEffect(() => {
    loadFromServer();
  }, []);
  

  const filteredFermes = fermes.filter((ferme) => {
    const matchCat = filter ? ferme.categories.includes(filter) : true
    const matchSearch =
      ferme.nom.toLowerCase().includes(search.toLowerCase()) ||
      (ferme.adresse?.toLowerCase().includes(search.toLowerCase()) ?? false)
    return matchCat && matchSearch
  })

  useEffect(() => {
    loadFromServer();
  }, [loadFromServer]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const username = (form.elements.namedItem("identifiant") as HTMLInputElement).value;
    const password = (form.elements.namedItem("mdp") as HTMLInputElement).value;
    try {
      await login(username, password);
      setIsLoginOpen(false);
    } catch {
      alert("Identifiants incorrects.");
    }
  }

  async function handleLogout() {
    await logout();
  }

  const geocodeAdresse = async (adresse: string): Promise<[number, number] | null> => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(adresse)}`
      )
      const data = await res.json()
      if (data && data.length > 0) {
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)]
      }
      return null
    } catch (err) {
      return null
    }
  }
  const handleAddFerme = async (e: React.FormEvent) => {
    e.preventDefault()

    let coordTuple: [number, number] | undefined

    if (coordonnees) {
      const coordsSplit = coordonnees.split(',').map((v) => parseFloat(v.trim()))
      if (coordsSplit.length === 2 && !isNaN(coordsSplit[0]) && !isNaN(coordsSplit[1])) {
        coordTuple = [coordsSplit[0], coordsSplit[1]]
      } else {
        alert('Coordonnées GPS invalides. Format : lat,long')
        return
      }
    }

    if (!coordTuple && adresse) {
      const geo = await geocodeAdresse(adresse)
      if (!geo) {
        alert("Adresse introuvable")
        return
      }
      coordTuple = geo
    }

    if (!coordTuple) {
      alert("Adresse ou coordonnées obligatoires")
      return
    }

    addFerme({
      id: Date.now(),
      nom,
      adresse,
      description,
      coordonnees: coordTuple,
      categories,
      note: note, // MODIFICATION 3
    })

    setNom('')
    setAdresse('')
    setCoordonnees('')
    setDescription('')
    setCategories([])
    setNote('') // MODIFICATION 3
    setIsOpen(false)
  }

  
  return (
    <motion.div
      className="max-w-screen-xl mx-auto px-6 py-12 space-y-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Bannière */}
      <section className="relative w-full h-[50vh] mb-12 rounded-xl overflow-hidden">
        <img
          src="https://sourcesvolcans.com/medias/montpezat-sous-bauzon-visite-de-ferme-en-ferme-au-clos-bonnaud-s-bugnon-320x202.jpeg"
          alt="Bannière"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif font-bold text-[--accent-green]">
            Découvrez les fermes engagées
          </h1>
        </div>
        <div className="absolute top-6 right-6 z-20 flex gap-2">
          {!authLoading && auth.authenticated ? (
            <button
              onClick={handleLogout}
              className="mt-6 inline-block bg-white text-[--accent-green] px-4 py-2 rounded-full hover:bg-[#adf3b1] transition shadow border border-[--accent-green]"
            >
              Se déconnecter
            </button>
          ) : (
            <button
              onClick={() => setIsLoginOpen(true)}
              className="mt-6 inline-block bg-white text-[--accent-green] px-4 py-2 rounded-full hover:bg-[#adf3b1] transition shadow border border-[--accent-green]"
            >
              S’identifier
            </button>
          )}
        </div>
      </section>

      {/* Recherche + Ajouter */}
      <div className="flex flex-wrap items-center gap-4">
        <input
          type="text"
          placeholder="Rechercher une ferme"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-72 px-4 py-2 border rounded-md focus:ring-2 focus:ring-[--accent-green]"
        />

        {auth.authenticated && (
          <button
            onClick={() => setIsOpen(true)}
            className=" inline-block bg-white text-[--accent-green] px-4 py-2 rounded-full hover:bg-[#adf3b1] transition shadow border border-[--accent-green]"
          >
            ➕ Ajouter une ferme
          </button>
        )}
      </div>

      {/* Filtres catégories */}
      <div className="flex flex-wrap gap-2">
        {['Toutes les catégories', ...CATEGORIES].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat === 'Toutes les catégories' ? null : cat)}
            className={clsx(
              'px-4 py-1 rounded-full text-sm font-medium border transition-all',
              filter === cat
                ? 'bg-[--accent-green] text-black border-[--accent-green]'
                : 'bg-[#f3ead7] text-[--accent-green] border-[#e0d9ca] hover:bg-[--accent-green]/20'
            )}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Liste des fermes + Carte */}
      <div className="grid lg:grid-cols-2 gap-10 items-start mt-8">
        <ul className="space-y-6">
          {filteredFermes.map((ferme) => (
            <li
              key={ferme.id}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:scale-[1.01] transition"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900">{ferme.nom}</h3>
                  {ferme.adresse && <p className="text-sm text-gray-500">{ferme.adresse}</p>}
                  <p className="mt-2 text-sm text-gray-700">{ferme.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {ferme.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs font-medium px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: CATEGORY_COLORS[cat] || '#999' }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  {/* MODIFICATION 4: AFFICHER LA NOTE */}
                  {auth.authenticated && ferme.note && (
                    <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                      <h4 className="text-xs font-semibold text-yellow-800">Note interne (CIVAM)</h4>
                      <p className="text-sm text-yellow-700">{ferme.note}</p>
                    </div>
                  )}
                </div>
                {auth.authenticated && (
                  <div className="flex flex-col gap-1 text-right">
                    <button
                      onClick={() => {
                        // MODIFICATION 5: LOGIQUE UPDATE
                        const nouveauNom = prompt('Nom', ferme.nom)
                        const nouvelleDescription = prompt('Description', ferme.description)
                        const nouvelleNote = prompt('Note interne (CIVAM)', ferme.note || '')
                        if (nouveauNom && nouvelleDescription) {
                          updateFerme({ 
                            ...ferme, 
                            nom: nouveauNom, 
                            description: nouvelleDescription,
                            note: nouvelleNote || ''
                          })
                        }
                      }}
                      className="text-sm text-blue-500 hover:text-blue-700 underline"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => removeFerme(ferme.id)}
                      className="text-sm text-red-500 hover:text-red-700 underline"
                    >
                      Supprimer
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* CARTE */}
        <motion.div
          className="relative z-10 rounded-xl overflow-hidden border border-gray-300 shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative z-10 rounded-xl overflow-hidden border border-gray-300 shadow-sm">
            <Map fermes={filteredFermes} />
          </div>
        </motion.div>
      </div>
      {/* MODALE AJOUTER UNE FERME */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-xl p-6 w-full max-w-lg space-y-6 shadow-xl">
              <Dialog.Title className="text-lg font-serif font-semibold text-gray-900">
                Ajouter une ferme
              </Dialog.Title>
              <form onSubmit={handleAddFerme} className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="w-full border p-2 rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Adresse (facultatif)"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                  className="w-full border p-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Coordonnées GPS lat,long (facultatif)"
                  value={coordonnees}
                  onChange={(e) => setCoordonnees(e.target.value)}
                  className="w-full border p-2 rounded-md"
                />
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border p-2 rounded-md"
                  required
                />
                {/* MODIFICATION 2: CHAMP NOTE */}
                <textarea
                  placeholder="Note interne (visible CIVAM uniquement)"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full border p-2 rounded-md"
                />
                <fieldset className="border p-3 rounded-md">
                  <legend className="text-sm font-medium mb-2 text-gray-700">Catégories</legend>
                  {CATEGORIES.map((cat) => (
                    <label key={cat} className="block text-sm">
                      <input
                        type="checkbox"
                        checked={categories.includes(cat)}
                        onChange={() =>
                          setCategories((prev) =>
                            prev.includes(cat)
                              ? prev.filter((c) => c !== cat)
                              : [...prev, cat]
                          )
                        }
                      />{' '}
                      {cat}
                    </label>
                  ))}
                </fieldset>
                <button
                  type="submit"
                  className="mt-6 inline-block bg-white text-[--accent-green] px-4 py-2 rounded-full hover:bg-[#adf3b1] transition shadow border border-[--accent-green]"
                >
                  Ajouter
                </button>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>

      {/* MODALE DE CONNEXION */}
      <Transition show={isLoginOpen} as={Fragment}>
        <Dialog onClose={() => setIsLoginOpen(false)} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white rounded-xl p-6 w-full max-w-md space-y-4 shadow-xl">
              <Dialog.Title className="text-lg font-serif font-semibold text-gray-900">
                Connexion CIVAM
              </Dialog.Title>
              <p className="text-sm text-gray-600">
                Cette fonctionnalité est réservée aux membres du CIVAM pour alimenter la base de données.
              </p>
              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  name="identifiant"
                  type="text"
                  placeholder="Identifiant"
                  className="w-full border p-2 rounded-md"
                  required
                />
                <input
                  name="mdp"
                  type="password"
                  placeholder="Mot de passe"
                  className="w-full border p-2 rounded-md"
                  required
                />
                <button
                  type="submit"
                  className="mt-6 inline-block bg-white text-[--accent-green] px-4 py-2 rounded-full hover:bg-[#adf3b1] transition shadow border border-[--accent-green]"
                >
                  Se connecter
                </button>
              </form>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </motion.div>
  )
}