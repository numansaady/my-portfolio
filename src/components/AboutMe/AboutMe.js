import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import numansaady from "../images/numansaady.png";
import "./AboutMe.css";
const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }); 
  return (
    <>
      <div className="container">
        <div className="about_section p-5 my-3">
          <div className="row">
            <div
              className="col-lg-7 col-md-7 col-sm-12"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="about_left_area">
                <div className="image">
                  <img src={numansaady} alt="" />
                </div>
                <div className="info_box">
                  <ul>
                    <li>
                      <h3>Name</h3>
                      <span>Numan Saady</span>
                    </li>

                    <li>
                      <h3>Mail</h3>
                      <span>numansaady@gmail.com</span>
                    </li>
                    <li>
                      <h3>Phone</h3>
                      <span>+88 01716 562219</span>
                    </li>
                    <li>
                      <h3>Address</h3>
                      <span>Sunamgonj, Sylhet.</span>
                    </li>
                    <li>
                      <h3>Nationality</h3>
                      <span>Bangladeshi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-5 col-sm-12 "
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="about_right_area">
                <h2 className="fw-bold">About Me</h2>
                <h3 className="display-5 fw-bold">
                  MERN Stack Web Developer
                </h3>
                <div className="about_text py-3">
                  <p>
                    This is Numan Saady. I am a frond end developer. I can create
                    web site with Javascript and React.
                  </p>
                </div>
                <div className="hero_icon">
                  <button>
                    <a
                      className="p-0 m-0"
                      target="-blank"
                      href="https://drive.google.com/file/d/1612F6nPqnZmwRXw4hUl6bJVXaBsZ5RSj/view?usp=sharing"
                      download
                    >
                      DOWNLOAD RESUME
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
