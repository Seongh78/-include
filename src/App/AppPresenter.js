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

// 라우터 등록
const Routes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: Main,
    props: {}
  },
  {
    name: "Main",
    path: "/main",
    exact: true,
    component: Main,
    props: {}
  },
  {
    name: "NotFound",
    path: "/",
    exact: false,
    component: NotFound,
    props: {}
  },
]

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
                {
                  Routes.map(route=>(
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
