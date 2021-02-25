import React from 'react';

type Iprop = {
    width?:number | undefined
    color?:string | undefined
    fillColor?: Boolean
    withoutTypography?: Boolean
}

const LogoIcon = ({width, color, fillColor, withoutTypography=false}:Iprop) => {

    const ratioLogoOnly:number = 1.636595962177358
    const ratio:number = 0.3439153439153439
    
    const handleLogoHieght = (width:number|undefined, ratio:number) => {
        
        let wid:number;

        if(!width && !withoutTypography) {
            wid=189
        }else{
            wid=40
        }
        return `${wid*ratio}`
    }

    return (
        <svg
            width={width ? `${width}`:
            (!width && withoutTypography) ? "40" : "189"}
            height={(width && !withoutTypography) ? handleLogoHieght(width, ratio) :
            (width && withoutTypography) ? width : 
            withoutTypography ? handleLogoHieght(width, ratioLogoOnly) : "65"}
            viewBox={withoutTypography ? "0 0 40 65" : "0 0 189 65"} fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M17.3538 0C10.3786 0 5.69326 4.78591 5.69326 10.8827C5.69326 16.8434 10.3786 21.6386 17.3538 21.6386C24.2081 21.6386 28.8935 16.8434 28.8935 10.8827C28.8935 4.78591 24.2081 0 17.3538 0ZM0.83572 34.8895L16.952 48.802L34.1226 25.3053H6.27327C5.17488 25.3001 4.09457 25.5914 3.14137 26.15C2.18818 26.7086 1.39582 27.5147 0.844275 28.4868C0.292729 29.459 0.00150755 30.5628 5.83736e-06 31.687C-0.00149587 32.8111 0.286773 33.9158 0.83572 34.8895V34.8895ZM38.968 25.3053L17.5954 54.5401L6.54817 45.0023L17.2873 64.0377L39.1342 25.3053H38.968Z" fill={(color && fillColor) ? color : "url(#paint0_linear)"}/>
            {!withoutTypography && <>
            
                <path d="M53.3424 48.6998H52.4204V51.5859H51.586V44.4706H53.3424C54.5503 44.4706 55.1436 45.4347 55.1436 46.5897C55.1436 47.6045 54.6677 48.6998 53.3424 48.6998ZM53.3424 47.7477C53.9826 47.7477 54.2878 47.306 54.2878 46.5897C54.2878 45.8734 53.9933 45.4227 53.3424 45.4227H52.4204V47.7477H53.3424Z" fill={color ? color : "#3C73C7"}/>
            <path d="M60.1548 51.586H58.7013V46.3247H60.1548V47.0875C60.3701 46.8176 60.6801 46.5971 61.0511 46.4498C61.422 46.3026 61.8398 46.2343 62.2589 46.2524V47.3658H61.8872C60.8165 47.3658 60.1511 47.6999 60.1511 48.8162L60.1548 51.586Z" fill={color ? color : "#3C73C7"}/>
            <path d="M66.6582 51.5843C65.1667 51.5843 64.0377 50.5266 64.0377 48.8977C64.0377 48.1953 64.3188 47.5218 64.819 47.0251C65.3193 46.5285 65.9978 46.2495 66.7053 46.2495C67.4127 46.2495 68.0912 46.5285 68.5915 47.0251C69.0917 47.5218 69.3728 48.1953 69.3728 48.8977C69.3848 49.2544 69.3227 49.6097 69.1904 49.9416C69.0581 50.2735 68.8585 50.5748 68.6039 50.8268C68.3492 51.0788 68.0451 51.2761 67.7104 51.4064C67.3757 51.5367 67.0175 51.5973 66.6582 51.5843ZM66.6582 50.6503C67.4634 50.6503 68.2604 50.0761 68.2604 48.8977C68.2604 47.7192 67.4939 47.1643 66.6803 47.1643C65.8668 47.1643 65.1335 47.7302 65.1335 48.9059C65.1335 50.0816 65.8502 50.6503 66.6582 50.6503Z" fill={color ? color : "#3C73C7"}/>
            <path d="M72.8071 45.323V53.2837C72.8071 54.6363 72.3478 55.1436 71.5989 55.1436H71.153V53.9847H71.4495C71.8173 53.9847 71.9399 53.7804 71.9399 53.2802V45.3195L72.8071 45.323ZM71.8218 43.5618C71.8226 43.3888 71.8559 43.2201 71.9173 43.0768C71.9787 42.9336 72.0656 42.8223 72.167 42.7569C72.2683 42.6914 72.3797 42.6749 72.487 42.7092C72.5943 42.7436 72.6928 42.8273 72.7701 42.9499C72.8473 43.0725 72.8999 43.2284 72.9212 43.3982C72.9426 43.5679 72.9316 43.7437 72.8898 43.9037C72.848 44.0636 72.7772 44.2004 72.6863 44.2969C72.5955 44.3934 72.4885 44.4452 72.379 44.4459C72.3052 44.4474 72.232 44.4254 72.1637 44.3812C72.0954 44.337 72.0334 44.2715 71.9814 44.1887C71.9294 44.1059 71.8885 44.0074 71.861 43.8991C71.8336 43.7908 71.8203 43.6749 71.8218 43.5583V43.5618Z" fill={color ? color : "#3C73C7"}/>
            <path d="M80.0929 51.586C78.0218 51.586 76.4895 50.5334 76.4895 48.9123C76.4895 47.2911 77.9568 46.2495 80.0929 46.2495C82.1525 46.2495 83.6046 47.272 83.6046 48.792C83.6071 48.9676 83.5904 49.1431 83.5549 49.3169H78.0371C78.0464 49.5032 78.1071 49.6865 78.2155 49.8561C78.3239 50.0257 78.478 50.1783 78.6689 50.3052C78.8599 50.4322 79.0839 50.531 79.3282 50.5959C79.5726 50.6609 79.8324 50.6908 80.0929 50.6838C80.4457 50.7011 80.7975 50.6414 81.1019 50.5125C81.4062 50.3836 81.6486 50.1917 81.7972 49.9621H83.4097C83.0046 50.8615 81.8621 51.586 80.0929 51.586ZM78.0486 48.453H82.0455C82.0188 47.6574 81.1437 47.1489 80.0279 47.1489C79.5283 47.1459 79.0457 47.2789 78.6781 47.5211C78.3105 47.7633 78.0854 48.0965 78.0486 48.453V48.453Z" fill={color ? color : "#3C73C7"}/>
            <path d="M88.1335 46.2495C89.5085 46.2495 90.4024 46.8793 90.7201 47.969H89.4669C89.3744 47.7155 89.1933 47.4973 88.9521 47.3487C88.7109 47.2001 88.423 47.1294 88.1335 47.1476C87.1951 47.1476 86.5745 47.7883 86.5745 48.9136C86.5745 50.039 87.1951 50.6879 88.1335 50.6879C88.424 50.7115 88.7146 50.643 88.9571 50.4936C89.1995 50.3442 89.3794 50.123 89.4669 49.8665H90.7201C90.4024 50.8796 89.5085 51.586 88.1335 51.586C86.524 51.586 85.3836 50.5318 85.3836 48.9082C85.3836 47.2845 86.524 46.2495 88.1335 46.2495Z" fill={color ? color : "#3C73C7"}/>
            <path d="M93.2322 46.8484H92.4989V45.8871H93.2322V44.4706H94.5474V45.8871H96.0566V46.8484H94.5474V50.0008C94.5474 50.4257 94.7282 50.6035 95.2675 50.6035H96.0566V51.5859H95.0209C93.9161 51.5859 93.2256 51.161 93.2256 50.0038L93.2322 46.8484Z" fill={color ? color : "#3C73C7"}/>
            <path d="M103.172 44.4706H104.368L106.741 50.0489L109.102 44.4706H110.287V51.5859H109.182V46.7121L107.118 51.5859H106.353L104.28 46.7121V51.5859H103.172V44.4706Z" fill={color ? color : "#3C73C7"}/>
            <path d="M116.297 46.2508C116.641 46.2392 116.982 46.3072 117.295 46.4493C117.608 46.5913 117.882 46.8036 118.098 47.0694V46.3217H119.181V51.4789H118.098V50.7339C117.883 51.0068 117.606 51.226 117.29 51.3738C116.974 51.5216 116.627 51.594 116.278 51.5853C114.928 51.5853 113.845 50.4938 113.845 48.8976C113.845 47.3013 114.928 46.2508 116.297 46.2508ZM116.523 47.1785C115.72 47.1785 114.947 47.7761 114.947 48.8894C114.947 50.0027 115.72 50.6494 116.523 50.6494C117.326 50.6494 118.098 50.0218 118.098 48.9085C118.098 47.7952 117.334 47.1867 116.523 47.1867V47.1785Z" fill={color ? color : "#3C73C7"}/>
            <path d="M126.878 48.656C126.878 47.6969 126.298 47.2035 125.418 47.2035C124.538 47.2035 123.946 47.6969 123.946 48.656V51.586H122.739V46.347H123.946V46.9346C124.163 46.7139 124.43 46.5383 124.73 46.42C125.031 46.3017 125.356 46.2437 125.683 46.25C127.048 46.25 128.075 47.0206 128.075 48.4842V51.5749H126.878V48.656Z" fill={color ? color : "#3C73C7"}/>
            <path d="M134.086 46.2508C134.429 46.2392 134.771 46.3072 135.083 46.4493C135.396 46.5913 135.671 46.8036 135.886 47.0694V46.3217H136.97V51.4788H135.886V50.7339C135.671 51.0071 135.394 51.2264 135.078 51.3743C134.762 51.5221 134.416 51.5944 134.066 51.5852C132.719 51.5852 131.633 50.4938 131.633 48.8975C131.633 47.3013 132.719 46.2508 134.086 46.2508ZM134.311 47.1785C133.511 47.1785 132.738 47.7761 132.738 48.8893C132.738 50.0026 133.511 50.6493 134.311 50.6493C135.111 50.6493 135.886 50.0217 135.886 48.9084C135.886 47.7952 135.122 47.1867 134.311 47.1867V47.1785Z" fill={color ? color : "#3C73C7"}/>
            <path d="M142.972 46.2513C143.317 46.2366 143.66 46.3137 143.973 46.4765C144.287 46.6392 144.562 46.883 144.778 47.1883V46.3325H145.864V52.3326C145.864 53.938 144.949 55.1436 143.322 55.1436C141.944 55.1436 140.902 54.3597 140.77 53.0541H141.85C142.013 53.6788 142.589 54.0817 143.336 54.0817C144.163 54.0817 144.791 53.5039 144.791 52.3263V51.3393C144.579 51.6517 144.305 51.9036 143.992 52.075C143.678 52.2463 143.334 52.3324 142.986 52.3263C141.608 52.3263 140.527 51.077 140.527 49.2498C140.527 47.4225 141.602 46.2513 142.972 46.2513ZM143.198 47.3132C142.396 47.3132 141.622 47.9973 141.622 49.2716C141.622 50.546 142.396 51.2862 143.198 51.2862C144 51.2862 144.778 50.5678 144.778 49.2935C144.778 48.0191 144.011 47.3226 143.198 47.3226V47.3132Z" fill={color ? color : "#3C73C7"}/>
            <path d="M151.244 51.586C149.178 51.586 147.643 50.5334 147.643 48.9123C147.643 47.2911 149.109 46.2495 151.244 46.2495C153.303 46.2495 154.758 47.272 154.758 48.792C154.759 48.9677 154.741 49.1432 154.704 49.3169H149.178C149.187 49.5032 149.248 49.6865 149.356 49.8561C149.465 50.0257 149.619 50.1783 149.809 50.3052C150 50.4322 150.224 50.531 150.468 50.5959C150.713 50.6609 150.972 50.6908 151.233 50.6838C151.585 50.7011 151.937 50.6414 152.241 50.5125C152.545 50.3836 152.788 50.1917 152.936 49.9621H154.548C154.143 50.8615 153.001 51.586 151.244 51.586ZM149.201 48.453H153.196C153.169 47.6574 152.294 47.1489 151.179 47.1489C150.678 47.1438 150.193 47.2759 149.823 47.5183C149.453 47.7607 149.226 48.095 149.189 48.453H149.201Z" fill={color ? color : "#3C73C7"}/>
            <path d="M164.308 48.6563C164.308 47.6973 163.76 47.2039 162.933 47.2039C162.106 47.2039 161.552 47.6973 161.552 48.6563V51.586H160.427V48.6563C160.427 47.6973 159.881 47.2039 159.055 47.2039C158.228 47.2039 157.671 47.6973 157.671 48.6563V51.586H156.537V46.3475H157.671V46.9351C157.91 46.6914 158.204 46.5038 158.532 46.3868C158.859 46.2699 159.21 46.2268 159.558 46.2608C159.905 46.2949 160.24 46.4053 160.536 46.5833C160.831 46.7613 161.08 47.0021 161.262 47.2871C161.454 46.9657 161.732 46.6997 162.069 46.5172C162.405 46.3348 162.787 46.2426 163.174 46.2505C164.456 46.2505 165.431 47.021 165.431 48.4845V51.5749H164.308V48.6563Z" fill={color ? color : "#3C73C7"}/>
            <path d="M171.691 51.586C170.138 51.586 168.988 50.5334 168.988 48.9123C168.988 47.2911 170.089 46.2495 171.691 46.2495C173.233 46.2495 174.325 47.272 174.325 48.792C174.326 48.9677 174.312 49.1432 174.285 49.3169H170.158C170.173 49.6935 170.344 50.0491 170.633 50.3054C170.923 50.5617 171.308 50.6978 171.703 50.6838C171.967 50.7011 172.231 50.6414 172.459 50.5125C172.688 50.3836 172.869 50.1917 172.981 49.9621H174.187C173.884 50.8615 173.029 51.586 171.691 51.586ZM170.158 48.453H173.156C173.136 47.6574 172.476 47.1489 171.642 47.1489C171.27 47.1487 170.91 47.283 170.637 47.5249C170.364 47.7668 170.197 48.0983 170.169 48.453H170.158Z" fill={color ? color : "#3C73C7"}/>
            <path d="M182.024 48.656C182.024 47.6969 181.44 47.2035 180.56 47.2035C179.68 47.2035 179.09 47.6969 179.09 48.656V51.586H177.883V46.347H179.09V46.9346C179.306 46.7139 179.574 46.5383 179.874 46.4201C180.173 46.3018 180.498 46.2437 180.826 46.25C182.194 46.25 183.219 47.0206 183.219 48.4842V51.5749H182.024V48.656Z" fill={color ? color : "#3C73C7"}/>
            <path d="M185.731 46.8484H184.998V45.8871H185.735V44.4706H187.036V45.8871H188.556V46.8484H187.036V50.0008C187.036 50.4257 187.218 50.6035 187.763 50.6035H188.556V51.5859H187.535C186.425 51.5859 185.735 51.161 185.735 50.0038L185.731 46.8484Z" fill={color ? color : "#3C73C7"}/>
            <path d="M55.1436 12.4518H72.9319V16.1931H66.4705V35.5765H61.6049V16.1931H55.1436V12.4518Z" fill={color ? color : "#3C73C7"}/>
            <path d="M84.0744 16.0094C87.3651 16.0094 89.6191 17.5748 90.8397 19.2921V16.3434H96.0566V37.0179H90.8363V33.9815C89.6157 35.773 87.2882 37.3553 84.0309 37.3553C78.8541 37.3553 74.7107 33.0639 74.7107 26.6098C74.7107 20.1558 78.8575 16.0094 84.0744 16.0094ZM85.4121 20.5977C82.6364 20.5977 80.0112 22.6861 80.0112 26.6064C80.0112 30.5268 82.6297 32.7636 85.4054 32.7636C88.2513 32.7636 90.8397 30.5976 90.8397 26.6908C90.8397 22.7839 88.2513 20.5977 85.4054 20.5977H85.4121Z" fill={color ? color : "#3C73C7"}/>
            <path d="M108.036 37.3553C103.199 37.3553 99.822 34.3184 99.6143 30.4886H104.511C104.687 32.0543 106.044 33.2488 107.992 33.2488C109.94 33.2488 110.95 32.3175 110.95 31.123C110.95 27.4112 100.055 29.7732 100.055 22.2046C100.055 18.7696 102.909 16.0094 107.68 16.0094C112.344 16.0094 115.164 18.7325 115.441 22.839H110.787C110.648 21.2328 109.465 20.1396 107.548 20.1396C105.739 20.1396 104.801 20.9258 104.801 22.1169C104.801 25.8894 115.501 23.5375 115.624 31.1128C115.624 34.6694 112.735 37.3553 108.036 37.3553Z" fill={color ? color : "#3C73C7"}/>
            <path d="M119.181 10.673H124.065V24.841L130.555 16.9293H136.906L128.388 26.2864L136.97 35.5765H130.637L124.075 27.6314V35.5765H119.181V10.673Z" fill={color ? color : "#3C73C7"}/>
            <path d="M136.97 11.6848C136.97 10.1187 138.466 8.8941 140.527 8.8941C142.589 8.8941 144.085 10.1248 144.085 11.6848C144.085 13.2448 142.555 14.4755 140.527 14.4755C138.5 14.4755 136.97 13.2386 136.97 11.6848ZM137.591 16.7216H143.367V35.5765H137.576L137.591 16.7216Z" fill={color ? color : "#3C73C7"}/>
            <path d="M156.752 16.0094C161.342 16.0094 164.433 18.7088 165.431 23.3215H160.41C159.878 21.5703 158.649 20.45 156.719 20.45C154.127 20.45 152.396 22.65 152.396 26.6823C152.396 30.7147 154.127 32.8776 156.719 32.8776C158.649 32.8776 159.845 31.9058 160.41 30.0398H165.431C164.433 34.4534 161.357 37.3553 156.752 37.3553C151.433 37.3553 147.643 33.1745 147.643 26.6823C147.643 20.1902 151.436 16.0094 156.752 16.0094Z" fill={color ? color : "#3C73C7"}/>
            <path d="M168.988 10.673H173.872V24.8393L180.362 16.9285H186.714L178.195 26.2845L186.777 35.5735H180.432L173.872 27.6323V35.5765H168.988V10.673Z" fill={color ? color : "#3C73C7"}/>
            </>
            }
            <defs>
            <linearGradient id="paint0_linear" x1="1.72863e-06" y1="76.365" x2="50.91" y2="3.75475e-06" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00508C"/>
            <stop offset="0.09" stopColor="#0C508A"/>
            <stop offset="0.25" stopColor="#2B5185"/>
            <stop offset="0.46" stopColor="#5E517D"/>
            <stop offset="0.72" stopColor="#A45272"/>
            <stop offset="1" stopColor="#F85365"/>
            </linearGradient>
            </defs>
        </svg>
    )
}

export default LogoIcon