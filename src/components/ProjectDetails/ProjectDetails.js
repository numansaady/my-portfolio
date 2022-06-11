import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Menubar from "../Shear/Menubar/Menubar";
import "./ProjectDetails.css";
// NS Industries slider image
import user from "../images/portfolio/industries-dashboard.PNG";
import admin from "../images/portfolio/industries-login.jpg";
import clock from "../images/portfolio/ns-industries.png";

// NS Perfumes slider image
import traveling_about from "../images/portfolio/manage-perfumes.PNG";
import traveling from "../images/portfolio/ns-perfumes.png";
import traveling_user from "../images/portfolio/perfumes.PNG";

// E Tutor slider image
import doctor_tes from "../images/portfolio/e-tutor-advan.jpg";
import doctor_team from "../images/portfolio/e-tutor-service.jpg";
import doctor from "../images/portfolio/e-tutor.png";



const ProjectDetails = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    height: "400px",
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div>
      <Menubar />
      <div
        className="container pt-5 mt-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2 className="text-center text-uppercase display-3">My Project</h2>
        <div className="row border py-4 my-4">
          <div className="col-lg-6 ">
            <div className="slider ">
              {/* <img src={clock} className="img-fluid" alt="" /> */}
              <div className="p-4">
                <Slider {...settings}>
                  <div className="slider_project">
                    <img src={clock} className="img-fluid " alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={user} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={admin} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={clock} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={user} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={admin} className="img-fluid" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2>NS Industries Website</h2>
            <ul>
              <li>
                Users can order a watch if they want, in which case they must
                login first. After ordering, he will go to the dashboard and see
                it. If he wants, he can delete it.
              </li>
              <li>
                Users can give reviews if they want. And after giving the
                review, it can be seen on the home page.
              </li>
              <li>
                Have an admin and user dashboard. Admin can delete, add, manage
                services.
              </li>
              <p>
                <b>Technology:</b> React.js, Bootstrap, MongoDB, Express.js,
                Node.js, Private route, Firebase Authentication.
              </p>
            </ul>

            <div className="project_code">
              <a
                href="https://ns-industries.web.app/"
                target="_blank" rel="noreferrer"
              >
                Live Link
              </a>
              <a
                href="https://github.com/numansaady/industries-website-client"
                target="_blank" rel="noreferrer"
              >
                Clint Code
              </a>
              <a
                href="https://github.com/numansaady/industries-website-server"
                target="_blank" rel="noreferrer"
              >
                Server Code
              </a>
            </div>
          </div>
        </div>
        <div className="row border py-4 my-4">
          <div className="col-lg-6 ">
            <div className="slider ">
              {/* <img src={clock} className="img-fluid" alt="" /> */}
              <div className="p-4">
                <Slider {...settings}>
                  <div className="slider_project">
                    <img src={traveling} className="img-fluid " alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={traveling_user} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={traveling_about} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={traveling} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={traveling_user} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={traveling_about} className="img-fluid" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2>NS Perfumes website</h2>
            <ul>
              <li>
                If users want to go to Buy then login to him first. Then you
                have to complete the order with his address and phone number.
                And you can see it by going to my order. If he wants, he can
                delete it and cancel his order.
              </li>
              <li>
                Users need to login via Email and password or Google (also can
                create a new Account).
              </li>
              <li>Users can order a traveling tour .</li>
              <p>
                <b>Technology:</b> React.js, Bootstrap, MongoDB, Express.js,
                Node.js, Private route, Firebase Authentication.
              </p>
            </ul>

            <div className="project_code">
              <a href="https://ns-perfume-center.web.app/" target="_blank" rel="noreferrer">
                Live Link
              </a>
              <a
                href="https://github.com/numansaady/perfume-website-client"
                target="_blank" rel="noreferrer"
              >
                Clint Code
              </a>
              <a
                href="https://github.com/numansaady/perfume-website-server"
                target="_blank" aria-disabled rel="noreferrer"
              >
                Server Code
              </a>
            </div>
          </div>
        </div>
        <div className="row border py-4 my-4">
          <div className="col-lg-6 ">
            <div className="slider ">
              <div className="p-4">
                <Slider {...settings}>
                  <div className="slider_project">
                    <img src={doctor} className="img-fluid " alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={doctor_team} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={doctor_tes} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={doctor} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={doctor_team} className="img-fluid" alt="" />
                  </div>
                  <div className="slider_project">
                    <img src={doctor_tes} className="img-fluid" alt="" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2>E-TUTOR website</h2>
            <ul>
              <li>
                If users want to go to Tore then login to him first. Then you
                have to complete the order with his address and phone number.
                And you can see it by going to my order. If he wants, he can
                delete it and cancel his order.
              </li>
              <li>
                Users need to login via Email and password or Google (also can
                create a new Account).
              </li>
              <li>Users can order a traveling tour .</li>
              <p>
                <b>Technology:</b> React.js, Bootstrap, MongoDB, Express.js,
                Node.js, Private route, Firebase Authentication.
              </p>
            </ul>

            <div className="project_code">
              <a
                href="https://e-tutor-c3aaa.web.app/"
                target="_blank" rel="noreferrer" aria-disabled
              >
                Live Link
              </a>
              <a
                href="https://github.com/numansaady/e-tutor-website"
                target="_blank" rel="noreferrer" aria-disabled
              >
                Code Link
              </a>
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default ProjectDetails;
