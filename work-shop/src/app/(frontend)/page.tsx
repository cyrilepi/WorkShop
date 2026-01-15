import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faBullseye,
  faChartPie,
  faClock,
  faImage,
  faLocationDot,
  faPlay,
  faCircle,
  faVideo,
  faMessage,
  faFileLines,
  faAtom,
  faChartBar,
  faQuestion,
  faBook,
  faGraduationCap,
  faWrench,
  faUpRightFromSquare,
  faEnvelope,
  faPhone,
  faUnlockKeyhole,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const stats = [
  { value: '+3500', label: 'utilisateurs de notre LCMS', tone: 'bg-[#4f46e5] text-white' },
  { value: '+3000', label: 'heures de contenus', tone: 'bg-[#b7ff63] text-[#2f2f2f]' },
  { value: '20%', label: 'de cours hybrides dans nos ecoles', tone: 'bg-[#b9c3ff] text-[#2f2f2f]' },
  { value: '8', label: 'ecoles partenaires', tone: 'bg-[#7c7be9] text-white' },
]

const valueCards = [
  {
    title: 'Transformation',
    text: 'Des parcours penses pour faire evoluer les competences, les postures... et les trajectoires.',
    tone: 'bg-[#4f46e5] text-white',
    icon: faArrowRight,
  },
  {
    title: 'Collaboration',
    text: "Des projets collectifs et des outils favorisant l'apprentissage entre pairs.",
    tone: 'bg-[#b7ff63] text-[#2f2f2f]',
    icon: faUsers,
  },
  {
    title: 'Agilite',
    text: 'Des formats courts, adaptatifs, et une logique de test & learn pour ajuster en continu.',
    tone: 'bg-[#b9c3ff] text-[#2f2f2f]',
    icon: faUnlockKeyhole,
  },
  {
    title: 'Proximite',
    text: "Un accompagnement personnalise, des echanges reguliers et une vraie culture du feedback.",
    tone: 'bg-[#7c7be9] text-white',
    icon: faLocationDot,
  },
]

const usageCards = [
  {
    title: 'Optimiser les couts',
    subtitle: 'Formez plus, depensez moins',
    icon: faChartPie,
    dotClass: 'bg-indigo-500',
    points: [
      '1 a 2 jours a distance = baisse des couts',
      "20% de theorie digitalisee = jusqu'a 20% d'economie formateur",
    ],
  },
  {
    title: 'Gagner du temps',
    subtitle: 'Analysez les besoins plus rapidement',
    icon: faClock,
    dotClass: 'bg-lime-400',
    points: [
      'Skillogs optimise la preparation CV, entretiens, relations entreprises',
      'Administratif allege, Qualiopi assure',
    ],
  },
  {
    title: 'Gagner en image',
    subtitle: 'Devenez le CFA 3.0',
    icon: faImage,
    dotClass: 'bg-indigo-500',
    points: ['Experiences interactives, formats dynamiques', 'Formateurs valorises, apprenants autonomes'],
  },
  {
    title: "Concentrez-vous sur l'essentiel",
    subtitle: 'Des resultats concrets',
    icon: faBullseye,
    dotClass: 'bg-indigo-400',
    points: ['Cours revus, exercices refaits, examens reussis', 'Deployer facilement, meme avec de petits groupes'],
  },
]

const trustCards = [
  {
    title: 'Une structure solide',
    text: "Skillogs appartient au Groupe Imparare, alliance des ecoles Istec Business School, EEMI - ecole des metiers du digital, SKALE Collaborative Business School, SupVeto & Skillogs.\n\nFournisseur d'energie educative depuis plus de 20 ans, le Groupe Imparare est un des leaders francais de la formation professionnelle.",
    tone: 'bg-white border border-slate-200',
  },
  {
    title: "Une plateforme au coeur de l'expertise pedagogique",
    text: 'Des apports de contenus reguliers grace a la collaboration entre les ecoles du Groupe',
    tone: 'bg-[#4f46e5] text-white',
  },
  {
    title: 'Un eco-systeme complet',
    text: "Integre au sein du groupe Imparare, Skillogs profite d'une base solide et d'un reseau d'ecoles complementaires.",
    tone: 'bg-[#b7ff63] text-[#2f2f2f]',
  },
]

