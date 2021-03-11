const fs = require("fs");
const path = require("path");
const { ipcRenderer } = require("electron")

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const area = document.querySelector(".file-container");

function onDragLeave(event) {
  event.preventDefault();
  event.stopPropagation();
  area.classList.remove("dragging");
  area.classList.add("not-dragging");
  setTimeout(() => {
    area.classList.remove("not-dragging");
    area.ondragleave = null;
  }, 500);
  area.ondragover = null;
}

area.addEventListener("dragenter", (e) => {
  e.preventDefault();
  e.stopPropagation();

  area.classList.add("dragging");
  area.ondragover = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  area.ondragleave = onDragLeave;
});

area.addEventListener("drop", (e) => {
  e.preventDefault();
  e.stopPropagation();

  for (const file of e.dataTransfer.files) {
    console.log(file.path)
    //reading(file.path)
  }

  onDragLeave(e);
});

function reading(filePath){
  let File = fs.readFileSync(filePath, "utf8")
  console.log(File)
}

btn.addEventListener("click", () => {
  ipcRenderer.send("create-new-window", 'modal')
})