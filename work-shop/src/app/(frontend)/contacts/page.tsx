import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function ContactsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-white reveal">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-5">
            <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Votre diagnostic pedagogique en 30 minutes
            </h1>
            <p className="text-base font-semibold text-slate-900">Et si on en parlait ?</p>
            <p className="text-sm text-slate-600">
              Vous avez un projet de digitalisation ? Vous cherchez une solution simple, humaine et
              efficace pour embarquer vos equipes et vos apprenants ? Parlez-en avec nos ingenieurs
              pedagogiques.
            </p>
          </div>

          <div className="hover-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              Planifiez une demonstration produit personnalisee et posez toutes vos questions a nos
              experts
            </h2>
            <div className="mt-3 h-0.5 w-16 bg-indigo-500" />
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-700">
                  Prenom
                  <input className="h-11 w-full rounded-md border border-slate-200 px-3" type="text" />
                </label>
                <label className="space-y-2 text-sm text-slate-700">
                  Nom*
                  <input className="h-11 w-full rounded-md border border-slate-200 px-3" type="text" />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-700">
                  Adresse mail*
                  <input className="h-11 w-full rounded-md border border-slate-200 px-3" type="email" />
                </label>
                <label className="space-y-2 text-sm text-slate-700">
                  Telephone*
                  <div className="flex gap-2">
                    <select className="h-11 rounded-md border border-slate-200 px-3 text-sm bg-white">
                      <option>France +33</option>
                      <option>Belgique +32</option>
                      <option>Suisse +41</option>
                    </select>
                    <input className="h-11 w-full rounded-md border border-slate-200 px-3" type="tel" />
                  </div>
                </label>
              </div>
              <label className="space-y-2 text-sm text-slate-700">
                Profession
                <select className="h-11 w-full rounded-md border border-slate-200 px-3 text-sm bg-white">
                  <option>-</option>
                  <option>Responsable formation</option>
                  <option>Coordinateur pedagogique</option>
                  <option>Direction</option>
                </select>
              </label>
              <label className="space-y-2 text-sm text-slate-700">
                Message
                <textarea className="h-32 w-full rounded-md border border-slate-200 px-3 py-2" />
              </label>
              <button
                className="hover-button inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-2 text-sm font-semibold text-slate-900"
                type="button"
              >
                Envoyer
                <FontAwesomeIcon className="h-3.5 w-3.5" icon={faArrowRight} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#4f46e5] reveal">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-14 text-center text-white">
          <h2 className="text-2xl font-semibold">Des questions ?</h2>
          <p className="mt-2 text-xl font-semibold">Besoin d&apos;en discuter en direct ?</p>
          <button
            className="hover-button mt-6 inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-2 text-sm font-semibold text-[#4f46e5]"
            type="button"
          >
            Nous contacter
            <FontAwesomeIcon className="h-3.5 w-3.5" icon={faArrowRight} />
          </button>
        </div>
      </section>
    </main>
  )
}
