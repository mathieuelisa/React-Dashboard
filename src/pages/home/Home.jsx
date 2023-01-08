import React from 'react';
import { createUseStyles } from 'react-jss';
import Sidebar from '../../components/Sidebar';

const useStyles = createUseStyles({
  mainContainer: {
    display: 'flex',
  },
  container: {
    backgroundColor: 'pink',
    flex: 5,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Sidebar />
      <div className={classes.container}>
        <p>my container</p>
      </div>
    </div>
  );
};

export default Home;
