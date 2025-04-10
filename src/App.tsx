import './App.css'
import SiteNavBar from './components/SiteNavBar'
import Projects from './components/Projects'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ScrollAnimation from 'react-animate-on-scroll'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <SiteNavBar />
      <Home />
      <ScrollAnimation animateIn='fadeIn'>
        <Contact />
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn'>
        <Projects />
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn'>
        <Skills />
      </ScrollAnimation>
    </>
  )
}

export default App
