import "./profile.scss";
import NavBar from '../../components/Navbar';
import Logout from "../auth/Logout";

export const Profile = () => {
  return (
    <>
    <NavBar />
    <div className="container profile-container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle my-5"
              src="https://i.imgur.com/C4egmYM.jpg"
            />
            <span className="font-weight-bold">Amelly</span>
            <span className="text-black-50">amelly12@bbb.com</span>
            <span className="mt-5"><Logout/></span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  placeholder="surname"
                />
              </div>
            </div>
            <div className="row mt-3">
              
              <div className="col-md-12">
                <label className="labels">PhoneNumber</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter phone number"
                  value=""
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter address"
                  value=""
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Email ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter email id"
                  value=""
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Education</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="education"
                  value=""
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="country"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <label className="labels">State/Region</label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  placeholder="state"
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Experience</h4>
            </div>
            <div className="col-md-12">
              <label className="labels">Experience in Designing</label>
              <input
                type="text"
                className="form-control"
                placeholder="experience"
                value=""
              />
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Additional Details</label>
              <input
                type="text"
                className="form-control"
                placeholder="additional details"
                value=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
