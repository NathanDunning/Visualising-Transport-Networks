import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import About from './containers/About/About';
import NotFound from './containers/NotFound/NotFound';

class Routes extends Component {
  constructor(props) {
    super(props);

    /**
     * This state property is used to enforce route guarding. if this property is false and the
     * user has navigated to an internal screen, then they will be redirected to the login screen.
     */
    this.state = { isAuthenticated: false };
  }

  setIsAuthenticated = status => {
    this.setState({ isAuthenticated: status });
  };

  render() {
    return (
      /* Switch is a component from React-Router that renders
     the first matching route that is defined within it. */
      <Switch className='BlueBack'>
        <Route exact path='/' component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        {/* Finally, catch all unmatched routes */}
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
