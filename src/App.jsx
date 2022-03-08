import React from 'react'
import  Header from './components/header/Header'
import Nav from './components/nav/Nav' 
import About from './components/about/About' 
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimoniol from './components/testimoniols/Testimoniol'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'




function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimoniol />
      <Contact />
      <Footer />

      
    </>
 
  )
}

export default App