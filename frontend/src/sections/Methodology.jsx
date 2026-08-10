import Icon from '../components/Icon'
import { methodology } from '../data/content'

export default function Methodology() {
  return <><section className="section methodology"><div className="container"><p className="eyebrow">Nossa metodologia</p><h2>Aprendizado é um ciclo, não uma linha de chegada.</h2><ol>{methodology.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < methodology.length - 1 && <Icon name="arrow" size={18}/>}</li>)}</ol></div></section><section className="section cta-section" aria-labelledby="cta-title"><div className="container cta-panel"><div><p className="eyebrow">Seu próximo passo começa aqui</p><h2 id="cta-title">Explore, experimente e construa com intenção.</h2></div><a className="button button-primary" href="#explorar">Começar a explorar <Icon name="arrow" size={19}/></a></div></section></>
}
