const desktopIdle = require('desktop-idle');


const getIdleTime =()=>{
    let idle = desktopIdle.getIdleTime()
    let  start = Date.now();
    
    return idle
}

module.exports = getIdleTime