import { Typewriter } from "react-simple-typewriter";
import jamilrayhan from "../images/jmailrayhan.png";
import "./Hero.css";

// import "react-simple-typewriter/dist/index.js";
const Hero = () => {
  // const handleDone = () => {
  //   console.log(`Done after 5 loops!`);
  // };
  return (
    <div>
      <div className="container">
        <div className="hero_section">
          <div className="top_bar">
            <div className="hero_main py-3">
              <div className="row py-5">
                <div className="col-lg-6 ">
                  <div className="hero_text pt-3">
                    <span className="display-4 fw-bold">I'm </span>
                    <h2 className="display-2 fw-bold">NUMAN </h2>
                    <h2 className="display-2 fw-bold">SAADY</h2>
                    <h3 className="display-3">
                      <Typewriter
                        words={[
                          "Front End Developer",
                          "React Developer",
                          "MERN Stack Developer",
                        ]}
                        loop={false}
                        cursor
                        // cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        // onLoopDone={handleDone}
                      />
                    </h3>
                    <div className="hero_icon">
                      <a
                        href="https://www.linkedin.com/in/numansaadi/"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/numansaady/"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/numansaady/"
                        target="_blank" rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  ">
                  <div className="hero_img text-end">
                    <img src={jamilrayhan} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
