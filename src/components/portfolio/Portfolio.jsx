import React from 'react'
import './portfolio.css'
import chege from '../../assets/project2.png'
import chege2 from '../../assets/project1.png'
import chege3 from '../../assets/project3.png'

const data = [
{
  id: 1,
  image: chege,
  title: 'Movie API',
  description: 'A simple movie API that allows you to search for movies and get their details.',
  github: 'https://github.com/peter-wairimu/watchlist',
  demo: 'https://centiment.herokuapp.com/'
  }, 
  {
    id: 2,
    image: chege2,
    title: 'Shoppmtaani',
    description: 'An Angular app that allows you to search for products and get their details and shop.',
    github: 'https://github.com/peter-wairimu/shopmtaani',
    demo: "https://cocky-lovelace-fde55f.netlify.app/"
  },
  {
    id: 3,
    image: chege3,
    title: 'Easy-Shooping',
    description: 'A React commerce js app that allows users to shop products and get them delivered in different locations.',
    github: 'https://github.com/peter-wairimu/react-ecomerce',
    demo: "https://hardcore-gates-9d1373.netlify.app/"
  }


  


]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, description, github, demo }) => {
            return (
        <article key={id} className='portfolio_item'>
        <div className="portfolio_image"> 
          <img src={image} alt={title} />  
        </div>
                <h3>{title}</h3>
                <p>{description }</p>
          <div className="portfolio-btn">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn' target='_blank'>Live Demo</a>
          </div>
           </article>

            )
          })
      }

      
      </div>
    </section>
  )
}

export default Portfolio