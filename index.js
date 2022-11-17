const { app, BrowserWindow, globalShortcut, ipcMain } = require("electron");
const { overlayWindow } = require("electron-overlay-window");
const ipc = ipcMain;

-app.disableHardwareAcceleration();

app.whenReady().then(() => {
  const window = new BrowserWindow({
    ...overlayWindow.WINDOW_OPTS,
    minHeight: 720,
    minWidth: 1280,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    skipTaskbar: false,
    icon: "./images/interface/search.png",
  });

  globalShortcut.register("Home", () => {
    if (window.isMinimized()) {
      window.restore();
    } else {
      window.minimize();
    }
  });

  window.loadFile("./app.html");
  overlayWindow.attachTo(window, "ELDEN RING™");

  // Close Window
  ipc.on("closeApp", () => {
    window.close();
  });

  // Minimize Window
  ipc.on("minApp", () => {
    window.minimize();
  });
});
