import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import './style.scss';
import { 
  Grid, 
  Icon,
} from 'semantic-ui-react'
import {
  ContentWraper,
  ProfileCard,
  SearchForm,
} from '../../commons'

/**
 * QuestionTimelinePresenter
 */

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const QuestionTimelinePresenter = () => (
  <Fragment>
    <Helmet>
      <title>QuestionTimelinePage : BoilerPlate</title>
    </Helmet>

    <div className="ui text container" style={{paddingTop:'20px'}}>
      <Grid>
        <Grid.Row>
          {/* 좌측 그리드 */}
          <Grid.Column width={5} style={{padding:'5px 10px'}}>
            
            {/* 프로필카드 */}
            <ProfileCard />
          
            {/* 검색폼 */}
            <SearchForm />
            

          </Grid.Column>

          {/* 우측 그리드 */}
          <Grid.Column width={11} style={{padding:'5px 10px'}}>
            <ContentWraper>asdasd</ContentWraper>
          </Grid.Column>
          

        </Grid.Row>
      </Grid>
    </div>
   
  </Fragment>
);
export default QuestionTimelinePresenter;
