'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export const ScrollReveal = () => {
  const pathname = usePathname()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    if (elements.length === 0) return

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const shouldRevealNow = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect()
      return rect.top < window.innerHeight * 0.9 && rect.bottom > 0
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )

    elements.forEach((element) => {
      if (shouldRevealNow(element)) {
        element.classList.add('is-visible')
        return
      }
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
