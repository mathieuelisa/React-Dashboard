import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  newContainer: {
    display: 'flex',
  },
  mainTitleTopContainer: {
    color: '#bcbaba',
  },
  container: {
    flex: 5,
  },
  topContainer: {
    boxShadow: '2px 4px 10px 1px rgba(201,201,201,0.47)',
    padding: 20,
    margin: 20,
  },
  bottomContainer: {
    display: 'flex',
    boxShadow: '2px 4px 10px 1px rgba(201,201,201,0.47)',
    padding: 20,
    margin: 20,
  },
  firstPart: {
    display: 'flex',
    flex: 1,
  },
  secondPart: {
    display: 'flex',
    flex: 2,
  },
  imageNewUser: {
    height: 300,
  },
  addingFile: {
    cursor: 'pointer',
  },
  inputFile: {
    display: 'none',
  },
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
    width: '90%',
  },
  formContainerInput: {
    width: '40%',
  },
  inputItem: {
    width: '90%',
    border: 'none',
    borderBottom: '1px solid grey',
    marginTop: '10px',
    height: 25,
    padding: 5,
  },
  buttonAdding: {
    display: 'flex',
    alignItems: 'end',
  },
  imageSvgIcon: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#08b383',
    color: 'whitesmoke',
    height: 30,
    width: 130,
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#06a176',
      transition: '0.8s',
    },
  },
});

const New = ({ inputs, title }) => {
  const classes = useStyles();

  const [addImage, setAddImage] = useState('');

  return (
    <div className={classes.newContainer}>
      <Sidebar />
      <div className={classes.container}>
        <Navbar />

        <div className={classes.topContainer}>
          <h4 className={classes.mainTitleTopContainer}>{title}</h4>
        </div>
        <div className={classes.bottomContainer}>
          <div className={classes.firstPart}>
            <img
              src={
                addImage
                  ? URL.createObjectURL(addImage)
                  : 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'
              }
              alt=' no available'
              className={classes.imageNewUser}
            />
          </div>
          <div className={classes.secondPart}>
            <form className={classes.formContainer}>
              <div className={classes.formContainerInput}>
                <label htmlFor='file' className={classes.addingFile}>
                  Image:
                  <NoteAddIcon className={classes.imageSvgIcon} />
                </label>
                <input
                  type='file'
                  id='file'
                  onChange={(e) => setAddImage(e.target.files[0])}
                  className={classNames(classes.inputFile, classes.inputItem)}
                />
              </div>
              {inputs.map((input, index) => {
                return (
                  <div className={classes.formContainerInput} key={index}>
                    <label htmlFor='file' className={classes.addingFile}>
                      {input.label}
                    </label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      id='file'
                      className={classNames(classes.inputItem)}
                    />
                  </div>
                );
              })}
              <div className={classes.buttonAdding}>
                <button className={classes.button}>SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

New.propTypes = {
  inputs: PropTypes.array,
  title: PropTypes.string,
};

export default New;
