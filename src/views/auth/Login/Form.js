import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthApi from "../../../api/auth";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { PROFILE_URL } from "../../../config/url";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log("user", user);
    }
  }, [user]);

  const onSubmit = (data) => {
    localStorage.setItem("user =---->", JSON.stringify(data));

    AuthApi.login(data).then((result) => {
      console.log("signin -> ", result);
      if (result.status === 200) {
        navigate(PROFILE_URL);
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            localStorage.setItem("user", JSON.stringify(result.data));
            setUser(result.data);
            Swal.fire({
              icon: "success",
              title: "Successfully logged in!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } else {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: "error",
              title: "Error!",
              text: "Incorrect email or password.",
              showConfirmButton: true,
            });
          },
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-signin">
      <div>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Name"
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
          type="password"
          {...register("password", { required: true, minLength: 5 })}
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
      <div className="d-flex custom-control custom-checkbox mb-3">
        <label className="custom-control-label" for="customCheck1">
          Forgot password?
        </label>
      </div>
      <div
        className="box"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <button
          className="btn btn-lg btn-primary btn-block text-uppercase "
          type="submit"
        >
          Sign in
        </button>
        <Link to="/signup">
          <button className="btn btn-lg btn-primary btn-block text-uppercase ">
            Sign up
          </button>
        </Link>
      </div>
      <hr class="my-4" />
      <div className="social-login">
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
      </div>
    </form>
  );
};

export default LoginForm;
