import Header from './components/Header'
import Services from './pages/Service'
import Skill from './pages/Skill'
import Projects from './pages/Project'
import Home from './pages/Home'
import About from './pages/About'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'
import './App.css'
import useScrollReveal from './customeHooks/useScrollToSection'
import useHeaderTransition from './customeHooks/useHeader'
import HeaderImg from './components/HeaderImg'

function App() {

    const showImageHeader = useHeaderTransition("home", 0.85);

  return (
     <>

      <div className={`header-normal ${showImageHeader ? "hide" : "show"}`}>
        <Header/>
      </div>

      <div className={`header-img ${showImageHeader ? "show" : "hide"}`}>
        <HeaderImg/>
      </div>

      <div className="app-container">

        <Home />
        <About />
        <Skill />
        <Projects />
        <Certificates />
        <Contact />

      </div>

    </>
  )
}

export default App
