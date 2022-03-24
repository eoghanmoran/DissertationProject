import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container font-small'>
      
      <section className='footer-subscription'>
        <div className='input-areas'>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contactUs'>Contact</Link>
            <Link to='/crisisHelp'>Crisis Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://twitter.com/SouthBelfastPB?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Twitter</a>
            <a href = "https://www.facebook.com/SouthBelfastPartnership/">Facebook</a>
            <a href="https://www.youtube.com/channel/UCU7YmFwD-0HO4KKa4GWvHPA">Youtube</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a href ='#' className='social-logo'>
              Forward South Partnership
            </a>
          </div>
          <small class='website-rights'>Forward South Partnership © 2022</small>
          <div class='social-icons'>
          <a 
              class='social-icon-link facebook'
               href = "https://www.facebook.com/SouthBelfastPartnership/">
              <i class='fab fa-facebook-f'/>
              </a>
             <a
              class='social-icon-link youtube'
              href="https://www.youtube.com/channel/UCU7YmFwD-0HO4KKa4GWvHPA">
              <i class='fab fa-youtube' />
              </a>
            <a
              class='social-icon-link twitter'
               href="https://twitter.com/SouthBelfastPB?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
              <i class='fab fa-twitter' />
              </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
