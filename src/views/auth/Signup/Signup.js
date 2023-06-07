import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthApi from "../../../api/auth";
import Swal from "sweetalert2";
import { generateId } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { LOGIN_URL } from "../../../config/url";
import "./sign.css";
const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    profilePhoto: "",
  });

  const onSubmit = (data) => {
    console.log("Invalid data", data);
    const newUser = data;
    newUser.id = generateId();

    AuthApi.signup(newUser).then((result) => {
      console.log(result);
      if (result.status === 201) {
        localStorage.setItem("employees_data", JSON.stringify(data));
        setUser(newUser);
        navigate(LOGIN_URL);
        Swal.fire({
          icon: "success",
          title: "Added!",
          text: `${data.name} 's data has not been Added.`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "failure",
          title: "Failed!",
          text: `${data.name} 's data has been Added.`,
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
        {errors.name && <span>Do not forget to fill Your Name*</span>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="number"
          {...register("phone", { required: true })}
          placeholder="Phone Number"
        />
        {errors.phone && (
          <span>Do not forget to fill your contact number*</span>
        )}
      </div>
      <div>
        <label>E-mail:</label>
        <input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
        />
        {errors.email && (
          <span>
            {errors.email.type === "required"
              ? "Do Not Forget to Fill Your Email*"
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
        {errors.password && <span>Do not forget to fill your Password*</span>}
      </div>
      <div>
        <label>Profile Photo:</label>
        <input type="file" placeholder="Password" />
      </div>
      <br />
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase text-center"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
