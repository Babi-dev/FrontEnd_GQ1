import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScreenLogin from "../screens/auth/login/Login";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ScreenLogin} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
