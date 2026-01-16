import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faFileLines, faVideo } from '@fortawesome/free-solid-svg-icons'

const filters = ['Tous', 'Guides', 'Webinars', 'Livres blancs']

const resources = [
  {
    type: 'Guide',
    title: 'Guide de demarrage Skillogs',
    text: "Tout ce qu'il faut savoir pour bien demarrer avec notre plateforme LCMS.",
    action: 'Telecharger',
  },
  {
    type: 'Webinar',
    title: 'Digitaliser sa formation : par ou commencer ?',
    text: "Replay du webinar avec nos experts en ingenierie pedagogique.",
    action: 'Voir le replay',
  },
  {
    type: 'Livre blanc',
    title: "L'hybridation des formations en 2024",
    text: "Tendances, bonnes pratiques et retours d'experience de nos partenaires.",
    action: 'Telecharger',
  },
  {
    type: 'Guide',
    title: 'Preparer son audit Qualiopi',
    text: 'Checklist et conseils pour reussir votre certification qualite.',
    action: 'Telecharger',
  },
  {
    type: 'Webinar',
    title: 'Engager ses apprenants a distance',
    text: "Techniques et outils pour maintenir l'engagement en formation digitale.",
    action: 'Voir le replay',
  },
  {
    type: 'Livre blanc',
    title: 'ROI de la formation digitale',
    text: "Comment mesurer et optimiser le retour sur investissement de vos formations.",
    action: 'Telecharger',
  },
]

export default function RessourcesPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-[#4f46e5] reveal">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center text-white md:py-20">
          <h1 className="text-3xl font-semibold md:text-4xl">Ressources</h1>
          <p className="mt-3 text-sm text-white/80 md:text-base">
            Guides, webinars et contenus pour reussir votre transformation pedagogique
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-slate-200 reveal">
        <div className="mx-auto flex w-full max-w-6xl items-center px-6 py-6">
          <div className="flex flex-wrap items-center gap-3">
            {filters.map((filter, index) => (
              <span
                key={filter}
                className={
                  index === 0
                    ? 'rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white'
                    : 'rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600'
                }
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="mx-auto w-full max-w-6xl px-6 pt-10 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => {
              const icon =
                resource.type === 'Webinar' ? faVideo : resource.type === 'Livre blanc' ? faBookOpen : faFileLines
              return (
              <article key={resource.title} className="hover-lift rounded-2xl border border-slate-200 bg-white">
                <div className="flex aspect-[4/3] items-center justify-center rounded-t-2xl bg-slate-50">
                  <FontAwesomeIcon className="h-8 w-8 text-slate-400" icon={icon} />
                </div>
                <div className="space-y-3 p-6">
                  <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                    {resource.type}
                  </span>
                  <h2 className="text-base font-semibold text-slate-900">{resource.title}</h2>
                  <p className="text-sm text-slate-500">{resource.text}</p>
                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
                    {resource.action}
                  </button>
                </div>
              </article>
            )})}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f9] reveal">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
          <h2 className="text-xl font-semibold text-slate-900">Restez informe</h2>
          <p className="mt-2 text-sm text-slate-500">
            Recevez nos dernieres ressources et actualites directement dans votre boite mail.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <input
              className="h-11 w-full rounded-full border border-slate-200 px-4 text-sm outline-none"
              placeholder="Votre email"
              type="email"
            />
            <button className="hover-button h-11 rounded-full bg-indigo-600 px-6 text-sm font-semibold text-white">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
