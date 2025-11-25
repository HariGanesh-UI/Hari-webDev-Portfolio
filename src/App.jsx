import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar/navbar'
import { Home } from './components/Home/home'
import { About } from './components/about/about'
import { Techstack } from './components/Tech-stack/tech-stack'
import { Projects } from './components/Projects/projects'
import { Contact } from './components/Contact/contact-me'
import { Footer } from './components/Footer/footer'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Techstack />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
