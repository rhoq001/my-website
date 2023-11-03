import Nav from '../nav/Nav'
import About from '../about/About'
import Experience from '../experience/Experience'
import Portfolio from '../portfolio/Portfolio'
import Contact from '../contact/Contact'
import Header from '../header/Header'

import React, { useState } from 'react';

const Screen = ({ resume }) => {
    const [currScreen, setCurrScreen] = useState('home')

    const switchScreen = (screenName) => {
        setCurrScreen(screenName)
    }

    return (
    <div className='screen'>
        <Nav switchScreen={switchScreen}/>
        {
        (currScreen === 'home' ?
        <Header />
        :
        (currScreen === 'about' ?
        <About about={resume.about} skills={resume.skills}/>
        :
        (currScreen === 'experience' ?
        <Experience experience={resume.experience} education={resume.education} certs={resume.certs} />
        :
        (currScreen === 'portfolio' ?
        <Portfolio projects={resume.projects}/>
        :
        (currScreen === 'contact' ?
        <Contact contacts={resume.contacts}/>
        :
        <div></div>
        )))))
        }
    </div>
    )
}

export default Screen