import React, { useState } from 'react';
import {PlayIcon} from '../../assets/SVG';
import IPCRENDER from '../../model/IpcRender';
type Props = {
    setTimeInSeconds: Function
}

const Controls = (props:Props) => {
    const { setTimeInSeconds } = props;
    const [intervalId, setIntervalId] = useState<number>(0);

    const handlePlayButton = (e: object) => {
        const interval:any = setInterval(() => {
            setTimeInSeconds((previousState:number) => previousState + 1);
        }, 1000);

        setIntervalId(interval);
    }

    const handleStopButton = () => {
        clearInterval(intervalId);
    }

    const handleReset = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0);
    }

    return(
        <div className="stopwatch-controls-container">
            <button onClick={handlePlayButton} type="button">
                <PlayIcon />
            </button>
            <button onClick={handleStopButton} type="button">
                Pa
            </button>
            <button onClick={()=>IPCRENDER.handelStartInvokableipc()}>Start screenshots</button>
            <button onClick={()=>IPCRENDER.handelEndInvokableipc()}>End screenshots</button>

        </div>
    );
}

export default Controls 