import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  chartsContainer: {
    padding: 20,
    display: 'flex',
    flex: 4,
    justifyContent: 'space-between',
    marginRight: 15,
    boxShadow: '2px 4px 10px 1px rgba(201,201,201,0.47)',
    borderRadius: 5,
    height: 110,
  },
});

const Charts = () => {
  const classes = useStyles();
  return <div className={classes.chartsContainer}>Charts</div>;
};

export default Charts;
