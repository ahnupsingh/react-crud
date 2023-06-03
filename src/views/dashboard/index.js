import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import NavBar from "../../components/Navbar";
import EmployeeForm from "../../views/employees/Form";
import List from "../../views/employees/List";
import { useQuery } from "react-query";
import Spinner from "../../layouts/Spinner";
import Alert from "../../layouts/Alert";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Sidebar } from "../../components/Sidebar";
import { useNavigation } from "../../context/NavigationProvider";
import { employeesQueryConfig } from "../../config/query";
import EmployeeApi from "../../api/employee";
import { EMPLOYEE_FORM } from "../../config/url";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { data, isLoading, error, refetch } = useQuery(
    "employees",
    EmployeeApi.getAllEmployees,
    employeesQueryConfig
  );
  const navigate = useNavigate();
  const { mode, setMode } = useNavigation();

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem('employees_data'));
    // if (data !== null && Object.keys(data).length !== 0) setEmployees(data);
  }, []);

  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee._id === id);
    setSelectedEmployee(employee);
    navigate(EMPLOYEE_FORM);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to delte this employee!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee._id === id);

        EmployeeApi.deleteEmployee(id).then((result) => {
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });

          const employeesCopy = employees.filter(
            (employee) => employee._id !== id
          );
          localStorage.setItem("employees_data", JSON.stringify(employeesCopy));
          setEmployees(employeesCopy);
        });
      }
    });
  };

  return (
    <>
      <NavBar />
      <section className={`home ${mode}`}>
        <div className="container">
          {error && <Alert type="danger" body={error.message}></Alert>}
          {isLoading && <Spinner></Spinner>}
          {!isLoading && data && (
            <List
              employees={data.data}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              setIsAdding={setIsAdding}
              setIsEditing={setIsEditing}
            />
          )}
          {(isAdding || isEditing) && (
            <EmployeeForm
              employees={employees}
              selectedEmployee={selectedEmployee}
              setEmployees={setEmployees}
            />
          )}
        </div>
        <Footer />
      </section>
      <Sidebar />
    </>
  );
};

export default Dashboard;
