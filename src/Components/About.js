import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
          Hello! I'm <b>Abhishek Chodavarapu</b>, a passionate and driven <b>Software and AI Engineer</b> currently pursuing my <b>Bachelor's degree in Artificial Intelligence</b> at Mahindra University. My journey in technology is fueled by a keen interest in transforming raw ideas into impactful solutions.<br /><br />
            As an intern at <b>Kenexoft Technologies</b>, I contribute to the development and optimization of <b>Applicant Tracking Systems (ATS)</b>, leveraging <b>MySQL</b> and <b>PHP</b> for efficient database management and server-side scripting. My hands-on experience in real-world projects has honed my skills in <b>problem-solving</b> and <b>software development</b>.<br /><br />
            I have developed various projects like <b>GeniePost</b>, an advanced email application, <b>UniBidHub</b>, an intuitive auction site for university students, and a <b>Tic-Tac-Toe game</b> with an AI opponent. These projects showcase my expertise in modern web technologies such as <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React</b>, <b>Node.js</b>, and <b>MongoDB</b>, and reflect my commitment to creating responsive and user-friendly applications.<br /><br />
            Apart from coding, I love playing <b>chess</b>, <b>cricket</b>, and watching <b>sports</b>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Npm' />
        <Skills skill='Python' />
        
        
        
      </div>
    </>
  )
}

export default About