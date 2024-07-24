import React from 'react'
import contactImg from '../../assets/contact-cover.jpg'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrapper-contact">
        <div className="container-contact">
          <div className="cleft-section">
            <div className="image-container">
            <img src={contactImg} alt="contact-cover" />

            </div>
           
          </div>
          <div className="cright-section">
            <h2 className='letsconnect'>Let's Connect</h2>
            <form action="https://formspree.io/f/mblrdpek" method='POST'>
              <div className="fo rmGroup">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name" 
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="Email"></label>
                <input
                  type="text"
                  name="email"
                  id="eamil"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="name"></label>
                <textarea
                  type="text"
                  name="message"
                  id="eamil"
                  placeholder="Message"
                  required
                />
                
                
              </div>
              <input className='contact-subbtn' type="submit" value="submit"/>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
