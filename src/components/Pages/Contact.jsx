import React from "react";
import conimg from "../../assets/images/resource/cont-ri.jpg";
const Contact = () => {
  return (
    <>
      <div className="breadcumb-area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <h1>Contact Us</h1>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>Contact Us </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-area-inner upper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="single-contact-box upper wow fadeInRight">
                <div className="section-title upper">
                  <div className="sub-title">
                    <h2>
                      Collaborate with Our <br /> Support Team"
                    </h2>
                  </div>
                </div>
                <div className="contact_from_box">
                  <form action="#" method="POST" id="dreamit-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_box">
                          <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={10}
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="quote_button">
                          <button className="btn" type="submit">
                            SUBMIT NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div id="status" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-contact-box wow fadeInLeft">
                <div className="single-contact-thumb">
                  <img src={conimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-section">
        <div className="container">
          <div className="row mg-pt">
            <div className="col-lg-12 p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48384.367867189205!2d-74.01058227968896!3d40.71751035716885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1609671967457!5m2!1sen!2sbd"
                width={1920}
                height={520}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
