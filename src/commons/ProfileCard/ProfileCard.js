import React from 'react';
import './style.scss'
import { 
    Grid, 
    Card, 
    Icon,
    Image,
    Statistic,
    Input
  } from 'semantic-ui-react'

const ProfileCard = () => {
    return (  
        <div className="profile-card">
            <div>
                <Image 
                  src='https://react.semantic-ui.com/images/wireframe/square-image.png' 
                  avatar 
                  size='tiny'
                  style={{width:'37%'}}
                />
            </div>

            {/* 이름 */}
            <h3 className="user-name">
                김루이스<br/>
                <small style={{}}>Douzone</small>
            </h3>

            {/* 스태틱 정보 */}
            <div>
                <Statistic  size='mini'>
                  <Statistic.Value style={{color:'#fff', fontSize:'0.8em'}}>22</Statistic.Value>
                  <Statistic.Label style={{color:'#fff', fontSize:'0.8em'}}>질문</Statistic.Label>
                </Statistic>
                <Statistic  size='mini'>
                  <Statistic.Value style={{color:'#fff', fontSize:'0.8em'}}>31</Statistic.Value>
                  <Statistic.Label style={{color:'#fff', fontSize:'0.8em'}}>답변</Statistic.Label>
                </Statistic>
                <Statistic  size='mini'>
                  <Statistic.Value style={{color:'#fff', fontSize:'0.8em'}}>22</Statistic.Value>
                  <Statistic.Label style={{color:'#fff', fontSize:'0.8em'}}>추천</Statistic.Label>
                </Statistic>
            </div>
        </div>
    );
}
 
export default ProfileCard;