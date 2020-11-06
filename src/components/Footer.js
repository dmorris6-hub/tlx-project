import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <h3 className='footer-heading'>
          TwisterLogix
        </h3>
      <div className='social-media'>
        <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link className='footer-font' to='/'>Privacy policy</Link>
          </div>
          <div className='footer-link-items'>
            <Link className='footer-font' to='/'>Terms and conditions</Link>
          </div>
          <div className='footer-link-items'>
            <Link className='footer-font' to='/'>Contact</Link>
          </div>
        </div>
      </div>
        <div className='wr-z'>
          <small className='website-rights'>
              © Copyright 2020 TwistedLogix LLC. - All Rights Reserved
              </small>
          
        </div>

    </div>
  );
}

export default Footer;

