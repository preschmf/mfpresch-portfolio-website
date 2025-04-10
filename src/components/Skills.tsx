import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card'
import SkillLogo from './SkillLogo'
import './Skills.css'

const Skills = () => {
  return (
      <div className='skills-container'>
        <h1 className='skills-header'>Skills</h1>
        <Card className='skills-card' id='skills'>
          <Card.Body>
            <Tabs className='skills-tabs'>
              <Tab eventKey='Front End' title='Front End'>
                <div className='skills-content'>
                  <div className='skills-layout'>
                    <SkillLogo
                      source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
                      alt='The logo icon for react'
                      title='React'
                    />
                    <SkillLogo
                      source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
                      alt='The logo icon for HTML 5'
                      title='HTML 5'
                    />
                    <SkillLogo
                      source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'
                      alt='The logo icon for CSS3'
                      title='CSS 3'
                    />
                    <SkillLogo
                      source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg'
                      alt='The logo icon for GitHub'
                      title='GitHub'
                    />
                    <SkillLogo
                      source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
                      alt='The logo icon for NPM'
                      title='NPM'
                    />
                    <SkillLogo
                      source='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'
                      alt='The logo icon for NodeJS'
                      title='Node JS'
                    />
                  </div>
                </div>
              </Tab>
              <Tab eventKey='Back End' title='Back End'>
                Tab content for Back End
              </Tab>
              <Tab eventKey='CI/CD' title='CI/CD'>
                Tab content for CI/CD
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </div>
  )
}

export default Skills
