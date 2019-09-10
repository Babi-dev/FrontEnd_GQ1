import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginUser from "../screens/auth/login/Login";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginUser} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
