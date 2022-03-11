import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import {SiMessenger} from 'react-icons/si'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wuu0tg3', 'template_0tv4sa7', form.current, 'EC_bNUPhd9WFYeBjm')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Talk To Me</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail className="contact_icon" />
            <h4>Email</h4>
            <h5>chegewairimu66@gmail.com</h5>
            <a href="mailto:chegewairimu66@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className='contact_option'>
            <ImWhatsapp className="contact_icon" />
            <h4>Messenger</h4>
            <h5>Peter Wairimu </h5>
            <a href="https://m.me/ernest.achieved" target="_blank">Send a Message</a>
          </article>

          <article className='contact_option'>
            <SiMessenger className="contact_icon" />
            <h4>Whatsup</h4>
            <h5>0707569387</h5>
            <a href="https://api.whatsapp.com/send?phone=+254707569387" target="_blank">Send a Message</a>
          </article>


        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send</button>

        </form>

      </div>
    </section>
  )
}

export default Contact