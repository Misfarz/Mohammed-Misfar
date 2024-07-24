import React from 'react'
import './Hire.css'
import CV from '../../assets/mvcv.pdf'

function Hire() {
  return (
    <section id="hire" className="hireme">
      <div className="wrapperhire">
        <div className="containerhire">
        
            <h2 className='hire-text'>Hire Me!</h2>
            <p className='hire-para'>
              If you're looking for a dedicated employee who's committed to
              delivering polished and functional applications, your search ends
              here. Let's turn your vision into a successful reality
            </p>
            <a href={CV} download>
              <button className="hover1">resume</button>
            </a>
          
        </div>
      </div>
    </section>
  );
}

export default Hire
