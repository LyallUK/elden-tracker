const { app, BrowserWindow, globalShortcut } = require("electron");
const { overlayWindow } = require("electron-overlay-window");

-app.disableHardwareAcceleration();

app.whenReady().then(() => {
  const window = new BrowserWindow({
    ...overlayWindow.WINDOW_OPTS,
    minHeight: 720,
    minWidth: 1280,
    height: 720,
    width: 1280,
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

  window.on("blur", () => {
    window.minimize();
  });

  window.loadFile("./index.html");
  overlayWindow.attachTo(window, "ELDEN RING™");
  window.minimize();
});
