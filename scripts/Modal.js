const { ipcRenderer } = require("electron");

const solveBtn = document.querySelector(".accept");
const denyBtn = document.querySelector(".deny");

denyBtn.addEventListener("click", () => {
    ipcRenderer.send("modal-btn-clicked", {type: 'deny'})
})
