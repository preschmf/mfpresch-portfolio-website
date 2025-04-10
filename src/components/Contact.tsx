import './Contact.css'
import { Button } from 'react-bootstrap'

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
          <Button variant='tertiary'>My Resume</Button>
        </div>
      </div>
  )
}

export default Contact
