import React from 'react';
import Table from '../common/Table';

const List = ({ employees, handleEdit, handleDelete, setIsAdding }) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  const pKey="id";

  const columns = React.useMemo(
    () => [
    {
        Header: 'S/N',
        accessor: 'sn'
      },
      {
        Header: 'First Name',
        accessor: 'firstName'
      },
      {
        Header: 'Last Name',
        accessor: 'lastName'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Salary',
        accessor: 'salary'
      },
      {
        Header: 'Date',
        accessor: 'date'
      }
    ],
    []
  );

  return (
    <div className="contain-table">
      <div className='d-flex justify-content-between align-items-center'>
        <h1>Employees</h1>
        <a className="nav-link" onClick={() => setIsAdding(true)}>Add</a>
      </div>
      <Table
            columns={columns}
            data={employees}
            className="striped-table"
            onEdit={handleEdit}
            onDelete={handleDelete}
            onIsAdding={setIsAdding}
      />
      <table className="striped-table">
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{formatter.format(employee.salary)}</td>
                <td>{employee.createdAt} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee[pKey])}
                    className="btn btn-primary"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee[pKey])}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
