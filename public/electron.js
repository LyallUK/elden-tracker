//electron set up
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('../src/index.js')
}

app.whenReady().then(() => {
  createWindow()
})