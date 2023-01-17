import React from 'react';
import { createUseStyles } from 'react-jss';
import Charts from '../../components/Charts';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Tables from '../../components/Tables';
import UserInfo from '../../components/UserInfo';

const useStyles = createUseStyles({
  singleContainer: {
    display: 'flex',
  },
  container: {
    flex: 6,
  },
  topContainer: {
    display: 'flex',
    padding: 20,
    gap: 20,
  },
  singleTitle: {
    color: '#bcbaba',
  },
  leftContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    boxShadow: '2px 4px 10px 1px rgba(201,201,201,0.47)',
    position: 'relative',
    height: 200,
  },
  rightContainer: {
    flex: 2,
  },
  item: {
    display: 'flex',
    marginTop: 20,
  },
  imgAvatar: {
    height: 100,
    width: 100,
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: 20,
  },
  editButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    fontSize: 14,
    color: 'green',
    cursor: 'pointer',
    backgroundColor: '#deffde',
    borderRadius: '0 0 0 5px',
    '&:hover': {
      backgroundColor: '#d0fcd0',
      transition: '0.8s',
    },
  },
  userDetails: {},
  infos: {
    display: 'flex',
    marginBottom: 15,
  },
  userName: {
    marginBottom: 10,
    color: '#9e9c9c',
  },
  infosTitle: {
    marginRight: 10,
  },
  bottomTitle: {
    color: '#bcbaba',
    marginBottom: 10,
  },
  bottomContainer: {
    padding: 20,
  },
});

const Single = () => {
  const classes = useStyles();
  return (
    <div className={classes.singleContainer}>
      <Sidebar />
      <div className={classes.container}>
        <Navbar />
        <div className={classes.topContainer}>
          <UserInfo />
          <div className={classes.rightContainer}>
            <Charts title={'User spending 6 months'} />
          </div>
        </div>
        <div className={classes.bottomContainer}>
          <h4 className={classes.bottomTitle}>Latest transactions</h4>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Single;
