import ProjectCard from './ProjectCard'
import gitHubTeamsApiImage from '../assets/images/github_teams_logo.jpg'
import taskTrackerImage from '../assets/images/task_tracker.jpg'
import portfolioSiteImage from '../assets/images/portfolio_site.jpg'
import './Projects.css'

const Projects = () => {
  return (
    <>
      <div className='projects-container' id='projects'>
        <h1 className='projects-header'>Projects</h1>
        <div className='project-card-container'>
        <ProjectCard
          title={'PR Alerts App'}
          description={
            'Node.js and Express tool that sends alerts for PR updates.'
          }
          projectLink={'https://github.com/preschmf/preschmf-pr-alerts'}
          splashImage={gitHubTeamsApiImage}
        />

        <ProjectCard
          title={'Task Tracker App'}
          description={
            'Full-stack task tracker app made with React, Fastify, an SQLite DB, and OAuth 2.0 for authentication.'
          }
          projectLink={'https://github.com/preschmf/preschmf-task-tracker'}
          splashImage={taskTrackerImage}
        />

        <ProjectCard
          title={'Portfolio Website'}
          description={
            'Portfolio website created with React, CSS3, and deployed to netlify.'
          }
          projectLink={'https://github.com/preschmf/preschmf-portfolio-site'}
          splashImage={portfolioSiteImage}
        />
        </div>
      </div>
    </>
  )
}

export default Projects
