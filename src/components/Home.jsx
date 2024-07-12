import React from "react";
import abimg from "../assets/images/about/about-five.png";
import serimg1 from "../assets/images/service/icon_img-5.png";
import serimg2 from "../assets/images/service/icon_img_5.png";
import serimg3 from "../assets/images/service/icon_img-1.png";
import serimg4 from "../assets/images/service/icon_img_1.png";
import serimg5 from "../assets/images/service/icon_img-2.png";
import serimg6 from "../assets/images/service/icon_img_2.png";
import serimg7 from "../assets/images/service/icon_img-3.png";
import serimg8 from "../assets/images/service/icon_img_3.png";
import serimg9 from "../assets/images/service/icon_img-4.png";
import serimg10 from "../assets/images/service/icon_img_4.png";
import port1 from "../assets/images/portfolio/project_1.jpg";
import port2 from "../assets/images/portfolio/project_2.jpg";
import port3 from "../assets/images/portfolio/project_3.jpg";
import port4 from "../assets/images/portfolio/project_4.jpg";
import port6 from "../assets/images/portfolio/project_6.jpg";
import port5 from "../assets/images/portfolio/project_5.jpg";
import SliderBanner from "./SliderBanner/SliderBanner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Slider Image */}
      <SliderBanner />
      {/* <div className="slider_area_five d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="owl-carousel slid_list">
              <div className="col-lg-12">
                <div className="single-slider">
                  <div className="slide_content">
                    <h4>WELCOME TO ARCKE</h4>
                    <h1>
                      A Design So Unique It Was <br /> <span>Created</span> For
                      You Only
                    </h1>
                    <div className="home-five-button">
                      <a href="#">VIEW MORE</a>
                    </div>
                    <div className="home-five-btn">
                      <a href="#">Contact Us</a>
                    </div>
                  </div>
                  <div className="single-slider_icon-list">
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
                          <i className="fab fa-twitter" />
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
                          <i className="bi bi-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="about_area_five">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="single_about_box wow fadeInRight">
                <div className="about_thumb">
                  <img src={abimg} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single_about_box wow fadeInLeft">
                <div className="section_title_five">
                  <div className="sub_title">
                    <h4>ABOUT OUR COMPANY</h4>
                  </div>
                  <div className="main_title">
                    <h1>
                      Artfully Blending Interior <br /> Designs &amp; Style
                    </h1>
                  </div>
                </div>
                <div className="about_description">
                  <p>
                    Inoterior design consultancy firm that brings sensitivity to
                    the design top restaurants,hotels, offices &amp; homes
                    around the world. We stand for quality, safety and
                    credibility, a so you could be sure about our work.{" "}
                  </p>
                </div>
                <div className="about_icon_list">
                  <ul>
                    <li>
                      <i className="bi bi-check2-circle" /> We create and
                      configurable 3D a render
                    </li>
                    <li>
                      <i className="bi bi-check2-circle" /> Worked with pixready
                      on several render
                    </li>
                    <li>
                      <i className="bi bi-check2-circle" /> Right way to give
                      marvelous impression
                    </li>
                  </ul>
                </div>
                <div className="about_button">
                  <a href="#">READ MORE</a>
                </div>
                <div className="counter_box wow fadeInRight">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">27</span>+
                      </h1>
                      <span />
                      <div className="counter-text">
                        <p>
                          Years of <br /> Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service */}
      <div className="service_area_five">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section_title_five">
                <div className="sub_title">
                  <h4>OUR SERVICES</h4>
                </div>
                <div className="main_title">
                  <h1>
                    Discover Our Interior <br /> Design Services
                  </h1>
                </div>
              </div>
              <div className="service-top-button">
                <Link to="/services">VIEW ALL SERVICES</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_service_box wow fadeInLeft">
                <div className="service_icon_img">
                  <img src={serimg1} alt="" />
                </div>
                <div className="service_title">
                  <h3>Architecture</h3>
                  <p>
                    We blend art &amp; science to create and restore, readapt
                    the inside of various building interior building interior
                    spaces
                  </p>
                </div>
                <div className="service_number">
                  <h1>01</h1>
                </div>
                <div className="service_shap">
                  <img src={serimg2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_service_box wow fadeInUp">
                <div className="service_icon_img">
                  <img src={serimg3} alt="" />
                </div>
                <div className="service_title">
                  <h3>Interior Work</h3>
                  <p>
                    We blend art &amp; science to create and restore, readapt
                    the inside of various building interior building interior
                    spaces
                  </p>
                </div>
                <div className="service_number">
                  <h1>02</h1>
                </div>
                <div className="service_shap">
                  <img src={serimg4} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_service_box wow fadeInRight">
                <div className="service_icon_img">
                  <img src={serimg5} alt="" />
                </div>
                <div className="service_title">
                  <h3>Decoration art</h3>
                  <p>
                    We blend art &amp; science to create and restore, readapt
                    the inside of various building interior building interior
                    spaces
                  </p>
                </div>
                <div className="service_number">
                  <h1>03</h1>
                </div>
                <div className="service_shap">
                  <img src={serimg6} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_service_box wow fadeInLeft">
                <div className="service_icon_img">
                  <img src={serimg7} alt="" />
                </div>
                <div className="service_title">
                  <h3>Home Decoration</h3>
                  <p>
                    We blend art &amp; science to create and restore, readapt
                    the inside of various building interior building interior
                    spaces
                  </p>
                </div>
                <div className="service_number">
                  <h1>04</h1>
                </div>
                <div className="service_shap">
                  <img src={serimg8} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_service_box wow fadeInUp">
                <div className="service_icon_img">
                  <img src={serimg9} alt="" />
                </div>
                <div className="service_title">
                  <h3>2D/3D Layouts</h3>
                  <p>
                    We blend art &amp; science to create and restore, readapt
                    the inside of various building interior building interior
                    spaces
                  </p>
                </div>
                <div className="service_number">
                  <h1>05</h1>
                </div>
                <div className="service_shap">
                  <img src={serimg10} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_service_box wow fadeInRight">
                <div className="service_icon_img">
                  <img src={serimg1} alt="" />
                </div>
                <div className="service_title">
                  <h3>Stone &amp; Hardscaping</h3>
                  <p>
                    We blend art &amp; science to create and restore, readapt
                    the inside of various building interior building interior
                    spaces
                  </p>
                </div>
                <div className="service_number">
                  <h1>06</h1>
                </div>
                <div className="service_shap">
                  <img src={serimg2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="project_area_five">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section_title_five">
                <div className="sub_title">
                  <h4>LASTEST PROJECT</h4>
                </div>
                <div className="main_title">
                  <h1>Our Latest Projects</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_project_box wow fadeInLeft">
                <div className="single_project-tmb">
                  <img src={port1} alt="" />
                </div>
                <div className="single_project_content">
                  <h3>Interior Work</h3>
                  <p>
                    The entire interior is the beginning of the history of the
                    house, such as colors, lighting, and materials and
                    materials.
                  </p>
                  <div className="single_project_button">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_project_box wow fadeInUp">
                <div className="single_project-tmb">
                  <img src={port2} alt="" />
                </div>
                <div className="single_project_content">
                  <h3>Interior Work</h3>
                  <p>
                    The entire interior is the beginning of the history of the
                    house, such as colors, lighting, and materials and
                    materials.
                  </p>
                  <div className="single_project_button">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_project_box wow fadeInRight">
                <div className="single_project-tmb">
                  <img src={port3} alt="" />
                </div>
                <div className="single_project_content">
                  <h3>Interior Work</h3>
                  <p>
                    The entire interior is the beginning of the history of the
                    house, such as colors, lighting, and materials and
                    materials.
                  </p>
                  <div className="single_project_button">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_project_box wow fadeInLeft">
                <div className="single_project-tmb">
                  <img src={port4} alt="" />
                </div>
                <div className="single_project_content">
                  <h3>Interior Work</h3>
                  <p>
                    The entire interior is the beginning of the history of the
                    house, such as colors, lighting, and materials and
                    materials.
                  </p>
                  <div className="single_project_button">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_project_box wow fadeInUp">
                <div className="single_project-tmb">
                  <img src={port5} alt="" />
                </div>
                <div className="single_project_content">
                  <h3>Interior Work</h3>
                  <p>
                    The entire interior is the beginning of the history of the
                    house, such as colors, lighting, and materials and
                    materials.
                  </p>
                  <div className="single_project_button">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_project_box wow fadeInRight">
                <div className="single_project-tmb">
                  <img src={port6} alt="" />
                </div>
                <div className="single_project_content">
                  <h3>Interior Work</h3>
                  <p>
                    The entire interior is the beginning of the history of the
                    house, such as colors, lighting, and materials and
                    materials.
                  </p>
                  <div className="single_project_button">
                    <a href="#">Read More</a>
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

export default Home;
