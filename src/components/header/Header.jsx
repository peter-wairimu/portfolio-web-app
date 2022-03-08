import React from 'react'
import './header.css'
import CTA from './CTA'
import Peter from '../../assets/my_image.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hi I'm</h5>
        <h1>Peter Wairimu</h1>
        <h5 className='text-light'>I'm a Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="image">
          <img src={Peter} alt="Peter Wairimu" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
        
      </div>

      </header>
  )
}

export default Header