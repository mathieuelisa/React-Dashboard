import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  navbar: {
    color: 'green',
  },
});

const Navbar = () => {
  const classes = useStyles();
  return <div className={classes.navbar}>Navbar</div>;
};

export default Navbar;
