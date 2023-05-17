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
    </div>
  );
};

export default List;
