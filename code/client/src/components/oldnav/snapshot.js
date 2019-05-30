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
} from './navbarhelpers';
import {bindActionCreators} from 'redux';
import {requestSnapshot} from '../../util/redux/actions';

class SnapshotNavBar extends Component {
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
        return <div>
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
                {this.dropdown('Start', 'time', times)}
                {this.dropdown('End', 't2', times, true)}
                {this.addQuickInfoBox("This is a Snapshot. It doesnt require an End time.")}
                    <Grid item xs={2}>
                        <Button variant='contained' size='large' color='primary' style={{'width': '100%'}}
                                onClick={
                                    () => this.props.requestSnapshot(this.state.city, this.state.medium,
                                        this.state.direction, this.state.date, this.state.time, false, false)
                                }>Snap</Button>
                    </Grid>
                </Grid>
        </div>;
    }
}

const dispatchToProps = (dispatch) => bindActionCreators({requestSnapshot}, dispatch);
export default connect(mapStateToProps, dispatchToProps)(SnapshotNavBar);
