import React from 'react'
import './experience.css'
import {BsPatchCheck} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience-container'>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheck className="experience_icon" />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>

              </div>
              
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_icon" />
              <div>
                <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_icon" />
              <div>
                <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_icon" />
              <div>
                <h4>Bulma</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_icon" />
              <div>
                <h4>Figma</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_icon" />
              <div>
                 <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_icon" />
              <div>
                 <h4>Angular</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_icon" />
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
          
          </div>
        
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          
          <article className="experience_details">
              <BsPatchCheck className="experience_icon" />
            <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
          </article>
          
          <article className="experience_details">
              <BsPatchCheck className="experience_icon" />
            <div>
              <h4>SQL/postgress</h4>
              <small className='text-light'>Intermediate</small>
              </div>
          </article>
          
          <article className="experience_details">
              <BsPatchCheck className="experience_icon" />
            <div>
              <h4>C</h4>
              <small className='text-light'>Basics</small>
              </div>
            </article>

        </div>
      </div>
    </section>
  )
}

export default Experience