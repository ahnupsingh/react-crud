import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthApi from "../../../api/auth";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ROOT_URL } from "../../../config/url";
import Button from "../../../components/fields/Button";

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
      navigate(ROOT_URL);
    }
  }, [user]);

  const onSubmit = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));

    AuthApi.signin(data).then((result) => {
      console.log("signin", result);
      if (result.status === 200) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            localStorage.setItem(
              "access_token",
              result.data.tokens.access_token
            );
            localStorage.setItem("user", JSON.stringify(data));
            setUser(data);

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
      <div className="d-flex custom-control custom-checkbox mb-3">
        <label className="custom-control-label" for="customCheck1">
          Forgot password?
        </label>
      </div>
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase"
        type="submit"
      >
        Sign in
      </button>
      <hr class="my-4" />
      <div className="social-login">
        <Button
          type="submit"
          className="btn btn-lg btn-google btn-block text-uppercase"
          text="Sign in with Google"
          icon="fab fa-google"
        >
        </Button>
        <Button
          type="submit"
          className="btn btn-lg btn-facebook btn-block text-uppercase"
          text="Sign in with Facebook"
          icon="fab fa-facebook-f"
        >
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
