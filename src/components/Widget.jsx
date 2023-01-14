import React from 'react';
import { createUseStyles } from 'react-jss';

// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EuroIcon from '@mui/icons-material/Euro';
import BalanceIcon from '@mui/icons-material/Balance';
import classNames from 'classnames';

const useStyles = createUseStyles({
  widgetContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    padding: 10,
    marginRight: 15,
    boxShadow: '2px 4px 10px 1px rgba(201,201,201,0.47)',
    borderRadius: 5,
    height: 110,
  },
  leftParts: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightParts: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  percents: {
    display: 'flex',
  },
  widgetTitle: {
    fontWeight: 'bold',
    color: '#bcbaba',
  },
  widgetNumber: {
    fontSize: 40,
  },
  widgetLink: {
    textDecoration: 'underline',
    fontSize: 14,
    cursor: 'pointer',
  },
  positif: {
    color: 'green',
  },
  negatif: {
    color: 'red',
  },
  widgetIcon: {
    alignSelf: 'end',
    fontSize: 20,
  },
  usersIcon: {
    color: 'red',
    backgroundColor: '#ffc1c1',
    borderRadius: 5,
    padding: 3,
  },
  balanceIcon: {
    color: 'darkgoldenrod',
    padding: 3,
    borderRadius: 5,
    backgroundColor: '#fbfece',
  },
  euroIcon: {
    borderRadius: 5,
    color: 'green',
    padding: 3,
    backgroundColor: '#a3d4a3',
  },
  orderIcon: {
    borderRadius: 5,
    color: 'purple',
    padding: 3,

    backgroundColor: '#e1d2ff',
  },
});

const Widget = ({ type }) => {
  const classes = useStyles();

  let data;

  switch (type) {
    case 'users':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <SupervisorAccountIcon
            className={classNames(classes.widgetIcon, classes.usersIcon)}
          />
        ),
      };
      break;
    case 'orders':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'See all the orders',
        icon: (
          <ShoppingCartIcon
            className={classNames(classes.widgetIcon, classes.orderIcon)}
          />
        ),
      };
      break;
    case 'earnings':
      data = {
        title: 'EARNINGS',
        isMoney: false,
        link: 'Get net earnings',
        icon: (
          <EuroIcon
            className={classNames(classes.widgetIcon, classes.euroIcon)}
          />
        ),
      };
      break;
    case 'balances':
      data = {
        title: 'BALANCES',
        isMoney: true,
        link: 'See details',
        icon: (
          <BalanceIcon
            className={classNames(classes.widgetIcon, classes.balanceIcon)}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className={classes.widgetContainer}>
      <div className={classes.leftParts}>
        <span className={classes.widgetTitle}>{data.title}</span>

        <span className={classes.widgetNumber}>{data.isMoney && '€'} 33</span>

        <span className={classes.widgetLink}>{data.link}</span>
      </div>
      <div className={classes.rightParts}>
        <div className={classNames(classes.percents, classes.negatif)}>
          <KeyboardArrowDownIcon />
          <div>20%</div>
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
