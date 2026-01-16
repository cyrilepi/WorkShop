import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBullseye,
  faComments,
  faUserGroup,
  faEnvelope,
  faImage,
  faBookOpen,
  faCirclePlay,
  faCheck,
  faRocket,
  faCalendarDays,
  faChartColumn,
  faLightbulb,
  faChartSimple,
  faFileLines,
  faPhone,
  faVideo,
  faPlay,
} from '@fortawesome/free-solid-svg-icons'

const timeline = [
  {
    year: '2017',
    title: 'Creation',
    text: 'Naissance de Skillogs au sein du groupe IMPARARE',
  },
  {
    year: '2019',
    title: 'Deploiement',
    text: 'Extension aux ecoles ISTEC, EEMI et SKALE',
  },
  {
    year: '2021',
    title: 'Ouverture',
    text: 'Mise a disposition pour les CFA et OF externes',
  },
  {
    year: '2024',
    title: 'Expansion',
    text: '+3500 utilisateurs et +3000h de contenus',
  },
]

const onboardingCards = [
  {
    title: 'Prise en main guidee',
    text: 'Accompagnement personnalise avec votre referent Skillogs dedie',
    icon: faUserGroup,
  },
  {
    title: 'Definition des parcours',
    text: 'Creation des premiers parcours en lien avec vos formations',
    icon: faBullseye,
  },
  {
    title: 'Reponses personnalisees',
    text: 'Support pedagogique et organisationnel sur-mesure',
    icon: faComments,
  },
]

const kitCards = [
  {
    title: 'Modeles de mails',
    text: "Templates d'annonce et d'explication prets a envoyer",
    icon: faEnvelope,
  },
  {
    title: 'Supports visuels',
    text: 'Flyers, brochures et affiches personnalisables',
    icon: faImage,
  },
  {
    title: 'Mini-guides pratiques',
    text: "Fiches pour faciliter l'appropriation par les equipes",
    icon: faBookOpen,
  },
  {
    title: 'Modules en ligne',
    text: 'Formation pour rassurer et embarquer les formateurs',
    icon: faCirclePlay,
  },
]

const appuiPoints = [
  "Participation possible a vos temps de rentree et reponses en direct aux premieres questions",
  "Presentation de la plateforme aux apprenants via un module de formation en ligne",
  "Conseils pratiques pour bien lancer l'annee",
]

const assistanceItems = [
  {
    title: 'Ateliers de formation',
    text: "Sessions regulieres sur l'utilisation de Skillogs",
    icon: faCalendarDays,
  },
  {
    title: 'Analyse des retours',
    text: 'Etude des feedbacks apprenants pour ameliorer',
    icon: faChartColumn,
  },
  {
    title: 'Modules sur mesure',
    text: 'Conception de contenus pedagogiques personnalises',
    icon: faLightbulb,
  },
]

const newsletterItems = [
  'Nouveaux contenus et fonctionnalites disponibles',
  "Retours d'experience d'autres CFA",
  'Actualites du secteur de la formation',
  'Bonnes pratiques et conseils pedagogiques',
]

const bilanItems = [
  'Entretien de bilan personnalise avec votre referent',
  'Analyse des usages et des indicateurs cles',
  "Identification des points forts et axes d'amelioration",
  "Propositions d'ajustement pour l'annee suivante",
]

const assistanceCards = [
  {
    title: 'Base documentaire',
    text: 'Docs, videos tutoriels et FAQ complete',
    icon: faFileLines,
  },
  {
    title: 'Support telephonique',
    text: 'Assistance humaine reactive par telephone',
    icon: faPhone,
  },
  {
    title: 'Support email',
    text: 'Reponses rapides a toutes vos questions',
    icon: faEnvelope,
  },
  {
    title: 'Visioconference',
    text: 'Sessions en visio si necessaire',
    icon: faVideo,
  },
]

