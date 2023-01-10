import React from 'react';
import { createUseStyles } from 'react-jss';
import Charts from '../../components/Charts';
import Features from '../../components/Features';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Widget from '../../components/Widget';

const useStyles = createUseStyles({
  mainContainer: {
    display: 'flex',
  },
  container: {
    flex: 5,
  },
  widgetsContainer: {
    display: 'flex',
    padding: 20,
  },
  secondWidgetContainer: {
    display: 'flex',
    padding: 20,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Sidebar />
      <div className={classes.container}>
        <Navbar />
        <div className={classes.widgetsContainer}>
          <Widget type='users' />
          <Widget type='balances' />
          <Widget type='orders' />
          <Widget type='earnings' />
        </div>

        <div className={classes.secondWidgetContainer}>
          <Charts />
          <Features />
        </div>
      </div>
    </div>
  );
};

export default Home;
