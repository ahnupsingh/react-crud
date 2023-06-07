import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthApi from "../../api/auth";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthProvider";
import { generateId } from "../../utils";
import { useNavigate } from "react-router-dom";
import { FEED_URL } from "../../config/url";

const Cartname = () => {
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

    AuthApi.cartBlog(newBlog).then((result) => {
      console.log(result);
      if (result.status === 201) {
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
          placeholder="Enter Title"
        />
        {errors.title && <span>Title is mandatory field*</span>}
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          {...register("description", { required: true })}
          placeholder="Enter Description"
        />
        {errors.description && <span>Description is mandatory field*</span>}
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          {...register("location", { required: true })}
          placeholder="Address"
        />
        {errors.location && <span>Address is mandatory field*</span>}
      </div>

      <div>
        <label>Choose Date:</label>
        <input type="date" {...register("chooseDate", { required: true })} />
        {errors.chooseDate && <span>Choose The Date*</span>}
      </div>
      <br />
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase"
        type="submit"
      >
        Add Cart
      </button>
    </form>
  );
};

export default Cartname;
