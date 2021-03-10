const { BrowserWindow } = require('electron')

const defaultSettings = {
    width: 800,
    height: 700,
    maxWidth: 1000,
    maxHeight: 800,
    minHeight: 400,
    minWidth: 500,
    webPreferences: {
      nodeIntegration: true,
      webPreferences: true,
    },
}

class Window extends BrowserWindow{
    constructor(filePath, userSettings={}){
        super({...defaultSettings, ...userSettings})

        this.loadURL(filePath)

        this.once("ready-to-show", () => this.show())
    }
}

module.exports = Window