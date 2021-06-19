const { ipcRenderer, contextBridge } = require("electron")
const algorithms = require("../resources/solve__24")

contextBridge.exposeInMainWorld(
    'modules', {ipcRenderer, algorithms}
);

