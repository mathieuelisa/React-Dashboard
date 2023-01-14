import React from 'react';
import { createUseStyles } from 'react-jss';
import Datatable from '../../components/Datatable';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const useStyles = createUseStyles({
  listContainer: {
    display: 'flex',
  },
  container: {
    flex: 5,
  },
});

const List = () => {
  const classes = useStyles();

  return (
    <div className={classes.listContainer}>
      <Sidebar />
      <div className={classes.container}>
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
