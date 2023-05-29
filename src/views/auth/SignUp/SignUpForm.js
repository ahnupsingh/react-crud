import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthApi from "../../../api/auth";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/AuthProvider";
import { generateId } from "../../../utils";
import { LOGIN_URL } from "../../../config/url";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    profilephoto: "",
    password: "",
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
    AuthApi.signup(data).then((result) => {
      console.log("signup -> ", result);
      if (result.status === 201) {
        localStorage.setItem("user =---->", JSON.stringify(data));
        setUser(data);
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
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-signin">
        <div>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Full Name"
          />
          {errors.name && <span>This field is required</span>}
        </div>

        <div>
          <input
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Email"
          />
          {errors.email && (
            <span>
              {errors.email.type === "required"
                ? "This field is required"
                : "Invalid email address"}
            </span>
          )}
        </div>

        <div>
          <input
            type="number"
            {...register("phone", { required: true, pattern: [0 - 9] })}
            placeholder="Phone"
          />
          {errors.phone && (
            <span>
              {errors.phone.type === "required"
                ? "This field is required"
                : "Invalid Phone Number"}
            </span>
          )}
        </div>
        <div>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            placeholder="Password"
          />
          {errors.password && (
            <span>
              {errors.password.type === "required"
                ? "This field is required"
                : "Password must have at least 6 characters"}
            </span>
          )}
        </div>
        <div className="card">
          <div className="card-body p-3">
            <input
              type="file"
              {...register("profilePhoto", { required: true })}
              placeholder="Profile Photo"
              alt="Submit"
            />
            {errors.profilePhoto && (
              <span>
                {errors.profilePhoto.type === "required"
                  ? "This field is required"
                  : "It is invalid"}
              </span>
            )}
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn btn-lg btn-primary btn-block text-uppercase mt-3"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
