import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  single: {
    color: "brown",
  },
});

const Single = () => {
  const classes = useStyles();
  return <div className={classes.single}>Single</div>;
};

export default Single;
