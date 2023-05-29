import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AuthApi from "../../api/auth";
import Swal from "sweetalert2";
import { generateId } from "../../utils";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FEED_URL } from "../../config/url";

const BlogForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    title: "",
    description: "",
    address: "",
    workType: "",
    createdAt: "",
  });
  //   useEffect(() => {
  //     if (user) {
  //       console.log("user", user);
  //       navigate(PROFILE_URL);
  //     }
  //   }, [user]);

  const onSubmit = (data) => {
    // setUser(data);
    data.id = generateId();
    // localStorage.setItem("user =---->", JSON.stringify(data));

    // call an API to login
    // when api gives success response, navigate to root url
    AuthApi.createBlog(data).then((result) => {
      console.log("signup -> ", result);
      if (result.status === 201) {
        localStorage.setItem("user =---->", JSON.stringify(data));
        setUser(data);
        navigate(FEED_URL);
        Swal.fire({
          icon: "success",
          title: "Added!",
          text: `Your Blog has been Added.`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "failure",
          title: "Failed!",
          text: `Your Blog has not been Added.`,
          showConfirmButton: false,
          timer: 1500,
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
        {errors.title && <span>This field is required</span>}
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          {...register("description", { required: true })}
          placeholder="Description "
        />
        {errors.description && <span>This field is required</span>}
      </div>
      <div>
        <label>Address:</label>

        <input
          type="text"
          {...register("address", { required: true })}
          placeholder="Address"
        />
        {errors.address && <span>This field is required</span>}
      </div>
      <div>
        <label>Work type:</label>

        <input
          type="text"
          {...register("workType", { required: true })}
          placeholder="Work Type (full time/part time)"
        />
        {errors.workType && <span>This field is required</span>}
      </div>
      <div>
        <label>Created At:</label>

        <input
          type="time"
          {...register("createdAt", { required: true })}
          placeholder="Created At"
        />
        {errors.createdAt && <span>This field is required</span>}
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
