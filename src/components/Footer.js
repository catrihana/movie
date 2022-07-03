import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";


const Footer = () => (
  <div className="footer">
    <span>
      Made by
      &nbsp;
      <a className='footerName' href="https://cindyatrihana.aryafebiyan.com">
        Cindy Atrihana
      </a>
      &nbsp;
      with
      &nbsp;
      <FontAwesomeIcon icon="fa-solid fa-heart" className='emot' />
    </span>
  </div>
);

export default Footer;