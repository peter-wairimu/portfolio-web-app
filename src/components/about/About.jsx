import React from 'react'
import './about.css'
import Peter from '../../assets/my.png'
import {FaUsers, FaAward} from 'react-icons/fa'
import {GiOpenBook} from 'react-icons/gi'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_image">
            <img src={Peter} alt="profile_pic" />
          </div>  
        </div>
      
        <div className="about_content">
        
          <div className="about_cards">
            <article className="about_card">
              <FaAward  className='about_icon'/>
              <h5>Experience</h5>
              <small>2 years</small>
            </article>

            <article className="about_card">
              <FaUsers  className='about_icon'/>
              <h5>Clients</h5>
              <small>100+</small>
            </article>

            <article className="about_card">
              <GiOpenBook  className='about_icon'/>
              <h5>Projects</h5>
              <small>30+ projects Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere ullam et veniam, nam, nostrum tenetur minus distinctio iusto temporibus excepturi deleniti. Sed veniam velit obcaecati voluptatibus repellat maiores, quasi sequi nemo cumque numquam doloremque nihil quas libero perferendis! Illum, eum!
          </p>
          <a href="#contact" className='btn'>Lets Talk</a>
        </div>
      </div>

    
    </section>
  )
}

export default About