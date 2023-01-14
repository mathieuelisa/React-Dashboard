import React from 'react';
import { createUseStyles } from 'react-jss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import classNames from 'classnames';
import { rows } from '../mocks/TablesMock';

const useStyles = createUseStyles({
  tablesContainer: {},
  tablesCell: {},
  imgTables: {
    height: 30,
    marginRight: 10,
  },
  imgTablesWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  approved: {
    color: 'green',
    backgroundColor: '#deffde',
    padding: 5,
    borderRadius: 3,
  },
  pending: {
    color: 'orange',
    backgroundColor: '#fff7e8',
    padding: 5,
    borderRadius: 3,
  },
  cancel: {
    color: 'red',
    backgroundColor: '#ffdddd',
    padding: 5,
    borderRadius: 3,
  },
});

const Tables = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.tablesContainer}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tablesCell}>ID</TableCell>
            <TableCell className={classes.tablesCell}>Product</TableCell>
            <TableCell className={classes.tablesCell}>Customer</TableCell>
            <TableCell className={classes.tablesCell}>Date</TableCell>
            <TableCell className={classes.tablesCell}>Amount</TableCell>
            <TableCell className={classes.tablesCell}>Payment Method</TableCell>
            <TableCell className={classes.tablesCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className={classes.tablesCell}>
                <div className={classes.imgTablesWrapper}>
                  <img
                    src={row.img}
                    alt='images'
                    className={classes.imgTables}
                  />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className={classes.tablesCell}>
                {row.customer}
              </TableCell>
              <TableCell className={classes.tablesCell}>{row.date}</TableCell>
              <TableCell className={classes.tablesCell}>{row.amount}</TableCell>
              <TableCell className={classes.tablesCell}>{row.method}</TableCell>
              <TableCell className={classes.tablesCell}>
                <span
                  className={classNames(
                    row.status === 'Pending'
                      ? classes.pending
                      : row.status === 'Approved'
                      ? classes.approved
                      : classes.cancel
                  )}
                >
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
