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

    constructor(props) {
        super(props);
        this.dropdown = dropdown.bind(this);
    }

  render() {
    return (
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
    );
  }
}

export default MapNav;
