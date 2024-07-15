import React from 'react';
import ProjectBox from './ProjectBox';
import UniBidHub from '../images/UniBidHub.jpg';

import GeniePost from '../images/GeniePost.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={GeniePost} projectName="GeniePost" />
        <ProjectBox projectPhoto={UniBidHub} projectName="UniBidHub" />
       
      </div>

    </div>
  )
}

export default Projects