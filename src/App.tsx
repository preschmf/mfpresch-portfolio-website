import './App.css'
import SiteNavBar from './components/SiteNavBar'
import Projects from './components/Projects'
import Home from './components/Home'
import Skills from './components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <SiteNavBar />
      <Home />
      <Projects />
      <Skills />
    </>
  )
}

export default App
