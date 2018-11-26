import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./App.css";
// 공용컴포넌트
import {
  NavBar
} from '../commons';

import AppRoutes from '../AppRoutes';

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
    <NavBar menus={AppRoutes.slice(0, AppRoutes.length-1)}></NavBar>

    {/* 컨텐츠 컨테이너 */}
    <main className="ui page grid " style={{marginTop:'25px'}}>
        <div className="row">
          <div className="column">
            {/* 라우터 */}
              <Switch>
                {
                  AppRoutes.map(route=>(
                    <Route 
                      key={route.name}
                      exact={route.exact}
                      path={route.path} 
                      component={route.component} 
                    />
                  ))
                }
              </Switch>
            {/* 라우터 */}
          </div>
        </div>
    </main>
    {/* 컨텐츠 컨테이너 */}
    
  </Fragment>
);
export default AppPresenter;
