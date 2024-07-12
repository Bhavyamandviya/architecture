import React from "react";
import detailimg from "../../../assets/images/service/servi-dtls.jpg";
import detailimg2 from "../../../assets/images/slider/home-5-bg.jpg";
import detailimg3 from "../../../assets/images/slider/slider-3.jpg";
import detailimg1 from "../../../assets/images/service/servi-dtls-1.jpg";
import { Carousel } from "react-bootstrap";

const ServicesDetails = () => {
  return (
    <>
      <div className="breadcumb-area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <h1>Service Details</h1>
                <ul>
                  <li>
                    <a href="/architecture">Home</a>
                  </li>
                  <li>Service Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-details-area">
        <div className="container">
          <div className="row">
            <Carousel fade slide className="details_list">
              <Carousel.Item>
                <div className="col-lg-12">
                  <div className="service-details-box">
                    <div className="service-details-thumb">
                      <img src={detailimg} alt="" />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-lg-12">
                  <div className="service-details-box">
                    <div className="service-details-thumb">
                      <img src={detailimg2} alt="" />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-lg-12">
                  <div className="service-details-box">
                    <div className="service-details-thumb">
                      <img src={detailimg3} alt="" />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="row mg-tp">
            <div className="col-lg-12">
              <div className="service_details_box">
                <div className="service_details_content">
                  <h3>ABOUT THE SERVICE</h3>
                  <p>
                    Mauris eu nisi eget nisi imperdiet vestibulum. nunc sodales
                    vehicula risus. suspendisse id mauris sodales, blandit
                    tortor eu, sodales justo.Morbi tincidunt, ante vel suscipit
                    volutpat, turpis enim volutpSectetur adipiscing elit, sed do
                    eiusm onsectetur adipiscing esed do eiusm vel placerat eros,
                    eu tincidunt velit. consectetur adipiscing elit, adipiscing
                    elit, sed do.
                  </p>
                  <p>
                    Risus rhoncus, vel erat rhoncus, consequat ut aliquet.
                    tortor semper sed proin augue laoreet placerat. vestibulum
                    fames arcu justo accumsan eget. bhoncus dictumst magna
                    ornare eleifend egestas in faucibus nascetur arcu. nulla
                    maecenas massa lectus tortor design urna ipsum diam ultrices
                    commodo. Metus eget nulla sit consectetur egestas velit
                    morbi suspendisse massa nec, neque name themes tortor mattis
                    ut ornare elit ornare eleifend egestas in faucibus nascetur
                    arcu creatove agecy design.
                  </p>
                </div>
                <div className="service-steps-list">
                  <h3>SERVICE STEPS</h3>
                  <ul>
                    <li>
                      Neque sodales ut etiam sit amet nisl purus non tellus orci
                    </li>
                    <li>
                      Adipiscing elit ut aliquam purus sit amet viverra potenti
                    </li>
                    <li>
                      Adipiscing elit ut aliquam purus sit viverra suspendisse
                      potenti
                    </li>
                    <li>Mauris commodo quis imperdiet massa</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="single-details-box wow fadeInRight">
                  <div className="single-details_thumb">
                    <img src={detailimg1} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="single-details-box wow fadeInLeft">
                  <div className="single-details_thumb">
                    <img src={detailimg1} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="service-details-description">
              <p>
                Mauris eu nisi eget nisi imperdiet vestibulum. nunc sodales
                vehicula risus. suspendisse id mauris sodales, blandit tortor
                eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat,
                turpis enim volutpSectetur adipiscing elit, sed do eiusm
                onsectetur adipiscing esed do eiusm vel placerat eros, eu
                tincidunt velit. consectetur adipiscing elit, adipiscing elit,
                sed do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetails;
