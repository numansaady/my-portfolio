import React from "react";
import "./ComingBlog.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ComingBlog = ({ blog }) => {
  const notify = () => toast("blog is coming soon");

  return (
    <div className="col-lg-4">
      <div className="box coming_soon m-3 ">
        <img className="img-fluid" src={blog.img} alt="" />
        <h5>{blog.name}</h5>
        <p>{blog.description}</p>

        <button className="details_btn" onClick={notify}>
          {blog.coming}
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ComingBlog;
