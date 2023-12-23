import React from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import FootSvg from './FootSvg';

const Footer = () => {
  return (
    <>
      <footer>
        <FootSvg />
        <div id='footer'>
          <div id='footer-inner'>
            <div className='foot_box'>
              <div className='foot_logo'>
                <p>
                  <a href='/'>
                    <img src='/images/logo.png' alt='' />
                  </a>
                </p>
              </div>
              <div className='foot_link'>
                <ul className='foot_sns_bt'>
                  <li>
                    <a href='https://twitter.com/SerendipityDiet' className='tw' target='_blank' rel='noopener noreferrer'>
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.facebook.com/profile.php?id=100090480733124' className='fb' target='_blank' rel='noopener noreferrer'>
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                </ul>
                <ul className='foot_menu'>
                  <li>
                    <a href='/privacy-policy/'>個人情報保護方針</a>
                  </li>
                  <li>
                    <a href='/transactions/'>特定商取引法に基づく表示</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='address'>
              <div>contact@serendipity-ultimatediet.com</div>
              <div>
                <address>&copy; 2022 Serendipity-Ultimatediet.Com All Rights Reserved.</address>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
