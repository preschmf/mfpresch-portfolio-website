import ProjectCard from './ProjectCard'
import gitHubTeamsApiImage from '../assets/images/github_teams_logo.jpg'
import taskTrackerImage from '../assets/images/task_tracker.jpg'
import portfolioSiteImage from '../assets/images/portfolio_site.jpg'
import ScrollAnimation from 'react-animate-on-scroll'
import './Projects.css'

const Projects = () => {
  return (
    <div className='projects-container' id='projects'>
      <ScrollAnimation animateIn='fadeIn'>
        <div className='projects-content'>
          <h1 className='projects-header'>Projects</h1>
          <div className='project-card-container'>
            <ProjectCard
              title={'PR Alerts App'}
              description={
                'Node.js and Express tool that sends alerts using the Microsoft Graph API, and the GitHub Enterprise API.'
              }
              repoLink={'https://github.com/preschmf/preschmf-pr-alerts'}
              splashImage={gitHubTeamsApiImage}
            />

            <ProjectCard
              title={'Task Tracker App'}
              description={
                'Full-stack task tracker app made with React, Fastify, an SQLite DB, and OAuth 2.0 for authentication.'
              }
              repoLink={'https://github.com/preschmf/preschmf-task-tracker'}
              projectLink={'https://preschmf-task-tracker.up.railway.app/'}
              splashImage={taskTrackerImage}
            />

            <ProjectCard
              title={'Portfolio Website'}
              description={
                'Portfolio website created with React, CSS3, and deployed to netlify.'
              }
              repoLink={
                'https://github.com/preschmf/mfpresch-portfolio-website'
              }
              splashImage={portfolioSiteImage}
            />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Projects
