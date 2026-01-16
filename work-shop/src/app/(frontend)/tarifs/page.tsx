import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const plans = [
  {
    name: 'Starter',
    subtitle: 'Pour les petits centres de formation',
    price: '490',
    priceSuffix: '/mois',
    cta: 'Commencer',
    highlight: false,
    features: [
      "Jusqu'à 100 apprenants",
      '3 formateurs inclus',
      '500h de contenus accessibles',
      'Support par email',
      'Rapports basiques',
    ],
  },
  {
    name: 'Professional',
    subtitle: 'Pour les organismes en croissance',
    price: '990',
    priceSuffix: '/mois',
    cta: 'Commencer',
    highlight: true,
    badge: 'Le plus populaire',
    features: [
      "Jusqu'à 500 apprenants",
      '10 formateurs inclus',
      '1500h de contenus accessibles',
      'Support prioritaire',
      'Analytics avancés',
      'Personnalisation de la plateforme',
      "API d'intégration",
    ],
  },
  {
    name: 'Enterprise',
    subtitle: 'Pour les grandes structures',
    price: 'Sur devis',
    cta: 'Nous contacter',
    highlight: false,
    features: [
      'Apprenants illimités',
      'Formateurs illimités',
      'Tous les contenus accessibles',
      'Account manager dédié',
      'Formation sur site',
      'SLA garanti',
      'Intégration SI complète',
      'Contenus sur mesure',
    ],
  },
]

function CheckIcon() {
  return (
    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-indigo-200 text-xs text-indigo-500">
      <FontAwesomeIcon className="h-3 w-3" icon={faCheck} />
    </span>
  )
}

export default function TarifsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-[#4f46e5] reveal">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center text-white md:py-20">
          <h1 className="text-3xl font-semibold md:text-4xl">Nos tarifs</h1>
          <p className="mt-3 text-sm text-white/80 md:text-base">Des offres adaptées à chaque structure</p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => {
              return (
                <article
                  key={plan.name}
                  className={
                    plan.highlight
                      ? 'hover-lift hover-tint relative rounded-3xl border border-indigo-500 bg-[#f5f4ff] p-8 shadow-lg'
                      : 'hover-lift rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'
                  }
                >
                  {plan.badge ? (
                    <span className="absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 rounded-full bg-[#c6ff6d] px-4 py-1 text-xs font-semibold text-slate-900 shadow-sm">
                      {plan.badge}
                    </span>
                  ) : null}
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-slate-900">{plan.name}</h2>
                    <p className="text-sm text-slate-500">{plan.subtitle}</p>
                  </div>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-3xl font-semibold text-slate-900">{plan.price}</span>
                    {plan.priceSuffix ? (
                      <span className="text-sm text-slate-500">{plan.priceSuffix}</span>
                    ) : null}
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={
                      plan.highlight
                        ? 'hover-button mt-8 w-full rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700'
                        : 'hover-button mt-8 w-full rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50'
                    }
                    type="button"
                  >
                    {plan.cta}
                  </button>
                </article>
              )
            })}
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            Tous les prix sont HT. Engagement annuel. Des options supplémentaires sont disponibles.
          </p>
        </div>
      </section>
    </main>
  )
}
