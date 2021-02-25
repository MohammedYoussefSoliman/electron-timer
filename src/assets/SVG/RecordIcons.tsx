import React from 'react';

type Iprop = {
    size?:string | undefined
    color?:string | undefined
}

const RecordIcons = ({size, color}:Iprop) => {

    return (

        <svg
        width={size ? size : "16"}
        height={size ? size : "16"}
        viewBox="0 0 16 16"
        fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4V2.5C1 2.10218 1.15804 1.72064 1.43934 1.43934C1.72064 1.15804 2.10218 1 2.5 1H4" stroke={color ? color : "#2E539B"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 10V11.5C1 11.8978 1.15804 12.2794 1.43934 12.5607C1.72064 12.842 2.10218 13 2.5 13H4" stroke={color ? color : "#2E539B"} strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round"/>
            <path d="M10 1H11.5C11.8978 1 12.2794 1.15804 12.5607 1.43934C12.842 1.72064 13 2.10218 13 2.5V4" stroke={color ? color : "#2E539B"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 13H11.5C11.8978 13 12.2794 12.842 12.5607 12.5607C12.842 12.2794 13 11.8978 13 11.5V10" stroke={color ? color : "#2E539B"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 9.25C8.24264 9.25 9.25 8.24264 9.25 7C9.25 5.75736 8.24264 4.75 7 4.75C5.75736 4.75 4.75 5.75736 4.75 7C4.75 8.24264 5.75736 9.25 7 9.25Z" stroke={color ? color : "#2E539B"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default RecordIcons