//electron set up
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    minHeight: 720,
    minWidth: 1280,
  })

  win.loadURL('http://localhost:3000/');
}

app.whenReady().then(() => {
  createWindow()
})