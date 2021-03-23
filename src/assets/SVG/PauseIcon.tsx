import React from 'react';

type Iprop = {
    size?:string | undefined
    color?:string | undefined
}

const PauseIcon = ({size, color}:Iprop) => {

    return (
        <svg
            width={size ? size : "18"}
            height={size ? size : "18"}
            viewBox="0 0 18 18"
            fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.74071 0H1.33071C0.595781 0 0 0.595781 0 1.33071V16.6693C0 17.4042 0.595781 18 1.33071 18H5.74071C6.47565 18 7.07143 17.4042 7.07143 16.6693V1.33071C7.07143 0.595781 6.47565 0 5.74071 0Z" fill={color ? color : "#3C73C7"}/>
                <path d="M16.6693 0H12.2593C11.5243 0 10.9286 0.595781 10.9286 1.33071V16.6693C10.9286 17.4042 11.5243 18 12.2593 18H16.6693C17.4042 18 18 17.4042 18 16.6693V1.33071C18 0.595781 17.4042 0 16.6693 0Z" fill={color ? color : "#3C73C7"}/>
        </svg>
    )
}

export default PauseIcon