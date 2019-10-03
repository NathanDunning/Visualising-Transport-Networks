import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid/';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import {
  getAllTravelLatLng,
  getDemographicData,
  getCities,
  getTime,
  getDate
} from '../../util/_services/PostData';
import './MapNav.css';

import // componentDidMount,
  // componentDidUpdate,
  // handleDropDownChange,
  // resetState,
  // mapStateToProps,
  // getValidOptions,
  // dropdown
  // addQuickInfoBox
  './NavBarHelpers';

class MapNav extends Component {
  suburbPolygons = this.props.suburbPolygons;
  state = {
    city: 'city',
    to: 'to',
    from: 'from',
    location: 'area',
    date: 'yyyy/mm/dd',
    demographic: [],
    travel: [],
    cities: [],
    times: [],
    dates: []
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
    getAllTravelLatLng(localStorage.getItem('auth')).then(data => {
      console.log(data);
    });

    getDemographicData('geocode', localStorage.getItem('auth')).then(data => {
      data.map(area => {
        console.log(area[0])
        this.state.demographic.push(area[0]);
      });
    });

    getCities('cities', localStorage.getItem('auth')).then(data => {
      this.setState({ cities: data });
    });

    getTime('time', localStorage.getItem('auth')).then(data => {
      this.setState({ times: data });
    });

    getDate('date', localStorage.getItem('auth')).then(data => {
      data.map(date => {
        this.state.dates.push(new Date(date).toDateString());
      });
    });
  }

  handleCityChange = event => {
    this.setState({ city: event.target.value });
  };

  handleFromTimeChange = event => {
    this.setState({ from: event.target.value });
  };

  handleToTimeChange = event => {
    this.setState({ to: event.target.value });
  };

  handleLocationChange = event => {
    this.setState({ location: event.target.value });
  };

  handleDateChange = event => {
    this.setState({ date: event.target.value });
  };

  handleChange = event => {
    if (event === 'city') {
    }
  };

  useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  }));

  visualise = () => {
    console.log(this.suburbPolygons)
    /* const suburbPolygons = localStorage.getItem('suburbPolygons')
    console.log("inside visualise", suburbPolygons)
    console.log("CITY: " + this.state.city);
    console.log("Travel points ", suburbPolygons["Aro Valley"])
     */
  };

  render() {
    // render a grid that holds dropdown menu options
    return (
      <div className='MapNav'>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
          style={{
            paddingTop: '25px'
          }}>
          <Grid item>
            <FormControl>
              <InputLabel className={this.useStyles.paper}>City</InputLabel>
              <Select
                value={this.state.city}
                style={{ width: `150px` }}
                onChange={this.handleCityChange}>
                {this.state.cities.map(city => {
                  return (
                    <MenuItem key={city} value={city}>
                      {' '}
                      {city}{' '}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl>
              <InputLabel>Location</InputLabel>
              <Select
                value={this.state.location}
                style={{ width: `150px` }}
                onChange={this.handleLocationChange}>
                {this.state.demographic.map(area => {
                  return (
                    <MenuItem key={area} value={area}>
                      {' '}
                      {area}{' '}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl>
              <InputLabel>Date</InputLabel>
              <Select
                value={this.state.date}
                style={{ width: `150px` }}
                onChange={this.handleDateChange}>
                {this.state.dates.map(date => {
                  return (
                    <MenuItem key={date} value={date}>
                      {' '}
                      {date}{' '}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl className='NavForm'>
              <InputLabel className={this.useStyles.paper}>From</InputLabel>
              <Select
                value={this.state.from}
                style={{ width: `150px` }}
                onChange={this.handleFromTimeChange}>
                {this.state.times.map(time => {
                  return (
                    <MenuItem key={time} value={time}>
                      {' '}
                      {time}{' '}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl>
              <InputLabel>To</InputLabel>
              <Select
                value={this.state.to}
                style={{ width: `150px` }}
                onChange={this.handleToTimeChange}>
                {this.state.times.map(time => {
                  return (
                    <MenuItem key={time} value={time}>
                      {' '}
                      {time}{' '}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>

          <button onClick={this.visualise}>
            Visualise
          </button>
        </Grid>
      </div>
    );
  }
}

export default MapNav;
