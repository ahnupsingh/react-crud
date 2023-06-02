import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { generateId } from "../../utils";
import { useNavigate } from "react-router-dom";
import EmployeeApi from "../../api/employee";
import AddressApi from "../../api/address";
import { useQuery } from "react-query";
import SelectField from "../../components/fields/SelectField";
import Card from "../../components/Card";
import { ROOT_URL } from "../../config/url";
import { Input } from "../../components";

const EmployeeForm = ({ selectedEmployee = null }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const isEdit = selectedEmployee !== null;
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const statesQuery = useQuery("states", () => AddressApi.getStates());

  const citiesQuery = useQuery(["cities", selectedState], () =>
    AddressApi.getCities(selectedState)
  );

  const postalCodesQuery = useQuery(["postalCodes", selectedCity], () =>
    AddressApi.getPostalCodes(selectedCity)
  );

  const states = statesQuery.data?.data || [];
  const cities = citiesQuery.data?.data[selectedState] || [];
  const postalCodes = postalCodesQuery.data?.data[selectedCity] || [];

  const handleUpdate = (data) => {
    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${data.firstName} ${data.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleAdd = (data) => {
    const newEmployee = data;
    newEmployee._id = generateId();

    EmployeeApi.createEmployee(newEmployee).then((result) => {
      if (result.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Added!",
          text: `${data.firstName} ${data.lastName}'s data has been Added.`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(ROOT_URL);
      } else {
        Swal.fire({
          icon: "failure",
          title: "Failed!",
          text: `${data.firstName} ${data.lastName}'s data has not been Added.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="small-container">
      <Card>
        <form onSubmit={handleSubmit(isEdit ? handleUpdate : handleAdd)}>
          <Input
            label="Title"
            id="title"
            type="text"
            placeholder="Enter title"
            register={register}
            validationSchema={{
              required: "Title is required",
            }}
            errors={errors}
          />

          <Input
            label="First name"
            id="firstName"
            type="text"
            className="form-control"
            register={register}
            validationSchema={{
              required: "First Name is required",
            }}
            errors={errors}
          />

          <Input
            label={"Last Name"}
            id="lastName"
            type="text"
            register={register}
            validationSchema={{
              required: "Last Name is required",
            }}
            errors={errors}
          />

          <label htmlFor="address">Address</label>
          <div className="row">
            <div className="col-12 col-md-4">
              <SelectField
                id="state"
                label={<small>State</small>}
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="form-control"
                options={states}
              />
            </div>

            <div className="col-12 col-md-4">
              <SelectField
                id={"city"}
                label={<small>City</small>}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="form-control"
                options={cities}
                disabled={!selectedState}
              />
            </div>

            <div className="col-12 col-md-4">
              <SelectField
                id={"code"}
                label={<small>Code</small>}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="form-control"
                options={postalCodes}
                disabled={!selectedState}
              />
            </div>
          </div>
          <Input
            label={"email"}
            id="email"
            type="email"
            register={register}
            validationSchema={{
              required: "Email is required",
            }}
            errors={errors}
          />

          <Input
            label={"salary ($)"}
            id="salary"
            type="text"
            className="form-control"
            register={register}
            validationSchema={{
              required: "Salary is required",
            }}
            errors={errors}
          />

          <Input
            id="description"
            type="text"
            className="form-control"
            placeholder="Enter description"
            register={register}
            validationSchema={{
              required: "Description is required",
            }}
            errors={errors}
          />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => navigate("/")}
          />
        </form>
      </Card>
    </div>
  );
};

export default EmployeeForm;
