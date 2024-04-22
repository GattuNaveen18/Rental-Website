// Contact.js

import React from 'react';
import './Contact.css';
import Home4 from '../Components/Assets/Contact.png';

const Contact = () => {
  return (
    <div>
      <div className="contactContainer">
        <div className="contactMessage">
          <h2 className='th'>DROP A LINE</h2>
          <input type="text" placeholder="Name" /><br />
          <input type="text" placeholder="Email" /><br />
          <input type="text" placeholder="Subject" /><br />
          <textarea placeholder="Your Message"></textarea><br />
          <button>Submit</button>
        </div>
        <div className="contactDetails">
          <p>Contact: 97658765432</p>
          <p>Email: projectt@gmail.com</p>
        </div>
      </div>
      <footer>
        <p>hello</p>
      </footer>
    </div>
  );
};

export default Contact;
