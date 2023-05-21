import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import NavBar from '../../components/Navbar';
import EmployeeForm from '../../views/employees/Form';
import { deleteEmployee, getAllEmployees } from '../../services';
import List from '../../views/employees/List';
import { useQuery } from 'react-query';
import Spinner from '../../layouts/Spinner';
import Alert from '../../layouts/Alert';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';

const Dashboard = ({ setIsAuthenticated }) => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { data, isLoading, error } = useQuery('employees', getAllEmployees);
  const navigate = useNavigate();

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem('employees_data'));
    // if (data !== null && Object.keys(data).length !== 0) setEmployees(data);
  }, []);

  const handleEdit = id => {
    const [employee] = employees.filter(employee => employee._id === id);
    setSelectedEmployee(employee);
    navigate('/form');
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to delte this employee!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [employee] = employees.filter(employee => employee._id === id);

        deleteEmployee(id).then((result) => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });
  
          const employeesCopy = employees.filter(employee => employee._id !== id);
          localStorage.setItem('employees_data', JSON.stringify(employeesCopy));
          setEmployees(employeesCopy);
        })
      }
    });
  };

  return (
    <>
      <NavBar
        setIsAuthenticated={setIsAuthenticated}
      />
      <section className="home">
          {/* <div className="text">Dashboard Sidebar</div> */}
          <div className="container">
        {error && <Alert
          type="danger"
          body={error.message}
          ></Alert>}
        {isLoading && <Spinner></Spinner>}
        {!isLoading && !isAdding && !isEditing && 
          <List
            employees={data.data}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            setIsAdding={setIsAdding}
            setIsEditing={setIsEditing}
          />
        }
        {(isAdding || isEditing) && (
          <EmployeeForm
            employees={employees}
            selectedEmployee={selectedEmployee}
            setEmployees={setEmployees}
          />
        )}
    </div>
    <Footer/>
    </section>
    <Sidebar/>
    </>
  );
};

export default Dashboard;
