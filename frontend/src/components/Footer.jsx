import { navItems } from '../data/content'

export default function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-main"><div><a className="brand" href="#inicio"><span className="brand-mark" aria-hidden="true">F</span><span>FutureTech <strong>Hub</strong></span></a><p className="footer-tagline">Learn. Build. Evolve.</p></div><nav className="footer-nav" aria-label="Navegação do rodapé">{navItems.map(([label,id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav></div>
    <div className="footer-bottom"><p>Projeto desenvolvido durante estudos em Engenharia de Software.<br/>Uma iniciativa da Luara Digital.</p><p>© {new Date().getFullYear()} FutureTech Hub.</p></div>
  </div></footer>
}
