import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SlideIn from "./SlideIn";

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth <= 1024 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
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
