const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 560,
    height: 400,
    // frame: false,
    // titleBarStyle: "hidden",
    // toolbar: false,
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // Menu.setApplicationMenu(false);

  // mainWindow.setMenu(null);
  mainWindow.webContents.openDevTools();

  // Open the DevTools.
  //   isDev && mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// Handle screenshots

let result;
ipcMain.handle("screenshot-ipc", async (event, args) => {
  console.log("screenshot-ipc fired");
  if (args) {
    result = setInterval(() => {
      getScreenshot();
    }, 10000);
    //  return result
  } else {
    clearInterval(result);
    // return ;
  }
});

// Handle idle time

let idle;
ipcMain.handle("idletime-ipc", async (event, args) => {
  console.log("idletime-ipc fired");
  if (args) {
    idle = setInterval(() => {
      // console.log(desktopIdle.getIdleTime());
    }, 10000);
  } else {
    clearInterval(idle);
  }
});
// const activeWin = require('active-win');

// (async () => {
//     await activeWin()

/*{
        title: 'Unicorns - Google Search',
        id: 5762,
        bounds: {
            x: 0,
            y: 0,
            height: 900,
            width: 1440
        },
        owner: {
            name: 'Google Chrome',
            processId: 310,
            bundleId: 'com.google.Chrome',
            path: '/Applications/Google Chrome.app'
        },
        url: 'https://sindresorhus.com/unicorn',
        memoryUsage: 11015432
    }*/

// })();

// const chromeActiveTab = require('chrome-active-tab');
// (async () => {
//     console.log(await chromeActiveTab());
//     /*
//     {
//     title: 'chrome-active-tab - npm',
//     url: 'https://www.npmjs.com/package/chrome-active-tab',
//     platform: 'macos'
//   }
//     */
// })();

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
