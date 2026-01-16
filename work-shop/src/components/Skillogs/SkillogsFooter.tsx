import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const navItems = [
  { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
  { label: 'La plateforme', href: '/plateforme' },
  { label: 'Notre accompagnement', href: '/accompagnement' },
  { label: 'Clients', href: '/clients' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Ressources', href: '/ressources' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contacts' },
]

function ContactItem({ icon, label }: { icon: typeof faEnvelope; label: string }) {
  return (
    <div className="flex items-center gap-2 text-slate-300">
      <FontAwesomeIcon className="h-4 w-4 text-slate-400" icon={icon} />
      <span>{label}</span>
    </div>
  )
}

export function SkillogsFooter() {
  return (
    <footer className="mt-auto bg-[#2f2f2f] text-sm text-slate-200">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="text-2xl font-semibold text-white">SKILLOGS</div>
            <p className="max-w-md text-slate-300">
              Fournisseur d&apos;énergie éducative depuis plus de 20 ans. Skillogs appartient au Groupe
              Imparare, leader français de la formation professionnelle.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-[#353065] px-4 py-2 text-xs text-slate-100">
                +3500 utilisateurs
              </span>
              <span className="rounded-full bg-[#3a4b2a] px-4 py-2 text-xs text-[#c9f261]">
                +3000h de contenus
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-white">Navigation</div>
            <nav className="flex flex-col gap-3 text-slate-300">
              {navItems.map((item) => (
                <Link key={item.href} className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-white">Contact</div>
            <div className="flex flex-col gap-3 text-slate-300">
              <ContactItem icon={faEnvelope} label="support@skillogs.com" />
              <ContactItem icon={faPhone} label="07 65 69 22 75" />
              <ContactItem icon={faLocationDot} label="101 rue de la Fontaine Grelot, 92160 Antony" />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6">
          <div className="flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Skillogs. Tous droits réservés.</span>
            <Link className="text-slate-400 hover:text-white" href="https://www.skillogs.com">
              Site internet : www.skillogs.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
