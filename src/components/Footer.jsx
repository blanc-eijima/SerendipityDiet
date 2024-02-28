import React from "react";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import FootSvg from "./FootSvg";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <>
      <footer>
        <FootSvg />
        <div id="footer">
          <div id="footer-inner">
            <div className="foot_box">
              <div className="foot_logo">
                <p>
                  <Link to="/">
                    <img src="/images/logo.png" alt="" />
                  </Link>
                </p>
              </div>
              <div className="foot_link">
                <ul className="foot_sns_bt">
                  <li>
                    <a href="https://twitter.com/SerendipityDiet" className="tw" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100090480733124" className="fb" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                </ul>
                <ul className="foot_menu">
                  <li>
                    <Link to="/privacy-policy/">個人情報保護方針</Link>
                  </li>
                  <li>
                    <Link to="/transactions/">特定商取引法に基づく表示</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="address">
              <div>
                <a href="mailto:contact@serendipity-ultimatediet.com">contact@serendipity-ultimatediet.com</a>
              </div>
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
