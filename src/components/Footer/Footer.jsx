import React from 'react';
import './Footer.css';

const Footer = () => {

    const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <p>© {year} Unicity. All rights reserved</p>
      <ul>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Footer
