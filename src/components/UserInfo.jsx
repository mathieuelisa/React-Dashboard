import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  leftContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    boxShadow: '2px 4px 10px 1px rgba(201,201,201,0.47)',
    position: 'relative',
    height: 200,
  },
  singleTitle: {
    color: '#bcbaba',
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
});

const UserInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.leftContainer}>
      <div className={classes.editButton}>Edit</div>
      <h4 className={classes.singleTitle}>User informations</h4>
      <div className={classes.item}>
        <img
          src='https://www.gabrielgorgi.com/wp-content/uploads/2019/12/01.jpg'
          alt='avatar'
          className={classes.imgAvatar}
        />
        <div>
          <h2 className={classes.userName}>Mathieu ELISA</h2>
          <div className={classes.infos}>
            <p className={classes.infosTitle}>Phone:</p>
            <p>07 68 29 22 78</p>
          </div>
          <div className={classes.infos}>
            <p className={classes.infosTitle}>Address:</p>
            <p>18 rue des mimosas</p>
          </div>
          <div className={classes.infos}>
            <p className={classes.infosTitle}>Country:</p>
            <p>FRANCE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
