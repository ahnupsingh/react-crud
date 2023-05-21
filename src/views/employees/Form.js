import React from 'react';
import Swal from 'sweetalert2';
import { createEmployee } from '../../services';
import { useForm } from 'react-hook-form';
import { generateId } from '../../utils';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/fields/InputField';

const EmployeeForm = ({ employees, selectedEmployee=null, setEmployees }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const isEdit = selectedEmployee !== null;
  const navigate = useNavigate();

  const validate = (data) => {
    const {firstName, lastName, email, salary, title} = data;
    if (!firstName || !lastName || !email || !salary || !title) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }else{
      return false;
    }
  }

  const handleUpdate = (data) => {
    if(!validate(data)){
      return;
    };

    const id = selectedEmployee._id;
    const employee = {id: id, ...data};
    for (let i = 0; i < employees.length; i++) {
      if (employees[i]._id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    localStorage.setItem('employees_data', JSON.stringify(employees));
    setEmployees(employees);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleAdd = (data) => {
    console.log("Invalid data", data);
    if(!validate(data)){
      console.log("Invalid data", data);
      return;
    };

    const newEmployee = data;
    newEmployee._id = generateId();

    createEmployee(newEmployee).then((result) => {

      if(result.status === 201){
        employees.push(result.data);
        localStorage.setItem('employees_data', JSON.stringify(employees));
        setEmployees(employees);
    
        Swal.fire({
          icon: 'success',
          title: 'Added!',
          text: `${data.firstName} ${data.lastName}'s data has been Added.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }else{
        Swal.fire({
          icon: 'failure',
          title: 'Failed!',
          text: `${data.firstName} ${data.lastName}'s data has not been Added.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }

    })
  };

  return (
    <div className="small-container">
      <form onSubmit={handleSubmit(handleAdd)}>
        <InputField
          label="Title"
          id="title" 
          type="text"
          className="form-control" 
          placeholder="Enter title"
          {...register('title', { required: true })}
          errors={errors}
        ></InputField>
        
        <InputField
          label="First name"
          id="firstName" 
          type="text"
          className="form-control" 
          {...register('title', { required: true })}
          errors={errors}
        ></InputField>

        <label htmlFor="lastName">Last Name</label>
        <input {...register('lastName', { required: true })}
            id="lastName" 
            type="text"
            className="form-control"
        />
        {errors.lastName && <span>This field is required</span>}

        <label htmlFor="email">email</label>
        <input {...register('email', { required: true })}
            id="email" 
            type="text"
            className="form-control"
        />
        {errors.email && <span>This field is required</span>}

        <label htmlFor="salary">Salary ($)</label>
        <input {...register('salary', { required: true })}
            id="salary" 
            type="text"
            className="form-control"
        />
        {errors.salary && <span>This field is required</span>}

        <div className="form-group">
          <label for="description">Description</label>
          <input  {...register('description', { required: true })}
            id="description" 
            type="text"
            className="form-control"
            placeholder="Enter description"
          />
          {errors.description && <span>This field is required</span>}
        </div>

        <button type="submit" className="btn btn-primary" >Submit</button>
        <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => navigate('/')}
          />
      </form>
    </div>
  );
};

export default EmployeeForm;
