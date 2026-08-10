import SectionHeading from '../components/SectionHeading'
import { toolGroups } from '../data/content'

export default function Tools() {
  return <section className="section" id="ferramentas"><div className="container"><SectionHeading eyebrow="Ferramentas do laboratório" title="Tecnologia com contexto, não apenas uma lista de nomes" text="Ferramentas entram no Hub quando ajudam a resolver um problema e compreender uma parte do sistema."/><div className="tools-grid">{toolGroups.map(group => <article key={group.title}><h3>{group.title}</h3><ul>{group.tools.map(tool => <li key={tool}><span aria-hidden="true"/>{tool}</li>)}</ul></article>)}</div></div></section>
}
