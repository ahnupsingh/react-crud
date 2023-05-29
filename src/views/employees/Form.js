import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { generateId } from "../../utils";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/fields/InputField";
import EmployeeApi from "../../api/employee";
import AddressApi from "../../api/address";
import { useQuery } from "react-query";
import SelectField from "../../components/fields/SelectField";
import Card from "../../components/Card";
import { ROOT_URL } from "../../config/url";

const EmployeeForm = ({selectedEmployee = null }) => {
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
        <InputField
          label="Title"
          id="title"
          type="text"
          className="form-control"
          placeholder="Enter title"
          register={register}
          validationSchema={{ 
            required: "Title is required",
          }}
          errors={errors}
          required
        ></InputField>

        <InputField
          label="First name"
          id="firstName"
          type="text"
          className="form-control"
          register={register}
          validationSchema={{ 
            required: "First Name is required",
          }}
          errors={errors}
          required
        ></InputField>

        <label htmlFor="lastName">Last Name</label>
        <InputField
          id="lastName"
          type="text"
          className="form-control"
          register={register}
          validationSchema={{ 
            required: "Last Name is required",
          }}
          required
        />
        {errors.lastName && <span>This field is required</span>}

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
        <label htmlFor="email">email</label>
        <InputField
          id="email"
          type="text"
          className="form-control"
          register={register}
          validationSchema={{ 
            required: "Email is required",
          }}
          required
        />
        {errors.email && <span>This field is required</span>}

        <label htmlFor="salary">Salary ($)</label>
        <InputField
          id="salary"
          type="text"
          className="form-control"
          register={register}
          validationSchema={{ 
            required: "Salary is required",
          }}
          required
        />
        {errors.salary && <span>This field is required</span>}

        <div className="form-group">
          <label for="description">Description</label>
          <InputField
            id="description"
            type="text"
            className="form-control"
            placeholder="Enter description"
            register={register}
            validationSchema={{ 
              required: "Description is required",
            }}
            required
          />
          {errors.description && <span>This field is required</span>}
        </div>

          <InputField
            label="First name"
            id="firstName"
            type="text"
            className="form-control"
            {...register("title", { required: true })}
            errors={errors}
          ></InputField>

          <label htmlFor="lastName">Last Name</label>
          <input
            {...register("lastName", { required: true })}
            id="lastName"
            type="text"
            className="form-control"
          />
          {errors.lastName && <span>This field is required</span>}

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
          <label htmlFor="email">email</label>
          <input
            {...register("email", { required: true })}
            id="email"
            type="text"
            className="form-control"
          />
          {errors.email && <span>This field is required</span>}

          <label htmlFor="salary">Salary ($)</label>
          <input
            {...register("salary", { required: true })}
            id="salary"
            type="text"
            className="form-control"
          />
          {errors.salary && <span>This field is required</span>}

          <div className="form-group">
            <label for="description">Description</label>
            <input
              {...register("description", { required: true })}
              id="description"
              type="text"
              className="form-control"
              placeholder="Enter description"
            />
            {errors.description && <span>This field is required</span>}
          </div>

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
