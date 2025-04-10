import './SkillLogo.css'

interface SkillLogoProps {
  source: string
  alt: string
  title: string
}

const SkillLogo: React.FC<SkillLogoProps> = ({ source, alt, title }) => {
  return (
    <div className='skill-logo'>
      <img src={source} alt={alt} />
      <h3>{title}</h3>
    </div>
  )
}

export default SkillLogo
