import React from 'react'
import './about.css'
import { FaReact } from 'react-icons/fa'
import { FaJava } from 'react-icons/fa'
import { useState } from 'react'
import { GiBrain } from 'react-icons/gi'

const About = ({ about, skills }) => {
  const [content, setContent] = useState('None');
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className='container my-4'>
        <p className='col offset-2 offset-md-0 text-wrap text-light'>
          {about}
        </p>
      </div>
      <div className="container">
        <div className='row'>

          <div className='col-4'>
            <div className='about__card'
            onMouseEnter={() => setContent('Languages')}
            onMouseLeave={() => setContent('None')}>
              <FaJava className='about__icon' />
              <h3 className='fnt-3 text-light'>Programming Languages</h3>
              {content === 'Languages' && 
                <div className='row'>
                  {skills.programming_languages.map((language) =>
                  <div key={language} className='fnt-2 my-1 col-6 text-info card__element'>
                    *{language}
                  </div>
                  )}
                </div>
                }
            </div>
          </div>

          <div className='col-4'>
            <div className='about__card' 
            onMouseEnter={() => setContent('Frameworks')}
            onMouseLeave={() => setContent('None')}>
            <FaReact className='about__icon' />
              <h3 className='fnt-3 text-light'>Frameworks / Dev Tools</h3>
              {content === 'Frameworks' && 
                <div className='row'>
                  {skills.frameworks.map((language) =>
                  <div key={language} className='fnt-2 my-1 col-6 text-info card__element'>
                    *{language}
                  </div>
                  )}
                </div>
              }
            </div>
          </div>

          <div className='col-4'>
            <div className='about__card'
            onMouseEnter={() => setContent('Other')}
            onMouseLeave={() => setContent('None')}>
              <GiBrain className='about__icon' />
              <h3 className='fnt-3 text-light'>Skills / Concepts</h3>
              {content === 'Other' && 
                <div className='row'>
                  {skills.concepts.map((language) =>
                  <div key={language} className='fnt-2 my-1 col-6 text-info card__element'>
                    *{language}
                  </div>
                  )}
                </div>
              }
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About