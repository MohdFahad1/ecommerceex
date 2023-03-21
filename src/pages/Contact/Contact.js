import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div style={{paddingTop:"80px"}}>
    <h1 style={{textAlign:'center',margin:'3rem'}}>Feel free to Contact Us : </h1>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.48400368245!2d76.8123492368036!3d28.644396655776713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1679376301523!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <section id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2>CONTACT</h2>
      <div className="social_links">
        <div className="link">
          <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" className='social_img'/></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" className='social_img'/></a>
        </div>
        <div className="link">
          <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" className='social_img'/></a>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form action="https://formspree.io/f/mbjeagak" method='POST'>
        <div className="form-item">
          <input type="text" name="Sender" required autoComplete='off'/>
          <label>Name:</label>
        </div>
        <div className="form-item">
          <input type="text" name="Email" required  autoComplete='off'/>
          <label>Email:</label>
        </div>
        <div className="form-item">
          <textarea className="" name="Message" required autoComplete='off'></textarea>
          <label>Message:</label>
        </div>
        <input type="submit" value="Send" className="submit-btn"/>  
      </form>
    </div>
  </div>
  </section>
  </div>
  )
}

export default Contact