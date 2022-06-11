import React, { useEffect } from "react";
import "./Service.css";

import AOS from "aos";
import "aos/dist/aos.css";
const Service = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="container">
      <div className="service_section p-5">
        <h2>Service</h2>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="service_box text-center border p-3 m-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <i className="fas fa-code"></i>
              <h2 className="my-4">HTML 5</h2>
              <p>
                HTML5 is a markup language used for structuring and presenting
                content on the World Wide Web. It is the fifth and last major
                HTML version that is a World Wide Web Consortium recommendation.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="service_box text-center border p-3 m-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <i className="fab fa-css3"></i>
              <h2 className="my-4">CSS 3</h2>
              <p>
                The biggest advantage of CSS is that it allows the separation of
                style and layout from the content of the document. Here are some
                more advantages, why one should start using CSS?
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="service_box text-center border p-3 m-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <i className="fab fa-bootstrap"></i>
              <h2 className="my-4">Bootstrap 5</h2>
              <p>
                Bootstrap is a powerful front-end framework for faster and
                easier web development. It includes HTML and CSS based design
                templates for creating common user interface components like
                forms, buttons..
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="service_box text-center border p-3 m-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <i className="fab fa-js"></i>
              <h2 className="my-4">Javascript</h2>
              <p>
                JavaScript is the most popular and widely used client-side
                scripting language. Client-side scripting refers to scripts that
                run within your web browser. JavaScript is designed to...
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="service_box text-center border p-3 m-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <i className="fab fa-react"></i>
              <h2 className="my-4">React js</h2>
              <p>
                People come to React from different backgrounds and with
                different learning styles. Whether you prefer a more theoretical
                or a practical approach..
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div
              className="service_box text-center border p-3 m-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <i className="fab fa-node-js"></i>
              <h2 className="my-4">Node js</h2>
              <p>
                Node.js is an open-source, cross-platform, back-end JavaScript
                runtime environment that runs on the V8 engine and executes
                JavaScript code
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
