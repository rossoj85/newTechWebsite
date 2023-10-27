import React from 'react';
import instagramBlack from './images/instagram-black.svg';
import instagramWhite from './images/instagram-white.svg';
import facebookWhite from './images/facebook-white.png';
import facebookBlack from './images/facebook-black.png';
import twitWhite from './images/twitWhite.png';
import twitBlack from './images/twitBlack.png';
import linkWhite from './images/linkedin-white.svg';
import linkBlack from './images/linkedin-black.svg';
// import kLogo from './images/kLogo.png';
import horizon_footer from './images/horizon_footer.png';
import horizon_small from './images/horizon_small.png';

export default ()=>{
   
    return(
        <div id='footer'>
          <h1>FOLLOW US ON</h1>
            <ul className='nav-footer'>
              <li className='nav-link-footer nav-link-instagram'>
                <a href='#' target='_blank'>
                  <img src={instagramWhite} height='24px' className='default-link'/>
                  <img src={instagramBlack} height='24px' className='hover-link'/>
                </a>
              </li>
              <li className='nav-link-footer nav-link-instagram'>
              <a href='#' target='_blank'>
                <img src={facebookWhite} height='24px' className='default-link'/>
                <img src={facebookBlack} height='24px' className='hover-link' />
              </a>
              </li>
              <li className='nav-link-footer nav-link-instagram'>
                <a href='#' target='_blank'>
                  <img src={twitWhite} height='24px' className='default-link'/>
                  <img src={twitBlack} height='24px' className='hover-link' />
                </a>
              </li>
              <li className='nav-link-footer nav-link-instagram'>
                <a href='#' target='_blank'>
                  <img src={linkWhite} height='24px' className='default-link'/>
                  <img src={linkBlack} height='24px' className='hover-link' />
                </a>
              </li>
            </ul>
          <h2>Designed & Developed by  NewTech Horizons</h2>
          
          <div className='footerLogo'>
            <img src={horizon_small} className='logo'  />
            <h4>NewTech Horizons</h4>
          </div>
          <p>© NewTech Horizons LLC 2023</p>
        </div>
    )
}