import { useEffect } from 'react'

const revealTargets = ['.section-heading','.knowledge-card','.paths-list article','.lab-copy','.lab-console','.project-card','.publication-list article','.tools-grid article','.ai-orbit','.ai-copy','.methodology li','.cta-panel']

export default function useReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll(revealTargets.join(','))]
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    elements.forEach((element, index) => {
      element.dataset.reveal = ''
      element.style.setProperty('--reveal-delay', ((index % 4) * 55) + 'ms')
    })

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-revealed'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })

    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}
