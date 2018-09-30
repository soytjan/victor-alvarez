import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='Contact'>
      <div className='contact-info-cont'>
        <p>emailaddress@gmail.com</p>
        {/* this needs to have some spacing */}
        <div className='contact-box'>
          <p>victor alvarez</p>
          <p>Give me yo phone number</p>
          <p>Give me yo email</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;