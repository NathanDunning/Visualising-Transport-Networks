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

  const handleDrawerOpen = () => {
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
        </div>
      </Drawer>
    </div>
  );
};
