import React from 'react'
import RESUME from '../../assets/resume.jpg'

const CTA = () => {
  const getResume = () => {
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
  }
  return (
    <div className=''>
        <div onClick={getResume} className='btn btn-dark'>
          Download Resume
          <img className='img-fluid h-50' src={RESUME} alt="resume" />
        </div>
    </div>
  )
}

export default CTA