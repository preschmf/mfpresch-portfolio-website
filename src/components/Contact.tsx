import './Contact.css'
import { Button } from 'react-bootstrap'
const resumeGoogleDriveLink = 'https://docs.google.com/document/d/1bctKVQMthDKohA0wW6acLlDY_mhhGSWz/edit?usp=sharing&ouid=112284854934224240639&rtpof=true&sd=true'

const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
      <div className='button-container'>
        <Button
          variant='tertiary'
          onClick={() => (window.location.href = 'mailto:preschmf@gmail.com')}
        >
          Email Me
        </Button>
        <Button variant='tertiary' href={resumeGoogleDriveLink} target='_blank'>My Resume</Button>
      </div>
    </div>
  )
}

export default Contact
