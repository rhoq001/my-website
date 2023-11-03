import React, { useState } from 'react';
import './portfolio.css';


const Portfolio = ({ projects }) => {
  const [currProj, setCurrProj] = useState('')
  const [transparent, setTransparent] = useState(false)

  const noProp = (event) => {
    event.stopPropagation();
  }

  const handleClick = (id) => {
    setTransparent(true);
    setCurrProj(id);
    setTimeout(() => {
      setTransparent(false);
    }, 100);
  };

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>


      <div className='container'><div className={currProj === '' ? 
      'row portfolio__container' 
      :'row portfolio__container__full'}>
        {projects.filter((project) => (project.id === currProj)).map((project) =>
        <div key={project.id} onClick={() => handleClick('')} className={!transparent && currProj === project.id ? 'portfolio__item col-md-12 col-10 offset-1 offset-md-0' : 'portfolio__item col-md-12 col-10 offset-1 offset-md-0 hide'}>
          {currProj === project.id &&
          <>
            <div className='row'>
              <img className='col-12 p-imageL' src={project.img} alt=''/>
            </div>
            <div className='row portfolio__expanded'>
              <div className='col-md-4 col-6'>
                <h3 className='text-light fnt-3'>About Project</h3>
                {project.about.map((point) => 
                  <div key={point.id} className='text-info fnt-3 list'>
                    *{point.str}
                  </div>
                )}
              </div>
              <div className='col-md-4 col-6'>
                <h3 className='text-light fnt-3'>How it works</h3>
                <div className='text-info fnt-3'>{project.how_works}</div>
              </div>
              <div className='col-md-4 col-12'>
                <h3 className='text-light fnt-3'>Problems encountered/learned</h3>
                {project.problems_learned.map((point) => 
                <div key={point.id} className='text-info fnt-3 list'>
                  *{point.str}
                </div>
                )}
              </div>
            </div>
          </>
          }
        </div>)}
        {projects.map((project) => 
        <div key={project.id} onClick={() => handleClick(project.id)} className={!transparent && currProj === '' ? 'col-md-4 col-6' : 'col-md-4 col-6 hide'}>
          {currProj === '' &&
          <div className='container portfolio__item my-1'>
            <div className='row'>
              <img className='col p-image img-fluid' src={project.img} alt=''/>
            </div>
            <div className='row'>
              <h3 className='col-12 fnt-3 text-info'>{project.name} (Click to Expand)</h3>
              <a onClick={noProp} href={project.github} className='col-4 fnt-2 btn btn-primary' target='blank'>Github</a>
              {!(project.demo === '') && <a onClick={noProp} href={project.demo} className='col-4 fnt-2 mx-1 btn btn-primary' target='blank'>Demo</a>}
            </div>
          </div>
          }
        </div>)
        }
      </div></div>
    </section>
  )
}

export default Portfolio