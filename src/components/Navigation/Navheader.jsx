import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navheader = () => {
  const meanMenuClose = "X";
  const meanScreenWidth = 767;

  const [menuOn, setMenuOn] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= meanScreenWidth) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [meanScreenWidth]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.getElementById("sticky-header").classList.add("sticky");
      } else {
        document.getElementById("sticky-header").classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div id="sticky-header" className="hendre_nav_manu three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <a className="logo_img" href="/" title="hendre">
                  <img src={logo} alt="logo" />
                </a>
                <a className="main_sticky" href="/" title="hendre">
                  <img src={logo} alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <nav className="hendre_menu">
                <ul className="nav_scroll">
                  <li>
                    <Link to="/">Home </Link>
                  </li>
                  <li>
                    <Link to="/about">About </Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  {/* <li>
                    <Link to="#">Pages</Link>
                  </li> */}
                  <li>
                    <Link to="/projects">Works </Link>
                  </li>
                  <li>
                    <Link to="#">Blog </Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <div className="col-lg-3">
              <div className="header-src-box">
                <div className="header-icon home-three">
                  <div className="search-box-btn search-box-outer">
                    <i className="fas fa-search" />
                  </div>
                </div>
                <div className="head-btn">
                  <a href="">Get A Quote</a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none ">
        <div className="mobile-menu mean-container">
          <div className="mean-bar">
            {isMobile && (
              <a
                href="#nav"
                className={`meanmenu-reveal ${menuOn ? "meanclose" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOn(!menuOn);
                }}
                style={{
                  right: "0px",
                  left: "auto",
                  textAlign: "center",
                  fontSize: "18px",
                  textIndent: "0px",
                }}
              >
                {!menuOn ? meanMenuClose : <i className="fa fa-bars"></i>}
              </a>
            )}
          </div>

          <nav className={`mean-nav ${isMobile ? "mobile" : ""}`}>
            <ul
              className="nav_scroll"
              style={menuOn ? { display: "none" } : { display: "block" }}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              {/* <li>
                <Link to="#">Pages</Link>
              </li> */}
              <li>
                <Link to="/projects">Works</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navheader;
