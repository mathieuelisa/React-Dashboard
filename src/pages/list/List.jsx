import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    color: 'blue',
  },
});

const List = () => {
  const classes = useStyles();

  return <div className={classes.list}>List</div>;
};

export default List;
