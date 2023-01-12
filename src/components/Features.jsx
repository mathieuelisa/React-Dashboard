import React from 'react';
import { createUseStyles } from 'react-jss';
import { CircularProgressbar } from 'react-circular-progressbar';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import 'react-circular-progressbar/dist/styles.css';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import classNames from 'classnames';

const useStyles = createUseStyles({
  featuresContainer: {
    padding: 20,
    display: 'flex',
    flex: 3,
    justifyContent: 'space-between',
    marginRight: 15,
    boxShadow: '2px 4px 10px 1px rgba(201,201,201,0.47)',
    borderRadius: 5,
    flexDirection: 'column',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  featureTitle: {
    color: '#bcbaba',
  },
  icon: {
    color: '#bcbaba',
    cursor: 'pointer',
  },
  circlePercents: {
    width: 140,
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
  },
  bottom: {
    display: 'flex',
    flexDirection: 'column',
  },
  dataBottom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dataTitle: {
    color: '#bcbaba',
    margin: '20px 0',
  },
  dataCount: {
    fontSize: 40,
    marginBottom: 20,
  },
  dataText: {
    color: '#bcbaba;',
    textAlign: 'center',
  },
  targetContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    margin: '20px 0',
    textAlign: 'center',
  },
  amountContainer: {
    display: 'flex',
    marginTop: 10,
  },
  positif: {
    color: 'green',
  },
  negatif: {
    color: 'red',
  },
  targetTitle: {
    color: '#bcbaba',
  },
});

const Features = () => {
  const classes = useStyles();

  let percentage = 30;
  return (
    <div className={classes.featuresContainer}>
      <div className={classes.top}>
        <h4 className={classes.featureTitle}>Total Revenue</h4>
        <MoreVertIcon className={classes.icon} />
      </div>

      <div className={classes.bottom}>
        <div className={classes.circlePercents}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={3}
          />
        </div>
        <div className={classes.dataBottom}>
          <h4 className={classes.dataTitle}>Total sales made today</h4>
          <h3 className={classes.dataCount}>628 €</h3>
          <div className={classes.dataText}>
            <p>Previous transaction processing</p>
            <p>Last payments may not be included</p>
          </div>

          <div className={classes.targetContainer}>
            <div>
              <h4 className={classes.targetTitle}>Target</h4>
              <div
                className={classNames(classes.amountContainer, classes.positif)}
              >
                <ExpandLessIcon />
                <p>12.4K €</p>
              </div>
            </div>

            <div>
              <h4 className={classes.targetTitle}>Last week</h4>
              <div
                className={classNames(classes.amountContainer, classes.negatif)}
              >
                <KeyboardArrowDownIcon />
                <p>12.4K €</p>
              </div>
            </div>

            <div>
              <h4 className={classes.targetTitle}>Last month</h4>
              <div
                className={classNames(classes.amountContainer, classes.negatif)}
              >
                <KeyboardArrowDownIcon />
                <p>12.4K €</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
