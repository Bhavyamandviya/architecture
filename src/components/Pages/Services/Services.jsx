import React from "react";
import serimg1 from "../../../assets/images/service/inner-icon-1.svg";
import serimg2 from "../../../assets/images/service/inner-icon-2.svg";
import serimg3 from "../../../assets/images/service/inner-icon-3.svg";
import serimg4 from "../../../assets/images/service/inner-icon-4.svg";
import serimg5 from "../../../assets/images/service/inner-icon-5.svg";
import serimg6 from "../../../assets/images/service/inner-icon-6.svg";
import priimg7 from "../../../assets/images/pricing/pricing-1.jpg";
import priimg8 from "../../../assets/images/pricing/pricing-2.jpg";
import priimg9 from "../../../assets/images/pricing/pricing-3.jpg";
import serimg10 from "../../../assets/images/service/icon_img_4.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="breadcumb-area d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <h1>Services</h1>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-area one upper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title upper">
                <div className="main-title">
                  <h1>Services</h1>
                </div>
                <div className="sub-title">
                  <h2>
                    Featured <span>Services</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box wow fadeInLeft">
                <div className="feature-content">
                  <h4>01</h4>
                  <h3>Architecture Design</h3>
                  <p>
                    Conveniently streamline synergistic markets
                    multidisciplinary products. Authoritatively wire bandwidth
                    adaptive
                  </p>
                </div>
                <div className="feature-button">
                  <Link to="/services-details">View Details</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box wow fadeInUp">
                <div className="feature-content">
                  <h4>02</h4>
                  <h3>Interior Design</h3>
                  <p>
                    Conveniently streamline synergistic markets
                    multidisciplinary products. Authoritatively wire bandwidth
                    adaptive
                  </p>
                </div>
                <div className="feature-button">
                  <Link to="/services-details">View Details</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box wow fadeInRight">
                <div className="feature-content">
                  <h4>03</h4>
                  <h3>Furniture Design</h3>
                  <p>
                    Conveniently streamline synergistic markets
                    multidisciplinary products. Authoritatively wire bandwidth
                    adaptive
                  </p>
                </div>
                <div className="feature-button">
                  <Link to="/services-details">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-area-inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title upper">
                <div className="main-title">
                  <h1>Services</h1>
                </div>
                <div className="sub-title">
                  <h2>
                    Featured <span>Services</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row mg-tp">
            <div className="col-lg-4 col-md-6">
              <div className="single-inner-service-box wow fadeInLeft">
                <div className="inner-service-tmb">
                  <img src={serimg1} alt="" />
                </div>
                <div className="inner-service-title">
                  <h3>Architecture Design</h3>
                  <p>
                    Rapidiously evolve pandemic experiences and end-to-end
                    platforms. Dramatically administrate inexpensive
                  </p>
                </div>
                <div className="inner-service-button">
                  <Link to="/services-details">View Details</Link>
                </div>
                <div className="inner-service-number">
                  <h1>01</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-inner-service-box wow fadeInUp">
                <div className="inner-service-tmb">
                  <img src={serimg2} alt="" />
                </div>
                <div className="inner-service-title">
                  <h3>3D Modelling Design</h3>
                  <p>
                    Rapidiously evolve pandemic experiences and end-to-end
                    platforms. Dramatically administrate inexpensive
                  </p>
                </div>
                <div className="inner-service-button">
                  <Link to="/services-details">View Details</Link>
                </div>
                <div className="inner-service-number">
                  <h1>02</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-inner-service-box wow fadeInRight">
                <div className="inner-service-tmb">
                  <img src={serimg3} alt="" />
                </div>
                <div className="inner-service-title">
                  <h3>Blueprint Design</h3>
                  <p>
                    Rapidiously evolve pandemic experiences and end-to-end
                    platforms. Dramatically administrate inexpensive
                  </p>
                </div>
                <div className="inner-service-button">
                  <Link to="/services-details">View Details</Link>
                </div>
                <div className="inner-service-number">
                  <h1>03</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-inner-service-box wow fadeInLeft">
                <div className="inner-service-tmb">
                  <img src={serimg4} alt="" />
                </div>
                <div className="inner-service-title">
                  <h3>Industrial Design</h3>
                  <p>
                    Rapidiously evolve pandemic experiences and end-to-end
                    platforms. Dramatically administrate inexpensive
                  </p>
                </div>
                <div className="inner-service-button">
                  <Link to="/services-details">View Details</Link>
                </div>
                <div className="inner-service-number">
                  <h1>04</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-inner-service-box wow fadeInUp">
                <div className="inner-service-tmb">
                  <img src={serimg5} alt="" />
                </div>
                <div className="inner-service-title">
                  <h3>Interior Design</h3>
                  <p>
                    Rapidiously evolve pandemic experiences and end-to-end
                    platforms. Dramatically administrate inexpensive
                  </p>
                </div>
                <div className="inner-service-button">
                  <Link to="/services-details">View Details</Link>
                </div>
                <div className="inner-service-number">
                  <h1>05</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-inner-service-box wow fadeInRight">
                <div className="inner-service-tmb">
                  <img src={serimg6} alt="" />
                </div>
                <div className="inner-service-title">
                  <h3>Furniture Design</h3>
                  <p>
                    Rapidiously evolve pandemic experiences and end-to-end
                    platforms. Dramatically administrate inexpensive
                  </p>
                </div>
                <div className="inner-service-button">
                  <Link to="/services-details">View Details</Link>
                </div>
                <div className="inner-service-number">
                  <h1>06</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="arcke-agency-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="arcke-agency">
                <h2>
                  Start Your Dream <span>Projects</span> <br />
                  with Arcke’s Agency
                </h2>
              </div>
              <div className="arcke-agency-button">
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title upper">
                <div className="main-title">
                  <h1>PRICING PLAN</h1>
                </div>
                <div className="sub-title">
                  <h2>
                    Price Table with <span>Featured</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box wow fadeInLeft">
                <div className="pricing-inner-box">
                  <div className="single-pricing-thumb">
                    <img src={priimg7} alt="" />
                  </div>
                  <div className="single-pricing-content">
                    <h3>work Projects</h3>
                    <p>
                      Rapidiously evolve pandemic experien dramatically
                      administrate
                    </p>
                    <div className="pricing-plan-list">
                      <ul>
                        <li>Architecture hourly Rate</li>
                        <li>Combinations</li>
                        <li>Architectural Plans</li>
                        <li>Soil Testing &amp; Repair</li>
                        <li>Engineering Supports</li>
                      </ul>
                    </div>
                    <div className="pricing-dolar">
                      <h3>$45.000</h3>
                    </div>
                    <div className="pricing-button">
                      <a href="#">Place Order</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box  wow fadeInUp">
                <div className="pricing-inner-box">
                  <div className="single-pricing-thumb">
                    <img src={priimg8} alt="" />
                  </div>
                  <div className="single-pricing-content">
                    <h3>SKETCH WORKS</h3>
                    <p>
                      Rapidiously evolve pandemic experien dramatically
                      administrate
                    </p>
                    <div className="pricing-plan-list">
                      <ul>
                        <li>Architecture hourly Rate</li>
                        <li>Combinations</li>
                        <li>Architectural Plans</li>
                        <li>Soil Testing &amp; Repair</li>
                        <li>Engineering Supports</li>
                      </ul>
                    </div>
                    <div className="pricing-dolar">
                      <h3>$45.000</h3>
                    </div>
                    <div className="pricing-button">
                      <a href="#">Place Order</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-box wow fadeInRight">
                <div className="pricing-inner-box">
                  <div className="single-pricing-thumb">
                    <img src={priimg9} alt="" />
                  </div>
                  <div className="single-pricing-content">
                    <h3>DESIGN PROJECT</h3>
                    <p>
                      Rapidiously evolve pandemic experien dramatically
                      administrate
                    </p>
                    <div className="pricing-plan-list">
                      <ul>
                        <li>Architecture hourly Rate</li>
                        <li>Combinations</li>
                        <li>Architectural Plans</li>
                        <li>Soil Testing &amp; Repair</li>
                        <li>Engineering Supports</li>
                      </ul>
                    </div>
                    <div className="pricing-dolar">
                      <h3>$45.000</h3>
                    </div>
                    <div className="pricing-button">
                      <a href="#">Place Order</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