const impacts = [
  {
    id: '1',
    title: 'Redonner du sens au digital pedagogique',
    text: "Skillogs accompagne les etablissements comme un soutien a la pedagogie existante et redonne du sens au digital en le positionnant comme un levier au service du presentiel.",
    accent: 'bg-[#4f46e5] text-white',
    quote: "« On fait du digital parce qu'on doit en faire, pas parce qu'on sait quoi en faire. »",
  },
  {
    id: '2',
    title: 'Construire une vision pedagogique claire et partagee',
    text: "Skillogs s'inscrit dans cette demarche en offrant un cadre structurant, qui aide a formaliser, partager et faire evoluer une vision pedagogique commune.",
    accent: 'bg-[#b7ff63] text-[#2f2f2f]',
    stat: '20%',
    statText: 'Des cours hybrides dans nos ecoles',
  },
  {
    id: '3',
    title: 'Mettre fin a la desorganisation des outils',
    text: 'Skillogs permet de structurer les parcours en centralisant les contenus et les activites, tout en conservant les outils existants.',
    accent: 'bg-[#7c7be9] text-white',
    quote: '« Documents a moitie sur Ypareo, a moitie sur Teams, LinkedIn Learning... »',
  },
  {
    id: '4',
    title: 'Des formateurs accompagnes, pas contraints',
    text: "Skillogs a ete concu pour s'adapter aux pratiques des formateurs, en permettant une prise en main progressive et respectueuse de la liberte pedagogique.",
  },
  {
    id: '5',
    title: 'Piloter la pedagogie en toute clarte',
    text: "Skillogs soutient les equipes de direction et les responsables pedagogiques en offrant une vision lisible et structuree des activites et de la progression.",
  },
  {
    id: '6',
    title: 'Valoriser la conformite Qualiopi et RNCP',
    text: "Skillogs accompagne ces obligations en rendant visibles et tracables les parcours, les competences et les activites pedagogiques.",
    stat: '40%',
    statText: 'De temps economise pour les audits Qualiopi',
  },
]

const testimonials = [
  {
    name: 'Sandrine Loisil',
    role: 'ENSUP',
    text: "Skillogs nous a permis d'adapter les parcours aux etudiants tout en accompagnant les formateurs dans le changement.",
    body: "ENSUP a choisi Skillogs pour proposer des contenus adaptes aux profils des etudiants, tout en respectant la progression pedagogique. La plateforme a ete integree progressivement par les formateurs, avec un accompagnement personnalise de l'equipe Skillogs.",
  },
  {
    name: 'Directrice pedagogique',
    text: "Skillogs permet de combiner les avantages de l'apprentissage en presentiel et en distanciel. Cela enrichit beaucoup l'experience apprenante, par la diversite des methodes pedagogiques proposees.",
  },
  {
    name: 'Digital Learning Manager',
    text: "Skillogs nous permet de mettre en place des parcours personnalises, en fonction des difficultes qu'ont les apprenants.",
  },
  {
    name: 'Etudiants en BTS',
    text: "La plateforme nous a vraiment aides a reviser pendant les examens. Aujourd'hui, on ne se voit plus revenir a un format 100% presentiel.",
  },
]

const catalogueStats = [
  { value: '+3000', label: 'Heures de contenus', tone: 'bg-[#4f46e5] text-white' },
  { value: '8 000', label: 'Apprenants', tone: 'bg-[#b7ff63] text-[#2f2f2f]' },
  { value: '8', label: 'Ecoles', tone: 'bg-[#7c7be9] text-white' },
]

const catalogueLists = [
  {
    title: 'Par thematique',
    items: [
      'Commerce / Management',
      'Comptabilite',
      'Ressources Humaines',
      'Communication / Marketing',
      'Entrepreneuriat',
      'Culture digitale et Tech',
      'Anglais',
      'Employabilite',
    ],
    action: 'Ouvrir',
  },
  {
    title: 'Par formation',
    items: [
      'BTS MCO',
      'BTS GPME',
      'BTS NDRC',
      'BTS SAM',
      'Bachelor Communication digitale',
      'Bachelor RGRH',
      'Mastere Entrepreneuriat',
      'TP MUM',
    ],
    action: 'Ouvrir',
  },
  {
    title: 'Sur mesure',
    items: [
      'Droits et devoirs des apprentis (3h)',
      "Acculturation a l'IA (2h30)",
      'Prise de parole en public (2h30)',
      'Cybersecurite - Metiers du digital (35h)',
      'Handicap en milieu professionnel (6h)',
      'Discrimination : reconnaitre, comprendre, agir',
    ],
    action: 'Ouvrir',
  },
]

