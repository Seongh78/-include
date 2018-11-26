import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
// 공용컴포넌트
import {
  NavBar
} from '../commons';

/**
 * AppPresenter
 */
const AppPresenter = () => (
  <Fragment>
    <Helmet>
      <title>UIUXBusan : BoilerPlate</title>
    </Helmet>
    <h1>#include</h1>
    <NavBar></NavBar>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Main} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Fragment>
);
export default AppPresenter;
