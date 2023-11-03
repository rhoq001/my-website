import React from 'react'
import {BsGithub} from 'react-icons/bs'

import CTA from './CTA'
import ME from '../../assets/me.png'
import './header.css'

const Header = () => {
  
  return (
    <section id='home'>
      <header>
        <div className="container">
          <h5 className="row"><div className='col text-light text-center'>Hello I'm</div></h5>
          <h1 className="row"><div className='col text-light text-center'>Raqtan Hoq</div></h1>
          <h5 className="row"><div className='col text-light text-center'>Software Engineer</div></h5>
          <div className='container my-4'>
            <div className='row'>
              <div className='col-md-6 col-sm-12'>
                <div className='row'>
                  <a href='https://www.linkedin.com/in/raqtan-hoq-692264173/' className='col-md-4 col-5 offset-0 offset-md-4 border rounded-pill border-info border-3 bg-primary-light my-2' >
                    <img src={ME} className="img-fluid h-75 p-2 mx-2" alt="Description" /><div className="text-wrap text-center text-light fnt-3 p-1">LinkedIn</div>
                  </a>
                  <a href='https://github.com/rhoq001/' className='col-md-4 col-5 offset-2 offset-md-4 border rounded-pill border-info border-3 bg-primary-green my-2'>
                    <BsGithub className='w-100 p-2 h-75 icon-dark p-2'/><div className='text-wrap text-center text-dark fnt-3 p-1'>Github</div>
                  </a>
                </div>
              </div>
              <div className='col-6 offset-md-0 offset-3'>
                <CTA />
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Header