function IconCircle() {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-indigo-200 bg-indigo-100 text-xs text-indigo-500">
      O
    </span>
  )
}

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-xs font-semibold text-indigo-600">
              Pour les centres de formation
            </span>
            <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
              La pedagogie, au coeur de l'ADN de notre plateforme depuis 2002
            </h1>
            <p className="text-sm text-slate-600">
              Skillogs s'adresse principalement aux CFA, organismes de formation et ecoles, en
              accompagnant les directeurs d'etablissement ainsi que les directeurs pedagogiques et
              des etudes dans la structuration et le pilotage de leurs parcours de formation.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
                Demander une demo
                <FontAwesomeIcon className="h-3.5 w-3.5" icon={faArrowRight} />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600">
                <FontAwesomeIcon className="h-3.5 w-3.5" icon={faPlay} />
                Voir le temoignage
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
              <div className="flex items-start gap-4">
                  <Image
                    className="rounded-2xl bg-[#b7ff63] p-2"
                    src="/images/spiral.png"
                    alt="logo"
                    width={48}
                    height={48}
                  />
                <p className="text-sm text-slate-600">
                  On est vraiment sur une relation de partenariat, il y a une grande ecoute, un
                  accompagnement et une presence reelle. Il y a une reactivite quand on pose des
                  questions, on a quelqu'un en face, en fait on a un humain en face.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f9]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center">
          <h2 className="text-lg font-semibold text-slate-900">Skillogs en quelques chiffres</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className={`rounded-2xl p-6 ${item.tone}`}>
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="mt-2 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
              01
            </span>
            <h2 className="text-2xl font-semibold text-slate-900">Pourquoi adopter Skillogs ?</h2>
          </div>
          <p className="mt-6 text-sm font-semibold text-slate-900">Notre approche pedagogique</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valueCards.map((card) => (
              <div key={card.title} className={`rounded-2xl p-6 ${card.tone}`}>
                <FontAwesomeIcon className="h-5 w-5" icon={card.icon} />
                <h3 className="mt-4 text-base font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-xl font-semibold text-slate-900">Pourquoi utiliser Skillogs ?</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {usageCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                    <FontAwesomeIcon className="h-5 w-5" icon={card.icon} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
                    <p className="text-sm text-indigo-600">{card.subtitle}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600">
                      {card.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className={`mt-1 inline-flex h-2.5 w-2.5 rounded-full ${card.dotClass}`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#f7f7f9]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
              02
            </span>
            <h2 className="text-2xl font-semibold text-slate-900">Ils nous font confiance</h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className={`rounded-2xl p-6 ${trustCards[0].tone}`}>
              <h3 className="text-base font-semibold text-slate-900">Une structure solide</h3>
              <p className="mt-3 whitespace-pre-line text-sm text-slate-600">{trustCards[0].text}</p>
            </div>
            <div className="space-y-4">
              <div className={`rounded-2xl p-6 ${trustCards[1].tone}`}>
                <h3 className="text-base font-semibold">Une plateforme au coeur de l'expertise pedagogique</h3>
                <p className="mt-2 text-sm text-white/80">{trustCards[1].text}</p>
              </div>
              <div className={`rounded-2xl p-6 ${trustCards[2].tone}`}>
                <h3 className="text-base font-semibold">Un eco-systeme complet</h3>
                <p className="mt-2 text-sm">{trustCards[2].text}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-slate-400">
            {['ISTEC', 'EEMI', 'SKALE', 'SupVeto'].map((item) => (
              <span key={item} className="rounded-full border border-slate-200 px-6 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
              03
            </span>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Skillogs au service de vos enjeux pedagogiques
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Skillogs accompagne les etablissements comme un soutien a la pedagogie existante.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {impacts.slice(0, 3).map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${item.accent}`}>
                  {item.id}
                </span>
                {item.quote ? (
                  <div className="mt-4 rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-500">
                    {item.quote}
                  </div>
                ) : null}
                <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                {item.stat ? (
                  <div className="mt-4 rounded-xl bg-[#f0ffe1] px-4 py-3">
                    <p className="text-2xl font-semibold text-lime-600">{item.stat}</p>
                    <p className="text-xs text-slate-600">{item.statText}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {impacts.slice(3).map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-600">
                  {item.id}
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                {item.stat ? (
                  <div className="mt-4 rounded-xl bg-[#f0ffe1] px-4 py-3">
                    <p className="text-2xl font-semibold text-lime-600">{item.stat}</p>
                    <p className="text-xs text-slate-600">{item.statText}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#f7f7f9]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
              04
            </span>
            <h2 className="text-2xl font-semibold text-slate-900">Ils en parlent mieux que nous !</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <Image
                    className="rounded-2xl bg-[#b7ff63] p-2"
                    src="/images/spiral.png"
                    alt="logo"
                    width={48}
                    height={48}
                  />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{testimonials[0].name}</p>
                  <p className="text-sm text-indigo-600">{testimonials[0].role}</p>
                </div>
              </div>
              <div className="mt-6 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">{testimonials[0].text}</p>
                <p className="mt-3">{testimonials[0].body}</p>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600">
                <FontAwesomeIcon className="h-3.5 w-3.5" icon={faPlay} />
                Voir le temoignage video
              </button>
            </div>
            <div className="rounded-2xl bg-[#4f46e5] p-6 text-white">
              <h3 className="text-lg font-semibold">Un accompagnement pense pour les formateurs</h3>
              <p className="mt-3 text-sm text-white/85">
                Skillogs s'adapte aux pratiques des formateurs, pas l'inverse. A travers des
                ateliers pedagogiques, les formateurs decouvrent et partagent leurs pratiques,
                parfois deja existantes, sans toujours les nommer.
              </p>
              <p className="mt-4 text-sm text-white/85">
                L'objectif n'est pas d'imposer de nouvelles methodes, mais de :
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {['Valoriser les pratiques existantes', 'Donner des cles simples', 'Permettre une mise en application immediate'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FontAwesomeIcon className="mt-1 h-2.5 w-2.5 text-lime-300" icon={faCircle} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.slice(1).map((item) => (
              <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
                <p>{item.text}</p>
                <p className="mt-4 text-sm font-semibold text-indigo-600">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
              05
            </span>
            <h2 className="text-2xl font-semibold text-slate-900">La pedagogie interactive de Skillogs</h2>
          </div>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">La pedagogie dans nos modules</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: 'Format video', icon: faVideo },
                  { label: 'Format interactif', icon: faMessage },
                  { label: 'Format texte', icon: faFileLines },
                  { label: 'Format immersif', icon: faAtom },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className={
                      index === 1
                        ? 'flex h-28 flex-col items-center justify-center rounded-2xl bg-[#b7ff63] p-5 text-center text-sm font-semibold text-[#2f2f2f]'
                        : index === 0
                          ? 'flex h-28 flex-col items-center justify-center rounded-2xl bg-[#4f46e5] p-5 text-center text-sm font-semibold text-white'
                          : 'flex h-28 flex-col items-center justify-center rounded-2xl bg-[#b9c3ff] p-5 text-center text-sm font-semibold text-[#2f2f2f]'
                    }
                  >
                    <FontAwesomeIcon className="h-5 w-5" icon={item.icon} />
                    <p className="mt-3">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'VIDEO', icon: faVideo },
                    { label: 'INFOGRAPHIE', icon: faChartBar },
                    { label: 'QUIZ FORMATIF', icon: faQuestion },
                    { label: 'FICHE SYNTHESE', icon: faFileLines },
                    { label: "QUIZ D'EVALUATION", icon: faQuestion },
                  ].map((item) => (
                    <span key={item.label} className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-indigo-600">
                      <FontAwesomeIcon className="h-3 w-3" icon={item.icon} />
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-[#f5f5f7] p-5 text-sm text-slate-700">
                <div className="flex items-start gap-4">
                  <div className="space-y-4">
                    {['Integration de modalites pedagogiques interactives', 'Quiz intermediaires dans les seances', 'Accessibilite accrue avec les sous-titres'].map(
                      (item, idx) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span>{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-[#b7ff63] p-5 text-sm font-semibold text-[#2f2f2f]">
                Modele d'hybridation recommande :<div className="mt-2 text-base">1 jour par semaine d'e-learning</div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Handicap en milieu professionnel', progress: '90%', hours: '6h', bar: 'bg-indigo-600' },
                { title: 'Discrimination : reconnaitre, comprendre, agir', progress: '85%', hours: '4h', bar: 'bg-lime-400' },
                { title: 'Cybersecurite - Metiers du digital', progress: '78%', hours: '35h', bar: 'bg-indigo-400' },
                { title: 'Droits et devoirs des apprentis', progress: 'En cours de conception', hours: '3h', bar: 'bg-indigo-200' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs text-indigo-600">{item.hours}</span>
                  </div>
                  <div className="mt-3 h-2 w-full rounded-full bg-slate-200">
                    <div className={`h-2 rounded-full ${item.bar}`} style={{ width: item.progress === 'En cours de conception' ? '35%' : item.progress }} />
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Taux de completion : {item.progress}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f7f7f9]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
              06
            </span>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Catalogue des parcours Skillogs</h2>
              <p className="mt-2 text-sm text-slate-500">Accedez a l'ensemble de nos contenus de formation.</p>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            A noter : 1h de e-learning presentee sur ce catalogue equivaut a au moins 2h de cours en classe.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {catalogueStats.map((item) => (
              <div key={item.label} className={`rounded-2xl px-6 py-4 ${item.tone}`}>
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="text-xs">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {catalogueLists.map((list, index) => (
              <div key={list.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span
                  className={
                    index === 1
                      ? 'inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f0ffe1] text-lime-500'
                      : 'inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600'
                  }
                >
                  <FontAwesomeIcon className="h-5 w-5" icon={index === 0 ? faBook : index === 1 ? faGraduationCap : faWrench} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{list.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {list.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className={
                          index === 1
                            ? 'mt-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-lime-400'
                            : 'mt-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-indigo-500'
                        }
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={
                    index === 1
                      ? 'mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-lime-400 px-4 py-2 text-sm font-semibold text-lime-600'
                      : 'mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-indigo-600 px-4 py-2 text-sm font-semibold text-indigo-600'
                  }
                >
                  {list.action}
                  <FontAwesomeIcon className="h-3 w-3" icon={faUpRightFromSquare} />
                </button>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            Si vous ne trouvez pas la formation sur etagere correspondant a vos besoins, n'hesitez pas a nous le signaler : nous pourrons peut-etre la creer sur mesure !
          </p>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
              07
            </span>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Notre equipe</h2>
              <p className="mt-2 text-sm text-slate-500">Une equipe prete a vous accompagner de A a Z</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-600">
            {['Equipe pedagogique', 'Equipe developpement & relation client', 'Equipe technique & support'].map((item) => (
              <span key={item} className="rounded-full bg-slate-100 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                name: 'Segolene Renault-Lyat',
                role: 'Directrice pedagogique',
                text: "Responsable d'un pool de formateurs-concepteurs",
                email: 'segolene.renoud-lyat@skillogs.com',
              },
              {
                name: 'Morgane Barbay',
                role: 'Ingenieure pedagogique',
                text: 'Chargee des relations clients',
                email: 'morgane.barbay@skillogs.com',
                phone: '07 65 69 22 75',
              },
            ].map((item) => (
              <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <Image
                    className="rounded-2xl bg-[#b8c3ff] p-2"
                    src="/images/spiral.png"
                    alt="logo"
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-indigo-600">{item.role}</p>
                    <p className="text-sm text-slate-500">{item.text}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon className="h-4 w-4 text-slate-500" icon={faEnvelope} />
                    {item.email}
                  </div>
                  {item.phone ? (
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon className="h-4 w-4 text-slate-500" icon={faPhone} />
                      {item.phone}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-[#4f46e5] px-6 py-4 text-center text-white">
            <p className="text-sm font-semibold">Support technique</p>
            <p className="text-sm text-white/80">support@skillogs.com</p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#4f46e5]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center text-white">
          <h2 className="text-2xl font-semibold">Pret a transformer votre pedagogie ?</h2>
          <p className="mt-2 text-sm text-white/70">
            Rejoignez les +3500 utilisateurs qui font confiance a Skillogs.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-2 text-sm font-semibold text-[#4f46e5]">
              Demander une demo
              <FontAwesomeIcon className="h-3.5 w-3.5" icon={faArrowRight} />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-2 text-sm font-semibold text-white">
              <FontAwesomeIcon className="h-4 w-4" icon={faBook} />
              Voir le catalogue
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
