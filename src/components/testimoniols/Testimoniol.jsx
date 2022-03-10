import React from 'react'
import './testimonial.css'
import chege from '../../assets/person1.png'
import chege1 from '../../assets/person2.png'
import chege2 from '../../assets/person3.png'
import chege3 from '../../assets/person4.png'


const data = [
  {
    id: 1,
    image: chege,
    name: 'Grace Nyokabi',
    description: 'Quality is remembered long after the price is forgotten.',
  },
  {
    id: 2,
    image: chege1,
    name: 'Aisha Aisha',
    description: 'When you help others feel important, you help yourself feel important too',
  },
  {
    id: 3,
    image: chege2,
    name: 'John Doe',
    description: 'The first step in exceeding your customer’s expectations is to know those expectations',
  },
  {
    id: 4,
    image: chege3,
    name: 'Shantel Wairimu',
    description: 'A satisfied customer is the best business strategy',
  },
]
    
    

const Testimoniol = () => {
  return (
    <section id='testimoniols'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimoniols_container">
      {
        data.map(({ id, image, name, description }) => {
          return (
            <article key={id} className='testimonial'>
              <div className="testimonial_image">
                <img src={image} alt={name} />
              </div>
              <div className="testimonial_text">
              <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </article>
          )
        })
        }
      </div>


     </section>
  )
}

export default Testimoniol