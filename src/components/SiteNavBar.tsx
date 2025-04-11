import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import githubLogo from '../assets/logos/github_logo.svg'
import linkedinLogo from '../assets/logos/linked_in_logo.svg'
import mpLogo from '../assets/images/mp_base_logo_white.png'
import './SiteNavBar.css'
import { useEffect, useState } from 'react'

const SiteNavBar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const onUpdateActiveSection = (section: string) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    //use below code?
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Navbar expand='lg' className={`${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Nav className='mfpresch-nav d-flex flex-row'>
          <Navbar.Brand href='#home' className='brand-section'>
            <img
              alt=''
              src={mpLogo}
              width='30'
              height='30'
            />{' '}
            Michael Presch
          </Navbar.Brand>
          <Nav.Link
            href='#home'
            className={activeSection === 'home' ? 'active-section' : ''}
            onClick={() => onUpdateActiveSection('home')}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href='#contact'
            className={activeSection === 'contact' ? 'active-section' : ''}
            onClick={() => onUpdateActiveSection('contact')}
          >
            Contact
          </Nav.Link>
          <Nav.Link
            href='#projects'
            className={activeSection === 'projects' ? 'active-section' : ''}
            onClick={() => onUpdateActiveSection('projects')}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            href='#skills'
            className={activeSection === 'skills' ? 'active-section' : ''}
            onClick={() => onUpdateActiveSection('skills')}
          >
            Skills
          </Nav.Link>
          <span>
            <div className='socials-icons'>
              <a
                href='https://github.com/preschmf'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={githubLogo} alt='github' />
              </a>
              <a
                href='https://linkedin.com/in/michael-presch-96832b35b'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={linkedinLogo} alt='linkedin' />
              </a>
            </div>
          </span>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default SiteNavBar
