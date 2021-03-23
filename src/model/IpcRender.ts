export default class IPCRENDER {
    
    static handelStartInvokableipc(): void | string {
        console.log('start fired')
        const { ipcRenderer } = require('electron');
        ipcRenderer.invoke('screenshot-ipc',true)
        ipcRenderer.invoke('idletime-ipc',true)
        // if (process.env.REACT_APP_MODE === 'electron') {
        // } else {
        //     return 'Directory listing is not available in the browser.'
        // }
    }
    static handelEndInvokableipc(): void | string {
        console.log('start end')
        const { ipcRenderer } = require('electron');
        ipcRenderer.invoke('screenshot-ipc', false)
        ipcRenderer.invoke('idletime-ipc', false)
        // if (process.env.REACT_APP_MODE === 'electron') {
        // } else {
        //     return 'Directory listing is not available in the browser.'
        // }
    }
}