function IconPlaceholder({ variant }: { variant?: 'indigo' | 'lime' }) {
  const base =
    variant === 'lime'
      ? 'border-lime-300 text-lime-500 bg-lime-100'
      : 'border-indigo-200 text-indigo-500 bg-indigo-100'
  return (
    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border ${base} text-xs`}>
      O
    </span>
  )
}

function BulletIcon() {
  return (
    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-lime-300 text-[10px] text-lime-500">
      O
    </span>
  )
}

export default function AccompagnementPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-[#4f46e5] reveal">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center text-white md:py-20">
          <h1 className="text-3xl font-semibold md:text-4xl">Notre accompagnement</h1>
          <p className="mt-3 text-sm text-white/80 md:text-base">
            Un accompagnement pense pour durer, fonde sur notre experience depuis 2017
          </p>
        </div>
      </section>

      <section className="bg-[#f7f7f9] reveal">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-16 text-center">
          <span className="rounded-full bg-lime-100 px-4 py-2 text-xs font-semibold text-lime-600">
            Depuis 2017
          </span>
          <p className="mt-6 text-base text-slate-600">
            Au sein des ecoles du groupe IMPARARE (ISTEC, EEMI, SKALE), nous avons transforme nos
            propres formations avec Skillogs. Nous avons teste, ajuste, ameliore nos pratiques pour
            vous proposer une solution eprouvee, fondee sur un parcours de digitalisation balise et
            progressif.
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-lg font-semibold text-slate-800">Notre parcours</h2>
          <div className="relative mt-10 grid gap-10 text-center md:grid-cols-4">
            <span className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 md:block" />
            {timeline.map((item) => (
              <div key={item.year} className="space-y-3">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white">
                  {item.year}
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-slate-800">{item.title}</div>
                  <p className="text-sm text-slate-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#4f46e5] reveal">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center text-white">
          <p className="text-xs font-semibold text-lime-200">01</p>
          <h2 className="mt-3 text-2xl font-semibold">Onboarding : poser les bases ensemble</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {onboardingCards.map((card) => (
              <div
                key={card.title}
                className="hover-lift hover-tint flex flex-col items-center rounded-2xl bg-[#6251f0] p-6 text-white/90"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#b7ff63] text-[#2f2f2f]">
                  <FontAwesomeIcon className="h-4 w-4" icon={card.icon} />
                </div>
                <h3 className="mt-4 text-center text-base font-semibold text-white">{card.title}</h3>
                <p className="mt-2 w-full text-sm text-white/80" style={{ textAlign: 'center' }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center">
          <p className="text-xs font-semibold text-indigo-600">02</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            Kit de communication pour les formateurs
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            Tout ce dont vous avez besoin pour communiquer efficacement aupres de vos equipes
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {kitCards.map((card) => (
              <div key={card.title} className="hover-lift rounded-2xl border border-slate-200 bg-white p-6 text-left">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                  <FontAwesomeIcon className="h-5 w-5" icon={card.icon} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f9] reveal">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-xs font-semibold text-indigo-600">03</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Appui aux rentrees : presents le jour J
            </h2>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              {appuiPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-lime-300 text-[10px] text-lime-500">
                    <FontAwesomeIcon className="h-2.5 w-2.5" icon={faCheck} />
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hover-lift mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
              <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
                <FontAwesomeIcon className="h-4 w-4" icon={faRocket} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Module d&apos;accueil</p>
                <p className="text-xs text-slate-500">Disponible toute l&apos;annee</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Un module de formation en ligne pour les apprenants, realisable en autonomie a tout
              moment de l&apos;annee.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center">
          <p className="text-xs font-semibold text-indigo-600">04</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            Assistance continue et newsletter hebdomadaire
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="hover-lift rounded-2xl border border-slate-200 bg-white p-6 text-left">
              <h3 className="text-base font-semibold text-slate-900">Assistance tout au long de l&apos;annee</h3>
              <div className="mt-5 space-y-4">
              {assistanceItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                    <FontAwesomeIcon className="h-4 w-4" icon={item.icon} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.text}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
            <div className="hover-lift hover-tint rounded-2xl bg-[#4f46e5] p-6 text-left text-white">
              <h3 className="text-base font-semibold">Newsletter hebdomadaire</h3>
              <div className="mt-5 space-y-3 text-sm text-white/90">
                {newsletterItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-lime-300 text-[10px] text-lime-300">
                      <FontAwesomeIcon className="h-2.5 w-2.5" icon={faCheck} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button
                className="hover-button mt-6 w-full rounded-full bg-lime-300 px-4 py-2 text-sm font-semibold text-[#4f46e5]"
                type="button"
              >
                S&apos;inscrire a la newsletter
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f9] reveal">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
          <p className="text-xs font-semibold text-indigo-600">05</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">
            Bilan de fin d&apos;annee : capitaliser et ajuster
          </h2>
          <div className="hover-lift mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-left">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#b7ff63] text-[#2f2f2f]">
                <FontAwesomeIcon className="h-4 w-4" icon={faChartSimple} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Entretien personnalise</p>
                <p className="text-sm text-slate-500">Avec votre referent Skillogs dedie</p>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              {bilanItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-indigo-200 text-[10px] text-indigo-500">
                    <FontAwesomeIcon className="h-2.5 w-2.5" icon={faCheck} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center">
          <p className="text-xs font-semibold text-indigo-600">06</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">Assistance operationnelle</h2>
          <p className="mt-2 text-sm text-slate-500">
            Pas de robot, pas de message sans reponse. On reste disponibles.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {assistanceCards.map((card) => (
              <div key={card.title} className="hover-lift rounded-2xl border border-slate-200 bg-white p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                  <FontAwesomeIcon className="h-5 w-5" icon={card.icon} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2f2f2f] reveal">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 text-white lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold text-lime-300">07</p>
            <h2 className="mt-3 text-2xl font-semibold">Former les formateurs</h2>
            <p className="mt-4 text-sm text-white/70">
              Decouvrez comment nous accompagnons vos equipes pedagogiques dans leur montee en
              competences sur la plateforme Skillogs.
            </p>
            <button
              className="hover-button mt-6 inline-flex items-center gap-2 rounded-full bg-lime-300 px-4 py-2 text-sm font-semibold text-[#4f46e5]"
              type="button"
            >
              <FontAwesomeIcon className="h-3.5 w-3.5" icon={faPlay} />
              Voir la video
            </button>
          </div>
          <div className="hover-lift flex items-center justify-center rounded-3xl bg-white/10 p-6">
            <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-white/20 bg-white/5">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/ZDnlOONAad4"
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#4f46e5] reveal">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-14 text-center text-white">
          <h2 className="text-2xl font-semibold">Pret a etre accompagne ?</h2>
          <p className="mt-2 text-sm text-white/70">
            Contactez-nous pour decouvrir comment Skillogs peut transformer votre approche de la
            formation
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              className="hover-button rounded-full bg-lime-300 px-5 py-2 text-sm font-semibold text-[#4f46e5]"
              type="button"
            >
              Demander une demo
            </button>
            <button
              className="hover-button rounded-full border border-white/60 px-5 py-2 text-sm font-semibold text-white"
              type="button"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
