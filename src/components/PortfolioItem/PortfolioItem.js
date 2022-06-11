import React from "react";
import { Link } from "react-router-dom";
import "./PortfolioItem.css";

const PortfolioItem = ({ test }) => {
  const { img, projectName } = test;
  // console.log(portfolio);
  return (
    <div className="col-lg-4 projectItem">
      <div
        className="box project_box my-3  border p-3"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img className="img-fluid w-100" src={img} alt="" />
        <h2>{projectName}</h2>
        {/* <p>{description}</p> */}
        <Link to="/prjectDetails">
          <button className="details_btn">See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioItem;
