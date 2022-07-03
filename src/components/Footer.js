import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
      <FontAwesomeIcon icon={faHeart} className="icon" />
    </span>
  </div>
);

export default Footer;