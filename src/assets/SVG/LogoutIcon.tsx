import React from 'react';

type Iprop = {
    size?:string | undefined
    color?:string | undefined
}

const LogoutIcons = ({size, color}:Iprop) => {

    return (
        <svg
        width={size ? size : "16"}
        height={size ? size : "16"}
        viewBox="0 0 16 16"
        fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.77778 10.3333V11.1111C8.77778 11.7299 8.53195 12.3234 8.09436 12.761C7.65678 13.1986 7.06328 13.4444 6.44444 13.4444H3.33333C2.71449 13.4444 2.121 13.1986 1.68342 12.761C1.24583 12.3234 1 11.7299 1 11.1111V3.33333C1 2.71449 1.24583 2.121 1.68342 1.68342C2.121 1.24583 2.71449 1 3.33333 1H6.44444C7.06328 1 7.65678 1.24583 8.09436 1.68342C8.53195 2.121 8.77778 2.71449 8.77778 3.33333V4.11111M11.8889 10.3333L15 7.22222L11.8889 10.3333ZM15 7.22222L11.8889 4.11111L15 7.22222ZM15 7.22222H4.11111H15Z" stroke={color ? color : "#3C73C7"} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default LogoutIcons