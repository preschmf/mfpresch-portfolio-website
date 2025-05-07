import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './ProjectCard.css'

interface ProjectCardProps {
  title: string
  description: string
  repoLink: string
  splashImage: string
  projectLink?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  repoLink,
  projectLink,
  splashImage,
}) => {
  return (
    <Card className='project-card'>
      <Card.Img className='card-image' variant='top' src={splashImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='card-text'>{description}</Card.Text>
        <div className='link-buttons'>
          <Button variant='tertiary' href={repoLink} target='_blank'>
            View Code
          </Button>
          {projectLink && (
            <Button variant='tertiary' href={projectLink} target='_blank'>
              View Project
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard
