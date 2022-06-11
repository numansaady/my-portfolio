import React from "react";
import "./ResumeDetails.css";

const ResumeDetails = ({ item }) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-12">
      <div
        className="resume_icon border m-2 text-center py-3"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <img src={item?.iconLink} className="img-fluid p-2" alt="" />
        <p>{item?.iconName}</p>
      </div>
    </div>
  );
};

export default ResumeDetails;
