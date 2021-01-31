import './Footer.css';
import './Utilities.css';
import React from 'react';

function Footer() {
    
    return (
    <>
<div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
          </div>
        </div>
      </div>
    </div>
    <iconfooter>
      <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <ul>
          <li><a href="/#"><i class='fab fa-facebook-f' />
            </a></li>
          <li><a href="/#"><i class='fab fa-instagram' />
            </a></li>
          <li><a href="/#"><i class='fab fa-youtube' />
            </a></li>
          <li><a href="/#"><i class='fab fa-twitter' />
            </a></li>
        </ul>
    </iconfooter>
    </>
    );
  }

  export default Footer
