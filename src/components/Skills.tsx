import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card'
import SkillLogos, { SkillLogoProps } from './SkillLogos'
import ScrollAnimation from 'react-animate-on-scroll'
import './Skills.css'

const frontEndSkills: SkillLogoProps[] = [
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-plain-wordmark.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-plain-wordmark.svg',
    whiteShift: true,
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
    title: 'Redux',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
    title: 'Vite',
  },
]

const backEndSkills = [
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg',
    whiteShift: true,
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-plain-wordmark.svg',
    whiteShift: true,
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-plain-wordmark.svg',
    whiteShift: true,
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-plain.svg',
    title: 'DynamoDB',
    whiteShift: true,
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-plain.svg',
    title: 'VB.NET',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-plain-wordmark.svg',
    whiteShift: true,
  },
]

const cloudCiCdSkills = [
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-line.svg',
    title: 'Jenkins',
    whiteShift: true,
  },
  {
    source:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-plain.svg',
    title: 'GitHub Actions',
  },
]

const Skills = () => {
  return (
    <div className='skills-container' id='skills'>
      <ScrollAnimation animateIn='fadeIn'>
        <div className='skills-content'>
          <h1 className='skills-header'>Skills</h1>
          <Card className='skills-card'>
            <Card.Body>
              <Tabs className='skills-tabs'>
                <Tab eventKey='Front End' title='Front End'>
                  <div className='skills-tab-content'>
                    <div className='skills-layout'>
                      <SkillLogos logoDataArray={frontEndSkills} />
                    </div>
                  </div>
                </Tab>
                <Tab eventKey='Back End' title='Back End'>
                  <div className='skills-tab-content'>
                    <div className='skills-layout'>
                      <SkillLogos logoDataArray={backEndSkills} />
                    </div>
                  </div>
                </Tab>
                <Tab eventKey='Cloud and CI/CD' title='Cloud and CI/CD'>
                  <div className='skills-tab-content'>
                    <div className='skills-layout'>
                      <SkillLogos logoDataArray={cloudCiCdSkills} />
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Skills
