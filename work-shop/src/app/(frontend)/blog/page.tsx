const filters = [
  { label: 'Tous (7)', active: true },
  { label: 'Transformation (2)' },
  { label: 'Pedagogie (2)' },
  { label: 'Conformite (1)' },
  { label: 'Innovation (2)' },
]

const articles = [
  {
    tag: 'Pedagogie',
    title: 'Blended Learning : 5 avantages pour les organismes de formation',
    text: 'Le blended learning combine le meilleur du presentiel et du digital. Voici comment cette approche peut revolutionner vos parcours de...',
    date: '5 janvier 2026',
    time: '6 min',
  },
  {
    tag: 'Conformite',
    title: 'Qualiopi et digitalisation : comment assurer la conformite',
    text: 'La certification Qualiopi impose des exigences specifiques. Decouvrez comment un LCMS peut vous aider a repondre aux criteres tout en...',
    date: '2 janvier 2026',
    time: '5 min',
  },
  {
    tag: 'Engagement',
    title: "Comment maintenir l'engagement des apprenants en formation digitale",
    text: "L'engagement est le defi majeur de la formation a distance. Voici nos conseils pour creer des parcours captivants et efficaces.",
    date: '28 decembre 2025',
    time: '7 min',
  },
  {
    tag: 'Accompagnement',
    title: 'Accompagner les formateurs dans la transition numerique',
    text: "La resistance au changement est normale. Decouvrez comment embarquer vos formateurs dans l'aventure du digital learning sans les...",
    date: '22 decembre 2025',
    time: '6 min',
  },
  {
    tag: 'Innovation',
    title: "L'IA au service de la formation professionnelle : opportunites et...",
    text: "L'intelligence artificielle transforme la formation. Entre personnalisation des parcours et generation de contenus, faisons le point.",
    date: '18 decembre 2025',
    time: '9 min',
  },
  {
    tag: 'ROI',
    title: 'Calculer le ROI de votre investissement en formation digitale',
    text: "Investir dans un LCMS represente un cout. Voici comment mesurer concretement le retour sur investissement de votre strategie digitale.",
    date: '12 decembre 2025',
    time: '5 min',
  },
]

function IconPlaceholder() {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-indigo-200 text-[10px] text-indigo-500">
      O
    </span>
  )
}

export default function BlogPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-[#4f46e5]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center text-white md:py-20">
          <h1 className="text-3xl font-semibold md:text-4xl">Blog Skillogs</h1>
          <p className="mt-3 text-sm text-white/80 md:text-base">
            Actualites, conseils et bonnes pratiques pour la formation professionnelle digitale
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
          <div className="flex flex-wrap items-center gap-3">
            {filters.map((filter) => (
              <span
                key={filter.label}
                className={
                  filter.active
                    ? 'rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white'
                    : 'rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-600'
                }
              >
                {filter.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6">
          <article className="rounded-[32px] bg-[#4f46e5] p-10 text-white">
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
              Article a la une
            </span>
            <h2 className="mt-6 text-2xl font-semibold md:text-3xl">
              Comment reussir la transformation digitale de votre CFA en 2026
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/80">
              La transformation digitale des centres de formation est devenue incontournable.
              Decouvrez les etapes cles pour accompagner vos equipes et vos apprenants vers une
              pedagogie hybride efficace.
            </p>
            <div className="mt-6 flex items-center gap-6 text-xs text-white/70">
              <span className="inline-flex items-center gap-2">
                <IconPlaceholder /> 8 janvier 2026
              </span>
              <span className="inline-flex items-center gap-2">
                <IconPlaceholder /> 8 min de lecture
              </span>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
                  {article.tag}
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{article.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{article.text}</p>
                <div className="mt-6 border-t border-slate-200 pt-4 text-xs text-slate-500">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2">
                      <IconPlaceholder /> {article.date}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <IconPlaceholder /> {article.time}
                    </span>
                  </div>
                  <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">
                    Lire l'article
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-indigo-200 text-[10px]">
                      O
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16">
          <div className="rounded-[32px] bg-[#f5f5f7] px-6 py-12 text-center">
            <h3 className="text-xl font-semibold text-slate-900">Restez informe des dernieres tendances</h3>
            <p className="mt-2 text-sm text-slate-500">
              Inscrivez-vous a notre newsletter pour recevoir nos articles, guides et actualites
              directement dans votre boite mail.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <input
                className="h-11 w-full max-w-sm rounded-full border border-slate-200 px-4 text-sm outline-none"
                placeholder="Votre email"
                type="email"
              />
              <button className="h-11 rounded-full bg-indigo-600 px-6 text-sm font-semibold text-white">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
