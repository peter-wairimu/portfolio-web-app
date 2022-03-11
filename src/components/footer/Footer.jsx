import React from 'react'
import './footer.css'
import {SiLinkedin} from 'react-icons/si'
import {BsFacebook,BsGithub} from 'react-icons/bs'

const Footer = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    
    <footer className="footer">
      <div className="logo">
         <a href="#">Peter Wairimu</a>
      </div>
     
      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimoniols">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/peter-chege-b0424319a/" target='_blank'><SiLinkedin /></a>
          <a href="https://github.com/peter-wairimu" target='_blank'><BsGithub /></a>
          <a href="https://www.facebook.com/" target='_blank'><BsFacebook /></a>
      </div>
      <div className="footer_copy">
      <a href="#">&copy; { date}</a>
      </div>
      </footer>

  )
  
}

export default Footer