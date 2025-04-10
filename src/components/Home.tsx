import ScrollAnimation from 'react-animate-on-scroll'

import './Home.css'

const Home = () => {
  return (
    <div className='home-container' id='home'>
      <div className='home-content'>
        <div className='typewriter'>
          <h1>Michael Presch</h1>
        </div>
        <ScrollAnimation animateIn='fadeIn'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Home
