import React, { useState } from 'react';
import {PlayIcon, PauseIcon} from '../../assets/SVG';
import IPCRENDER from '../../model/IpcRender';

type Props = {
    setTimeInSeconds: Function
}

const Controls = (props:Props) => {
    const { setTimeInSeconds } = props;
    const [intervalId, setIntervalId] = useState<number>(0);
    const [isPaused, setisPaused] = useState<boolean>(false);


    const handlePlayButton = (e: object) => {
        const interval:any = setInterval(() => {
            setTimeInSeconds((previousState:number) => previousState + 1);
        }, 1000);
        IPCRENDER.handelStartInvokableipc()
        setIntervalId(interval);
        setisPaused(true)
    }

    const handleStopButton = () => {
        clearInterval(intervalId);
        IPCRENDER.handelEndInvokableipc()
        setisPaused(false)
    }

    // const handleReset = () => {
    //     clearInterval(intervalId);
    //     setTimeInSeconds(0);
    // }

    return(
        <div className="timer--controls">
            {!isPaused && 
                <button className="timer--controls__btn" onClick={handlePlayButton} type="button">
                    <PlayIcon size="18" />
                </button>
            }
            {isPaused &&
                <button className="timer--controls__btn" onClick={handleStopButton} type="button">
                    <PauseIcon size="18" />
                </button>
            }
            {/* <button onClick={()=>IPCRENDER.handelStartInvokableipc()}>Start screenshots</button>
            <button onClick={()=>IPCRENDER.handelEndInvokableipc()}>End screenshots</button> */}

        </div>
    );
}

export default Controls 