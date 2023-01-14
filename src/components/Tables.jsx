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

const rows = [
  {
    id: 1929332,
    product: 'Razer blade 15',
    img: 'https://www.elasslihitech.com/wp-content/uploads/2021/10/81w-fj6Bo2L._AC_SL1500_.jpg',
    customer: 'Michael Jackson',
    date: '1 july',
    amount: 1223,
    method: 'Cash on Delivery',
    status: 'Cancel',
  },
  {
    id: 192930244,
    product: 'Acer',
    img: 'https://www.laptopspirit.fr/wp-content/uploads/new/2022/02/Acer-Aspire-7-A715-42G-R2TW-1.jpg',
    customer: 'Parisak Inthara',
    date: '1 july',
    amount: 772,
    method: 'Online',
    status: 'Approved',
  },
  {
    id: 19293099,
    product: 'PS5 remote',
    img: 'https://media.direct.playstation.com/is/image/psdglobal/dualsense-ps5-controller-white-accessory-front',
    customer: 'Mathieu Elisa',
    date: '1 july',
    amount: 191,
    method: 'Online',
    status: 'Pending',
  },
  {
    id: 1929302827,
    product: 'Adidas sneaker',
    img: 'https://m.media-amazon.com/images/I/81NkBUoKYjL._AC_UL1500_.jpg',
    customer: 'Vina Inthara',
    date: '1 july',
    amount: 92,
    method: 'Online',
    status: 'Approved',
  },
  {
    id: 1929302626,
    product: 'XBOX 260',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Microsoft-Xbox-360-E-wController.jpg/220px-Microsoft-Xbox-360-E-wController.jpg',
    customer: 'Melanie Elisa',
    date: '1 july',
    amount: 278,
    method: 'Online',
    status: 'Approved',
  },
];

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
                  <img src={row.img} className={classes.imgTables} />
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
