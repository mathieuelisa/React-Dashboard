import React from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  new: {
    color: 'green',
  },
});

const New = () => {
  const classes = useStyles();
  return <div className={classes.new}>New</div>;
};

export default New;
