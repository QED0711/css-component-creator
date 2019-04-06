const { app, BrowserWindow } = require('electron')

function createWindow () {
  let window = new BrowserWindow({ width: 1800, height: 1000 })


  window.loadFile('index.html')
  window.webContents.openDevTools();

}

app.on('ready', createWindow)