import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './ProjectCard.css'

interface ProjectCardProps {
    title: string;
    description: string;
    projectLink: string;
    splashImage: string;
  }

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, projectLink, splashImage }) => {
  return (
    <Card className='project-card'>
      <Card.Img className='project-image' variant='top' src={splashImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant='tertiary' href={projectLink} target='_blank'>
          View Project
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard
