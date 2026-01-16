import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookOpen,
  faFileLines,
  faChartColumn,
  faUsers,
  faCalendarDays,
  faComments,
  faBolt,
  faShield,
} from '@fortawesome/free-solid-svg-icons'

const features = [
  {
    title: 'Gestion des parcours',
    description:
      'Créez et structurez vos parcours de formation avec des modules, séquences et activités personnalisables.',
    icon: faBookOpen,
  },
  {
    title: 'Contenus interactifs',
    description: 'Intégrez des vidéos, quiz, documents et activités interactives pour engager vos apprenants.',
    icon: faFileLines,
  },
  {
    title: 'Analytics avancés',
    description: 'Suivez la progression, identifiez les difficultés et optimisez vos formations en temps réel.',
    icon: faChartColumn,
  },
  {
    title: 'Gestion des apprenants',
    description:
      "Administrez vos groupes, suivez les inscriptions et gérez les droits d'accès simplement.",
    icon: faUsers,
  },
  {
    title: 'Planification',
    description: 'Organisez vos sessions, synchronisez les calendriers et gérez les ressources.',
    icon: faCalendarDays,
  },
  {
    title: 'Communication',
    description: 'Échangez avec vos apprenants via messagerie, forums et notifications automatiques.',
    icon: faComments,
  },
  {
    title: 'Automatisation',
    description: 'Automatisez les tâches répétitives : relances, certifications, rapports Qualiopi.',
    icon: faBolt,
  },
  {
    title: 'Conformité',
    description: 'Respectez les exigences Qualiopi avec des outils de traçabilité et de reporting intégrés.',
    icon: faShield,
  },
]

const stats = [
  { value: '+3500', label: 'Utilisateurs actifs' },
  { value: '+3000h', label: 'De contenus' },
  { value: '20%', label: 'De cours hybrides' },
  { value: '8', label: 'Écoles partenaires' },
]

export default function PlateformePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-[#4f46e5] reveal">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center text-white md:py-20">
          <h1 className="text-3xl font-semibold md:text-4xl">La plateforme Skillogs</h1>
          <p className="mt-3 text-sm text-white/80 md:text-base">
            Un LCMS complet pour piloter vos formations
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="hover-lift flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-500">
                <FontAwesomeIcon className="h-5 w-5" icon={feature.icon} />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#4f46e5] reveal">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 py-12 text-center text-white md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="text-2xl font-semibold md:text-3xl">{stat.value}</p>
              <p className="text-xs uppercase tracking-wide text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f5f7] reveal">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center">
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">Interface intuitive</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Une plateforme conçue pour les formateurs et les apprenants
          </p>
          <div className="mt-10 w-full rounded-[32px] bg-[#2b3650] p-6 shadow-2xl md:p-10">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#23304a]">
              <Image alt="Interface LMS" fill sizes="(max-width: 768px) 100vw, 960px" src="/images/lms.jpg" className="object-contain" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
