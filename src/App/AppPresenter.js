import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import "./App.css";
// 공용컴포넌트
import {
  NavBar
} from '../commons';

/**
 * AppPresenter
 */
const AppPresenter = () => (
  <Fragment>
    {/* 페이지 타이틀 */}
    <Helmet>
      <title>!!!UIUXBusan : BoilerPlate</title>
    </Helmet>

    {/* 네비바 */}
    <NavBar></NavBar>

    {/* 컨텐츠 컨테이너 */}
    <main className="ui page grid " style={{marginTop:'25px'}}>
        <div className="row">
          <div className="column">
            {/* 라우터 */}
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/main" component={Main} />
                <Route path="/" component={NotFound} />
              </Switch>
            {/* 라우터 */}
          </div>
        </div>
    </main>
    {/* 컨텐츠 컨테이너 */}
    
  </Fragment>
);
export default AppPresenter;
