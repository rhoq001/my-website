import React from 'react'
import './nav.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { HiEmojiHappy } from 'react-icons/hi'
import { AiFillFolderOpen } from 'react-icons/ai'
import { GiCheckboxTree } from 'react-icons/gi'
import { AiTwotonePhone } from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [currNav, setCurrNav] = useState('home')
  const [hover, setHover] = useState('Home')
  
  return (
    <div className='fixed-bottom col-6 offset-3'>
      <nav className='navbar'>
        <h4 className={hover === '' ? '' : 'text-info currNav'}>{hover}</h4>
        <a href="#home" className={currNav === "home" ? "active" : ""}
        onClick={() => setCurrNav("home")} 
        onMouseEnter={() => setHover('Home')}
        onMouseLeave={() => setHover('')}>
          <AiTwotoneHome />
        </a>
        <a href="#about" className={currNav === "about" ? "active" : ""}
        onClick={() => setCurrNav("about")} 
        onMouseEnter={() => setHover('About Me')}
        onMouseLeave={() => setHover('')}>
          <HiEmojiHappy />
        </a>
        <a href="#experience" className={currNav === "experience" ? "active" : ""}
        onClick={() => setCurrNav("experience")} 
        onMouseEnter={() => setHover('Timeline')}
        onMouseLeave={() => setHover('')}>
          <GiCheckboxTree />
        </a>
        <a href="#portfolio" className={currNav === "portfolio" ? "active" : ""}
        onClick={() => setCurrNav("portfolio")} 
        onMouseEnter={() => setHover('Portfolio')}
        onMouseLeave={() => setHover('')}>
          <AiFillFolderOpen />
        </a>
        <a href="#contact" className={currNav === "contact" ? "active" : ""}
        onClick={() => setCurrNav("contact")} 
        onMouseEnter={() => setHover('Contacts')}
        onMouseLeave={() => setHover('')}>
          <AiTwotonePhone />
        </a>
      </nav>
    </div>
  )
}

export default Nav