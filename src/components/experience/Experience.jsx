import { useState } from 'react';
import './experience.css';

const Experience = ({ experience, education, certs }) => {
  const [expr, setExpr] = useState('')

  const noProp = (event) => {
    event.stopPropagation();
  }

  const getResume = (event) => {
    fetch('https://s3.amazonaws.com/raqtanhoq-resume/Raqtan_Hoq_Resume.pdf')
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Raqtan_Hoq_Resume.pdf');
      document.body.appendChild(link);
      link.click();
    });
    event.stopPropagation();
  }

  const getTranscript = (event) => {
    fetch('https://s3.amazonaws.com/raqtanhoq-resume/transcript.pdf')
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'transcript.pdf');
      document.body.appendChild(link);
      link.click();
    });
    event.stopPropagation();
  }

  const display = () => {
    if(expr === 'work'){
      return (
        experience.map((experience) => 
        <div key={experience.id} className='experience_card mx-5 row my-4' onClick={() => handleClick('')}>
          <div className='col-6 fnt-3 text-light my-1'>
            {experience.job} | {experience.client}
          </div>
          <div className='col-6 text-end fnt-3 text-light my-1'>
            {experience.dates}
          </div>
          <div className='col-6 fnt-3 text-light my-1'>
            {experience.role}
          </div>
          <div className='col-6 fnt-3 text-end text-light my-1'>
            {experience.location}
          </div>
          <div className='col-12 text-center fnt-3 text-light my-3'>
            Accomplishments
          </div>
          {experience.description.map((point) => 
            <div key={point} className='col-10 offset-1 my-1 fnt-2 text-info'>
              *{point}
            </div>
          )}
        </div>)
      )
    }
    else if(expr === 'edu'){
      return (
        <div className='experience_card row my-4' onClick={() => handleClick('')}>
          <div className='col-6 fnt-3 text-light'>
            {education.uni}
          </div>
          <div className='col-6 text-end fnt-3 text-light'>
            {education.dates}
          </div>
          <div className='col-6 fnt-3 text-light'>
            {education.degree}
          </div>
          <div className='col-6 text-end fnt-3 text-light'>
            {education.location}
          </div>
          <div className='col-12 fnt-3 text-light my-3'>
            GPA: {education.gpa}
          </div>
          <div className='col-12 fnt-3 text-light my-3'>
            Major GPA: {education.msngpa}
          </div>
          <div className='col-12 text-center fnt-3 text-light my-3'>
            Completed Coursework:
          </div>
          {education.completed_coursework.map((point) => 
            <div key={point} className='col-6 my-1 fnt-2 text-info'>
              -{point}
            </div>
          )}
          <div className='col-12 text-center fnt-3 text-light my-3'>
            Organizations:
          </div>
          {education.orgs.map((point) => 
            <div key={point} className='col-6 my-1 fnt-2 text-info'>
              -{point}
            </div>
          )}
          <div className='col-md-1 offset-md-10 offset-9 col-2 btn btn-dark text-center fnt-2 text-light' onClick={getTranscript}>
            Download Transcript
          </div>
        </div>
      )
    }
    else if(expr === 'cert'){
      return (
        certs.map((cert) => 
          <div key={cert.id} className='experience_card row my-4' onClick={() => handleClick('')}>
            <div className='col-4 fnt-3 text-light'>
              {cert.name}
            </div>
            <div className='col-4 offset-4 fnt-3 text-light'>
              {cert.dates}
            </div>
            <div className='col-12 text-center fnt-3 text-light my-3'>
              Coursework:
            </div>
            {cert.description.map((des) => 
            <div key={des} className='col-10 offset-1 my-1 fnt-2 text-info'>
              *{des}
            </div>
            )}
            <a href={cert.link} onClick={noProp} className='col-md-1 offset-md-10 offset-9 col-2 btn btn-dark text-center fnt-2 text-light'>
              Certification Link
            </a>
          </div>
        )
      )
    }
  }

  const handleClick = (id) => {
    setExpr(id);
  }

  return (
    <section id="experience">
      <h2 className='text-info my-3'>Experience/Skills</h2>
      {expr === '' ? 
      <div className='container'>
        <div className='experience_card row my-5' onClick={() => handleClick('work')}>
          <div className='text-light col-4 fnt-4 offset-4 text-center'>Experience</div>
          <div className='text-info col-4 fnt-1 offset-4 text-center'>Software Engineer</div>
          <div className='text-info col-4 fnt-1 offset-4 text-center'>3 Years Professional Experience</div>
          <div className='text-light col-4 fnt-1 offset-8 text-center'>Click to Expand</div>
          <div className='col-md-3 col-4 btn btn-dark text-center fnt-1 text-light my-4' onClick={getResume}>
            Download Resume
          </div>
        </div>
        <div className='experience_card row my-5' onClick={() => handleClick('edu')}>
          <div className='text-light col-4 fnt-4 offset-4 text-center'>Education</div>
          <div className='text-info col-4 fnt-1 offset-4 text-center'>University of California, Riverside</div>
          <div className='text-info col-4 fnt-1 offset-4 text-center'>Bachelor of Science, Computer Science</div>
          <div className='text-light col-4 fnt-1 offset-8 text-center'>Click to Expand</div>
        </div>
        <div className='experience_card row my-5' onClick={() => handleClick('cert')}>
          <div className='text-light col-4 fnt-4 offset-4 text-center'>Certifications</div>
          <div className='text-info col-4 fnt-1 offset-4 text-center'>AWS Solutions Architect - Associate (SAA-C03)</div>
          <div className='text-info col-4 fnt-1 offset-4 text-center'>Javascript Algorithms and Data Structures</div>
          <div className='text-light col-4 fnt-1 offset-8 text-center'>Click to Expand</div>
        </div>
      </div>
      :
      display()}
    </section>
  )
}

export default Experience