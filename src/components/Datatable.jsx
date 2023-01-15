import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../mocks/DatatableMock';
import '../mocks/DatatableMock.css';

const actionColumn = [
  {
    field: 'action',
    headerName: 'Action',
    width: 130,
    renderCell: () => {
      return (
        <div className='actionsContainer'>
          <span className='view'>View</span>
          <span className='delete'>Delete</span>
        </div>
      );
    },
  },
];

const Datatable = () => {
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
