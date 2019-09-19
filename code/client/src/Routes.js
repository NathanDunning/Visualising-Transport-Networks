import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import About from './containers/About/About';
import NotFound from './containers/NotFound/NotFound';

export default () => (
  /* Switch is a component from React-Router that renders
     the first matching route that is defined within it. */
  <Switch className='BlueBack'>
    <Route exact path='/' component={Login} />
    <Route path='/login' component={Login} />
    <Route path='/about' component={About} />
    <Route path='/home' component={Home} />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
