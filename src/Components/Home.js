import React from 'react';
import Lottie from 'lottie-react';
import SpaceBoy from '../LottieFiles/SpaceBoy.json';
import Typed from './Typed.js';
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { FaChess } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='container'>
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Abhishek Chodavarapu</b></h1>
          <Typed />   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I am currently a Bachelor of Technology student specializing in Artificial Intelligence at <b>Mahindra University</b> with a passion for developing intelligent solutions that enhance user experiences. My education and hands-on experience have equipped me with a strong foundation in AI and software engineering. I want to do work that challenges me as a developer & work that I can be proud of.<br /><br />
            I'm fluent in <b>C++</b> and have a solid understanding of <b>Data Structures and Algorithms (DSA)</b>. I also know a bit of <b>Python</b> and am working on a few projects, including a project focused on the backend.<br /><br />
            Also, I love <b>chess</b> <FaChess style={{ scale: "1.5", rotate: "15deg", marginLeft: "5px" }} />   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="Avatar" />
        </Tilt>
      </div>
    </div>
  );
}

export default Home;
