import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  login: {
    color: 'red',
  },
});

const Login = () => {
  const classes = useStyles();
  return <div className={classes.login}>Login</div>;
};

export default Login;
