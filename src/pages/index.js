import React from 'react'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Proyectos from '@/components/Proyectos'
import ContactForm from '@/components/ContactForm'
const index = () => {
  return (
    <div className=" bg-blue-500 h-screen"> 
      <div>
       <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Proyectos/>
        <ContactForm/>
      </div>
    </div>
  )
}

export default index