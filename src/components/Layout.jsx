import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SlideIn from "./SlideIn";

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      {isMobile && <SlideIn />}
      <main role="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
