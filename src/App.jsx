import React from 'react'


import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import RESUME from './resume/resume.jsx'

const App = () => {
  const resume = RESUME;

  return (
    <>
      <Header />
      <Nav />
      <About about={resume.about} skills={resume.skills}/>
      <Experience experience={resume.experience} education={resume.education} certs={resume.certs} />
      <Portfolio projects={resume.projects}/>
      <Contact contacts={resume.contacts}/>
    </>
  )
}

export default App