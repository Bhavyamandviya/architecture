import React, { useEffect, useState } from "react";
import abimg from "../../assets/images/about/about-one.png";
import borderimg from "../../assets/images/resource/border.png";
import countershape from "../../assets/images/resource/counter-shape.png";
import { Link } from "react-router-dom";
import abtimg from "../../assets/images/about/about-1.jpg";
import countershape2 from "../../assets/images/resource/counter-shap.png";
import team from "../../assets/images/team/team-1.jpg";
import team2 from "../../assets/images/team/team-2.jpg";
import team3 from "../../assets/images/team/team-3.jpg";
import brand1 from "../../assets/images/brand/brand-1.png";
import brand2 from "../../assets/images/brand/brand-2.png";
import brand3 from "../../assets/images/brand/brand-3.png";
import brand4 from "../../assets/images/brand/brand-4.png";
import brand5 from "../../assets/images/brand/brand-5.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import ProgressLine from "../ProgressBar/Progressline";

const About = () => {
  let imgbox = [brand1, brand2, brand3, brand4, brand5];

  return (
    <>
      <div className="breadcumb-area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <h1>About Us</h1>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>About Us </li>
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
                  <Link to="/service-details">View Details</Link>
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
                  <Link to="/service-details">View Details</Link>
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
                  <Link to="/service-details">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-area one upper inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title upper">
                <div className="main-title">
                  <h1>About Us</h1>
                </div>
                <div className="sub-title">
                  <h2>
                    Discover Arcke’s <span>Story</span>
                  </h2>
                </div>
              </div>
              <div className="about-shape dance">
                <img src={borderimg} alt="" />
              </div>
              <div className="abouts-shapes bounce-animate2">
                <img src={countershape} alt="" />
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="single-about-left wow fadeInLeft">
                <div className="about-thumb">
                  <img src={abimg} alt="" />
                </div>
                <div className="about-button">
                  <a>About Us</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-about-right wow fadeInRight">
                <div className="appoinment-tab">
                  {/* / tab */}
                  <div className="tab">
                    {/* / tabs */}
                    <ul className="tabs">
                      <li className="boder">
                        <a>HISTORY</a>
                      </li>
                      <li>
                        <a>MISSION </a>
                      </li>
                      <li>
                        <a>VISSION</a>
                      </li>
                    </ul>
                    <div className="tab_content">
                      {/* / tabs_item */}
                      <div className="tabs_item">
                        {/* post comment */}
                        <div className="post-comment-description">
                          <p>
                            Rapidiously evolve pandemic experiences and
                            end-to-end platforms. don Dramatically administrate
                            inexpensive users with integrated experiences
                            Collaboratively redefine cutting-edge
                            infrastructures whereas open main convergence
                            energistically simplify discover.
                          </p>
                        </div>
                        <div className="tab-thumb">
                          <img src={abtimg} alt="" />
                        </div>
                        <div className="tab-title">
                          <h3>Design Make Dream</h3>
                          <p>
                            Rapidiously evolve pandemic experiences and
                            Dramatically administrate
                          </p>
                        </div>
                        <div className="prossess-ber-plugin pt-20">
                          <ProgressLine
                            label="Architecture"
                            backgroundColor="white"
                            visualParts={[
                              {
                                percentage: "65%",
                                color: "#d8ab7a",
                              },
                            ]}
                          />
                          {/* <ScrollProgress /> */}
                          <ProgressLine
                            label="Interior Design"
                            backgroundColor="white"
                            visualParts={[
                              {
                                percentage: "80%",
                                color: "#d8ab7a",
                              },
                            ]}
                            width={80}
                          />
                        </div>
                      </div>
                      {/* / tabs_item */}
                      <div className="tabs_item">
                        {/* post comment */}
                        <div className="post-comment-description">
                          <p>
                            Rapidiously evolve pandemic experiences and
                            end-to-end platforms. don Dramatically administrate
                            inexpensive users with integrated experiences
                            Collaboratively redefine cutting-edge
                            infrastructures whereas open main convergence
                            energistically simplify discover.
                          </p>
                        </div>
                        <div className="tab-thumb">
                          <img src={abtimg} alt="" />
                        </div>
                        <div className="tab-title">
                          <h3>Design Make Dream</h3>
                          <p>
                            Rapidiously evolve pandemic experiences and
                            Dramatically administrate
                          </p>
                        </div>
                        <div className="post-comment-description pt-3">
                          <p>
                            Mission evolve pandemic experiences and end-to-end
                            platforms. don Dramatically administrate inexpensive
                            users with integrated experiences Collaboratively
                            redefine cutting-edge infrastructures whereas open
                            main convergence energistically the best design of
                            dreamit simplify discover.
                          </p>
                        </div>
                      </div>
                      {/* / tabs_item */}
                      <div className="tabs_item">
                        {/* post comment */}
                        <div className="post-comment-description">
                          <p>
                            Rapidiously evolve pandemic experiences and
                            end-to-end platforms. don Dramatically administrate
                            inexpensive users with integrated experiences
                            Collaboratively redefine cutting-edge
                            infrastructures whereas open main convergence
                            energistically simplify discover.
                          </p>
                        </div>
                        <div className="tab-thumb">
                          <img src={abtimg} alt="" />
                        </div>
                        <div className="tab-title">
                          <h3>Design Make Dream</h3>
                          <p>
                            Rapidiously evolve pandemic experiences and
                            Dramatically administrate
                          </p>
                        </div>
                        <div className="post-comment-description pt-3">
                          <p>
                            Mission evolve pandemic experiences and end-to-end
                            platforms. don Dramatically administrate inexpensive
                            users with integrated experiences Collaboratively
                            redefine cutting-edge infrastructures whereas open
                            main convergence energistically the best design of
                            dreamit simplify discover.
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* / tab_content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter-area one upper inner">
        <div className="container">
          <div className="row bg-col align-items-center">
            <div className="col-lg-3 col-md-6">
              <div className="counter-single-item-inner wow fadeInUp">
                <div className="counter-content">
                  <div className="counter-text">
                    <h1>
                      <span className="counter">120</span>+
                    </h1>
                    <span />
                    <div className="counter-title">
                      <h4>ALL WORKS</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-single-item-inner upper">
                <div className="counter-content">
                  <div className="counter-text">
                    <h1>
                      <span className="counter">70</span>
                    </h1>
                    <span />
                    <div className="counter-title">
                      <h4>ENGINEERS</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-single-item-inner wow fadeInUp">
                <div className="counter-content">
                  <div className="counter-text">
                    <h1>
                      <span className="counter">105</span>K
                    </h1>
                    <span />
                    <div className="counter-title">
                      <h4>CUSTOMERS</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-single-item-inner upper">
                <div className="counter-content">
                  <div className="counter-text">
                    <h1>
                      <span className="counter">50</span>+
                    </h1>
                    <span />
                    <div className="counter-title">
                      <h4>AWARDS WIN</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="conun-shap bounce-animate3">
              <img src={countershape} alt="" />
            </div>
            <div className="conunt-shape bounce-animate2">
              <img src={countershape2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="team-area one upper style_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title upper">
                <div className="main-title">
                  <h1>ENGINEERS</h1>
                </div>
                <div className="sub-title">
                  <h2>
                    Arcke’s Expert <span>Engineers</span>
                  </h2>
                </div>
              </div>
              <div className="team-shap bounce-animate3">
                <img src={countershape} alt="" />
              </div>
              <div className="team-shape bounce-animate2">
                <img src={countershape2} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-team-box wow fadeInLeft">
                <div className="team-thumb">
                  <img src={team} alt="" />
                </div>
                <div className="team-content">
                  <h3>Moris Barbar</h3>
                  <span>engineer</span>
                  <div className="team-icon-list">
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
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-box wow fadeInUp">
                <div className="team-thumb">
                  <img src={team2} alt="" />
                </div>
                <div className="team-content">
                  <h3>Moris Barbar</h3>
                  <span>engineer</span>
                  <div className="team-icon-list">
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
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-box wow fadeInRight">
                <div className="team-thumb">
                  <img src={team3} alt="" />
                </div>
                <div className="team-content">
                  <h3>Moris Barbar</h3>
                  <span>engineer</span>
                  <div className="team-icon-list">
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
            </div>
          </div>
        </div>
      </div>
      <div className="brand-area one upper style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="brand-title">
                <h4>
                  <span>1200+</span> Satisfiend Customers all over the worlds
                </h4>
              </div>
            </div>
          </div>
          <div>
            <Splide
              options={{
                type: "loop",
                perPage: 4,
                arrows: false,
                pagination: false,
                pauseOnHover: false,
                autoScroll: {
                  speed: 1.5,
                },
                breakpoints: {
                  1199: {
                    perPage: 3,
                  },
                  575: {
                    perPage: 2,
                  },
                },
              }}
              extensions={{ AutoScroll }}
            >
              {imgbox.map((item) => (
                <SplideSlide className="res-logo-box" key={item + "bhavya"}>
                  <img src={item} alt="" />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
//  <SplideSlide className="res-logo-box">
//                 <div className="single-brand">
//                   <div className="brand-thumb">
//                     <img src={brand2} alt="" />
//                   </div>
//                 </div>
//               </SplideSlide>
//               <SplideSlide className="res-logo-box">
//                 <div className="single-brand">
//                   <div className="brand-thumb">
//                     <img src={brand3} alt="" />
//                   </div>
//                 </div>
//               </SplideSlide>
//               <SplideSlide className="res-logo-box">
//                 <div className="single-brand">
//                   <div className="brand-thumb">
//                     <img src={brand4} alt="" />
//                   </div>
//                 </div>
//               </SplideSlide>
//               <SplideSlide className="res-logo-box">
//                 <div className="single-brand">
//                   <div className="brand-thumb">
//                     <img src={brand5} alt="" />
//                   </div>
//                 </div>
//               </SplideSlide>
