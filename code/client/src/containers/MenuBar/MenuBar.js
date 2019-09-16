/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


/* Change to class with a clicked state,
   create two different toolbars and toggle view based on clicked state */
export const MenuBar = () => {
  const [open, setOpen] = useState(true);

<<<<<<< Updated upstream
  const handleDrawerOpen = () => {
=======
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: '50px'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export const MenuBar = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  function handleDrawerOpen() {
>>>>>>> Stashed changes
    setOpen(true);
  };

  return (
    <div>
      <Drawer
        variant="permanent"
        open={open}
        anchor="left"
      >
        <div>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
<<<<<<< Updated upstream
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Divider />

          <List>
            <ListItem button name="About">
              <ListItemIcon>
                Icon
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>

            <ListItem button name="Home">
              <ListItemIcon>
                Icon
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button name="Logout">
              <ListItemIcon>
                Icon
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>

          </List>
          <Divider />
=======
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            {/* This value needs to be dynamically assigned instead. */}
            {props.pageName}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          </Typography>
          <Typography variant='subtitle1' noWrap>
            Visualing Our Transport Networks
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}>
        <div className={classes.drawerHeader}>
          <ListItem>
            <ListItemText primary={'Navigation'} />
          </ListItem>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
>>>>>>> Stashed changes
        </div>
      </Drawer>
    </div>
  );
};
