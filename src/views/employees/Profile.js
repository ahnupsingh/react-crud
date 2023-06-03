import "./profile.scss";
import NavBar from "../../components/Navbar";
import Logout from "../auth/Logout";
import { useAuth } from "../../context/AuthProvider";
import InputField from "../../components/fields/InputField";
import ProfileApi from "../../api/profile";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

export const Profile = () => {
  const { user, setUser } = useAuth();
  console.log("user", user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ ...user });

  const onSubmit = (data) => {
    console.log("data", data);
    ProfileApi.edit(user.id, data).then((result) => {
      if (result.status === 200) {
        localStorage.setItem("profile edit", JSON.stringify(result.data));
        setUser(result.data);

        Swal.fire({
          icon: "success",
          title: "Added!",
          text: `${data.firstName} ${data.lastName}'s data has been Added.`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "failure",
          title: "Failed!",
          text: `${data.name} data has not been updated.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <NavBar />
      <div className="container profile-container rounded bg-white mt-5 mb-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle my-5"
                  src={
                    user.profilePhoto != ""
                      ? user.profilePhoto
                      : "https://i.imgur.com/C4egmYM.jpg"
                  }
                />
                <span className="font-weight-bold">{user.name}</span>
                <span className="text-black-50">{user.email}</span>
                <span className="mt-5">
                  <Logout />
                </span>
              </div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile</h4>
                </div>
                <div className="row mt-2">
                  <InputField
                    id="name"
                    label="Name"
                    placeholder="first name"
                    type="text"
                    className="form-contol"
                    errors={errors}
                    {...register("name", { required: true })}
                  ></InputField>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <InputField
                      id="email"
                      label="Email"
                      placeholder="email"
                      type="text"
                      className="form-contol"
                      errors={{}}
                      {...register("email", { required: true })}
                    ></InputField>
                  </div>
                  {/* <div className="col-md-12">
                <label className="labels">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter address"
                  value=""
                />
              </div> */}
                  <div className="col-md-12">
                    <InputField
                      id="phone"
                      label="Phone"
                      placeholder="phone"
                      type="text"
                      className="form-contol"
                      errors={{}}
                      {...register("phone", { required: true })}
                    ></InputField>
                  </div>
                </div>
                <div className="row mt-3"></div>
                <div className="mt-5 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary profile-button"
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
