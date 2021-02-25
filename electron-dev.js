const electron = require('electron');
const fs = require('fs');
const getScreenshot = require('./src/screenshots/screenshots')
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const { ipcMain } = require('electron');
// const getIdleTime = require('./src/idleTime/idleTime');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const path = require('path');
const url = require('url');

console.log(__dirname);
console.log(process.env.NODE_ENV);

function debounce(func, ms) {
    let ts;
    return function() {
        clearTimeout(ts);
        ts = setTimeout(() => func.apply(this, arguments), ms);
    };
}

// if (process.env.NODE_ENV !== 'production') {
//     const watchPath = path.join(__dirname, "./build/static");

//     fs.watch(
//         watchPath,
//         { encoding: 'buffer' },
//         debounce((eventType, filename) => {
//             watchPathExists = fs.existsSync(watchPath);
//             console.log(`Reloading electron: ${watchPathExists}`);
//             if (watchPathExists) {
//                 mainWindow.destroy();
//                 createWindow();
//             }
//         }, 50)

//     );
// }

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 560, height: 360, webPreferences: { nodeIntegration: true }});

    // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:3000');
    // mainWindow.loadFile(path.join(__dirname, "./build/index.html"));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })

    mainWindow.webContents.on('crashed', () => {
        console.log(`mainWindow crashed. re-creating.`)
        mainWindow.destroy();
        createWindow();
    });
}

// Handle screenshots

let result;
ipcMain.handle('screenshot-ipc', async(event, args) => {


      if(args){
         result= setInterval(()=>{
                getScreenshot()
           },10000)  
          //  return result
      }else{
          clearInterval(result)
          // return ;
      }
  })

  // Handle idle time

  let idle;
  ipcMain.handle('idletime-ipc', async(event, args) => {
    if(args){
        idle= setInterval(()=>{
            console.log(getIdleTime());
        },10000)      
    }else{
        clearInterval(idle) 
    }  
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
