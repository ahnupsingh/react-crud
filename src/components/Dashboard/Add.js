import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { createEmployee } from '../../services';

const Add = ({ employees, setEmployees, setIsAdding }) => {

  const [details, setDetails] = useState({
    title: "",
    lastName: "",
    firstName: "",
    location: "",
    description: "",
  });

  const handleAdd = e => {
    e.preventDefault();
    const {firstName, lastName, location, salary, title} = details;
    if (!firstName || !lastName || !location || !salary || !title) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const newEmployee = details;

    createEmployee(newEmployee).then((result) => {

      if(result.status === 201){
        employees.push(result.data);
        localStorage.setItem('employees_data', JSON.stringify(employees));
        setEmployees(employees);
        setIsAdding(false);
    
        Swal.fire({
          icon: 'success',
          title: 'Added!',
          text: `${firstName} ${lastName}'s data has been Added.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }else{
        Swal.fire({
          icon: 'failure',
          title: 'Failed!',
          text: `${firstName} ${lastName}'s data has not been Added.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }

    })
  };

  return (
    <div className="small-container">

      <form onSubmit={handleAdd}>
        <div className="form-group">
          <label for="title">Title</label>
          <input id="title"
            type="text"
            name="title"
            value={details["title"]}
            onChange={e => setDetails({...details, title: e.target.value})} 
            className="form-control" 
            placeholder="Enter title"/>
        </div>

        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={details["firstName"]}
          onChange={e => setDetails({...details, firstName: e.target.value})}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={details["lastName"]}
          onChange={e => setDetails({...details, lastName: e.target.value})}
        />
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          name="location"
          value={details["location"]}
          onChange={e => setDetails({...details, location: e.target.value})}
        />
        <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={details["salary"]}
          onChange={e => setDetails({...details, salary: e.target.value})}
        />

        <div className="form-group">
          <label for="title">Description</label>
          <input id="description"
            type="text"
            name="description"
            value={details["description"]}
            onChange={e => setDetails({...details, description: e.target.value})} 
            className="form-control" 
            placeholder="Enter description"
          />
        </div>

        <button type="submit" className="btn btn-primary" >Submit</button>
        <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
      </form>
    </div>
  );
};

export default Add;
