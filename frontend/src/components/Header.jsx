import { useEffect, useRef, useState } from 'react'
import { navItems } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 18)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const close = (event) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      menuButtonRef.current?.focus()
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])

  const closeMenu = () => setOpen(false)

  return <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
    <div className="container header-inner">
      <a className="brand" href="#inicio" aria-label="FutureTech Hub — início"><span className="brand-mark" aria-hidden="true"><i/><b>F</b></span><span>FutureTech <strong>Hub</strong></span></a>
      <button ref={menuButtonRef} className={`menu-button${open ? ' is-active' : ''}`} type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(current => !current)}><span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span><span className="menu-icon" aria-hidden="true"><i/><i/><i/></span></button>
      <nav id="main-navigation" className={open ? 'nav is-open' : 'nav'} aria-label="Navegação principal">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
        <a className="nav-ai" href="#futureai" onClick={closeMenu}>FutureAI <span>Em breve</span></a>
      </nav>
    </div>
  </header>
}