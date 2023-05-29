import React from "react";
import BlogForm from "./BlogForm";

const Blog = () => {
  return (
    <>
      <div class="auth-container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h1 class="card-title text-center">Create New Blog</h1>
                <BlogForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
