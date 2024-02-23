import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle='Our Program' title='What we offer'/>
        <Programs />
        <About />
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus />
        <Title subtitle='Testimonials' title='What our students say about us'/>
        <Testimonials />
        <Title subtitle='Contact Us' title='Get In Touch With Us'/>
        <Contact />
      </div>
    </div>
  )
}

export default App

