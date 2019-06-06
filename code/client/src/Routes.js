import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Help from "./containers/Help";
import NotFound from "./containers/NotFound";


export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/help" exact component={Help} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;

 // Switch is a component from React-Router that renders the first matching route that is defined within it.
