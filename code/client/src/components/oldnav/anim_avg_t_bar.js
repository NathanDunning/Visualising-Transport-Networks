import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import {
    componentDidMount,
    componentDidUpdate,
    handleDropDownChange,
    resetState,
    mapStateToProps,
    getValidOptions,
    dropdown, addQuickInfoBox
} from './navbarhelpers';
import {pushAnimationOfT} from '../../util/redux/actions';

class AnimationAverageTNavBar extends Component {
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
        let {cities, dates, mediums, directions, times} = this.getValidOptions();
        let {city, date, medium, direction, time, t2} = this.state;
        return (
            <div>
            <Grid
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
            {this.addQuickInfoBox("This is an animation of average interval through days.\n Req: All params.")}
                <Grid item xs={2}>
                    <Button variant='contained' color='primary' size='large' style={{'width': '100%'}}
                            onClick={() => this.props.pushAnimationOfT(city, medium, direction, date, time, t2)}>
                        &#9658;
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({pushAnimationOfT}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AnimationAverageTNavBar);