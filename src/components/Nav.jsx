import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';
const Nav = ({ navClicked }) => {
  const hNavClassName = navClicked ? 'h_nav panelactive' : 'h_nav';

  return (
    <>
      <nav className={hNavClassName}>
        <ul className='nav'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/plan/'>Plan</Link>
          </li>
          <li>
            <Link to='/about/'>About</Link>
          </li>
          <li>
            <Link to='/category/column/'>Column</Link>
          </li>
          <li>
            <Link to='/toiawase/'>Contact</Link>
          </li>
        </ul>

        <ul className='sns_bt'>
          <li>
            <a href='https://www.facebook.com/profile.php?id=100090480733124' className='fb' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/SerendipityDiet' className='tw' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
          <li>
            <a href='tel:088-855-7879' className='tel'>
              <FontAwesomeIcon icon={faPhoneVolume} />
            </a>
          </li>
          <li>
            <Link to='/toiawase/' className='mail'>
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
