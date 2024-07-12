import React from "react";
import port1 from "../../assets/images/portfolio/project_1.jpg";
import port2 from "../../assets/images/portfolio/project_2.jpg";
import port3 from "../../assets/images/portfolio/project_3.jpg";
import port4 from "../../assets/images/portfolio/project_4.jpg";
import port6 from "../../assets/images/portfolio/project_6.jpg";
import port5 from "../../assets/images/portfolio/project_5.jpg";

const Projects = () => {
  return (
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
                  house, such as colors, lighting, and materials and materials.
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
                  house, such as colors, lighting, and materials and materials.
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
                  house, such as colors, lighting, and materials and materials.
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
                  house, such as colors, lighting, and materials and materials.
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
                  house, such as colors, lighting, and materials and materials.
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
                  house, such as colors, lighting, and materials and materials.
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
  );
};

export default Projects;
