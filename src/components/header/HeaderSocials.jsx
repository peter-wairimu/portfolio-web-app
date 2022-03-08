import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {BsFacebook,BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
      <div className='header_socials'>
          <a href="https://www.linkedin.com/in/peter-chege-b0424319a/" target='_blank'><SiLinkedin /></a>
          <a href="https://github.com/peter-wairimu" target='_blank'><BsGithub /></a>
          <a href="https://www.facebook.com/" target='_blank'><BsFacebook /></a>
          
    </div>
  )
}

export default HeaderSocials