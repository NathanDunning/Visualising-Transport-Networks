import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {
    componentDidMount,
    componentDidUpdate,
    handleDropDownChange,
    resetState,
    mapStateToProps,
    getValidOptions,
    dropdown, addQuickInfoBox
} from './navbarhelpers';
import {bindActionCreators} from 'redux';
import {pushAverage} from '../../util/redux/actions';

class AverageNavBar extends Component {

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
        //If the options
        if (this.state.time == null)
            return <></>;
        let {cities, mediums, directions, dates, times} = this.getValidOptions();
        let {city, medium, direction, date} = this.state;
        return <>
            <Grid
                container spacing={24}
                direction='row'
                justify='center'
                alignItems='center'
            >
                {this.dropdown('City', 'city', cities)}
                {this.dropdown('Transport Method', 'medium', mediums)}
                {this.dropdown('Direction', 'direction', directions)}
                {this.dropdown('Date', 'date', dates)}
                {this.dropdown('', '', times, true)}
                {this.dropdown('', '', times, true)}
                {this.addQuickInfoBox("This is an average for an entire day. It requires no times")}
                <Grid item xs={3}>
                    <Button variant='contained' size='large' color='primary' style={{'width': '100%'}}
                            onClick={()=>this.props.pushAverage(city, medium, direction, date)}>Average</Button>
                </Grid>
            </Grid>
        </>;
    }

}

const dispatchToProps = (dispatch) => bindActionCreators({pushAverage}, dispatch);
export default connect(mapStateToProps, dispatchToProps)(AverageNavBar);
