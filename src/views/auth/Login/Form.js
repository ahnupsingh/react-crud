import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthApi from "../../../api/auth";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/fields/Button";
import { PROFILE_URL } from "../../../config/url";
import InputField from "../../../components/fields/InputField";
import { Input } from "../../../components/inputs";
import { classnames } from "../../../utils";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  console.log(errors);

  useEffect(() => {
    if (user) {
      console.log("user", user);
      navigate(PROFILE_URL);
    }
  }, [user, navigate]);

  const onSubmit = (data) => {
    // setUser(data);
    console.log("user =---->", JSON.stringify(data));

    // call an API to login
    // when api gives success response, navigate to root url
    AuthApi.login(data).then((result) => {
      console.log("signin -> ", result);
      if (result.status === 200) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            // localStorage.setItem(
            //   "access_token",
            //   result.data.tokens.access_token
            // );
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
        <Input
          className={classnames({ "has-error": !!errors["email"] })}
          id="email"
          type="email"
          register={register}
          placeholder="Email"
          errors={errors}
        />
      </div>
      <div>
        <Input
          id="password"
          type="password"
          className={classnames({ "has-error": !!errors["password"] })}
          register={register}
          validationOptions={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Please enter a minimum of 8 characters",
            },
          }}
          placeholder="Password"
          errors={errors}
        />
      </div>
      <div className="d-flex custom-control custom-checkbox mb-3">
        <label className="custom-control-label" htmlFor="customCheck1">
          Forgot password?
        </label>
      </div>
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase"
        type="submit"
      >
        Sign in
      </button>
      <hr className="my-4" />
      <div className="social-login">
        <Button
          type="submit"
          className="btn btn-lg btn-google btn-block text-uppercase"
          text="Sign in with Google"
          icon="fab fa-google"
        ></Button>
        <Button
          type="submit"
          className="btn btn-lg btn-facebook btn-block text-uppercase"
          text="Sign in with Facebook"
          icon="fab fa-facebook-f"
        ></Button>
      </div>
    </form>
  );
};

export default LoginForm;
