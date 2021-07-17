import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./App";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dyte-frontend-task/:pathId" exact component={App} />
        <Route path="/dyte-frontend-task" exact component={App} />
        <Redirect to="/dyte-frontend-task" />
      </Switch>
    </Router>
  );
};

export default Routes;
