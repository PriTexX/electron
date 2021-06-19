const { app, ipcMain } = require("electron")
const Window = require("./plugins/Window")
const Menu = require("./plugins/Menu")

const windows = {
    mainWin: null
}

function createMainWindow(){
    const path = `file://${__dirname}/html/index.html`
    windows.mainWin = new Window(path, {
        webPreferences: {
            preload: `${__dirname}/preloads/mainWindowPreload.js`,
            webPreferences: true,
            enableRemoteModule: true,
        }
    })
    menu = Menu.createMenuFromTemplate();
    windows.mainWin.setMenu(menu);
}

app.on("ready", createMainWindow);
app.on("all-window-closed", () => app.quit());

ipcMain.on("close-window", (e, win) => {  
    windows[win].close()
    windows[win] = null
});

ipcMain.on("minimize-window", (e, win) => {
    windows[win].minimize()
})