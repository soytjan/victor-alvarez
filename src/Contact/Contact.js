import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='Contact'>
      <a href="mailto:info@victoralvarezstudio.com">info@victoralvarezstudio.com</a>
      <div className='contact-box'>
        <a href="https://www.instagram.com/victoralvarezstudio/" target="_blank" rel="noopener noreferrer">ig: @victoralvarezstudio</a>
        <p>+34 606 868 575</p>
        <p>Based in Madrid</p>
        <p>Spain</p>
      </div>
    </div>
  )
}

export default Contact;