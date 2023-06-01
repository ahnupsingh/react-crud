import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthApi from "../../../api/auth";
import Swal from "sweetalert2";
import { generateId } from "../../../utils";
import { useAuth } from "../../../context/AuthProvider";
import InputField from "../../../components/fields/InputField";
import { useNavigate } from "react-router-dom";
import { ROOT_URL, LOGIN_URL } from "../../../config/url";
import { useMutation } from "react-query";
const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  // const addUser = (ad) => {
  //   AuthApi.signup(ad);
  // };

 
  // const { mutate: addBlog } = useMutation(addUser());
    

  // const onSubmit = (data) => {
  //   const blog = { data };
  //   addBlog(blog);
  // };

  const onSubmit = (data) => {
    console.log("Invalid data", data);
    const newUser = data;
    newUser.id = generateId();

    AuthApi.signup(newUser).then((result) => {
      if (result.status === 201) {
        console.log(result.data);
        localStorage.setItem("employees_data", JSON.stringify(data));
        setUser(newUser);
        navigate(LOGIN_URL);
        Swal.fire({
          icon: "success",
          title: "Added!",
          text: `${data.name} 's data has been Added.`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "failure",
          title: "Failed!",
          text: `${data.name} 's data has not been Added.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-signin">
      <div>
        <label>Name:</label>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Name"
        />
        {errors.name && <span style={{ color: "red" }}>Required*</span>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="number"
          {...register("phone", { required: true })}
          placeholder="Phone Number"
        />
        {errors.phone && <span style={{ color: "red" }}>Required*</span>}
      </div>
      <div>
        <label>E-mail:</label>
        <input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
        />
        {errors.email && (
          <span style={{ color: "red" }}>
            {errors.email.type === "required"
              ? "This field is required*"
              : "Invalid email address*"}
          </span>
        )}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && <span style={{ color: "red" }}>Required*</span>}
      </div>
      <div>
        <label>Profile Photo:</label>
        <input
          type="file"
          {...register("profilePhoto", { required: true })}
          placeholder="Password"
        />
        {errors.profilePhoto && <span style={{ color: "red" }}>Required*</span>}
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

export default SignupForm;
