import React from 'react';
import { createUseStyles } from 'react-jss';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    borderRight: '1px solid #f1efef',
    minHeight: '100vh',
    backgroundColor: 'white',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderBottom: '1px solid #f1efef',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingLeft: 15,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    cursor: 'pointer',
    color: '#474747',
    height: 30,
    paddingLeft: 10,
    '&:hover': {
      color: 'white',
      backgroundColor: '#b6b4f2',
      borderRadius: '5px 0 0 5px',
    },
  },
  icons: {
    marginRight: 10,
    fontSize: 22,
  },
  titleGroups: {
    color: 'grey',
    fontSize: 10,
    margin: '15px 0 5px 0',
  },
  containerColor: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    '& >:nth-child(1)': {
      backgroundColor: 'whitesmoke',
    },
    '& >:nth-child(2)': {
      backgroundColor: '#494949',
    },
    '& >:nth-child(3)': {
      backgroundColor: '#215b55',
    },
  },
  colorOption: {
    height: 30,
    width: 30,
    border: '1px solid black',
    borderRadius: '5px',
    margin: '0 5px',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}>
        <Link to={'/'} className={classes.link}>
          <p>REACT DASHBOARD</p>
        </Link>
      </div>

      <div className={classes.listContainer}>
        <ul className={classes.listingItems}>
          <p className={classes.titleGroups}>MAIN</p>
          <li className={classes.item}>
            <PeopleIcon className={classes.icons} />
            <Link to={'/'} className={classes.link}>
              Dashboard
            </Link>
          </li>

          <p className={classes.titleGroups}>LISTS</p>
          <li className={classes.item}>
            <PeopleIcon className={classes.icons} />
            <Link to={'/users'} className={classes.link}>
              Users
            </Link>
          </li>
          <li className={classes.item}>
            <LocalGroceryStoreIcon className={classes.icons} />
            <Link to={'/products'} className={classes.link}>
              Products
            </Link>
          </li>
          <li className={classes.item}>
            <CreditCardIcon className={classes.icons} />
            <Link to={'/products'} className={classes.link}>
              Orders
            </Link>
          </li>
          <li className={classes.item}>
            <DashboardIcon className={classes.icons} />
            <Link to={'/products'} className={classes.link}>
              Delivery
            </Link>
          </li>
          <p className={classes.titleGroups}>USEFUL</p>
          <li className={classes.item}>
            <BarChartIcon className={classes.icons} />
            Statistic
          </li>
          <li className={classes.item}>
            <NotificationsActiveIcon className={classes.icons} />
            Notifications
          </li>
          <p className={classes.titleGroups}>SERVICE</p>
          <li className={classes.item}>
            <MonitorHeartIcon className={classes.icons} />
            System Health
          </li>
          <li className={classes.item}>
            <VpnKeyIcon className={classes.icons} />
            Logs
          </li>
          <li className={classes.item}>
            <SettingsIcon className={classes.icons} />
            Settings
          </li>
          <p className={classes.titleGroups}>USER</p>
          <li className={classes.item}>
            <SupervisedUserCircleIcon className={classes.icons} />
            Profile
          </li>
          <li className={classes.item}>
            <LogoutIcon className={classes.icons} />
            Logout
          </li>
        </ul>
      </div>

      <div className={classes.containerColor}>
        <div className={classes.colorOption}></div>
        <div className={classes.colorOption}></div>
        <div className={classes.colorOption}></div>
      </div>
    </div>
  );
};

export default Sidebar;
