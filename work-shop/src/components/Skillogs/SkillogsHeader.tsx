'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

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

export function SkillogsHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={
        isScrolled
          ? 'sticky top-0 z-40 border-b border-slate-200 bg-white/40 backdrop-blur-md shadow-sm'
          : 'sticky top-0 z-40 border-b border-slate-200 bg-white'
      }
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link className="flex items-center gap-2 text-xl font-semibold tracking-wide text-slate-900" href="/">
          <Image src="/images/Logo_skillogs.png" alt="logo" width={140} height={32} />
        </Link>
        <nav className="hidden flex-nowrap items-center gap-5 text-sm text-slate-600 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={
                  isActive
                    ? 'whitespace-nowrap text-indigo-600'
                    : 'whitespace-nowrap text-slate-600 hover:text-slate-900'
                }
                href={item.href}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <Link className="hidden whitespace-nowrap text-sm text-slate-600 hover:text-slate-900 lg:inline-flex" href="/connexion">
            Connexion
          </Link>
          <Link
            className="whitespace-nowrap rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            href="/demander-une-demo"
          >
            Demander une démo
          </Link>
        </div>
        <button
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          {isOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>
      {isOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 text-sm text-slate-700">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={isActive ? 'text-indigo-600' : 'text-slate-700 hover:text-slate-900'}
                  href={item.href}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link className="text-slate-700 hover:text-slate-900" href="/connexion">
              Connexion
            </Link>
            <Link
              className="mt-2 rounded-full bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              href="/demander-une-demo"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
