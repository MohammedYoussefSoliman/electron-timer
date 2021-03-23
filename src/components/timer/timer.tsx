import React, { useState, useEffect } from 'react';
import {calculateTimeInSeconds} from './timeCalculator';
import Controls from './controls';
import './timer.scss';

const Timer = () => {
    const [timeInSeconds, setTimeInSeconds] = useState(0);
    const [timeArray, setTimeArray] = useState<Array<number|string>>([]);

    useEffect(() => {
        setTimeArray(calculateTimeInSeconds(timeInSeconds));
    }, [timeInSeconds]);

    return(
        <main className="timer">
            <Controls setTimeInSeconds={setTimeInSeconds} />
            <section className="timer--display">
                <span id="hour">{timeArray[0]}</span>
                <span>:</span>
                <span id="minute">{timeArray[1]}</span>
                <span>:</span>
                <span id="second">{timeArray[2]}</span>
            </section>
        </main>
    );
}

export default Timer;