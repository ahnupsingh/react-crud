import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AuthApi from "../../../api/auth";
import Swal from "sweetalert2";
import { generateId } from "../../../utils";
import { useAuth } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { LOGIN_URL, PROFILE_URL, ROOT_URL } from "../../../config/url";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useAuth();
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
    <form onSubmit={handleSubmit(onSubmit)} className="form-signin">
      <div>
        <input
          type="text"
          {...register("firstname", { required: true })}
          placeholder="First name"
        />
        {errors.firstname && <span>This field is required</span>}
      </div>
      <div>
        <input
          type="text"
          {...register("lastname", { required: true })}
          placeholder="Last name "
        />
        {errors.lastname && <span>This field is required</span>}
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
          type="text"
          {...register("address", { required: true })}
          placeholder="Address"
        />
        {errors.address && <span>This field is required</span>}
      </div>
      <div>
        <input
          type="number"
          {...register("phonenumber", { required: true })}
          placeholder="Phone number"
        />
        {errors.phonenumber && <span>This field is required</span>}
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
      <div>
        <input
          type="file"
          {...register("profilephoto", { required: true })}
          placeholder="Profile Photo"
        />
        {errors.profilephoto && <span>This field is required</span>}
      </div>
      <br />
      {/* <div className="d-flex custom-control custom-checkbox mb-3">
        <label className="custom-control-label" for="customCheck1">
          Forgot password?
        </label>
      </div> */}
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase"
        type="submit"
      >
        Submit
      </button>
      <hr class="my-4" />
      {/* <div className="social-login">
        <button
          class="btn btn-lg btn-google btn-block text-uppercase"
          type="submit"
        >
          <i class="fab fa-google mr-2"></i> Sign in with Google
        </button>
        <button
          class="btn btn-lg btn-facebook btn-block text-uppercase"
          type="submit"
        >
          <i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook
        </button>
      </div> */}
    </form>
  );
};

export default SignupForm;
