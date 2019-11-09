import { __awaiter, __generator } from "tslib";
// @ts-ignore
import ewc from "native-ext-loader!../node_modules/ewc/build/Release/ewc.node";
import { app, BrowserWindow, ipcMain } from "electron";
import { createProtocol, installVueDevtools } from "vue-cli-plugin-electron-builder/lib";
var isDevelopment = process.env.NODE_ENV !== "production";
var mainWindow;
// protocol.registerSchemesAsPrivileged([
//   { scheme: "app", privileges: { secure: true } }
// ]);
function createWindow(width, height, show, frame) {
    mainWindow = new BrowserWindow({
        height: height,
        width: width,
        show: show,
        frame: frame,
        backgroundColor: "#00000000",
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.setResizable(false);
    mainWindow.setMinimizable(false);
    ewc.setComposition(mainWindow.getNativeWindowHandle(), 4, 0x14800020);
    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
        if (!process.env.IS_TEST)
            mainWindow.webContents.openDevTools({ mode: "detach" });
    }
    else {
        createProtocol("app");
        // Load the index.html when not in development
        mainWindow.loadURL("app://./index.html");
    }
    if (!show) {
        mainWindow.webContents.on("did-finish-load", function () {
            mainWindow.show();
        });
    }
    // mainWindow.webContents.once("dom-ready", () => {
    //   const color = systemPreferences.getAccentColor();
    //   mainWindow.webContents.send("dom-color", color);
    //   systemPreferences.on("accent-color-changed", (event, color) => {
    //     console.log(color);
    //     mainWindow.webContents.send("dom-color", color);
    //   });
    // });
    mainWindow.on("closed", function () {
        //@ts-ignore
        mainWindow = null;
    });
    mainWindow.on("maximize", function () {
        return mainWindow.webContents.send("EV::windowMaximized");
    });
    mainWindow.on("unmaximize", function () {
        return mainWindow.webContents.send("EV::windowUnmaximized");
    });
}
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("ready", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(isDevelopment && !process.env.IS_TEST)) return [3 /*break*/, 2];
                return [4 /*yield*/, installVueDevtools()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                createWindow(600, 450, false, false);
                return [2 /*return*/];
        }
    });
}); });
// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
    if (process.platform === "win32") {
        process.on("message", function (data) {
            if (data === "graceful-exit") {
                app.quit();
            }
        });
    }
    else {
        process.on("SIGTERM", function () {
            app.quit();
        });
    }
}
function saveAndQuit() {
    app.quit();
}
ipcMain.on("EV::windowClose", function () {
    console.log("[_EV]:Closing the app.");
    saveAndQuit();
});
ipcMain.on("EV::windowMinimize", function () {
    console.log("[_EV]:Minimizing the app.");
    if (mainWindow) {
        mainWindow.minimize();
    }
});
ipcMain.on("EV::windowMaximize", function () {
    console.log("[_EV]:Maximizing the app.");
    if (mainWindow && !mainWindow.isMaximized()) {
        //@ts-ignore
        mainWindow.maximize();
    }
    //@ts-ignore
});
// ipcMain.on("oauth", (event, type) => {
//   const config = {
//     client_id: "6962973",
//     client_secret: "dknWVRsmf0ZEmIh02MjM",
//     redirect_uri: "https://oauth.vk.com/blank.html",
//     authorize_url: "https://oauth.vk.com/authorize",
//     scope:
//       "notify friends photos audio video stories pages status notes messages wall ads offline docs groups notifications stats email market"
//   };
//
//   const provider = new OAuth2Provider(config);
//
//   const options = Object.assign({
//     show: false,
//     width: 800,
//     height: 800,
//     webPreferences: {
//       nodeIntegration: false,
//       contextIsolation: true
//     }
//   });
//
//   let window = new BrowserWindow(options);
//   window.once("ready-to-show", () => {
//     window.show();
//   });
//
//   provider
//     .perform(window)
//     .then(resp => {
//       window.close();
//       console.log("Got response (◍•ᴗ•◍):", resp);
//     })
//     .catch(error => console.error(error));
// });
ipcMain.on("EV::windowRestore", function () {
    console.log("[_EV]:Restoring the app.");
    if (mainWindow && mainWindow.isMaximized()) {
        mainWindow.restore();
    }
});
//# sourceMappingURL=background.js.map