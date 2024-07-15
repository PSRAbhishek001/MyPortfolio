import { CgCPlusPlus } from 'react-icons/cg';
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaPython } from 'react-icons/fa';
import { DiJavascript1, DiNodejs } from 'react-icons/di';
import { SiExpress, SiMongodb, SiDatabricks } from 'react-icons/si';

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Python:<FaPython />,
        
        
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
