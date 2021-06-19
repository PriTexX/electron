const { BrowserWindow } = require('electron')

const defaultSettings = {
    width: 700,
    height: 600,
    title: 'Electron App',
    titleBarStyle: 'hidden',
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      webPreferences: true,
      enableRemoteModule: true,
    },
}
defaultSettings.maxWidth = defaultSettings.width
defaultSettings.minWidth = defaultSettings.width
defaultSettings.maxHeight = defaultSettings.height
defaultSettings.minHeight = defaultSettings.height

class Window extends BrowserWindow{
    constructor(filePath, userSettings={}){
        super({...defaultSettings, ...userSettings})

        this.loadURL(filePath)

        this.once("ready-to-show", () => this.show())
    }
}

module.exports = Window