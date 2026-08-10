import SectionHeading from '../components/SectionHeading'
import { projects, publications } from '../data/content'

export default function ProjectsContent() {
  return <><section className="section" id="projetos"><div className="container"><SectionHeading eyebrow="Projetos práticos" title="Engenharia explicada por meio de soluções" text="Cada projeto será apresentado como um estudo de caso: contexto, desafio, decisões, arquitetura, solução e aprendizados."/><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-top"><span>FT—{String(index + 1).padStart(2, '0')}</span><span className="project-state">Estudo de caso</span></div><h3>{project.title}</h3><p>{project.text}</p><ul>{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div></div></section>
  <section className="section content-section" id="conteudos"><div className="container content-layout"><SectionHeading eyebrow="Conteúdos" title="Notas que ajudam a conectar os pontos" text="Artigos, guias e registros técnicos escritos para iniciantes, sem simplificar demais a engenharia."/><div className="publication-list">{publications.map(item => <article key={item.title}><span>{item.type}</span><div><h3>{item.title}</h3><p>{item.meta}</p></div><span className="soon">Em breve</span></article>)}</div></div></section></>
}
