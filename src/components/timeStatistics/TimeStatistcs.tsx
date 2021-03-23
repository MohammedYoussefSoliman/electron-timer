import React from 'react';
import './TimeStatistcs.scss';

type Iprop = {
    yesterday: string
    weekly: string
    monthly: string
}

const TimeStatistcs = ({yesterday, weekly, monthly}:Iprop) => {

    return <div className="timeStat">
                <div className="timeStat--item">
                    <h5 className="timeStat--item__title">Yesterday</h5>
                    <h5 className="timeStat--item__value">{yesterday}</h5>
                </div>
                <div className="timeStat--item">
                    <h5 className="timeStat--item__title">this week</h5>
                    <h5 className="timeStat--item__value">{weekly}</h5>
                </div>
                <div className="timeStat--item">
                    <h5 className="timeStat--item__title">this month</h5>
                    <h5 className="timeStat--item__value">{monthly}</h5>
                </div>
    </div>
}

export default TimeStatistcs