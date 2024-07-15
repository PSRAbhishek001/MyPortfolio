import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Abhishek Chodavarapu</h4>
      <h4>Copyright &copy; 2024 PSR</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Abhishek1027" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/abhishek-chodavarapu/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:abhishekchodavarapu22@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/abhishekchodavarapu22/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer