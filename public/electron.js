//electron set up
const { app, BrowserWindow } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        autoHideMenuBar: true,
        minHeight: 720,
        minWidth: 1280,
        height: 720,
        width: 1280,
        resizable: false,
    });

    win.loadFile('build/index.html');
};


app.whenReady().then(() => {
    createWindow();
});
