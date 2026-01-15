import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faHeart, faLightbulb, faUsers } from '@fortawesome/free-solid-svg-icons'

const values = [
  {
    title: 'Mission',
    text: 'Accompagner les centres de formation dans leur transformation digitale avec des solutions pedagogiques innovantes.',
    icon: faBullseye,
  },
  {
    title: 'Passion',
    text: "Nous croyons en la puissance de l'education pour transformer les vies et les organisations.",
    icon: faHeart,
  },
  {
    title: 'Innovation',
    text: 'Nous developpons continuellement de nouvelles approches pour repondre aux defis de la formation moderne.',
    icon: faLightbulb,
  },
  {
    title: 'Proximite',
    text: "Nous construisons des relations durables avec nos partenaires basees sur l'ecoute et la confiance.",
    icon: faUsers,
  },
]

const history = [
  { step: '1', year: '2002', title: 'Creation de Skillogs' },
  { step: '2', year: '2010', title: 'Lancement de la plateforme LCMS' },
  { step: '3', year: '2015', title: 'Partenariat avec 5 ecoles majeures' },
  { step: '4', year: '2020', title: 'Depassement des 3000h de contenus' },
  { step: '5', year: '2024', title: '+3500 utilisateurs actifs' },
]

export default function QuiSommesNousPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-[#4f46e5]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center text-white md:py-20">
          <h1 className="text-3xl font-semibold md:text-4xl">Qui sommes-nous</h1>
          <p className="mt-3 text-sm text-white/80 md:text-base">
            Fournisseur d'energie educative depuis plus de 20 ans
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-4xl px-6 py-16 text-center">
          <p className="text-base leading-relaxed text-slate-600">
            Depuis 2002, <span className="font-semibold text-indigo-600">Skillogs</span> accompagne les
            CFA, organismes de formation et ecoles dans la structuration et le pilotage de leurs
            parcours de formation. Membre du Groupe Imparare, nous mettons notre expertise au
            service de la transformation pedagogique.
          </p>
        </div>
      </section>

      <section className="bg-[#f4f5f7]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center">
          <h2 className="text-lg font-semibold text-slate-900">Nos valeurs</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="space-y-4">
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-indigo-200 bg-indigo-100 text-indigo-600">
                  <FontAwesomeIcon className="h-5 w-5" icon={value.icon} />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{value.title}</h3>
                <p className="text-sm text-slate-500">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
          <h2 className="text-lg font-semibold text-slate-900">Notre histoire</h2>
          <div className="mt-10 space-y-10 text-left">
            {history.map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                  {item.step}
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-indigo-600">{item.year}</p>
                  <p className="text-sm text-slate-700">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
