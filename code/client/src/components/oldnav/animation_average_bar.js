import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {
  componentDidMount,
  componentDidUpdate,
  handleDropDownChange,
  resetState,
  mapStateToProps,
  getValidOptions,
  dropdown, addQuickInfoBox,
} from './navbarhelpers';
import { pushAnimationOfHour } from '../../util/redux/actions';

class AnimationAverageNavBar extends Component {
    state = {};

    constructor(props) {
      super(props);
      this.componentDidMount = componentDidMount.bind(this);
      this.componentDidUpdate = componentDidUpdate.bind(this);
      this.handleDropDownChange = handleDropDownChange.bind(this);
      this.resetState = resetState.bind(this);
      this.getValidOptions = getValidOptions.bind(this);
      this.dropdown = dropdown.bind(this);
      this.addQuickInfoBox = addQuickInfoBox.bind(this);
    }

    render() {
      if (this.state.time == null) { return null; }
      const {
        cities, mediums, directions, dates, times,
      } = this.getValidOptions();
      const {
        city, medium, direction, time,
      } = this.state;
      return (
        <Grid
          container
          spacing={24}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {this.dropdown('City', 'city', cities)}
          {this.dropdown('Transport Method', 'medium', mediums)}
          {this.dropdown('Direction', 'direction', directions)}
          {this.dropdown('', '', dates, true)}
          {this.dropdown('Start', 'time', times)}
          {this.dropdown('', '', times, true)}
          {this.addQuickInfoBox("This is an animation of average days. It doesn't require End times or dates.")}
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ width: '100%' }}
              onClick={() => this.props.pushAnimationOfHour(city, medium, direction, time)}
            >
                    &#9658;
            </Button>
          </Grid>
        </Grid>
      );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ pushAnimationOfHour }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AnimationAverageNavBar);
