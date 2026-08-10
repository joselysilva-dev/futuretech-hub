import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Knowledge from './sections/Knowledge'
import LearningPaths from './sections/LearningPaths'
import Lab from './sections/Lab'
import ProjectsContent from './sections/ProjectsContent'
import Tools from './sections/Tools'
import FutureAI from './sections/FutureAI'
import Methodology from './sections/Methodology'
import './styles/app.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Knowledge />
        <LearningPaths />
        <Lab />
        <ProjectsContent />
        <Tools />
        <FutureAI />
        <Methodology />
      </main>
      <Footer />
    </>
  )
}

export default App
