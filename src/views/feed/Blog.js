import React from "react";
import BlogForm from "./Blogform";

const Blog = () => {
  return (
    <div class="auth-container" style={{ height: "auto" }}>
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Create your blog</h5>
              <BlogForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
