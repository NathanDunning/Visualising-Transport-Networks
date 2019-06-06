import React, { Component } from "react";
import "./MapNav.css";
import Grid from '@material-ui/core/Grid/';
import Button from '@material-ui/core/Button';

import {
    // componentDidMount,
    // componentDidUpdate,
    // handleDropDownChange,
    // resetState,
    // mapStateToProps,
    // getValidOptions,
    dropdown
    // addQuickInfoBox
} from './NavBarHelpers';


class MapNav extends Component {
    state = {};

    // set up and bind dropdown from NavBarHelpers
    constructor(props) {
        super(props);
        this.dropdown = dropdown.bind(this);
    }


  render() {
      // render a grid that holds dropdown menu options
    return (
        <div>
        <Grid id="grid"
            container
            direction='row'
            height='10vh'
            alignItems='center'
        >
            {this.dropdown('City')}
            {this.dropdown('To')}
            {this.dropdown('From')}
            {this.dropdown('Time')}

        </Grid>

    </div>
    );
  }
}

export default MapNav;
