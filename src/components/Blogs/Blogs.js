import React from "react";
import "./Blogs.css";
import ComingBlog from "../ComingBlog/ComingBlog";
const my_blog = [
  {
    id: 1,
    img: "https://media.istockphoto.com/photos/cyber-security-web-development-and-work-in-it-concept-picture-id1289411982?b=1&k=20&m=1289411982&s=170667a&w=0&h=0R3OXR4L6LOGphYA3sul4bWQwpGj_DSl05ENiP2kRZg=",
    name: "javascript",
    coming: "coming soon",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "react.js",
    coming: "coming soon",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    name: "node.js",
    coming: "coming soon",
  },
];

const Blogs = () => {
  return (
    <div className="container">
      <div
        className="blog_section p-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h2>Blogs</h2>
        <div className="row">
          {my_blog.map((blog) => (
            <ComingBlog key={blog.id} blog={blog}></ComingBlog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
