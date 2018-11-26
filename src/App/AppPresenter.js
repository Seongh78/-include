import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";

/**
 * AppPresenter
 */
const AppPresenter = () => (
  <Fragment>
    <Helmet>
      <title>UIUXBusan : BoilerPlate</title>
    </Helmet>

    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/main" component={Main} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Fragment>
);
export default AppPresenter;
