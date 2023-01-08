import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  home: {
    color: "red",
  },
});

const Home = () => {
  const classes = useStyles();

  return <div className={classes.home}>Home</div>;
};

export default Home;
