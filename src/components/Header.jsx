import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import Nav from "./Nav";

const Header = () => {
  const [navClicked, setNavClicked] = useState(false);

  const handleNavClick = () => {
    setNavClicked(!navClicked);
  };

  useEffect(() => {
    // navClicked の状態に応じて body のクラスを更新
    if (navClicked) {
      document.body.classList.add("fixed");
    } else {
      document.body.classList.remove("fixed");
    }
  }, [navClicked]);

  return (
    <>
      <header id="header">
        <div id="header-inner">
          <h1 className="h_logo">
            <Link to="/">
              <img src="/images/logo.svg" width={200} height={67} className="opa" alt="SERENDIPITY Ultimate Diet" />
            </Link>
          </h1>
          <Nav navClicked={navClicked} />
          <button className={`navbtn ${navClicked ? "active" : ""}`} onClick={handleNavClick}>
            <span />
            <span />
            <span />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
