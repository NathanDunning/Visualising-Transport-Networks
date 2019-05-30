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
    dropdown,
    addQuickInfoBox
} from "./navbarhelpers";
import {pushAverageX} from '../../util/redux/actions';
import {bindActionCreators} from "redux";

class AverageOverXNavBar extends Component {

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
        //If the options
        if (this.state.time == null)
            return <></>;
        let {cities, mediums, directions, times, dates} = this.getValidOptions();
        let {city, medium, direction, time, t2} = this.state;

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
                {this.dropdown('', '', dates, true)}
                {this.dropdown('Start', 'time', times)}
                {this.dropdown('End', 't2', times)}
                {this.addQuickInfoBox("This is an Average over an interval of your choosing. It require an End time.")}
                <Grid item xs={3}>
                    <Button variant='contained' size='large' color='primary' style={{'width': '100%'}}
                            onClick={()=>this.props.pushAverageX(city, medium, direction, time, t2)}>
                        Average X
                    </Button>
                </Grid>
            </Grid>
        </>;
    }

}

const dispatchToProps = (dispatch) => bindActionCreators({pushAverageX}, dispatch);
export default connect(mapStateToProps, dispatchToProps)(AverageOverXNavBar);
