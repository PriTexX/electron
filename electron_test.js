const { app, ipcMain } = require("electron");
const path = require("path");
const Window = require("./plugins/Window.js")
const Menu = require("./plugins/Menu.js")

let mainWin
let modalWin

function create() {
  const modalPath = path.join("file://", __dirname, "/html/index.html");
  mainWin = new Window(modalPath)
  const menuTemplate = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Learn More'
        },
        {
          label: 'Help'
        },
        {
          label: 'Quit',
          click(){
            app.quit()
          },
          accelerator: 'Ctrl+Q'
        }
      ]
    }
  ]
 // new Menu(menuTemplate)
}

ipcMain.on("create-new-window", (e, type) => {
  if (type=='modal'){
    modalPath = `file://${__dirname}/html/modal.html`
    const options = {
      width: 645,
      height: 485,/*
      maxWidth: 400,
      maxHeight: 600,
      minWidth: 400,
      minHeight: 600,*/
      modal: true,
      parent: mainWin,
    }
    modalWin = new Window(modalPath, options)
    menu = new Menu([], true)
    //modalWin.setMenu(menu.modalMenu)
  }
})
ipcMain.on("modal-btn-clicked", (e, data) => {
  if (data.type == 'deny'){
    modalWin = null
  }
})

app.on("ready", create);
app.on("all-window-closed", () => app.quit())
