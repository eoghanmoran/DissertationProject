import React from 'react';
import './Footer.css';
//import Button from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container font-small'>
      
      <section className='footer-subscription'>
        {/* <p className='footer-subscription-heading'>
          Subscribe to our newsletter to get detailed information on local events
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p> */}
        <div className='input-areas'>
          {/* <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form> */}
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Who we are</Link> 
            <Link to='/'>Our Work</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Donations</Link>
          </div> */}
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
            <Link to='/' className='social-logo'>
              Forward South Partnership
              {/* <i class='fab fa-typo3' /> */}
            </Link>
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
