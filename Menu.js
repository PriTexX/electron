const { Menu } = require("electron")

class userrMenu{
    constructor(template=[], modal=false){
        if (!modal){
            const menu = Menu.buildFromTemplate(template)
            Menu.setApplicationMenu(menu)
        }else{
            this.modalMenu = Menu.buildFromTemplate(template)
        }
    }
}
const userMenu = {
    createMenuFromTemplate(template=[]){
        return Menu.buildFromTemplate(template)
    }
}

module.exports = userMenu