/* eslint-disable import/prefer-default-export */
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/* Change to class with a clicked state,
   create two different toolbars and toggle view based on clicked state */

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    margin: '50px'
  },
  appBar: {
    alignItems: 'center'
  }
}));

export const LoginMenuBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={clsx(classes.appBar)}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            {/* This value needs to be dynamically assigned instead. */}
            {props.pageName}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          </Typography>
          <Typography variant='subtitle1' noWrap>
            Visualising Our Transport Networks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default LoginMenuBar;
