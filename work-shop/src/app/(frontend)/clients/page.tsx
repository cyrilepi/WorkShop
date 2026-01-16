import Image from 'next/image'
import { faBullseye, faChartColumn, faCheck, faCommentDots, faShield, faUsers, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const methodSteps = [
  "Diagnostic de l'equipement et des usages numeriques",
  'Analyse du referentiel et des blocs de competences',
  'Croisement avec les contenus disponibles dans Skillogs',
  'Sequencage fin : quels contenus en presentiel, quels contenus en ligne ?',
  'Scenario pedagogique partage -> planning integre',
]

const resultCards = [
  {
    title: 'Personnalisation',
    text: 'Parcours adaptes selon les profils (decrocheurs, apprenants eloignes...)',
    icon: faUsers,
  },
  {
    title: 'Tracabilite',
    text: 'Conformite aux obligations legales garantie',
    icon: faShield,
  },
  {
    title: 'Implication',
    text: 'Formateurs valorises dans leur role de facilitateurs',
    icon: faBullseye,
  },
  {
    title: 'Pilotage',
    text: "Donnees d'assiduite, d'engagement et de progression",
    icon: faChartColumn,
  },
]

const reasons = [
  'Contenus eprouves, immediatement mobilisables',
  'Plateforme intuitive pensee pour les alternants',
  'Suivi rigoureux (temps passe, quiz, progression)',
  'Accompagnement humain et souple',
  'Integration avec les outils existants (YPareo)',
]

const solutionCards = [
  {
    title: "Un kit de communication interne pret a l'emploi",
    text: "Affiches, flyers, templates a diffuser aupres des formateurs et de l'equipe pedagogique. Objectif : expliquer simplement l'hybridation, rassurer et valoriser les benefices.",
    tone: 'bg-[#4f46e5] text-white',
    badge: '1',
  },
  {
    title: 'Des ateliers en presentiel pour les equipes',
    text: "Themes : gamification & generation Z. Objectif : changer de regard sur la formation hybride, outiller les formateurs avec des pratiques concretes et engageantes.",
    tone: 'bg-[#b7ff63] text-[#2f2f2f]',
    badge: '2',
  },
  {
    title: 'Des modules e-learning pour les formateurs',
    text: "Capsules rapides, illustrees d'exemples concrets. Objectif : s'approprier la plateforme et ses usages a son rythme.",
    tone: 'bg-[#b9c3ff] text-[#2f2f2f]',
    badge: '3',
  },
]

const faq = [
  {
    question: "Mes formateurs ne sont pas tous a l'aise avec le digital. Comment les accompagner ?",
    answer:
      "Skillogs est concu pour etre simple et intuitif. Une interface claire, des parcours prets a l'emploi, et un acces a une base de ressources (videos, tutos, PDF). Nous proposons egalement un onboarding pas a pas, et un accompagnement pedagogique a la demande.",
  },
  {
    question: 'Et si je veux garder une partie en presentiel ?',
    answer:
      "Parfait : Skillogs est pense pour l'hybridation, pas pour remplacer l'humain. Vous gardez les sequences presentielle que vous jugez pertinentes (on peut vous aider !), et digitalisez ce qui peut l'etre pour gagner en flexibilite.",
  },
  {
    question: "Est-ce que Skillogs m'aide pour Qualiopi ?",
    answer:
      "Oui ! Notre plateforme est concue pour faciliter votre conformite Qualiopi. Fonctionnalites incluses : suivi individuel des apprenants, rapports exportables pour l'audit, historique des actions pedagogiques.",
  },
  {
    question: "Et si j'ai besoin d'aide ? Est-ce qu'il y a un support ?",
    answer:
      "Oui. Vous avez acces a une base de ressources (docs, videos, FAQ), a un support humain reactif (email, telephone + visio si besoin), a un referent dedie lors de l'onboarding. Pas de robot, pas de message sans reponse. On reste disponibles.",
  },
  {
    question: 'Et si je veux commencer doucement ?',
    answer:
      "C'est exactement ce que nous recommandons. Commencez par un module test, un groupe pilote, ou meme un seul formateur. Skillogs est activable a la carte, selon vos priorites. On avance a votre rythme, sans pression.",
  },
]

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function QuoteIcon() {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-100 text-xs text-indigo-500">
      <FontAwesomeIcon className="h-4 w-4" icon={faQuoteLeft} />
    </span>
  )
}

