import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import Nav from './Nav';

const Header = () => {
  const [navClicked, setNavClicked] = useState(false);

  const handleNavClick = () => {
    setNavClicked(!navClicked);
  };

  useEffect(() => {
    // navClicked の状態に応じて body のクラスを更新
    if (navClicked) {
      document.body.classList.add('fixed');
    } else {
      document.body.classList.remove('fixed');
    }
  }, [navClicked]);

  return (
    <>
      <header id='header'>
        <div id='header-inner'>
          <h1 className='h_logo'>
            <a href='/'>
              <img src='/images/logo.png' width={200} height={67} className='opa' alt='SERENDIPITY Ultimate Diet' />
            </a>
          </h1>
          <Nav navClicked={navClicked} />
          <div className={`navbtn ${navClicked ? 'active' : ''}`} onClick={handleNavClick}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
