import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {
    componentDidMount,
    componentDidUpdate,
    handleDropDownChange,
    resetState,
    mapStateToProps,
    getValidOptions,
    dropdown,
    addQuickInfoBox
} from './navbarhelpers';
import {pushAnimation} from '../../util/redux/actions';

class AnimationNavBar extends Component {
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
        if (this.state.time == null)
            return null;
        let {cities, mediums, directions, dates, times} = this.getValidOptions();
        let {city, medium, direction, date, time, t2} = this.state;
        return <Grid
            container spacing={24}
            direction='row'
            justify='center'
            alignItems='center'>
            {this.dropdown('City', 'city', cities)}
            {this.dropdown('Transport Method', 'medium', mediums)}
            {this.dropdown('Direction', 'direction', directions)}
            {this.dropdown('Date', 'date', dates)}
            {this.dropdown('Start', 'time', times)}
            {this.dropdown('End', 't2', times)}
            {this.addQuickInfoBox("This is an animation. There must be an end time for the animation to start.")}
            <Grid item xs={2}>
                <Button variant='contained' color='primary' size='large' style={{'width': '100%'}}
                                 onClick={() => this.props.pushAnimation(city, medium, direction, date, time, t2, false)}>
                    &#9658;
            </Button>
            </Grid>
        </Grid>;
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({pushAnimation}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AnimationNavBar);