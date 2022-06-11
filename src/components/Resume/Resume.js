import React, { useState } from "react";
import "./Resume.css";
import Icons from "../Icons/Icons";
import ResumeDetails from "../ResumeDetails/ResumeDetails";

const Resume = () => {
  const [items, setItems] = useState(Icons);
  const filterItem = (categoryItem) => {
    const updatedItems = Icons.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  };
  return (
    <div className="container">
      <div className="resume_section p-5">
        {/* <h2>Resume</h2>
        <h2>
          Combination of Skill <br /> & Experience
        </h2> */}
        {/* <div className="row pt-5">
          <div className="col-lg-4" data-aos="fade-up" data-aos-duration="3000">
            <div className="educational_skill">
              <h2>Educational Skill</h2>

              <div
                className="education d-flex justify-content-between  pe-5 "
                data-aos="fade-down"
              >
                <p>Takmil fil hadis</p>
                <span>2017</span>
              </div>
              <div className="education d-flex justify-content-between pe-5">
                <p>Political since</p>
                <span>2021</span>
              </div>
            </div>
          </div>
          <div className="col-lg-8" data-aos="fade-up" data-aos-duration="3000">
            <div className="programming_skill">
              <h2>Programming Skill</h2>
              <div className="row">
                <div className="col-lg-6">
                  <div className="skill html">
                    <span>html</span>
                  </div>
                  <div className="skill css">
                    <span>css 3</span>
                  </div>
                  <div className="skill bootstrap">
                    <span>Bootstrap 5</span>
                  </div>
                  <div className="skill tailwind">
                    <span>tailwind css</span>
                  </div>
                  <div className="skill material">
                    <span>material-ui</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="skill react">
                    <span>React</span>
                  </div>
                  <div className="skill javascript">
                    <span>Javascript</span>
                  </div>
                  <div className="skill es6">
                    <span>es6</span>
                  </div>
                  <div className="skill node">
                    <span>Node</span>
                  </div>
                  <div className="skill mongodb">
                    <span>mongodb</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row" data-aos="fade-up" data-aos-duration="2000">
          <h2>Programming Skill</h2>
          <div className="category_btn">
            <button onClick={() => setItems(Icons)}>All</button>
            <button onClick={() => filterItem("frontend")}>Frontend</button>
            <button onClick={() => filterItem("backend")}>Backend</button>
            <button onClick={() => filterItem("tools")}>Tools</button>
          </div>
          {items.map((item) => (
            <ResumeDetails item={item} key={item.id}></ResumeDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
