import React from 'react'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Proyectos from '@/components/Proyectos'
const index = () => {
  return (
    <div className=" bg-blue-500 h-screen"> 
      <div>
       <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Proyectos/>
      </div>
    </div>
  )
}

export default index