import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Do</h5>  
      <h2>My Services</h2>
      <div className='container services-container'>
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Designer</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className="service_icon" />
              <p>
                I design and develop user-friendly and intuitive interfaces for web and mobile applications.
              </p>
            </li>
            <li>
              <BsCheck className="service_icon" />
              <p>
                I design and develop user-friendly and intuitive interfaces for web and mobile applications.
              </p>
            </li>
            <li>
              <BsCheck className="service_icon" />
              <p>
                I design and develop user-friendly and intuitive interfaces for web and mobile applications.
              </p>
            </li>
            <li>
              <BsCheck className="service_icon" />
              <p>
                I design and develop user-friendly and intuitive interfaces for web and mobile applications.
              </p>
            </li>

          </ul>

        </article>

          <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsCheck className="service_icon" />
              <p>
                I design and develop user-friendly and intuitive interfaces for web and mobile applications.
              </p>
            </li>
            <li>
              <BsCheck className="service_icon" />
              <p>
                I design and develop user-friendly and intuitive interfaces for web and mobile applications.
              </p>
            </li>
            <li>
              <BsCheck className="service_icon" />
              <p>
                I design and develop user-friendly and intuitive interfaces for web and mobile applications.
              </p>
            </li>
            <li>
              <BsCheck className="service_icon" />
              <p>
                I design and develop user-friendly and intuitive interfaces for web and mobile applications.
              </p>
            </li>

          </ul>

        </article>
        
       </div>
    
    </section>
  )
}

export default Services