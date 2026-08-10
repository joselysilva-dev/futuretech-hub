import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'
import { knowledgeAreas } from '../data/content'

export default function Knowledge() {
  return <section className="section" id="explorar" aria-labelledby="knowledge-title"><div className="container"><SectionHeading eyebrow="Explore por área" title="Conhecimento conectado à prática" titleId="knowledge-title" text="Fundamentos e tecnologias organizados para você entender não apenas como usar, mas por que cada decisão importa."/><div className="knowledge-grid">{knowledgeAreas.map((area, index) => <article className="knowledge-card" key={area.title}><span className="card-index">0{index + 1}</span><span className="icon-box"><Icon name={area.icon}/></span><h3>{area.title}</h3><p>{area.text}</p></article>)}</div></div></section>
}
