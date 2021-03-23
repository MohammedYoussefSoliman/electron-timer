import React from 'react';

type Iprop = {
    size?:string | undefined
    color?:string | undefined
}

const PlayIcon = ({size, color}:Iprop) => {

    return (

        <svg
            width={size ? size : "18"}
            height={size ? size : "18"}
            viewBox="0 0 12 12"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4286 5.06983L2.50894 0.387771C1.86546 0.00753604 0.880005 0.376521 0.880005 1.31698V10.6789C0.880005 11.5226 1.79572 12.031 2.50894 11.6081L10.4286 6.92826C11.1351 6.51202 11.1373 5.48606 10.4286 5.06983Z" fill={color ? color : "#3C73C7"}/>
        </svg>
    )
}

export default PlayIcon