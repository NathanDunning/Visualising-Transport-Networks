/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import * as _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button/Button';
import Popup from 'reactjs-popup';
import { emptyObject } from '../../util/nested_objects';
import { capitalise } from '../../util/string_manipulation';


export function handleDropDownChange(key) {
  return (e) => {
    const keys = ['city', 'medium', 'direction', 'date', 'time'];
    const values = [this.state.city,
      this.state.medium, this.state.direction, this.state.date, this.state.time];
    if (key === 't2') {
      keys.push('t2');
      values.push(this.state.t2);
    }

    values[keys.indexOf(key)] = e.target.value;

    let it = this.props.available_snapshots;
    if (key === 't2') {
      this.setState(_.zipObject(keys, values));
    } else {
      for (let i = 0; i < values.length; i++) {
        if (Array.isArray(it)) {
          if (!it.includes(values[i])) { values[i] = it[0]; }
        } else if (!(values[i] in it)) { values[i] = Object.keys(it)[0]; }
        it = it[values[i]];
      }
    }
    this.setState(_.zipObject(keys, values));
  };
}

export function resetState() {
  this.setState({
    city: this.props.city,
    medium: this.props.medium,
    direction: this.props.direction,
    date: this.props.date,
    time: this.props.time,
    t2: this.props.t2,
    pause: false,
  });
}

export function componentDidMount() {
  if (!emptyObject(this.props.available_snapshots)) { this.resetState(); }
}

export function componentDidUpdate(prevProps) {
  if (emptyObject(prevProps.available_snapshots)
  && !emptyObject(this.props.available_snapshots)) { this.resetState(); }
}

export const mapStateToProps = (state) => {
  const {
    data, city, medium, date, time, direction, available_snapshots, t2,
  } = state.data;
  return {
    date,
    medium,
    city,
    time,
    t2,
    direction,
    available_snapshots,
    data,
  };
};

export function getValidOptions() {
  const {
    city, medium, direction, date,
  } = this.state;
  const cities = Object.keys(this.props.available_snapshots);
  const mediums = Object.keys(this.props.available_snapshots[city]);
  const directions = Object.keys(this.props.available_snapshots[city][medium]);
  const dates = Object.keys(this.props.available_snapshots[city][medium][direction]);
  const times = this.props.available_snapshots[city][medium][direction][date];
  const t2s = this.props.available_snapshots[city][medium][direction][date];
  return {
    cities, mediums, directions, dates, times, t2s,
  };
}

export function dropdown(name, variable, selection, disabled) {
  return (
    <Grid item xs={2}>
      <FormControl>
        <InputLabel>{name}</InputLabel>
        <Select
          value={this.state[variable]}
          onChange={this.handleDropDownChange(variable)}
          disabled={disabled}
        >
          {selection.map((x) => <MenuItem key={x} value={x}>{capitalise(x)}</MenuItem>)}
        </Select>
      </FormControl>
    </Grid>
  );
}

/** Draw a button with a "?" that has a popup containing a help string
 *
 * @param helpString A string containing information about the function of the page
 */

export function addQuickInfoBox(helpString) {
  return (
    <Grid item xs={4}>
      <Popup
        trigger={<Button variant="text"><strong>?</strong></Button>}
        position="top"
        closeOnDocumentClick
      >
        <div>
          {helpString}
        </div>
      </Popup>
    </Grid>
  );
}
