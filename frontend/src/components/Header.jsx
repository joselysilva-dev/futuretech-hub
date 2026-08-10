import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { navItems } from '../data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef(null)

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

  return <header className="site-header">
    <div className="container header-inner">
      <a className="brand" href="#inicio" aria-label="FutureTech Hub — início"><span className="brand-mark" aria-hidden="true">F</span><span>FutureTech <strong>Hub</strong></span></a>
      <button ref={menuButtonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(current => !current)}><span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span><Icon name={open ? 'close' : 'menu'} /></button>
      <nav id="main-navigation" className={open ? 'nav is-open' : 'nav'} aria-label="Navegação principal">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-ai" href="#futureai" onClick={() => setOpen(false)}>FutureAI <span>Em breve</span></a>
      </nav>
    </div>
  </header>
}
