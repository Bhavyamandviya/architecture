import React from "react";
import logo from "../../assets/images/logo.png";
import reslogo from "../../assets/images/resource/counter-shape.png";
import reslogo2 from "../../assets/images/resource/border.png";

const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widgets-company-info wow fadeInLeft">
                <div className="widgets-company-content">
                  <div className="widgets-company-title">
                    <h3>Get In Touch</h3>
                  </div>
                  <div className="widgets-company-icon-list">
                    <ul>
                      <li>
                        <i className="bi bi-telephone" /> +980 123 (4567) 890
                      </li>
                      <li>
                        <i className="bi bi-envelope-open" /> example@yahoo.com
                      </li>
                      <li>
                        <i className="bi bi-envelope-open" /> 102/B Rd, Uttar
                        Badda <br /> Dhaka - 1212
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widgets-company-info-box wow fadeInUp">
                <div className="elaction-logo">
                  <a className="logo_thumb" href="index.html" title="elaction">
                    <img src={logo} alt="images" />
                  </a>
                </div>
                <div className="company-info-desc">
                  <p>
                    {" "}
                    Rapidiously evolve pandemic experiences and end Dramatically
                    administrate inexpensive{" "}
                  </p>
                </div>
                <div className="footer-icon-list">
                  <ul>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fab fa-twitter"> </i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widgets-companys-infos wow fadeInRight">
                <div className="widgets-company-content">
                  <div className="widgets-company-title">
                    <h3>Newsletter</h3>
                  </div>
                  <div className="subscribes-box">
                    <form
                      action="https://formspree.io/f/myyleorq"
                      method="POST"
                      id="dreamit-form"
                    >
                      <div className="subscribe_form-title">
                        <h3>Subscribe Our Newsletter</h3>
                      </div>
                      <div className="subscribe_form">
                        <div className="form_box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your E-mail"
                          />
                        </div>
                        <button type="submit" className="btns">
                          Subscribe
                        </button>
                      </div>
                    </form>
                    <div id="status" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mg-tp align-items-center">
            <div className="col-lg-12">
              <div className="copy-rights">
                <h4>© Copyright Arcke 2024. All Rights Reserved.</h4>
              </div>
              <div className="footer-shap bounce-animate3">
                <img src={reslogo} alt="" />
              </div>
              <div className="footer-shape dance">
                <img src={reslogo2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
