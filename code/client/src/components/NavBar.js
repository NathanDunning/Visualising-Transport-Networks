import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid/';
import Button from '@material-ui/core/Button';

import {NAVIGATION_BARS} from './nav/bars';
import {request_times} from '../util/redux/request_valid_times';

export default class NavBar extends Component {
    state = {
        currentBar: 0
    };

    componentDidMount() {
        request_times();
    }

    canMoveLeft = () => this.state.currentBar > 0;
    canMoveRight = () => this.state.currentBar < (NAVIGATION_BARS.length - 1);

    renderLeft = () => {
        return <Button disabled={!this.canMoveLeft()}
                       title={this.canMoveLeft() ? NAVIGATION_BARS[this.state.currentBar - 1].name : ''}
                       onClick={() => this.setState({currentBar: this.state.currentBar - 1})}>&lt;</Button>;
    };
    renderRight = () => {
        return <Button disabled={!this.canMoveRight()}
                       title={this.canMoveRight() ? NAVIGATION_BARS[this.state.currentBar + 1].name : ''}
                       onClick={() => this.setState({currentBar: this.state.currentBar + 1})}>&gt;</Button>;
    };

    render() {
        const CurrentView = NAVIGATION_BARS[this.state.currentBar].component;
        return <Grid
            container
            direction='row'
            height='10vh'
            alignItems='center'
        >
            <Grid item xs={1}>
                {this.renderLeft()}
            </Grid>
            <Grid item xs={10}>
                <CurrentView/>
            </Grid>
            <Grid item xs={1}>
                {this.renderRight()}
            </Grid>
        </Grid>
    }
}
