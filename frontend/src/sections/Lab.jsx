import Icon from '../components/Icon'
import SectionHeading from '../components/SectionHeading'

const experiments = [['API REST', 'FastAPI · PostgreSQL'], ['Infraestrutura como código', 'Terraform · Azure'], ['Entrega contínua', 'Docker · GitHub Actions'], ['Agentes e automações', 'IA · Integrações']]

export default function Lab() {
  return <section className="section" id="laboratorio"><div className="container lab-shell"><div className="lab-copy"><SectionHeading eyebrow="FutureTech Lab" title="Onde conhecimento vira experimento" text="Um registro aberto do processo: hipóteses, arquitetura, implementação, falhas, correções e aprendizados. Porque engenharia também acontece no caminho."/><p className="note"><Icon name="terminal" size={20}/> Experimentos reais, documentados sem métricas inventadas.</p></div><div className="lab-console"><div className="console-top"><span><i/> lab/status</span><code>experiments.yml</code></div><div className="experiment-list">{experiments.map(([name, stack], index) => <div key={name}><span className="experiment-icon">{String(index + 1).padStart(2, '0')}</span><p><strong>{name}</strong><small>{stack}</small></p><span className="experiment-status">planejado</span></div>)}</div><div className="console-footer"><code>$ aprender → construir → documentar</code><span className="cursor" aria-hidden="true"/></div></div></div></section>
}
