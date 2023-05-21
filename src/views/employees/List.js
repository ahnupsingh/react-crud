import React, {useMemo} from 'react';
import Table from '../../layouts/Table';

const List = ({ employees, handleEdit, handleDelete, setIsAdding, setIsEditing }) => {

  // const formatter = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  //   minimumFractionDigits: null,
  // });

  const columns = useMemo(
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
      </div>
      <Table
            // header='Employees'
            columns={columns}
            data={employees}
            className="striped-table"
            onEdit={handleEdit}
            onDelete={handleDelete}
            onIsAdding={setIsAdding}
            onIsEditing={setIsEditing}
      />
    </div>
  );
};

export default List;
