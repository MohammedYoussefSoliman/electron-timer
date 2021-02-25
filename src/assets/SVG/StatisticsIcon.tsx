import React from 'react';

type Iprop = {
    size?:string | undefined
    color?:string | undefined
}

const StatisticsIcon = ({size, color}:Iprop) => {

    return (

        <svg
        width={size ? size : "32"}
        height={size ? size : "32"}
        viewBox="0 0 32 32"
        fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="30" height="30" rx="3" stroke={color ? color : "#ffffff"} strokeWidth="2"/>
            <rect x="7" y="20" width="3" height="5" rx="1" fill={color ? color : "#ffffff"}/>
            <rect x="14" y="13" width="3" height="12" rx="1" fill={color ? color : "#ffffff"}/>
            <rect x="21" y="6" width="3" height="19" rx="1" fill={color ? color : "#ffffff"}/>
        </svg>
        
    )
}

export default StatisticsIcon