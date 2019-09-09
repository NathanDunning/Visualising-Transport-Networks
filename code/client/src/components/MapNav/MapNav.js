import React, { Component } from 'react';
import './MapNav.css';
import Grid from '@material-ui/core/Grid/';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import {
  FormControl, InputLabel, MenuItem, Select,
} from '@material-ui/core';

import {
// componentDidMount,
// componentDidUpdate,
// handleDropDownChange,
// resetState,
// mapStateToProps,
// getValidOptions,
// dropdown
// addQuickInfoBox
} from './NavBarHelpers';
import { red } from '@material-ui/core/colors';

class MapNav extends Component {
    state = {
      city: 'no city',
      to: 'TEST WELLINGTON',
      from: 'TEST WELLINGTON',
      time: 'random time',
    };

    // set up and bind dropdown from NavBarHelpers
    constructor(props) {
      super(props);
      // this.dropdown = dropdown.bind(this);
    }

    handleChange = (event) => {
      this.setState({

      });
    }


    render() {
      // render a grid that holds dropdown menu options
      return (
        <div className="navBar">
          <Grid container spacing={4}>
            <Grid item xs>
              <FormControl>
              <InputLabel>City</InputLabel>
              <Select
                  onChange={this.handleChange}
                >
                  <MenuItem value={this.state.city}>
                  {this.state.city}
                </MenuItem>
                </Select>
            </FormControl>
            </Grid>

            <Grid item xs>
              <FormControl className="NavForm">
              <InputLabel>From</InputLabel>
              <Select
                  onChange={this.handleChange}
                >
                  <MenuItem value={this.state.from}>
                  {`From: ${this.state.from}`}
                </MenuItem>
                </Select>
            </FormControl>
            </Grid>

            <Grid item xs>
              <FormControl>
              <InputLabel>To</InputLabel>
              <Select
                  onChange={this.handleChange}
                >
                  <MenuItem value={this.state.to}>
                  {`From: ${this.state.to}`}
                </MenuItem>
                </Select>
            </FormControl>
            </Grid>

            <Grid item xs>
              <FormControl>
              <InputLabel>Time</InputLabel>
              <Select
                  onChange={this.handleChange}
                >
                  <MenuItem value={this.state.time}>
                  {`Time: ${this.state.time}`}
                </MenuItem>
                </Select>
            </FormControl>
            </Grid>
          </Grid>

        </div>
      );
    }
}

export default MapNav;
