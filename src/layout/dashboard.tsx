import React from 'react';
import {Paper} from '../ui';
import {LogoIcon} from '../assets/SVG';
import {User, Timer} from '../components';
import './layout.scss'


const Dashboard = () => {

    return (
        <div className="layout">
            <LogoIcon withoutTypography width={100}/>
            <div className="layout--main">
                <div className="layout--main__section">
                    <Paper classes="generalInfo--paper">
                        <User
                            fullName="Dalia Matter"
                            title="BackEnd Developer" />
                    </Paper>
                    <Paper classes="generalInfo--paper">
                        <Timer/>
                    </Paper>
                </div>
                <div className="layout--main__section">
                    <div className="layout--calender">
                        <Paper classes="timeInfo--paper">
                            this week
                        </Paper>
                        <Paper classes="timeInfo--paper">
                            this month
                        </Paper>
                    </div>
                    <div className="layout--calender">
                        <Paper classes="timeInfo--paper">
                            this month map
                        </Paper>
                    </div>
                </div>
            </div>
            <div className="layout--navigation">
                <Paper classes="layout--navigation__item">
                    item 1
                </Paper>
                <Paper classes="layout--navigation__item">
                    item 2
                </Paper>
                <Paper classes="layout--navigation__item">
                    item 3
                </Paper>
                <Paper classes="layout--navigation__item">
                    item 4
                </Paper>
            </div>
        </div>
    )

}

export default Dashboard