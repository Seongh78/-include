import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

/**
 * MainPresenter
 */
const MainPresenter = () => (
  <Fragment>
    <Helmet>
      <title>MainPage : BoilerPlate</title>
    </Helmet>
    <div className="pusher" >
      <div className="ui inverted vertical masthead center aligned segment" style={{background:'#39a2fb'}}>

        <div className="ui text container" style={{padding:'65px 35px', }}>
          <h1 className="ui inverted header">
            Imagine-a-Company
          </h1>
          <h2>Do whatever you want when you want to.</h2>
          <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div>
        </div>

      </div>
    </div>
  </Fragment>
);
export default MainPresenter;
