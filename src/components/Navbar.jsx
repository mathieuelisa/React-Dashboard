import React from 'react';
import { createUseStyles } from 'react-jss';

import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TextsmsIcon from '@mui/icons-material/Textsms';
import TocIcon from '@mui/icons-material/Toc';
import profilPicture from '../assets/Images/tengen.jpeg';

const useStyles = createUseStyles({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    padding: '0 20px',
    borderBottom: '1px solid lightgray',
  },
  itemsContainer: {
    display: 'flex',
    color: '#474747',
  },
  inputContainer: {
    display: 'flex',
    border: '1px solid lightgrey',
    color: '#474747',
    borderRadius: 3,
    padding: 3,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 25,
    cursor: 'pointer',
    position: 'relative',
  },
  input: {
    width: 211,
    outline: 'none',
    border: 'none',
    paddingLeft: 5,
    backgroundColor: 'transparent',

    '&::placeholder': {
      fontSize: 12,
    },
  },
  icons: {
    fontSize: 22,
  },
  imageProfil: {
    height: 40,
    borderRadius: '50%',
  },
  counter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e43a3a',
    width: 20,
    height: 20,
    borderRadius: '50%',
    color: 'whitesmoke',
    fontSize: 12,
    position: 'absolute',
    top: 0,
    right: '-10px',
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <div className={classes.inputContainer}>
        <input type='text' placeholder='Search...' className={classes.input} />
        <SearchIcon />
      </div>

      <div className={classes.itemsContainer}>
        <div className={classes.item}>
          <PublicIcon className={classes.icons} /> English
        </div>
        <div className={classes.item}>
          <DarkModeIcon className={classes.icons} />
        </div>
        <div className={classes.item}>
          <CloseFullscreenIcon className={classes.icons} />
        </div>
        <div className={classes.item}>
          <NotificationsActiveIcon className={classes.icons} />
          <div className={classes.counter}>1</div>
        </div>
        <div className={classes.item}>
          <TextsmsIcon className={classes.icons} />
          <div className={classes.counter}>1</div>
        </div>
        <div className={classes.item}>
          <TocIcon className={classes.icons} />
        </div>
        <div>
          <img
            src={profilPicture}
            alt='profil'
            className={classes.imageProfil}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
