import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {BsBookHalf} from 'react-icons/bs'
import {BsAward} from 'react-icons/bs'
import { MdMiscellaneousServices } from 'react-icons/md'
import {MdContactPhone} from 'react-icons/md'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="" className={activeNav === "#" ? 'active' : ''}><ImHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><BsBookHalf /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BsAward /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active': ''}><MdMiscellaneousServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><MdContactPhone /></a>
    </nav>
  )
}

export default Nav