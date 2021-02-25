export default class IPCRENDER {
    
    static handelStartInvokableipc(): void | string {
        const { ipcRenderer } = require('electron');
        if (process.env.REACT_APP_MODE === 'electron') {
            ipcRenderer.invoke('screenshot-ipc',true)
            ipcRenderer.invoke('idletime-ipc',true)
        } else {
            return 'Directory listing is not available in the browser.'
        }
    }
    static handelEndInvokableipc(): void | string {
        if (process.env.REACT_APP_MODE === 'electron') {
            const { ipcRenderer } = require('electron');
            ipcRenderer.invoke('screenshot-ipc', false)
            ipcRenderer.invoke('idletime-ipc', false)
        } else {
            return 'Directory listing is not available in the browser.'
        }
    }
}