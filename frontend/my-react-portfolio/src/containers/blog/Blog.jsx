import React from "react";
import { BlogCard } from "../../components";
import "./blog.css";

const Blog = () => {
  return (
    <div id="blog" className="dami__blog section__padding ">
      <div className="dami__blog-head">
        <div></div>
        <h3>My Blog</h3>
      </div>
      <div className="dami__blog-body">
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
