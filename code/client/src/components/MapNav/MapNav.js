import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid/';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import L from "leaflet";
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import {
  getTravelData,
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
  suburbLatLngs = this.props.suburbLatLngs;
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


    getDemographicData('geocode', localStorage.getItem('auth')).then(data => {
      data.map(area => {
        this.state.demographic.push(area[0]);
      });
    });

    getCities('cities', localStorage.getItem('auth')).then(data => {
      this.setState({ cities: data });
    });

    getTime('time', localStorage.getItem('auth')).then(data => {
      console.log(data)
      let times = []
      data.map(time => {
        console.log(typeof (time))
        time = time.toString().replace(/(.{2})$/, ':$1');
        times.push(time)
      })
      this.setState({ times: times });
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
    getTravelData(
      this.state.date,
      this.state.from,
      this.state.to,
      this.suburbLatLngs,
      localStorage.getItem('auth')).then(data => {
        Object.entries(data).forEach((time, index) => {
          setTimeout(() => {
            this.props.setLocationDuration(time[1], "true");
          }, 2000 * index);
        });
      });
  };

  resetBoolean = () => {
    this.props.setResetBoolean('true');
  }

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
        </Grid>

        <Grid
          container
          direction='row'
          justify='center'
          style={{
            paddingTop: '25px',
          }}>

          <Grid item
            style={{
              marginRight: '10px'
            }}>

            <Button
              variant="contained"
              color="primary"
              size="large"
              className='button'
              onClick={this.visualise}>
              Visualise
              </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className='button'
              onClick={this.resetBoolean}>
              Reset
              </Button>
          </Grid>
        </Grid>
      </div >
    );
  }
}

export default MapNav;