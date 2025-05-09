import ScrollAnimation from 'react-animate-on-scroll'
import Contact from './Contact'
import './Home.css'
import './Contact.css'

const Home = () => {
  return (
    <div className='home-container' id='home'>
      <div className='home-content'>
        <div className='typewriter'>
          <h1>Michael Presch</h1>
        </div>
        <ScrollAnimation animateIn='fadeInUp'>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I have over 7 years
            of experience as a software engineer in both modern front-end and
            back-end technologies, primarily utilizing JavaScript, C#, NoSQL DBs, SQL DBs
            and AWS. I look to produce high-quality, reusable code. My expertise
            extends to maintaining robust CI/CD pipelines using tools like
            Jenkins and GitHub Actions, as well as implementing automated
            testing tools such as Jest and Storybook.
          </p>
          <Contact />
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Home
