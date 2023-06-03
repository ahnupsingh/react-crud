import React from "react";
import BlogForm from "./Form";
import "../auth/auth.scss";

const CreateBlog = () => {


  return (
    <div className="auth-container" style={{height:"auto"}} >
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Create Your Own Blog!!!</h5>
              <BlogForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