export default function ClientsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-[#4f46e5] reveal">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center text-white md:py-20">
          <h1 className="text-3xl font-semibold md:text-4xl">Nos clients</h1>
          <p className="mt-3 text-sm text-white/80 md:text-base">
            Decouvrez comment nos clients transforment leur approche de la formation avec Skillogs
          </p>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-xs font-semibold text-indigo-600">
            Cas client
          </span>
          <h2 className="mt-6 text-2xl font-semibold text-slate-900">
            SKALE Business Schools digitalise l'apprentissage sans perdre son ADN
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-5 text-sm text-slate-600">
              <p className="text-base font-semibold text-slate-900">
                Un besoin clair : moderniser sans fragiliser
              </p>
              <p>
                Chez SKALE Business Schools, la digitalisation n'etait pas un choix par effet de
                mode. C'etait une reponse strategique a des enjeux multiples : economies
                logistiques, accessibilite territoriale, attentes generationnelles... et pression
                croissante des financeurs vers des modalites hybrides.
              </p>
              <div className="hover-lift rounded-2xl border border-indigo-100 bg-[#f5f6ff] p-5">
                <div className="flex items-start gap-3">
                  <QuoteIcon />
                  <div className="space-y-2 text-sm text-slate-700">
                    <p>"Il n'y a pas d'obligation legale, mais c'est fortement recommande."</p>
                    <p className="text-xs text-slate-500">
                      — Patricia Plotu, Directrice du CFA Skale Orleans
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover-lift rounded-2xl border border-slate-200 bg-slate-50">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image alt="Session en classe" fill sizes="(max-width: 768px) 100vw, 520px" src="/images/imagedusoir1.jpg" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="hover-lift hover-tint rounded-3xl bg-[#4f46e5] p-8 text-white md:p-10">
            <h3 className="text-lg font-semibold">
              Le defi : engager les formateurs et assurer une coherence pedagogique
            </h3>
            <p className="mt-3 text-sm text-white/85">
              Apres une premiere tentative de LMS interne peu concluante, SKALE opte pour Skillogs
              et ses parcours e-learning sur etagere. L'objectif : eviter les silos entre
              presentiel et distanciel, tout en co-construisant avec les formateurs des scenarios
              pedagogiques realistes.
            </p>
            <div className="hover-lift mt-6 rounded-2xl bg-white/15 p-5">
              <div className="flex items-start gap-3">
                <QuoteIcon />
                <p className="text-sm text-white/90">
                  "On a rectifie notre approche : on donne aux formateurs l'acces aux contenus
                  Skillogs, puis on construit le scenario ensemble. Cela cree de l'engagement."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
          <h3 className="text-base font-semibold text-slate-900">
            La methode : une hybridation sur-mesure, modulaire et pilotee
          </h3>
          <div className="mt-8 space-y-5 text-left">
            {methodSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-sm text-slate-600">{step}</p>
              </div>
            ))}
          </div>
          <div className="hover-lift mt-8 rounded-2xl border border-lime-200 bg-[#f0ffe1] p-5 text-left">
            <div className="flex items-start gap-3">
              <QuoteIcon />
              <p className="text-sm text-slate-700">
                "On discute module par module. Les savoirs associes partent en e-learning. La mise
                en pratique reste en salle."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 text-center">
          <h3 className="text-base font-semibold text-slate-900">
            Resultats : plus de flexibilite, plus d'impact, et plus de data
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resultCards.map((card) => (
              <div key={card.title} className="hover-lift rounded-2xl border border-slate-200 bg-white p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <FontAwesomeIcon className="h-5 w-5" icon={card.icon} />
                </div>
                <h4 className="mt-4 text-base font-semibold text-slate-900">{card.title}</h4>
                <p className="mt-2 text-sm text-slate-500">{card.text}</p>
              </div>
            ))}
          </div>
          <div className="hover-lift mx-auto mt-8 max-w-3xl rounded-2xl border border-lime-200 bg-[#f0ffe1] p-5 text-sm text-slate-700">
            "C'est la synergie pedagogique qui fait la difference. On combine la richesse du
            distanciel avec la force du presentiel. Et ca fonctionne."
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="mx-auto w-full max-w-5xl px-6 pb-16">
          <div className="hover-lift hover-tint rounded-3xl bg-[#2f2f2f] p-10 text-center text-white">
            <h3 className="text-lg font-semibold">Pourquoi ca marche avec Skillogs ?</h3>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((item) => (
                <div key={item} className="hover-lift rounded-2xl bg-white/10 px-4 py-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-lime-300 text-xs text-lime-300">
                      <FontAwesomeIcon className="h-3 w-3" icon={faCheck} />
                    </span>
                    <span>{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f9] reveal">
        <div className="mx-auto w-full max-w-6xl px-6 pt-12 pb-16">
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-xs font-semibold text-indigo-600">
            Cas client
          </span>
          <h3 className="mt-6 text-2xl font-semibold text-slate-900">
            Un accompagnement humain et concret pour faire bouger les lignes
          </h3>
          <div className="hover-lift mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Contexte</p>
            <p className="mt-2">
              Un de nos clients souhaitait amorcer sa transition digitale sans resistance ni perte
              de sens. Le defi : embarquer les equipes pedagogiques dans l'hybridation, tout en
              communiquant clairement aupres des apprenants.
            </p>
          </div>

          <h4 className="mt-10 text-center text-base font-semibold text-slate-900">
            Notre solution sur 3 leviers
          </h4>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {solutionCards.map((card) => (
              <div key={card.title} className={`hover-lift hover-tint rounded-2xl p-6 ${card.tone}`}>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-slate-900">
                  {card.badge}
                </span>
                <h5 className="mt-4 text-base font-semibold">{card.title}</h5>
                <p className="mt-2 text-sm">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="hover-lift mx-auto mt-8 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
                <FontAwesomeIcon className="h-4 w-4" icon={faCommentDots} />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Un accompagnement humain tout au long du projet
                </p>
                <div className="mt-3 space-y-2 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-lime-300 text-[10px] text-lime-500">
                      <FontAwesomeIcon className="h-2.5 w-2.5" icon={faCheck} />
                    </span>
                    <span>Deux referentes internes impliquees a chaque etape</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-lime-300 text-[10px] text-lime-500">
                      <FontAwesomeIcon className="h-2.5 w-2.5" icon={faCheck} />
                    </span>
                    <span>Echanges reguliers, co-construction et reajustements</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-lime-300 text-[10px] text-lime-500">
                      <FontAwesomeIcon className="h-2.5 w-2.5" icon={faCheck} />
                    </span>
                    <span>Bilan final partage avec recommandations pour la suite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white reveal">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
          <h3 className="text-2xl font-semibold text-slate-900">
            FAQ - Digitaliser votre CFA ou votre OF avec Skillogs
          </h3>
          <div className="mt-10 space-y-6 text-left">
            {faq.map((item) => (
              <div key={item.question} className="hover-lift rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold text-slate-900">
                  <span className="text-indigo-600">Q.</span> {item.question}
                </p>
                <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#4f46e5] reveal">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-14 text-center text-white">
          <h3 className="text-2xl font-semibold">Rejoignez nos clients satisfaits</h3>
          <p className="mt-2 text-sm text-white/70">
            Decouvrez comment Skillogs peut transformer votre approche de la formation
            professionnelle
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              className="hover-button inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-2 text-sm font-semibold text-[#4f46e5]"
              type="button"
            >
              Demander une demo
              <FontAwesomeIcon className="h-3.5 w-3.5" icon={faArrowRight} />
            </button>
            <button
              className="hover-button rounded-full border border-white/60 px-5 py-2 text-sm font-semibold text-white"
              type="button"
            >
              Decouvrir notre accompagnement
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
