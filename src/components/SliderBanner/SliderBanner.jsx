import React, { useState } from "react";
import homebg from "../../assets/images/resource/home.png";
import banner2 from "../../assets/images/slider/home-5-bg.jpg";
import banner1 from "../../assets/images/slider/slider-3.jpg";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const SliderBanner = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  let box = [
    {
      title: "Where Luxury Meets Comfort",
      img: banner1,
    },
    {
      title: "Comfort and Luxury D-decor",
      img: banner2,
    },
  ];
  const handleSlideChange = (splide) => {
    setCurrentSlideIndex(splide.index);
  };
  return (
    <>
      {/* <div
        className="slider_area_five d-flex align-items-center"
        style={{
          backgroundImage: `url(${box[currentSlideIndex].img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "500ms ease-in-out",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <Splide
              options={{
                type: "loop",
                perPage: 1,
                perMove: 1,
                autoplay: true,
                interval: 4000,
                speed: 1500,
                arrows: false,
                pauseOnHover: false,
                easing: "ease-in-out",
                transition: "500ms ease-in-out",
              }}
              onMove={handleSlideChange}
              className="owl-carousel slid_list"
            >
              {box.map((item, index) => (
                <SplideSlide key={index} className="w-100">
                  <div className="col-lg-12">
                    <div className="single-slider">
                      <div className="slide_content">
                        <h4>WELCOME TO ARCKE</h4>
                        <h1>
                          A Design So Unique It Was <br /> <span>Created</span>{" "}
                          For You Only
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
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="bi bi-pinterest" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div> */}
      <div className="slider_area three d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <Splide
              hasTrack={false}
              options={{
                type: "loop",
                perPage: 1,
                perMove: 1,
                autoplay: true,
                interval: 5000,
                speed: 1500,
                //   rewind: true,
                pauseOnHover: false,
                easing: "ease-in-out",
              }}
              className="owl-carousel sliders_lists"
            >
              <SplideTrack className="w-100 owl-stage">
                {box.map((item) => (
                  <SplideSlide className="w-100">
                    <div className="col-lg-12" key={item + "bha"}>
                      <div
                        className="single_slider"
                        style={{
                          backgroundImage: `url(${item.img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div className="slider_content">
                          <div className="slider_title">
                            <h3>{item.title}</h3>
                          </div>
                          <div className="slider_button">
                            <a href="/projects">
                              Read More <i className="bi bi-arrow-right" />
                            </a>
                          </div>
                          <div className="slider_shape">
                            <img
                              src={homebg}
                              alt=""
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>

              {/* <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                  <FaArrowRight />
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <FaArrowLeft />
                </button>
              </div> */}
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderBanner;
