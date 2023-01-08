import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  sidebar: {
    color: "green",
  },
});

const Sidebar = () => {
  const classes = useStyles();
  return <div className={classes.sidebar}>Sidebar</div>;
};

export default Sidebar;
