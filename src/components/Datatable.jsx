import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from '../mocks/DatatableMock';
import '../mocks/DatatableMock.css';

const Datatable = () => {
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
