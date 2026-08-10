import SectionHeading from '../components/SectionHeading'
import { paths } from '../data/content'

export default function LearningPaths() {
  return <section className="section paths-section" id="trilhas"><div className="container"><div className="split-heading"><SectionHeading eyebrow="Trilhas de estudo" title="Direção para avançar sem pular fundamentos" text="Rotas de aprendizagem para orientar estudos e projetos. Não são cursos fechados: são mapas que evoluem com o laboratório."/><div className="path-flow" aria-label="Etapas de cada trilha"><span>Fundamentos</span><i>→</i><span>Prática</span><i>→</i><span>Projeto</span><i>→</i><span>Deploy</span></div></div><div className="paths-list">{paths.map(([title, subtitle], index) => <article key={title}><span className="path-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{subtitle}</p></div><span className="path-state">Mapa em construção</span></article>)}</div></div></section>
}
