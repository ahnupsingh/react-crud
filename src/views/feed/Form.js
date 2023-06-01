import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthApi from "../../api/auth";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthProvider";
import { generateId } from "../../utils";
import { useNavigate } from "react-router-dom";
import { FEED_URL } from "../../config/url";

const BlogForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
 
  const { user, setUser } = useAuth();

  const onSubmit = (data) => {
    console.log("Invalid data", data);
    const newBlog = data;
    newBlog.id = generateId();

    AuthApi.createBlog(newBlog).then((result) => {
      if (result.status === 201) {
        console.log(result.data);
        localStorage.setItem("employees_data", JSON.stringify(data));
        setUser(newBlog);
        navigate(FEED_URL);
        Swal.fire({
          icon: "success",
          title: "Added!",
          text: `Your Blog has been Added.`,
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        Swal.fire({
          icon: "failure",
          title: "Failed!",
          text: `Your Blog has not been Added.`,
          showConfirmButton: false,
          timer: 3000,
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-signin">
      <div>
        <label>Title:</label>
        <input
          type="text"
          {...register("title", { required: true })}
          placeholder="Title"
        />
        {errors.title && <span style={{ color: "red" }}>Required*</span>}
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          {...register("description", { required: true })}
          placeholder="Description"
        />
        {errors.description && <span style={{ color: "red" }}>Required*</span>}
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          {...register("location", { required: true })}
          placeholder="Address"
        />
        {errors.location && <span style={{ color: "red" }}>Required*</span>}
      </div>
      <div>
        <label>Work Type:</label>
        <input
          type="text"
          {...register("workType", { required: true })}
          placeholder="Work Type(Full-Time / Part- Time)"
        />
        {errors.workType && <span style={{ color: "red" }}>Required*</span>}
      </div>
      <div>
        <label>Created At:</label>
        <input
          type="time"
          {...register("createdAt", { required: true })}
          placeholder="Created At"
        />
        {errors.createdAt && <span style={{ color: "red" }}>Required*</span>}
      </div>
      <br />
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
