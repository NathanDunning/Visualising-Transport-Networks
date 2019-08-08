import React, { Component } from "react";
import Grid from '@material-ui/core/Grid/';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { getTravelData, getDemographicData, getCities, getTime } from "../../util/_services/PostData";
import "./MapNav.css";

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


class MapNav extends Component {
  state = {
    city: 'city',
    to: 'to',
    from: 'from',
    location: 'area',
    demographic: [],
    travel: [],
    cities: [],
    times: []
  };

  // set up and bind dropdown from NavBarHelpers
  constructor(props) {
    super(props);
    // this.dropdown = dropdown.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    getTravelData("travel", localStorage.getItem('auth'))
      .then(
        data => {

        });

    getDemographicData("geocode", localStorage.getItem('auth'))
      .then(
        data => {
        });

    getCities("cities", localStorage.getItem('auth'))
      .then(
        data => {
          this.setState({ cities: data });
          console.log(this.state.cities)
        })



    getTime("time", localStorage.getItem('auth'))
      .then(data => {
        this.setState({ times: data });
        console.log(this.state.times)
      })
  }


  handleCityChange = (event) => {
    console.log("EVENT VAL : " + event.target.value)
    this.setState({city : event.target.value})
  }

  handleChange = (event) => {
    console.log("EVENT VAL : " + event.target.value)
    if(event === 'city') {
    console.log("City selected ")
    }
  }

  useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


  render() {
    // render a grid that holds dropdown menu options
    return (
      <div className={this.useStyles.root}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FormControl>
              <InputLabel className={this.useStyles.paper}>{this.state.city}</InputLabel>
              <Select
                onChange={this.handleCityChange}>

                {this.state.cities.map(city => {
                  return <MenuItem value={city}> {city} </MenuItem>
                })}

              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <FormControl className="NavForm">
              <InputLabel className={this.useStyles.paper}>From</InputLabel>
              <Select
                onChange={this.handleChange}>
                {this.state.times.map(time => {
                  return <MenuItem value={time}> {time} </MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <FormControl>
              <InputLabel>To</InputLabel>
              <Select
                onChange={this.handleChange}>
                {this.state.times.map(time => {
                  return <MenuItem value={time}> {time} </MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <FormControl>
              <InputLabel>Location</InputLabel>
              <Select
                onChange={this.handleChange}>
                <MenuItem value={this.state.location}>
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
