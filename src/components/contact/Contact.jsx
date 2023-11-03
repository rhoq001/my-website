import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import { useRef } from 'react';
import { RateLimiterMemory } from "rate-limiter-flexible";
import emailjs from 'emailjs-com';

const Contact = ({ contacts }) => {
  const form = useRef();

  const rateLimiter = new RateLimiterMemory({
    points: 15, // Maximum number of requests per time period
    duration: 24 * 60 * 60, // Time period (in seconds)
  });

  const sendEmail = (e) => {
    e.preventDefault();
    rateLimiter.consume()
    .then(() => {
      emailjs.sendForm('service_iyxmc9w', 'template_i3009od', form.current, 'EleINQe7JFm3WyYRk')
        .then((result) => {
            alert('Email Sent');
        }, (error) => {
            alert('Error: Could not send');
        });
      e.target.reset();
    })
    .catch(() => {
      alert('Exceeded rate limit for the day. Try again tomorrow');
      e.target.reset();
      // Return error message or display warning to user
    });
  };

  return (
    <section id='contact'>
      <h5 className='.about__h5'>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'>
            <h4>
              <a href={`mailto:${contacts.email}`}><MdOutlineEmail className='contact__option-icon'/></a>
            </h4>
          </article>
          <article className='contact__option'>
            <h4>
              <a href='https://github.com/rhoq001/'><BsGithub className='contact__option-icon'/></a>
            </h4>
          </article>
          <article className='contact__option'>
            <h4>
              <a href='https://www.linkedin.com/in/raqtan-hoq-692264173/'><BsLinkedin className='contact__option-icon'/></a>
            </h4> 
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' required rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact