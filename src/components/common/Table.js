import React from 'react';
import { useTable } from 'react-table';

const Table = ({ columns, data, onEdit, onDelete, onIsAdding }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  const pKey="id";

  return (
    <table {...getTableProps()} style={{ border: '1px solid black' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: '1px solid black',
                  background: 'aliceblue',
                  padding: '8px'
                }}
              >
                {column.render('Header')}
              </th>
            ))}
            <th
                            style={{
                              borderBottom: '1px solid black',
                              background: 'aliceblue',
                              padding: '8px'
                            }}
            >Actions</th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: '8px',
                    borderBottom: '1px solid black'
                  }}
                >
                  {cell.render('Cell')}
                </td>
              ))}
              <td
                style={{
                  padding: '8px',
                  borderBottom: '1px solid black'
                }}
              >
                <button
                    onClick={() => onEdit(row[pKey])}
                    className="btn btn-primary m-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(row[pKey])}
                    className="btn btn-danger m-1"
                  >
                    Delete
                  </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;