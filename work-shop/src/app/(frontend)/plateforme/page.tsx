const features = [
  {
    title: 'Gestion des parcours',
    description:
      'Créez et structurez vos parcours de formation avec des modules, séquences et activités personnalisables.',
  },
  {
    title: 'Contenus interactifs',
    description: 'Intégrez des vidéos, quiz, documents et activités interactives pour engager vos apprenants.',
  },
  {
    title: 'Analytics avancés',
    description: 'Suivez la progression, identifiez les difficultés et optimisez vos formations en temps réel.',
  },
  {
    title: 'Gestion des apprenants',
    description:
      "Administrez vos groupes, suivez les inscriptions et gérez les droits d'accès simplement.",
  },
  {
    title: 'Planification',
    description: 'Organisez vos sessions, synchronisez les calendriers et gérez les ressources.',
  },
  {
    title: 'Communication',
    description: 'Échangez avec vos apprenants via messagerie, forums et notifications automatiques.',
  },
  {
    title: 'Automatisation',
    description: 'Automatisez les tâches répétitives : relances, certifications, rapports Qualiopi.',
  },
  {
    title: 'Conformité',
    description: 'Respectez les exigences Qualiopi avec des outils de traçabilité et de reporting intégrés.',
  },
]

const stats = [
  { value: '+3500', label: 'Utilisateurs actifs' },
  { value: '+3000h', label: 'De contenus' },
  { value: '20%', label: 'De cours hybrides' },
  { value: '8', label: 'Écoles partenaires' },
]

function IconPlaceholder({ size = 44 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-2xl bg-indigo-100 text-indigo-500"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <path d="M7 8h10M7 12h6" />
      </svg>
    </div>
  )
}

function ImagePlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white/10">
      <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/20 text-white">
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="M8 11l2.5 2.5L15 9l4 4" />
        </svg>
      </div>
    </div>
  )
}

export default function PlateformePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#4f46e5]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center text-white md:py-20">
          <h1 className="text-3xl font-semibold md:text-4xl">La plateforme Skillogs</h1>
          <p className="mt-3 text-sm text-white/80 md:text-base">
            Un LCMS complet pour piloter vos formations
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <IconPlaceholder />
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#4f46e5]">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 py-12 text-center text-white md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="text-2xl font-semibold md:text-3xl">{stat.value}</p>
              <p className="text-xs uppercase tracking-wide text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f5f7]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center">
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">Interface intuitive</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Une plateforme conçue pour les formateurs et les apprenants
          </p>
          <div className="mt-10 w-full rounded-[32px] bg-[#2b3650] p-6 shadow-2xl md:p-10">
            <div className="aspect-[16/9] w-full rounded-3xl border border-white/10">
              <ImagePlaceholder />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
