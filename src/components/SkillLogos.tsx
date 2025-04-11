import './SkillLogos.css'

export interface SkillLogoProps {
  source: string,
  title?: string,
  whiteShift?: boolean
}

interface LogoDataArray {
  logoDataArray: SkillLogoProps[]
}

const SkillLogo: React.FC<SkillLogoProps> = ({ source, title, whiteShift }) => {
  return (
    <div className={'skill-logo'}>
      <img className={whiteShift ? 'white-shift': ''} src={source} />
      <h3>{title}</h3>
    </div>
  )
}

const SkillLogos: React.FC<LogoDataArray> = ({ logoDataArray }) => {
  return (
    <>
      {logoDataArray.map((logoData: SkillLogoProps) => {
        return <SkillLogo source={logoData.source} title={logoData.title} whiteShift={logoData.whiteShift} />
      })}
    </>
  )
}

export default SkillLogos
